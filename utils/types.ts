export type Theme = "Light" | "Dark";

export interface Tech {
    label: string
    icon: React.ReactNode
}

export interface Project {
    name: string
    tagline: string
    image: string
    link: string
    details: string
    technology: Tech[]
}
