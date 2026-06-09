import { Icon, type IconProps } from "./icon"

export function Code({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" />
        </Icon>
    )
}