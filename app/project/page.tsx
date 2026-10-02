import type { Metadata } from "next";
import { Project, Tech } from "@/utils/types";
import './page.css';
import ProjectLogo from "@/components/ProjectLogo";
import { FaCss3, FaHtml5, FaJs, FaLaravel, FaBootstrap, FaAws } from "react-icons/fa";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoJquery, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiNestjs, SiRedis, SiSocketdotio, SiMysql, SiPhp } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Production SaaS applications, client platforms, and enterprise web solutions built by Mukesh Suthar.",
};

const HTML: Tech = { label: "HTML", icon: <FaHtml5 /> };
const CSS: Tech = { label: "CSS", icon: <FaCss3 /> };
const BootStrap: Tech = { label: "Bootstrap", icon: <FaBootstrap /> };
const JS: Tech = { label: "JavaScript", icon: <FaJs /> };
const TS: Tech = { label: "TypeScript", icon: <BiLogoTypescript /> };
const Jquery: Tech = { label: "jQuery", icon: <BiLogoJquery /> };
const Laravel: Tech = { label: "Laravel", icon: <FaLaravel /> };
const PHP: Tech = { label: "PHP", icon: <SiPhp /> };
const ReactJS: Tech = { label: "React.js", icon: <RiReactjsFill /> };
const NextJS: Tech = { label: "Next.js", icon: <RiNextjsFill /> };
const NestJS: Tech = { label: "NestJS", icon: <SiNestjs /> };
const PostgreSQL: Tech = { label: "PostgreSQL", icon: <BiLogoPostgresql /> };
const MySQL: Tech = { label: "MySQL", icon: <SiMysql /> };
const Redis: Tech = { label: "Redis", icon: <SiRedis /> };
const SocketIO: Tech = { label: "Socket.io", icon: <SiSocketdotio /> };
const AWS: Tech = { label: "AWS S3", icon: <FaAws /> };

const projects: Project[] = [
    {
        name: "FieldTrack360",
        tagline: "Real-Time Field Employee Tracking SaaS",
        image: "https://www.google.com/s2/favicons?sz=128&domain=fieldtrack360.com",
        link: "https://fieldtrack360.com",
        details: "Built a full-featured SaaS application from the ground up using NestJS for the backend and Next.js for the frontend, delivering a scalable and maintainable architecture. Engineered a real-time chat gateway using WebSockets (Socket.io) to enable low-latency communication. Designed and implemented custom filtering algorithms to process and refine GPS tracking data points for field employees. Delivered end-to-end product from system design to live production deployment.",
        technology: [
            NestJS, NextJS, TS, PostgreSQL, Redis, SocketIO
        ]
    },
    {
        name: "PraHeal",
        tagline: "Multi-Tenant Healthcare SaaS CRM",
        image: "https://www.google.com/s2/favicons?sz=128&domain=praheal.com",
        link: "https://praheal.com",
        details: "Developed a multi-tenant SaaS CRM platform using React.js and Laravel supporting 20+ independent clinics with fully isolated databases, custom roles, and tailored workflows. Streamlined clinic operations by building modules for appointment scheduling, digital medical records, treatment scheduler, and e-prescriptions. Integrated WhatsApp and SMS automated communication workflows, and built real-time operational analytics dashboards.",
        technology: [
            ReactJS, Laravel, MySQL, AWS
        ]
    },
    {
        name: "NRI Tax Services",
        tagline: "Dynamic Financial Platform",
        image: "https://www.nritaxservices.com/backend/storage/app/uploads/admin/settings/nritaxserviceslogo_6804b85265fda.png",
        link: "https://www.nritaxservices.com",
        details: "Developed dynamic front-facing platform for NRI tax consultancy. Implemented dynamic administrative menu structures, interactive consultation request components, and secured backend API integrations for client lead management.",
        technology: [
            ReactJS, BootStrap, Laravel, PHP
        ]
    },
    {
        name: "PentaQube",
        tagline: "Dynamic Business Website",
        image: "https://www.pentaqube.com/favicon.png",
        link: "https://www.pentaqube.com",
        details: "Implemented efficient data fetching techniques, managed application state using React hooks, and optimized client rendering for high performance. Built interactive UI components with responsive layouts to enhance user engagement.",
        technology: [
            ReactJS, BootStrap, Laravel, MySQL
        ]
    },
    {
        name: "IBC Consult",
        tagline: "Enterprise Consulting Website",
        image: "https://www.google.com/s2/favicons?sz=128&domain=consult-ibc.com",
        link: "https://www.consult-ibc.com",
        details: "Engineered responsive dynamic portal with customizable content sections and lead generation forms. Designed clean frontend interfaces and connected them to secure Laravel RESTful API endpoints.",
        technology: [
            ReactJS, BootStrap, Laravel, PHP
        ]
    },
    {
        name: "CSIR-IMTECH",
        tagline: "Institute Dynamic System",
        image: "https://www.imtech.res.in/images/android-chrome-512x512.png",
        link: "https://imtech.res.in",
        details: "Developed functional modules using Laravel, handling backend business logic, secure data processing, and database operations for the Institute of Microbial Technology's internal workflows. Created clean, accessible frontend interfaces and optimized database queries for reliability.",
        technology: [
            Laravel, PHP, HTML, CSS, BootStrap, JS, Jquery
        ]
    }
];

export default function Page() {
    return (
        <div className="page wrap">
            <header className="page-head">
                <span className="eyebrow">Portfolio</span>
                <h1 className="page-title">Featured Projects</h1>
                <p className="page-lead">
                    A collection of production SaaS applications, client platforms, and enterprise web solutions built with modern full-stack architectures.
                </p>
            </header>
            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project-card card card-hover" key={project.name}>
                        <div className="project-top">
                            <ProjectLogo src={project.image} name={project.name} />
                            <div className="project-heading">
                                <h2 className="project-name">{project.name}</h2>
                                <p className="project-tagline">{project.tagline}</p>
                            </div>
                        </div>
                        <p className="project-details">{project.details}</p>
                        <ul className="chips project-stack" aria-label="Tech stack">
                            {project.technology.map((tech) => (
                                <li key={tech.label} className="chip">
                                    <span className="chip-icon">{tech.icon}</span>
                                    {tech.label}
                                </li>
                            ))}
                        </ul>
                        <div className="project-footer">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
                                Visit Site <HiArrowUpRight />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
