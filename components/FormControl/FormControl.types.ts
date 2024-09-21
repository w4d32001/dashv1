import { LucideIcon } from "lucide-react"

export type FormControlProps = {
    item: {
        label: string,
        icon: LucideIcon,
        type: string,
        placeholder: string
    }
    key: string
}