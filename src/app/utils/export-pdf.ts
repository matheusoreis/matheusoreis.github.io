import jsPDF from "jspdf"
import type { AppData } from "../types"

const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 18
const CONTENT_W = PAGE_W - MARGIN * 2

const COLOR = {
    primary: [0, 0, 0] as [number, number, number],
    secondary: [30, 30, 30] as [number, number, number],
    text: [40, 40, 40] as [number, number, number],
    light: [100, 100, 100] as [number, number, number],
    rule: [180, 180, 180] as [number, number, number],
}

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

function lines(doc: jsPDF, text: string, maxWidth: number) {
    return doc.splitTextToSize(String(text || ""), maxWidth) as string[]
}

function rule(doc: jsPDF, cursor: Cursor, heavy = false) {
    doc.setDrawColor(...(heavy ? COLOR.primary : COLOR.rule))
    doc.setLineWidth(heavy ? 0.8 : 0.3)
    doc.line(MARGIN, cursor.y, MARGIN + CONTENT_W, cursor.y)
}

function sectionTitle(doc: jsPDF, cursor: Cursor, title: string) {
    cursor.ensure(10)
    cursor.advance(5)
    doc.setFontSize(11).setFont("helvetica", "bold").setTextColor(...COLOR.primary)
    doc.text(title.toUpperCase(), MARGIN, cursor.y)
    cursor.advance(4)
    rule(doc, cursor)
    cursor.advance(5)
}

function infoRow(doc: jsPDF, cursor: Cursor, left: string, right?: string) {
    cursor.ensure(7)
    if (right) {
        doc.setFontSize(9).setFont("helvetica", "normal").setTextColor(...COLOR.light)
        doc.text(right, MARGIN + CONTENT_W, cursor.y, { align: "right" })
    }
    const rightW = right ? doc.getStringUnitWidth(right) * 9 * 0.352 + 5 : 0
    doc.setFontSize(10).setFont("helvetica", "bold").setTextColor(...COLOR.secondary)
    const ls = lines(doc, left, CONTENT_W - rightW)
    doc.text(ls, MARGIN, cursor.y)
    cursor.advance(ls.length * 5.5)
}

export function exportPDF(data: AppData) {
    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" })
    const cursor = new Cursor(doc)
    const { about, skills, resume } = data

    const name = about.details.find(d => d.label === "Nome")?.value ?? "Candidato"
    doc.setFontSize(24).setFont("helvetica", "bold").setTextColor(...COLOR.primary)
    doc.text(name, MARGIN, cursor.y)
    cursor.advance(10)

    doc.setFontSize(11).setFont("helvetica", "normal").setTextColor(...COLOR.light)
    doc.text(about.subtitle, MARGIN, cursor.y)
    cursor.advance(8)

    const contacts = about.details
        .filter(d => ["E-mail", "Contato", "Cidade"].includes(d.label))
        .map(d => d.value)
        .join("  |  ")
    doc.setFontSize(8.5).setTextColor(...COLOR.light)
    const contactLines = lines(doc, contacts, CONTENT_W)
    doc.text(contactLines, MARGIN, cursor.y)
    cursor.advance(contactLines.length * 4.5 + 4)

    rule(doc, cursor, true)
    cursor.advance(6)

    sectionTitle(doc, cursor, "Perfil Profissional")
    doc.setFontSize(9.5).setFont("helvetica", "normal").setTextColor(...COLOR.text)
    const summaryLines = lines(doc, about.description, CONTENT_W)
    cursor.ensure(summaryLines.length * 5.2)
    doc.text(summaryLines, MARGIN, cursor.y)
    cursor.advance(summaryLines.length * 5.2 + 4)

    sectionTitle(doc, cursor, "Experiência Profissional")
    resume.experience.forEach((e, i) => {
        cursor.ensure(14)

        doc.setFontSize(10).setFont("helvetica", "bold").setTextColor(...COLOR.secondary)
        const roleLines = lines(doc, e.role, CONTENT_W)
        doc.text(roleLines, MARGIN, cursor.y)

        if (e.period) {
            doc.setFontSize(9).setFont("helvetica", "normal").setTextColor(...COLOR.light)
            doc.text(e.period, MARGIN + CONTENT_W, cursor.y, { align: "right" })
        }
        cursor.advance(roleLines.length * 5.5)

        const org = [e.company, e.location].filter(Boolean).join(" · ")
        doc.setFontSize(9.5).setFont("helvetica", "italic").setTextColor(...COLOR.light)
        const orgLines = lines(doc, org, CONTENT_W)
        cursor.ensure(orgLines.length * 4.8)
        doc.text(orgLines, MARGIN, cursor.y)
        cursor.advance(orgLines.length * 4.8 + 1)

        e.description?.forEach(desc => {
            const bullet = "• "
            const bw = doc.getStringUnitWidth(bullet) * 9.5 * 0.352
            const wrapped = lines(doc, desc, CONTENT_W - bw)
            cursor.ensure(wrapped.length * 4.8 + 2)
            doc.setFontSize(9.5).setFont("helvetica", "normal").setTextColor(...COLOR.text)
            doc.text(bullet, MARGIN, cursor.y)
            doc.text(wrapped, MARGIN + bw, cursor.y)
            cursor.advance(wrapped.length * 4.8 + 2)
        })

        if (i < resume.experience.length - 1) cursor.advance(4)
    })

    sectionTitle(doc, cursor, "Formação Acadêmica")
    resume.formations.forEach((e, i) => {
        infoRow(doc, cursor, e.course, e.year)
        doc.setFontSize(9.5).setFont("helvetica", "italic").setTextColor(...COLOR.light)
        const instLines = lines(doc, e.institution, CONTENT_W)
        cursor.ensure(instLines.length * 4.8)
        doc.text(instLines, MARGIN, cursor.y)
        cursor.advance(instLines.length * 4.8)
        if (i < resume.formations.length - 1) cursor.advance(3)
    })

    if (resume.courses && resume.courses.length > 0) {
        sectionTitle(doc, cursor, "Cursos Complementares")
        resume.courses.forEach((e, i) => {
            infoRow(doc, cursor, e.course, e.year)
            doc.setFontSize(9.5).setFont("helvetica", "italic").setTextColor(...COLOR.light)
            const instLines = lines(doc, e.institution, CONTENT_W)
            cursor.ensure(instLines.length * 4.8)
            doc.text(instLines, MARGIN, cursor.y)
            cursor.advance(instLines.length * 4.8)
            if (i < resume.courses.length - 1) cursor.advance(3)
        })
    }

    sectionTitle(doc, cursor, "Competências Técnicas")
    skills.categories.forEach((cat, i) => {
        cursor.ensure(12)
        doc.setFontSize(9.5).setFont("helvetica", "bold").setTextColor(...COLOR.secondary)
        doc.text(cat.title + ":", MARGIN, cursor.y)
        cursor.advance(5)
        doc.setFont("helvetica", "normal").setTextColor(...COLOR.text)
        const items = cat.skills.map(s => s.label).join(", ")
        const wrapped = lines(doc, items, CONTENT_W)
        cursor.ensure(wrapped.length * 4.8)
        doc.text(wrapped, MARGIN, cursor.y)
        cursor.advance(wrapped.length * 4.8 + 3)
        if (i < skills.categories.length - 1) cursor.advance(1)
    })

    const filename = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") + ".pdf"
    doc.save(filename)
}