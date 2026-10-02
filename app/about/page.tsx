import type { Metadata } from "next";
import './page.css';
import { FaLaptopCode, FaDatabase, FaServer, FaCogs, FaCode } from "react-icons/fa";
import { SiPhp, SiMysql, SiSocketdotio, SiPostman, SiNestjs, SiRedis, SiDocker, SiGit, SiFirebase } from "react-icons/si";
import { BiLogoTypescript, BiLogoVisualStudio, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiReactjsFill, RiNodejsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaLaravel, FaJs } from "react-icons/fa";
import { HiMapPin, HiBriefcase, HiAcademicCap, HiRocketLaunch } from "react-icons/hi2";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Experience, education, and technical skills of Mukesh Suthar, a Full Stack Developer based in Ahmedabad, Gujarat.",
};

export default function AboutPage() {
  const facts = [
    { icon: <HiMapPin />, label: "Location", value: "Ahmedabad, Gujarat" },
    { icon: <HiBriefcase />, label: "Experience", value: "2+ Years" },
    { icon: <HiAcademicCap />, label: "Education", value: "B.Tech in IT (2022 - 2026)" },
    { icon: <HiRocketLaunch />, label: "Focus", value: "SaaS & Multi-tenant Systems" },
  ];

  const skillCategories = [
    {
      category: "Backend & Real-Time",
      icon: <FaServer />,
      tone: "coral",
      skills: [
        { name: "NestJS", icon: <SiNestjs style={{ color: "#E0234E" }} /> },
        { name: "Node.js", icon: <RiNodejsFill style={{ color: "#339933" }} /> },
        { name: "Laravel", icon: <FaLaravel style={{ color: "#FF2D20" }} /> },
        { name: "PHP", icon: <SiPhp style={{ color: "#777BB4" }} /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "WebSockets", icon: <FaServer style={{ color: "var(--teal)" }} /> },
        { name: "REST APIs", icon: <FaCogs style={{ color: "var(--amber)" }} /> },
      ]
    },
    {
      category: "Frontend & Full Stack",
      icon: <FaLaptopCode />,
      tone: "teal",
      skills: [
        { name: "React.js", icon: <RiReactjsFill style={{ color: "#149ECA" }} /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "TypeScript", icon: <BiLogoTypescript style={{ color: "#3178C6" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#E8B900" }} /> },
      ]
    },
    {
      category: "Databases & Caching",
      icon: <FaDatabase />,
      tone: "amber",
      skills: [
        { name: "PostgreSQL", icon: <BiLogoPostgresql style={{ color: "#4169E1" }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
        { name: "Redis", icon: <SiRedis style={{ color: "#DC382D" }} /> },
        { name: "Firebase", icon: <SiFirebase style={{ color: "#F5A623" }} /> },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <FaCogs />,
      tone: "violet",
      skills: [
        { name: "Git", icon: <SiGit style={{ color: "#F05032" }} /> },
        { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} /> },
        { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
        { name: "VS Code", icon: <BiLogoVisualStudio style={{ color: "#007ACC" }} /> },
        { name: "Vercel", icon: <IoLogoVercel /> },
      ]
    }
  ];

  return (
    <div className="page wrap">
      {/* About Me Overview */}
      <header className="page-head">
        <span className="eyebrow">About</span>
        <h1 className="page-title">About Me</h1>
      </header>

      <section className="about-intro">
        <div className="about-bio">
          <p className="bio-lead">
            I&apos;m <span className="highlight-text">Mukesh Suthar</span>, a passionate <span className="highlight-text">Full Stack Developer</span> based in Ahmedabad, Gujarat with 2+ years of experience building scalable, secure, and production-ready applications.
          </p>
          <p>
            Specialized in backend architectures and real-time systems using <strong>NestJS, Next.js, Laravel, and Node.js</strong>. Experienced in designing multi-tenant SaaS platforms, high-performance database architectures with <strong>PostgreSQL, MySQL, and Redis caching</strong>, and low-latency communication via <strong>WebSockets (Socket.io)</strong>.
          </p>
        </div>
        <ul className="about-facts card">
          {facts.map((fact) => (
            <li key={fact.label} className="about-fact">
              <span className="about-fact-icon">{fact.icon}</span>
              <span className="about-fact-text">
                <span className="about-fact-label">{fact.label}</span>
                <span className="about-fact-value">{fact.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience */}
      <section className="about-block">
        <div className="section-head">
          <span className="eyebrow">Career</span>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="timeline">
          {/* DevsTree */}
          <article className="timeline-item card tone-teal">
            <div className="experience-role">
              <h3 className="role-title">
                <FaCode className="role-icon" />
                <span>Full Stack Developer</span>
              </h3>
              <div className="date-pill">Aug 2025 - Present</div>
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
          </article>

          {/* WildTigers */}
          <article className="timeline-item card tone-coral">
            <div className="experience-role">
              <h3 className="role-title">
                <FaLaptopCode className="role-icon" />
                <span>Web Developer</span>
              </h3>
              <div className="date-pill">Apr 2023 - Apr 2025</div>
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
          </article>
        </div>
      </section>

      {/* Education Section */}
      <section className="about-block">
        <div className="section-head">
          <span className="eyebrow">Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item card tone-amber">
            <div className="experience-role">
              <h3 className="role-title">
                <HiAcademicCap className="role-icon" />
                <span>Bachelor of Technology in Information Technology</span>
              </h3>
              <div className="date-pill">Aug 2022 - Apr 2026</div>
            </div>
            <div className="company-name">
              Silver Oak University <span className="company-location">&bull; Ahmedabad, Gujarat</span>
            </div>
            <p className="education-desc">
              Coursework in Data Structures & Algorithms, Database Management Systems, System Architecture, Web Technologies, Operating Systems, and Object-Oriented Software Engineering.
            </p>
          </article>
        </div>
      </section>

      {/* Categorized Skills */}
      <section className="about-block">
        <div className="section-head">
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">A comprehensive overview of my core technical stack and engineering proficiencies.</p>
        </div>
        <div className="grid-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`skill-category-card card tone-${cat.tone}`}>
              <div className="category-header">
                <span className="icon-tile">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="chips">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="chip chip-lg">
                    <span className="chip-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
