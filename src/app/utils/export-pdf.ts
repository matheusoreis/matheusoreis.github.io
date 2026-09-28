import jsPDF from "jspdf"
import type { AppData } from "../types"

type RGB = [number, number, number]

const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 14
const CONTENT_W = PAGE_W - MARGIN * 2
const RIGHT = MARGIN + CONTENT_W

const COLOR = {
    primary: [0, 0, 0] as RGB,
    secondary: [25, 25, 25] as RGB,
    text: [40, 40, 40] as RGB,
    light: [105, 105, 105] as RGB,
    rule: [170, 170, 170] as RGB,
    accent: [227, 108, 10] as RGB,
    link: [5, 99, 193] as RGB,
}

const FS = { name: 18, section: 10.5, role: 10, body: 9, meta: 8, contact: 8.5 }

interface ExportProject {
    title: string
    period?: string
    url?: string
    description?: string[]
}

interface ExportExtras {
    summary?: string | string[]
    projects?: ExportProject[]
    stack?: string | string[]
}

interface ExportLanguage {
    language: string
    detail?: string
}

const toArray = (v?: string | string[]) => (v == null ? [] : Array.isArray(v) ? v : [v])

class Cursor {
    y = MARGIN
    doc: jsPDF
    constructor(doc: jsPDF) { this.doc = doc }

    ensure(needed: number) {
        if (this.y + needed > PAGE_H - MARGIN) {
            this.doc.addPage()
            this.y = MARGIN
        }
    }

    advance(mm: number) { this.y += mm }
}

interface Seg {
    text: string
    style?: "normal" | "bold" | "italic" | "bolditalic"
    size?: number
    color?: RGB
    url?: string
}

interface Tok {
    text: string
    style: NonNullable<Seg["style"]>
    size: number
    color: RGB
    url?: string
    w: number
    space: boolean
}

function rich(doc: jsPDF, cursor: Cursor, segs: Seg[], opts: { x?: number; lineH?: number } = {}) {
    const x0 = opts.x ?? MARGIN
    const width = RIGHT - x0
    const lineH = opts.lineH ?? 4.6

    const toks: Tok[] = []
    for (const s of segs) {
        const style = s.style ?? "normal"
        const size = s.size ?? FS.body
        const color = s.color ?? (s.url ? COLOR.link : COLOR.text)
        doc.setFont("helvetica", style).setFontSize(size)
        for (const part of String(s.text ?? "").split(/(\s+)/).filter(Boolean)) {
            const space = /^\s+$/.test(part)
            toks.push({
                text: space ? " " : part,
                style, size, color, url: s.url,
                w: doc.getTextWidth(space ? " " : part),
                space,
            })
        }
    }

    const rows: Tok[][] = [[]]
    let curW = 0
    for (const t of toks) {
        const row = rows[rows.length - 1]
        if (t.space) {
            if (row.length === 0) continue
            row.push(t)
            curW += t.w
            continue
        }
        if (row.length > 0 && curW + t.w > width) {
            while (row.length && row[row.length - 1].space) row.pop()
            rows.push([t])
            curW = t.w
            continue
        }
        row.push(t)
        curW += t.w
    }

    for (const row of rows) {
        if (row.length === 0) continue
        cursor.ensure(lineH)
        let x = x0
        for (const t of row) {
            if (!t.space) {
                doc.setFont("helvetica", t.style).setFontSize(t.size).setTextColor(...t.color)
                doc.text(t.text, x, cursor.y)
                if (t.url) {
                    const h = t.size * 0.3528
                    doc.link(x, cursor.y - h, t.w, h + 1, { url: t.url })
                    doc.setDrawColor(...t.color).setLineWidth(0.15)
                    doc.line(x, cursor.y + 0.6, x + t.w, cursor.y + 0.6)
                }
            }
            x += t.w
        }
        cursor.advance(lineH)
    }
}

