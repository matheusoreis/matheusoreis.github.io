import { Icon, type IconProps } from "./icon"

export function ChevronLeft({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" />
        </Icon>
    )
}