import { Icon, type IconProps } from "./icon"

export function ChevronRight({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path d="M9 6l6 6l-6 6" />
        </Icon>
    )
}
