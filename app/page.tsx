import Typewriter from "@/components/Typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub, FaServer, FaBolt, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import React from "react";
import { SITE, SOCIALS } from "@/utils/site";

export default function Home() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "6+", label: "Production Projects" },
    { number: "15+", label: "Technologies & Frameworks" },
    { number: "100%", label: "Scalable Architecture" }
  ];

  const specializations = [
    {
      icon: <FaBolt />,
      tone: "coral",
      title: "Full Stack SaaS Development",
      description: "End-to-end multi-tenant SaaS platforms using NestJS and Next.js, built from system architecture to production deployment.",
      tags: ["NestJS", "Next.js", "React.js", "Laravel", "TypeScript"]
    },
    {
      icon: <FaServer />,
      tone: "teal",
      title: "Real-Time & WebSocket Systems",
      description: "Low-latency communication gateways using Socket.io, real-time user chat, and custom GPS filtering algorithms.",
      tags: ["Socket.io", "WebSockets", "GPS Algorithms", "Redis"]
    },
    {
      icon: <FaDatabase />,
      tone: "amber",
      title: "Database Design & Optimization",
      description: "Robust data architectures using PostgreSQL, MySQL, and Redis caching. Highly optimized query performance and background queue processing.",
      tags: ["PostgreSQL", "MySQL", "Redis", "TypeORM", "Sequelize"]
    },
    {
      icon: <FaLayerGroup />,
      tone: "violet",
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

  const socials = [
    { ...SOCIALS.github, key: "github", icon: <FaGithub /> },
    { ...SOCIALS.linkedin, key: "linkedin", icon: <FaLinkedin /> },
    { ...SOCIALS.x, key: "x-twitter", icon: <FaXTwitter /> },
    { ...SOCIALS.instagram, key: "instagram", icon: <FaInstagram /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero wrap">
        <div className="hero-info">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Available for Full Stack & SaaS Roles</span>
          </div>
          <p className="hero-greeting">
            Hi there <span className="wave" aria-hidden="true">👋🏻</span> I&apos;m
          </p>
          <h1 className="hero-title">Mukesh Suthar</h1>
          <Typewriter />
          <p className="hero-desc">{SITE.description}</p>
          <div className="hero-actions">
            <Link href="/project" className="btn btn-primary">
              View My Work <HiArrowRight />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
            <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <HiDownload /> CV
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Image src="/home-main.svg" alt="Illustration of a developer working at a desk" width={500} height={500} priority />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="wrap" aria-label="Key numbers">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do / Specializations Section */}
      <section className="section wrap">
        <div className="section-head">
          <span className="eyebrow">Specializations</span>
          <h2 className="section-title">What I Do Best</h2>
          <p className="section-desc">
            Combining deep backend engineering, real-time communications, and modern frontend frameworks to deliver robust, production-grade applications.
          </p>
        </div>
        <div className="grid-2">
          {specializations.map((item, idx) => (
            <div key={idx} className={`service-card card card-hover tone-${item.tone}`}>
              <div className="icon-tile">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="chips">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Spotlight */}
      <section className="section wrap">
        <div className="section-head">
          <span className="eyebrow">Featured Work</span>
          <h2 className="section-title">Flagship Projects</h2>
          <p className="section-desc">
            A snapshot of real-world SaaS platforms and multi-tenant architectures engineered with high reliability and scalable design.
          </p>
        </div>
        <div className="grid-2">
          {featuredProjects.map((p, idx) => (
            <div key={idx} className="featured-card card card-hover">
              <span className="featured-badge">{p.badge}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">{tag}</span>
                ))}
              </div>
              <div className="featured-footer">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-link">
                  Visit Live Application <HiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="section-more">
          <Link href="/project" className="btn btn-secondary">
            Explore All 6+ Projects <HiArrowRight />
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section wrap">
        <div className="cta-card">
          <h2>Ready to build something scalable?</h2>
          <p>
            Whether you&apos;re looking for a Full Stack Engineer for your team or seeking an expert to architect your next SaaS application, let&apos;s connect.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">
              Get In Touch <HiArrowRight />
            </Link>
            <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <HiDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="section wrap">
        <div className="section-head">
          <span className="eyebrow">Let&apos;s Connect</span>
          <h2 className="section-title">Find Me On</h2>
          <p className="section-desc">
            Feel free to connect with me, explore my open-source repositories, or say hello across any of these platforms:
          </p>
        </div>
        <div className="social-grid">
          {socials.map((s) => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className={`social-card card ${s.key}`}>
              <span className="social-card-icon">{s.icon}</span>
              <span className="social-card-info">
                <span className="social-card-name">{s.label}</span>
                <span className="social-card-handle">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
