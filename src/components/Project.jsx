import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from "../../public/project3.png";

const Project = () => {
  const cardItems = [
    {
      id: 1,
      logo: project1,
      name: "Resume Builder Website",
      description:
        "A full-stack resume builder built with React, Tailwind CSS, Node.js, Express, MongoDB, and ImageKit, featuring dynamic templates and AI-assisted content enhancement.",
      github: "https://github.com/chayanbez2003-max/resume_builder",
      live:"https://resumebuilder-max.netlify.app/",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      gradient: "from-purple-600/20 to-cyan-500/20",
      accent: "border-purple-500/30",
    },
    {
      id: 2,
      logo: project2,
      name: "GTA-VI Animated Landing Page",
      description:
        "A visually engaging GTA-VI inspired landing page built using HTML, CSS, JavaScript, and GSAP animations with stunning visual effects.",
      github: "https://github.com/chayanbez2003-max/GTA-VI-",
      live:"https://chayanbez2003-max.github.io/GTA-VI-/",
      tags: ["HTML", "CSS", "GSAP", "JavaScript"],
      gradient: "from-orange-600/20 to-red-500/20",
      accent: "border-orange-500/30",
    },
    {
      id: 3,
      logo: project3,
      name: "Video Streaming Platform",
      description:
        "A full-featured video streaming platform where users can upload, stream, and manage videos with authentication and cloud storage integration.",
      github: "https://github.com/chayanbez2003-max/vidTube",
      live:"https://vidtube2003.netlify.app/",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-pink-600/20 to-violet-500/20",
      accent: "border-pink-500/30",
    },
  ];

  return (
    <section
      name="Projects"
      className="relative py-24 px-4 md:px-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            My <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cardItems.map(({ id, logo, name, description, github, live, tags, gradient, accent }) => (
            <div
              key={id}
              className={`glass rounded-2xl overflow-hidden border ${accent} hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-2 transition-all duration-300 group flex flex-col`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} h-52`}>
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060912]/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white w-fit px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold w-fit px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                      style={{ borderColor: 'rgba(6,182,212,0.5)', color: '#22d3ee', background: 'rgba(6,182,212,0.08)' }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
