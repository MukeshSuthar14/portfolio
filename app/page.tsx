import Typewriter from "@/components/Typewriter";
import Layout from "./server-layout";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub, FaServer, FaBolt, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import React from "react";

export default async function Home() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "6+", label: "Production Projects" },
    { number: "15+", label: "Technologies & Frameworks" },
    { number: "100%", label: "Scalable Architecture" }
  ];

  const specializations = [
    {
      icon: <FaBolt style={{ color: "#FF6B6B" }} />,
      title: "Full Stack SaaS Development",
      description: "End-to-end multi-tenant SaaS platforms using NestJS and Next.js, built from system architecture to production deployment.",
      tags: ["NestJS", "Next.js", "React.js", "Laravel", "TypeScript"]
    },
    {
      icon: <FaServer style={{ color: "#4ECDC4" }} />,
      title: "Real-Time & WebSocket Systems",
      description: "Low-latency communication gateways using Socket.io, real-time user chat, and custom GPS filtering algorithms.",
      tags: ["Socket.io", "WebSockets", "GPS Algorithms", "Redis"]
    },
    {
      icon: <FaDatabase style={{ color: "#FFE66D" }} />,
      title: "Database Design & Optimization",
      description: "Robust data architectures using PostgreSQL, MySQL, and Redis caching. Highly optimized query performance and background queue processing.",
      tags: ["PostgreSQL", "MySQL", "Redis", "TypeORM", "Sequelize"]
    },
    {
      icon: <FaLayerGroup style={{ color: "#A78BFA" }} />,
      title: "REST APIs & Microservices",
      description: "Secure, well-documented RESTful API ecosystems with automated WhatsApp/SMS notifications and third-party cloud integrations.",
      tags: ["Microservices", "RESTful APIs", "AWS S3", "Docker"]
    }
  ];

  const featuredProjects = [
    {
      badge: "Flagship SaaS Platform",
      title: "FieldTrack360",
      description: "A real-time field employee tracking and team management SaaS. Features low-latency WebSocket chat, custom GPS tracking algorithms, and a modular NestJS/Next.js architecture.",
      link: "https://fieldtrack360.com",
      tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io"]
    },
    {
      badge: "Multi-Tenant CRM",
      title: "PraHeal",
      description: "A multi-tenant healthcare SaaS CRM platform supporting 20+ independent clinics with fully isolated databases, appointment scheduling, digital medical records, and automated notifications.",
      link: "https://praheal.com",
      tags: ["React.js", "Laravel", "MySQL", "AWS S3", "WhatsApp API"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="section-info">
            <div>
              <div className="home-badge-available">
                <span className="pulse-dot"></span>
                <span>Available for Full Stack & SaaS Roles</span>
              </div>
              <h2 className="sub-text">
                Hi, There! <span className="wave">👋🏻</span>
              </h2>
              <h1 className="heading">
                <span style={{ color: "var(--background-invert-theme-color)" }}>I&apos;M</span> Mukesh Suthar
              </h1>
              <div className="hero-typewriter-wrapper">
                <Typewriter />
              </div>
              <p className="hero-desc">
                Full Stack Developer with 2+ years of experience building scalable SaaS applications, real-time WebSocket systems, and high-performance backends with NestJS, Next.js, and Laravel.
              </p>
              <div className="hero-action-buttons">
                <Link href="/project" className="hero-btn-primary">
                  View My Work <HiArrowRight />
                </Link>
                <Link href="/contact" className="hero-btn-secondary">
                  Contact Me
                </Link>
                <Link href="/cv.pdf" target="_blank" className="hero-btn-outline">
                  <HiDownload /> CV
                </Link>
              </div>
            </div>
          </div>
          <div className="section-images">
            <div>
              <Image src="/home-main.svg" alt="Mukesh Suthar" width={500} height={500} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="home-stats-section">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* What I Do / Specializations Section */}
      <section className="home-section">
        <div className="home-section-header">
          <span className="home-section-tag">Specializations</span>
          <h2 className="home-section-title">What I Do Best</h2>
          <p className="home-section-desc">
            Combining deep backend engineering, real-time communications, and modern frontend frameworks to deliver robust, production-grade applications.
          </p>
        </div>
        <div className="services-grid">
          {specializations.map((item, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="service-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Spotlight */}
      <section className="home-section">
        <div className="home-section-header">
          <span className="home-section-tag">Featured Work</span>
          <h2 className="home-section-title">Flagship Projects</h2>
          <p className="home-section-desc">
            A snapshot of real-world SaaS platforms and multi-tenant architectures engineered with high reliability and scalable design.
          </p>
        </div>
        <div className="featured-projects-grid">
          {featuredProjects.map((p, idx) => (
            <div key={idx} className="featured-project-card">
              <div>
                <span className="featured-project-badge">{p.badge}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="service-tags" style={{ marginBottom: "20px" }}>
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="featured-project-footer">
                <Link href={p.link} target="_blank" className="featured-project-link">
                  Visit Live Application <HiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-more-btn-wrap">
          <Link href="/project" className="featured-more-btn">
            Explore All 6+ Projects <HiArrowRight />
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="home-cta-section">
        <div className="home-cta-card">
          <h2>Ready to build something scalable?</h2>
          <p>
            Whether you&apos;re looking for a Full Stack Engineer for your team or seeking an expert to architect your next SaaS application, let&apos;s connect.
          </p>
          <div className="home-cta-buttons">
            <Link href="/contact" className="hero-btn-primary">
              Get In Touch <HiArrowRight />
            </Link>
            <Link href="/cv.pdf" target="_blank" className="hero-btn-secondary">
              <HiDownload /> Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="home-connect-section">
        <div className="home-connect-card">
          <span className="home-section-tag">Let&apos;s Connect</span>
          <h2 className="home-connect-title">FIND ME ON</h2>
          <p className="home-connect-desc">
            Feel free to connect with me, explore my open-source repositories, or say hello across any of these platforms:
          </p>
          <div className="home-social-grid">
            <Link href="https://github.com/MukeshSuthar14" target="_blank" className="social-pill-card github">
              <span className="social-pill-icon"><FaGithub /></span>
              <div className="social-pill-info">
                <span className="social-pill-name">GitHub</span>
                <span className="social-pill-handle">@MukeshSuthar14</span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/mukeshsuthar90" target="_blank" className="social-pill-card linkedin">
              <span className="social-pill-icon"><FaLinkedin /></span>
              <div className="social-pill-info">
                <span className="social-pill-name">LinkedIn</span>
                <span className="social-pill-handle">/in/mukeshsuthar90</span>
              </div>
            </Link>
            <Link href="https://www.x.com/mukeshsuthar90" target="_blank" className="social-pill-card twitter">
              <span className="social-pill-icon"><FaXTwitter /></span>
              <div className="social-pill-info">
                <span className="social-pill-name">X (Twitter)</span>
                <span className="social-pill-handle">@mukeshsuthar90</span>
              </div>
            </Link>
            <Link href="https://www.instagram.com/mukesh_sthr90" target="_blank" className="social-pill-card instagram">
              <span className="social-pill-icon"><FaInstagram /></span>
              <div className="social-pill-info">
                <span className="social-pill-name">Instagram</span>
                <span className="social-pill-handle">@mukesh_sthr90</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
