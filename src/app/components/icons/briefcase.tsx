import { Icon, type IconProps } from "./icon"

export function Briefcase({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
        </Icon>
    )
}