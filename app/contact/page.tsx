import Layout from "../server-layout";
import './page.css';
import Contact from "@/components/Contact";

export default async function Page() {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}