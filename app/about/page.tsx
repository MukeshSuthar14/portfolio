import Layout from "../server-layout";
import './page.css';
import { GiSkills, GiGraduateCap } from "react-icons/gi";
import { FaLaptopCode, FaDatabase, FaServer, FaCogs, FaUserTie, FaBriefcase, FaCode } from "react-icons/fa";
import { SiPhp, SiMysql, SiSocketdotio, SiPostman, SiNestjs, SiRedis, SiDocker, SiGit, SiFirebase } from "react-icons/si";
import { BiLogoTypescript, BiLogoVisualStudio, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiReactjsFill, RiNodejsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaLaravel, FaJs } from "react-icons/fa";
import React from "react";

export default async function AboutPage() {
  const skillCategories = [
    {
      category: "Backend & Real-Time",
      icon: <FaServer style={{ color: "#FF6B6B" }} />,
      skills: [
        { name: "NestJS", icon: <SiNestjs style={{ color: "#E0234E" }} /> },
        { name: "Node.js", icon: <RiNodejsFill style={{ color: "#339933" }} /> },
        { name: "Laravel", icon: <FaLaravel style={{ color: "#FF2D20" }} /> },
        { name: "PHP", icon: <SiPhp style={{ color: "#777BB4" }} /> },
        { name: "Socket.io", icon: <SiSocketdotio style={{ color: "var(--background-invert-theme-color)" }} /> },
        { name: "WebSockets", icon: <FaServer style={{ color: "#4ECDC4" }} /> },
        { name: "REST APIs", icon: <FaCogs style={{ color: "#FFE66D" }} /> },
      ]
    },
    {
      category: "Frontend & Full Stack",
      icon: <FaLaptopCode style={{ color: "#4ECDC4" }} />,
      skills: [
        { name: "React.js", icon: <RiReactjsFill style={{ color: "#61DAFB" }} /> },
        { name: "Next.js", icon: <RiNextjsFill style={{ color: "var(--background-invert-theme-color)" }} /> },
        { name: "TypeScript", icon: <BiLogoTypescript style={{ color: "#3178C6" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
      ]
    },
    {
      category: "Databases & Caching",
      icon: <FaDatabase style={{ color: "#FFE66D" }} />,
      skills: [
        { name: "PostgreSQL", icon: <BiLogoPostgresql style={{ color: "#4169E1" }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
        { name: "Redis", icon: <SiRedis style={{ color: "#DC382D" }} /> },
        { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <FaCogs style={{ color: "#A78BFA" }} />,
      skills: [
        { name: "Git", icon: <SiGit style={{ color: "#F05032" }} /> },
        { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} /> },
        { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
        { name: "VS Code", icon: <BiLogoVisualStudio style={{ color: "#007ACC" }} /> },
        { name: "Vercel", icon: <IoLogoVercel style={{ color: "var(--background-invert-theme-color)" }} /> },
      ]
    }
  ];

  return (
    <Layout>
      <section className="about-section">
        {/* About Me Overview */}
        <div className="about-info">
          <div className="heading">About Me <FaUserTie className="heading-icon" style={{ color: "#FF6B6B" }} /></div>
          <div className="about-bio-grid">
            <div className="about-bio-text">
              <p className="bio-lead">
                I&apos;m <span className="highlight-text">Mukesh Suthar</span>, a passionate <span className="highlight-text">Full Stack Developer</span> based in Ahmedabad, Gujarat with 2+ years of experience building scalable, secure, and production-ready applications.
              </p>
              <p>
                Specialized in backend architectures and real-time systems using <strong>NestJS, Next.js, Laravel, and Node.js</strong>. Experienced in designing multi-tenant SaaS platforms, high-performance database architectures with <strong>PostgreSQL, MySQL, and Redis caching</strong>, and low-latency communication via <strong>WebSockets (Socket.io)</strong>.
              </p>
              <div className="about-highlights-badges">
                <span className="badge">📍 Ahmedabad, Gujarat</span>
                <span className="badge">💼 2+ Years Experience</span>
                <span className="badge">🎓 B.Tech in IT (2022 - 2026)</span>
                <span className="badge">🚀 SaaS & Multi-tenant Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="about-info">
          <div className="heading">Work Experience <FaBriefcase className="heading-icon" style={{ color: "#4ECDC4" }} /></div>
          <div className="row-list">
            {/* DevsTree */}
            <div className="experience-info">
              <div className="experience-role">
                <div className="role-title">
                  <FaCode className="role-icon" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="role-date">Aug 2025 - Present</div>
              </div>
              <div className="company-name">
                DevsTree IT Services Private Limited <span className="company-location">&bull; Ahmedabad, Gujarat</span>
              </div>
              <ul className="experience-summary-list">
                <li>
                  Developed a full-featured SaaS application (<strong>FieldTrack360</strong>) using <strong>NestJS</strong> for the backend and <strong>Next.js</strong> for the frontend, delivering a scalable and maintainable architecture.
                </li>
                <li>
                  Engineered a real-time chat gateway using <strong>WebSockets (Socket.io)</strong> to enable seamless, low-latency communication for mobile application users.
                </li>
                <li>
                  Designed and implemented custom filtering algorithms to accurately process and refine GPS tracking data points for field employee tracking.
                </li>
              </ul>
            </div>

            {/* WildTigers */}
            <div className="experience-info">
              <div className="experience-role">
                <div className="role-title">
                  <FaLaptopCode className="role-icon" />
                  <span>Web Developer</span>
                </div>
                <div className="role-date">Apr 2023 - Apr 2025</div>
              </div>
              <div className="company-name">
                WildTigers Technologies Private Limited <span className="company-location">&bull; Ahmedabad, Gujarat</span>
              </div>
              <ul className="experience-summary-list">
                <li>
                  Developed and maintained scalable web applications using <strong>PHP, Laravel, React.js, Node.js, and MySQL</strong>, ensuring high performance and reliability.
                </li>
                <li>
                  Built <strong>PraHeal</strong>, a multi-tenant SaaS CRM platform supporting 20+ healthcare clinics with isolated databases, appointment scheduling, and automated WhatsApp/SMS workflows.
                </li>
                <li>
                  Collaborated closely with designers and product stakeholders to translate requirements into clear technical specifications, improving cross-team delivery.
                </li>
                <li>
                  Engineered and optimized RESTful APIs and database queries in MySQL, significantly boosting application speed and overall user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="about-info">
          <div className="heading">Education <GiGraduateCap /></div>
          <div className="education-container">
            <div className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">Bachelor of Technology in Information Technology</h3>
                  <div className="education-institution">Silver Oak University &bull; Ahmedabad, Gujarat</div>
                </div>
                <div className="education-period">Aug 2022 - Apr 2026</div>
              </div>
              <p className="education-desc">
                Coursework in Data Structures & Algorithms, Database Management Systems, System Architecture, Web Technologies, Operating Systems, and Object-Oriented Software Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="about-info">
          <div className="heading">Technical Skills <GiSkills /></div>
          <p className="skills-subheading">A comprehensive overview of my core technical stack and engineering proficiencies.</p>
          <div className="skill-categories-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-category-card">
                <div className="category-header">
                  {cat.icon}
                  <h3>{cat.category}</h3>
                </div>
                <div className="category-skills-list">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span className="pill-icon">{s.icon}</span>
                      <span className="pill-name">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
