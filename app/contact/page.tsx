import { cookies } from "next/headers";
import Layout from "../server-layout";
import './page.css';
import { Theme } from "@/utils/types";
import Contact from "@/components/Contact";

export default async function Page() {
    const cookieStore = await cookies();
    const theme: Theme = cookieStore.get('theme')?.value as Theme;

    return (
        <Layout theme={theme}>
            <Contact />
        </Layout>
    )
}