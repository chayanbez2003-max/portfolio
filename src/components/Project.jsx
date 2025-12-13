import React from "react";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";

const Project = () => {
  const cardItems = [
    {
      id: 1,
      logo: project1,
      name: "Resume Builder Website",
      description:
        "A full-stack resume builder built with React, Tailwind CSS, Node.js, Express, MongoDB, and ImageKit, featuring dynamic templates and AI-assisted content enhancement.",
      github: "https://github.com/chayanbez2003-max/resume_builder",
    },
    {
      id: 2,
      logo: project2,
      name: "GTA-VI Animated Landing Page",
      description:
        "A visually engaging GTA-VI inspired landing page built using HTML, CSS, JavaScript, and GSAP animations.",
      github: "https://github.com/chayanbez2003-max/GTA-VI-",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardItems.map(({ id, logo, name, description, github }) => (
          <div
            key={id}
            className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            {/* Project Image */}
            <img
              src={logo}
              alt={name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{name}</h2>
              <p className="text-gray-600 text-sm mb-5">
                {description}
              </p>

              {/* Action Button */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
