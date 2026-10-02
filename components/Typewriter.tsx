"use client";
import React, { useEffect, useState } from 'react';

const roles = ["Full Stack Developer", "Backend Developer", "SaaS Engineer"];

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1800;

const Typewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const role = roles[roleIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLength(role.length);
      return;
    }

    let delay = isDeleting ? DELETE_MS : TYPE_MS;
    let step = () => setLength((prev) => prev + (isDeleting ? -1 : 1));

    if (!isDeleting && length === role.length) {
      // Full word typed: hold, then start deleting
      delay = HOLD_MS;
      step = () => setIsDeleting(true);
    } else if (isDeleting && length === 0) {
      // Fully deleted: move on to the next role
      step = () => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      };
    }

    const timeout = setTimeout(step, delay);
    return () => clearTimeout(timeout);
  }, [length, isDeleting, role]);

  return (
    <div className="typing-container">
      <span className="sr-only">{roles.join(", ")}</span>
      <span className="typed-text" aria-hidden="true">
        {role.substring(0, length)}<span className="cursor">|</span>
      </span>
    </div>
  );
};

export default Typewriter;
