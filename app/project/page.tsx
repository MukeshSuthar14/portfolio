import { Project, Theme } from "@/utils/types";
import Layout from "../server-layout";
import './page.css';
import Image from "next/image";
import Link from "next/link";
import { FaCss3, FaHtml5, FaJs, FaLaravel } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import React from "react";

export default async function page() {
    const HTML: React.ReactNode = <FaHtml5 title="HTML"/>;
    const CSS: React.ReactNode = <FaCss3 title="CSS"/>;
    const JS: React.ReactNode = <FaJs title="JavaScript"/>;
    const Laravel: React.ReactNode = <FaLaravel title="Laravel"/>;
    const ReactJS: React.ReactNode = <RiReactjsFill title="React.Js"/>;

    const projects: Project[] = [
        {
            name: "CSIR-IMTECH | DYNAMIC WEBSITE",
            image: "https://www.imtech.res.in/images/android-chrome-512x512.png",
            link: "https://imtech.res.in",
            details: "Developed and maintained web applications using PHP, Laravel, CodeIgniter, MySQL, and JavaScript. Focused on backend development, managing and organizing data efficiently for seamless integration with the frontend. Optimized database queries to enhance application performance and scalability. Implemented RESTful APIs to facilitate smooth data exchange between the backend and frontend, ensuring a well- structured and responsive application. ",
            technology: [
                HTML, CSS, JS, Laravel
            ]
        },
        {
            name: "PRAHEAL | SAAS WEB APPLICATION",
            image: "https://www.praheal.com/assets/images/pra-logo11.png",
            link: "https://praheal.com",
            details: "Developed a SaaS-based web application for clinics to streamline patient appointment scheduling and management. The platform features an intuitive Appointment Calendar, Patient Medical Records management, Treatment Scheduler, EPrescription generation, and Accounts & Billing. It also includes Finance Reports, Post-Procedure Follow-ups, Home Treatment management, and a comprehensive Plan Treatment Schedule, enhancing operational efficiency and patient care. ",
            technology: [
                ReactJS, Laravel
            ]
        },
        {
            name: "PENTAQUBE | DYNAMIC WEBSITE",
            image: "https://www.pentaqube.com/favicon.png",
            link: "https://www.pentaqube.com",
            details: "Implemented efficient data fetching techniques, managed state using React hooks, and optimized rendering for a seamless user experience. Ensured dynamic content updates and interactive UI components for improved user engagement. ",
            technology: [
                ReactJS, Laravel
            ]
        },
        {
            name: "NRI TAX SERVICES | DYNAMIC WEBSITE",
            image: "https://www.nritaxservices.com/backend/storage/app/uploads/admin/settings/nritaxserviceslogo_6804b85265fda.png",
            link: "https://www.nritaxservices.com",
            details: "Implemented dynamic menus and show in frontend. Ensured dynamic content updates and interactive UI components for improved user engagement",
            technology: [
                ReactJS, Laravel
            ]
        },
        {
            name: "IBC CONSULT | DYNAMIC WEBSITE",
            image: "https://www.consult-ibc.com/backend/storage/app/uploads/admin/settings/favicon_1726814795.png",
            link: "https://www.consult-ibc.com",
            details: "Implemented dynamic menus and show in frontend. Ensured dynamic content updates and interactive UI components for improved user engagement",
            technology: [
                ReactJS, Laravel
            ]
        }
    ];

    return (
        <Layout>
            <div className="project-section">
                <div className="title">Projects</div>
                <div className="project-container">
                    {projects && projects?.length > 0 && projects.map((project: Project, key: number) => (
                        <div className="project" key={key}>
                            <div className="project-image">
                                <Image src={project?.image} alt={project?.name} width={100} height={100} />
                            </div>
                            <div className="project-info">
                                <div className="project-name">
                                    {project?.name}
                                </div>
                                <div className="project-details">
                                    {project?.details}
                                </div>
                                <div className="project-tech">
                                    <Link href={project.link} target="_blank" className="visit-site">Click to visit</Link>
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