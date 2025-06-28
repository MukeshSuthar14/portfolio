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
    const theme: Theme = cookieStore.get('theme')?.value as Theme;

    let style = {};
    if (theme) {
        style = {
            "--background-theme-color": themeColors[theme].background,
            "--background-invert-theme-color": themeColors[theme].text
        };
    }
    
    return (
        <body className="body-start" style={style}>
            <ClientLayout theme={theme}>
                {children}
            </ClientLayout>
        </body>
    )
}