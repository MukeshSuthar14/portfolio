"use client";
import Image from "next/image";
import React, { useState } from "react";

// Project logos are hotlinked from the client sites, so fall back to a monogram if one stops loading.
export default function ProjectLogo({ src, name }: { src: string, name: string }) {
    const [failed, setFailed] = useState(false);

    return (
        <div className="project-logo">
            {failed ? (
                <span className="project-logo-fallback" aria-hidden="true">{name.charAt(0)}</span>
            ) : (
                <Image src={src} alt={`${name} logo`} width={56} height={56} unoptimized onError={() => setFailed(true)} />
            )}
        </div>
    );
}
