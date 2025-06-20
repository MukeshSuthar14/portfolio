import Typewriter from "@/components/Typewriter";
import Layout from "./server-layout";
import Image from "next/image";
import { cookies } from "next/headers";
import { Theme } from "@/utils/types";

export default async function Home() {
  const cookieStore = await cookies();
  const theme: Theme = cookieStore.get('theme')?.value as Theme;
  console.log(theme);

  return (
    <Layout theme={theme}>
      <section className="section">
        <div className="container">
          <div className="section-info">
            <div>
              <h6 className="sub-text" style={{fontSize: "50px"}}>Hi, There! <span className="wave">👋🏻</span></h6>
              <h5 className="heading"><span style={{color: "var(--background-invert-theme-color)"}}>I&apos;M</span> Mukesh Suthar</h5>
              {/* <h6 className="sub-text">I am a Web Developer</h6> */}
              <br/>
              <br/>
              <Typewriter />
            </div>
          </div>
          <div className="section-images">
            <div>
              <Image src="/home-main.svg" alt="Mukesh Suthar" width={500} height={500}/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
