"use client";

import Image from "next/image";
import "./styles/About.css";

const About = () => (
  <div className="about-section" id="about">
    <div className="about-image-wrapper">
      <div className="about-image-card">
        <div className="about-image-inner">
          <Image
            src="/images/profile.jpg"
            alt="Md Shofiqul Islam"
            width={480}
            height={560}
            className="about-profile-img"
            priority />
          <div className="about-image-overlay">
            <div className="about-badge">
              <span className="badge-dot">●</span> Open for Hire 🚀
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about-me">
      <h3 className="title">About Me</h3>
      <p className="para">
        I'm <span className="highlight">Md Shofiqul Islam</span>, a passionate{" "}
        <span className="text-white">Frontend Developer</span> who loves
        building high-performance, interactive web applications. With
        expertise in crafting{" "}
        <span className="text-white">pixel-perfect UIs</span> using <strong>React, Next.js, TypeScript</strong>, and{" "}
        <strong>Tailwind CSS</strong>, alongside seamless API integrations —
        I turn complex ideas into elegant, responsive, and intuitive digital products.
      </p>
      <i>Clean code, great UX, and continuous learning drive <br /> everything I do.</i>
    </div>
  </div>
);

export default About;

