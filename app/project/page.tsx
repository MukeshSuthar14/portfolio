import { Project } from "@/utils/types";
import Layout from "../server-layout";
import './page.css';
import Image from "next/image";
import Link from "next/link";
import { FaCss3, FaHtml5, FaJs, FaLaravel, FaBootstrap, FaAws } from "react-icons/fa";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoJquery, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiNestjs, SiRedis, SiSocketdotio, SiMysql, SiPhp } from "react-icons/si";
import React from "react";

export default async function Page() {
    const HTML: React.ReactNode = <FaHtml5 title="HTML" key="html" />;
    const CSS: React.ReactNode = <FaCss3 title="CSS" key="css" />;
    const BootStrap: React.ReactNode = <FaBootstrap title="Bootstrap" key="bs" />;
    const JS: React.ReactNode = <FaJs title="JavaScript" key="js" />;
    const TS: React.ReactNode = <BiLogoTypescript title="TypeScript" key="ts" />;
    const Jquery: React.ReactNode = <BiLogoJquery title="JQuery" key="jq" />;
    const Laravel: React.ReactNode = <FaLaravel title="Laravel" key="laravel" />;
    const PHP: React.ReactNode = <SiPhp title="PHP" key="php" />;
    const ReactJS: React.ReactNode = <RiReactjsFill title="React.js" key="react" />;
    const NextJS: React.ReactNode = <RiNextjsFill title="Next.js" key="next" />;
    const NestJS: React.ReactNode = <SiNestjs title="NestJS" key="nest" />;
    const PostgreSQL: React.ReactNode = <BiLogoPostgresql title="PostgreSQL" key="pg" />;
    const MySQL: React.ReactNode = <SiMysql title="MySQL" key="mysql" />;
    const Redis: React.ReactNode = <SiRedis title="Redis" key="redis" />;
    const SocketIO: React.ReactNode = <SiSocketdotio title="Socket.io" key="socket" />;
    const AWS: React.ReactNode = <FaAws title="AWS S3" key="aws" />;

    const projects: Project[] = [
        {
            name: "FIELDTRACK360 | REAL-TIME FIELD EMPLOYEE TRACKING SAAS",
            image: "https://www.google.com/s2/favicons?sz=128&domain=fieldtrack360.com",
            link: "https://fieldtrack360.com",
            details: "Built a full-featured SaaS application from the ground up using NestJS for the backend and Next.js for the frontend, delivering a scalable and maintainable architecture. Engineered a real-time chat gateway using WebSockets (Socket.io) to enable low-latency communication. Designed and implemented custom filtering algorithms to process and refine GPS tracking data points for field employees. Delivered end-to-end product from system design to live production deployment.",
            technology: [
                NestJS, NextJS, TS, PostgreSQL, Redis, SocketIO
            ]
        },
        {
            name: "PRAHEAL | MULTI-TENANT HEALTHCARE SAAS CRM",
            image: "https://www.google.com/s2/favicons?sz=128&domain=praheal.com",
            link: "https://praheal.com",
            details: "Developed a multi-tenant SaaS CRM platform using React.js and Laravel supporting 20+ independent clinics with fully isolated databases, custom roles, and tailored workflows. Streamlined clinic operations by building modules for appointment scheduling, digital medical records, treatment scheduler, and e-prescriptions. Integrated WhatsApp and SMS automated communication workflows, and built real-time operational analytics dashboards.",
            technology: [
                ReactJS, Laravel, MySQL, AWS
            ]
        },
        {
            name: "NRI TAX SERVICES | DYNAMIC FINANCIAL PLATFORM",
            image: "https://www.nritaxservices.com/backend/storage/app/uploads/admin/settings/nritaxserviceslogo_6804b85265fda.png",
            link: "https://www.nritaxservices.com",
            details: "Developed dynamic front-facing platform for NRI tax consultancy. Implemented dynamic administrative menu structures, interactive consultation request components, and secured backend API integrations for client lead management.",
            technology: [
                ReactJS, BootStrap, Laravel, PHP
            ]
        },
        {
            name: "PENTAQUBE | DYNAMIC BUSINESS WEBSITE",
            image: "https://www.pentaqube.com/favicon.png",
            link: "https://www.pentaqube.com",
            details: "Implemented efficient data fetching techniques, managed application state using React hooks, and optimized client rendering for high performance. Built interactive UI components with responsive layouts to enhance user engagement.",
            technology: [
                ReactJS, BootStrap, Laravel, MySQL
            ]
        },
        {
            name: "IBC CONSULT | ENTERPRISE CONSULTING WEBSITE",
            image: "https://www.google.com/s2/favicons?sz=128&domain=consult-ibc.com",
            link: "https://www.consult-ibc.com",
            details: "Engineered responsive dynamic portal with customizable content sections and lead generation forms. Designed clean frontend interfaces and connected them to secure Laravel RESTful API endpoints.",
            technology: [
                ReactJS, BootStrap, Laravel, PHP
            ]
        },
        {
            name: "CSIR-IMTECH | INSTITUTE DYNAMIC SYSTEM",
            image: "https://www.imtech.res.in/images/android-chrome-512x512.png",
            link: "https://imtech.res.in",
            details: "Developed functional modules using Laravel, handling backend business logic, secure data processing, and database operations for the Institute of Microbial Technology's internal workflows. Created clean, accessible frontend interfaces and optimized database queries for reliability.",
            technology: [
                Laravel, PHP, HTML, CSS, BootStrap, JS, Jquery
            ]
        }
    ];

    return (
        <Layout>
            <div className="project-section">
                <div className="title">Featured Projects</div>
                <p className="project-subtitle">
                    A collection of production SaaS applications, client platforms, and enterprise web solutions built with modern full-stack architectures.
                </p>
                <div className="project-container">
                    {projects && projects?.length > 0 && projects.map((project: Project, key: number) => (
                        <div className="project" key={key}>
                            <div className="project-image">
                                <Image src={project?.image} alt={project?.name} width={100} height={100} unoptimized />
                            </div>
                            <div className="project-info">
                                <div className="project-name">
                                    {project?.name}
                                </div>
                                <div className="project-details">
                                    {project?.details}
                                </div>
                                <div className="project-tech">
                                    <div className="visit-link">
                                        <Link href={project.link} target="_blank" className="visit-site">Visit Site &rarr;</Link>
                                    </div>
                                    <div className="website-tech">
                                        {project?.technology?.map((tech: React.ReactNode, techKey: number) => (
                                            <div key={techKey} className="tech">{tech}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}