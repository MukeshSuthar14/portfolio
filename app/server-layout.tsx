import ClientLayout from "./client-layout";
import themeColors from '../theme-config';
import { cookies } from "next/headers";
import { Theme } from "@/utils/types";

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    const cookieStore = await cookies();
    const cookieTheme = cookieStore.get('theme')?.value as Theme;
    const theme: Theme = (cookieTheme === "Light" || cookieTheme === "Dark") ? cookieTheme : "Dark";

    const style = {
        "--background-theme-color": themeColors[theme].background,
        "--background-invert-theme-color": themeColors[theme].text,
        "--grid-dot-color": themeColors[theme].gridDot,
        "--card-bg": themeColors[theme].cardBg,
        "--card-border": themeColors[theme].cardBorder,
        "--card-shadow": themeColors[theme].cardShadow,
        "--input-bg": themeColors[theme].inputBg,
        "--input-border": themeColors[theme].inputBorder,
        "--input-placeholder": themeColors[theme].inputPlaceholder,
    };
    
    return (
        <body className="body-start" data-theme={theme} style={style as React.CSSProperties}>
            <ClientLayout theme={theme}>
                {children}
            </ClientLayout>
        </body>
    )
}