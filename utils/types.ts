export type Theme = "Light" | "Dark";
export interface Project {
    name: string
    image: string
    link: string
    details: string
    technology: React.ReactNode[]
}