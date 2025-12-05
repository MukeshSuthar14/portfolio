import { FaJs, FaNode, FaLaravel, FaReact, FaTools } from "react-icons/fa";
import Layout from "../server-layout";
import './page.css';
import { FcAbout } from "react-icons/fc";
import { GiSoapExperiment, GiSkills } from "react-icons/gi";
import { SiXdadevelopers, SiPhp, SiMysql, SiSocketdotio, SiMongodb, SiPostman } from "react-icons/si";
import { DiCodeigniter, DiJqueryLogo } from "react-icons/di";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

export default async function Home() {
  const Skills: React.ReactNode[] = [
    <FaJs title="JavaScript" key={1} />,
    <SiPhp title="PHP" key={2} />,
    <SiMysql title="MySql" key={3} />,
    <FaNode title="Node.JS" key={4} />,
    <FaLaravel title="Laravel" key={5} />,
    <DiCodeigniter title="Codeigniter" key={6} />,
    <DiJqueryLogo title="Jquery" key={7} />,
    <FaReact title="React.JS" key={8} />,
    <BiLogoTypescript title="TypeScript" key={9} />,
    <RiNextjsFill title="Next.JS" key={10} />,
    <SiSocketdotio title="Socket.IO" key={11} />,
    <SiMongodb title="MongoDB" key={12} />
  ];
  const Tools: React.ReactNode[] = [
    <BiLogoVisualStudio title="Visual Studio Code" key={1} />,
    <SiPostman title="Postman" key={2} />,
    <IoLogoVercel title="Vercel" key={3} />
  ];

  return (
    <Layout>
      <section className="about-section">
        <div className="about-info">
          <div className="heading">About Me <FcAbout /></div>
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
        <div className="about-info">
          <div className="heading">Work Experience <GiSoapExperiment /></div>
          <div className="row-list">
            <div className="experience-info">
              <div className="experience-role">
                <p><span className="theme-color"><SiXdadevelopers /> Full Stack Developer</span></p>
                <p><span className="theme-color">(Aug 2025 - Present)</span></p>
              </div>
              <div className="company-name">
                DevsTree IT Services Private Limited
              </div>
              <ul className="experience-summary-list">
                <li>Developed and maintained web applications using Node Js, Nest Js, PostgreSQL and Redis. Focused on both backend
                  and frontend development, managing and organizing data efficiently for seamless integration with the frontend.</li>
                <li>Implemented RESTful APIs to facilitate smooth data exchange between the backend and frontend, ensuring a well-structured
                  and responsive application.</li>
              </ul>
            </div>
            <div className="experience-info">
              <div className="experience-role">
                <p><span className="theme-color"><SiXdadevelopers /> Jr. Web Developer</span></p>
                <p><span className="theme-color">(April 2023 - April 2025)</span></p>
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
        <div className="about-info">
          <div className="heading">Skills <GiSkills /></div>
          <div className="skill-container">
            <div className="skill-list">
              {Skills && Skills?.length > 0 && Skills?.map((skill: React.ReactNode, key: number) => (
                <div key={key} className="skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-info">
          <div className="heading">Tools <FaTools /></div>
          <div className="skill-container">
            <div className="skill-list">
              {Tools && Tools?.length > 0 && Tools?.map((tool: React.ReactNode, key: number) => (
                <div key={key} className="skill">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
