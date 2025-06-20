import { Theme } from "@/utils/types";
import ClientLayout from "./client-layout";
import themeColors from '../theme-config';

export default async function Layout({
    children,
    theme
}: {
    children: React.ReactNode,
    theme: Theme
}) {
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