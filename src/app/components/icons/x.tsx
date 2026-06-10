import { Icon, type IconProps } from "./icon"

export function X({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
        </Icon>
    )
}