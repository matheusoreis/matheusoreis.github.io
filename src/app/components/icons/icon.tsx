import { type SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number
}

export function Icon({ size = 24, children, ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {children}
        </svg>
    )
}