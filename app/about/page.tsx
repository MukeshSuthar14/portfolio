import { cookies } from "next/headers";
import Layout from "../server-layout";
import './page.css';
import { Theme } from "@/utils/types";

export default async function Home() {
  const cookieStore = await cookies();
  const theme: Theme = cookieStore.get('theme')?.value as Theme;

  return (
    <Layout theme={theme}>
      <section className="about-section">
        <div className="about-info">
          <div className="heading">About Me</div>
          <div className="about">
            <ul>
              <li>Hi there, I am <span className="theme-color">Mukesh Suthar</span> from <span className="theme-color">Ahmedabad, Gujarat</span>.</li>
              <li>I am currently pursuing a <span className="theme-color">B.Tech in Information Technology</span> at <span className="theme-color">Silver Oak University, Ahmedabad</span>.</li>
              <li>I have completed an internship at <span className="theme-color">The WildTigers Technologies</span>, where I gained valuable experience as a <span className="theme-color">Web Developer</span>.</li>
              <li>Web Developer with a passion for building efficient and user-friendly applications. Skilled in backend technologies, databases, and
                API integration. Seeking to contribute to a dynamic team while continuously learning and growing.</li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
        <div className="about-info">
          <div className="heading">Work Experience</div>
          <div className="row-list">
            <div className="experience-info">
              <div className="experience-role">
                <p>Jr. Web Developer</p>
                <p>(April 2023 - April 2025)</p>
              </div>
              <div className="company-name">
                The WildTigers Technologies
              </div>
              <ul className="experience-summary-list">
                <li>Developed and maintained web applications using PHP, Laravel, CodeIgniter, MySQL, and JavaScript. Focused on backend
                  development, managing and organizing data efficiently for seamless integration with the frontend.</li>
                <li>Optimized database queries to enhance application performance and scalability.
                </li>
                <li>Implemented RESTful APIs to facilitate smooth data exchange between the backend and frontend, ensuring a well-structured
                  and responsive application.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
