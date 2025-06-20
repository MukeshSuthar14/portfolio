"use client";
import React, { useEffect, useState } from 'react';

const roles = ["Web Developer", "Backend Developer", "MERN Stack Developer"];

const Typewriter = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = 2000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // Switch to deleting after full word typed
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }

      // Switch to typing next role after deleting complete
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="sub-text typing-container">
      <span className="typed-text">{text}<span className="cursor">|</span></span>
    </div>
  );
};

export default Typewriter;