function rule(doc: jsPDF, cursor: Cursor) {
    doc.setDrawColor(...COLOR.rule)
    doc.setLineWidth(0.25)
    doc.line(MARGIN, cursor.y, RIGHT, cursor.y)
}

function sectionTitle(doc: jsPDF, cursor: Cursor, title: string) {
    cursor.ensure(16)
    cursor.advance(4)
    doc.setFontSize(FS.section).setFont("helvetica", "bold").setTextColor(...COLOR.primary)
    doc.text(title.toUpperCase(), MARGIN, cursor.y)
    cursor.advance(1.8)
    rule(doc, cursor)
    cursor.advance(4.5)
}

function bullet(doc: jsPDF, cursor: Cursor, text: string) {
    const indent = 4
    cursor.ensure(9.2)
    doc.setFont("helvetica", "normal").setFontSize(FS.body).setTextColor(...COLOR.text)
    doc.text("-", MARGIN + indent, cursor.y)
    rich(doc, cursor, [{ text }], { x: MARGIN + indent + 4.5, lineH: 4.6 })
    cursor.advance(0.4)
}

function metaSeg(text: string): Seg {
    return { text, style: "italic", size: FS.meta, color: COLOR.light }
}

export function exportPDF(data: AppData, includeCourses = false) {
    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" })
    const cursor = new Cursor(doc)
    const { about, skills, resume } = data

    const detail = (re: RegExp) => about.details.find(d => re.test(d.label))?.value

    const name = detail(/^nome$/i) ?? "Candidato"

    doc.setProperties({
        title: `${name} - Currículo`,
        subject: "Currículo Profissional - Desenvolvedor Full Stack",
        author: name,
        keywords: "Desenvolvedor Full Stack, Flutter, Go, React, Next.js, TypeScript, Node.js, QA, Desenvolvedor",
        creator: name,
    })

    cursor.advance(5)
    doc.setFontSize(FS.name).setFont("helvetica", "bold").setTextColor(...COLOR.primary)
    doc.text(name.toUpperCase(), MARGIN, cursor.y)
    cursor.advance(6)

    const email = detail(/e-?mail/i)
    const phone = detail(/contato|telefone|fone|celular|whatsapp/i)
    const city = detail(/cidade/i)
    const linkedin = detail(/linkedin/i)

    const contactParts: Seg[][] = []
    if (email) contactParts.push([{ text: `E-mail: ${email}` }])
    if (phone) contactParts.push([{ text: `Telefone: ${phone}` }])
    if (city) contactParts.push([{ text: `Localização: ${city}` }])
    if (linkedin) {
        contactParts.push([{
            text: `LinkedIn: ${linkedin}`,
            url: /^https?:\/\//i.test(linkedin) ? linkedin : `https://${linkedin}`,
        }])
    }

    const contactSegs: Seg[] = []
    contactParts.forEach((p, i) => {
        if (i > 0) contactSegs.push({ text: " • ", size: FS.contact, color: COLOR.light })
        contactSegs.push(...p.map(s => ({ ...s, size: FS.contact, color: s.url ? COLOR.link : COLOR.light })))
    })
    rich(doc, cursor, contactSegs, { lineH: 4.4 })

    rich(doc, cursor, [{ text: about.subtitle, style: "bold", size: 8.5, color: COLOR.accent }], { lineH: 4.6 })

    cursor.advance(0.5)
    rule(doc, cursor)
    cursor.advance(5)

    sectionTitle(doc, cursor, "Resumo Profissional")

    const summaryLH = 4.6
    doc.setFontSize(FS.body).setFont("helvetica", "normal").setTextColor(...COLOR.text)
    doc.setLineHeightFactor(summaryLH / (FS.body * 0.3528))
    const summaryLines = doc.splitTextToSize(String(about.description || ""), CONTENT_W) as string[]
    cursor.ensure(summaryLines.length * summaryLH)
    doc.text(String(about.description || ""), MARGIN, cursor.y, { maxWidth: CONTENT_W, align: "justify" })
    cursor.advance(summaryLines.length * summaryLH + 1)

    sectionTitle(doc, cursor, "Experiência Profissional")
    resume.experience.forEach((item, i) => {
        const e = item as typeof item & ExportExtras
        cursor.ensure(20)

        const title = e.company ? `${e.role} | ${e.company}` : e.role
        const meta = [e.location, e.period].filter(Boolean).join(" | ")
        rich(doc, cursor, [
            { text: title, style: "bold", size: FS.role, color: COLOR.secondary },
            ...(meta ? [metaSeg(`  |  ${meta}`)] : []),
        ], { lineH: 5 })

        toArray(e.summary).forEach(p => {
            rich(doc, cursor, [{ text: p }], { lineH: 4.6 })
        })

        if (e.description?.length) {
            cursor.advance(0.8)
            e.description.forEach(d => bullet(doc, cursor, d))
        }

        e.projects?.forEach(p => {
            cursor.ensure(16)
            cursor.advance(1.5)
            const segs: Seg[] = [{ text: p.title, style: "bold", size: FS.body, color: COLOR.secondary }]
            if (p.period) segs.push(metaSeg(`  |  ${p.period}`))
            if (p.url) {
                segs.push({ text: "  |  ", size: FS.meta, color: COLOR.light })
                segs.push({ text: p.url, size: FS.meta, url: p.url })
            }
            rich(doc, cursor, segs, { lineH: 4.8 })
            p.description?.forEach(d => bullet(doc, cursor, d))
        })

        const stack = toArray(e.stack).join(", ")
        if (stack) {
            cursor.advance(0.8)
            rich(doc, cursor, [
                { text: "Stack: ", style: "bold", color: COLOR.secondary },
                { text: stack },
            ], { lineH: 4.6 })
        }

        if (i < resume.experience.length - 1) cursor.advance(3.5)
    })

    sectionTitle(doc, cursor, "Formação")
    resume.formations.forEach((f, i) => {
        cursor.ensure(8)
        rich(doc, cursor, [
            { text: `${f.institution} | ${f.course}`, style: "bold", size: FS.body, color: COLOR.secondary },
            ...(f.year ? [metaSeg(`  |  ${f.year}`)] : []),
        ], { lineH: 5 })
        if (i < resume.formations.length - 1) cursor.advance(0.8)
    })

    if (includeCourses && resume.courses && resume.courses.length > 0) {
        sectionTitle(doc, cursor, "Cursos Complementares")
        resume.courses.forEach(c => {
            cursor.ensure(8)
            rich(doc, cursor, [
                { text: c.course, style: "bold", size: FS.body, color: COLOR.secondary },
                ...(c.institution || c.year
                    ? [metaSeg(`  |  ${[c.institution, c.year].filter(Boolean).join(" | ")}`)]
                    : []),
            ], { lineH: 5 })
        })
    }

    const languages = (resume as typeof resume & { languages?: ExportLanguage[] }).languages
    if (languages && languages.length > 0) {
        sectionTitle(doc, cursor, "Idiomas")
        languages.forEach(l => {
            rich(doc, cursor, [
                { text: l.language, style: "bold", color: COLOR.secondary },
                ...(l.detail ? [{ text: `: ${l.detail}` }] : []),
            ], { lineH: 4.8 })
        })
    }

    sectionTitle(doc, cursor, "Competências Técnicas")
    skills.categories.forEach(cat => {
        cursor.ensure(6)
        rich(doc, cursor, [
            { text: `${cat.title}: `, style: "bold", color: COLOR.secondary },
            { text: cat.skills.map(s => s.label).join(", ") },
        ], { lineH: 4.8 })
        cursor.advance(0.6)
    })

    const filename =
        name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") + ".pdf"
    doc.save(filename)
}