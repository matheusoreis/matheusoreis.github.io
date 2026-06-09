import { Icon, type IconProps } from "./icon"

export function ManualGearbox({ size, ...props }: IconProps) {
    return (
        <Icon size={size} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 8l0 8" /><path d="M12 8l0 8" /><path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
        </Icon>
    )
}