import { Icon, type IconProps } from "./icon"

export function Smartphone({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" /><path d="M11 4h2" /><path d="M12 17v.01" />
        </Icon>
    )
}