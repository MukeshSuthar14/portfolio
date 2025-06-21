import { Theme } from "@/utils/types";
import Layout from "../server-layout";
import { cookies } from "next/headers";

export default async function page() {
    const cookieStore = await cookies();
    const theme: Theme = cookieStore.get('theme')?.value as Theme;

    return (
        <Layout theme={theme}>
            <div className="project-section">
                
            </div>
        </Layout>
    )
}