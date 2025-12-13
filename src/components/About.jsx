import React from "react";
import profile from "../../public/profile.jpeg";

const skills = [
  { name: "Java", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 60 },
  { name: "Node.js", level: 60 },
  { name: "Express.js", level: 60 },
  { name: "MongoDB", level: 60 },
];

const About = () => {
  return (
    <section
      name="About"
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center lg:items-start">
          <img
            src={profile}
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover border-4 border-black shadow-md mb-6"

          />

          <div className="text-center lg:text-left space-y-1 mb-8">
            <p><span className="font-semibold">Name:</span> Chayan Bez</p>
            <p><span className="font-semibold">Role:</span> MERN Stack Developer</p>
            <p><span className="font-semibold">Location:</span> Kolkata, India</p>
          </div>

          {/* Skills */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-5">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-gray-800 to-black transition-all duration-500"

                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            I’m a final-year Computer Science student passionate about building
            scalable, user-focused web applications using the MERN stack. I enjoy
            transforming ideas into real-world products and continuously refining
            them through feedback and iteration.
          </p>

          <ul className="space-y-3 mb-10">
            <li className="flex gap-4">
              <span className="font-semibold w-32">Profile:</span>
              <span>MERN Stack Development</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold w-32">Education:</span>
              <span>B.Tech in Computer Science</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold w-32">Languages:</span>
              <span>English, Hindi, Bengali</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold w-32">Other Skills:</span>
              <span>Java, DSA, Web Development</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold w-32">Interests:</span>
              <span>Cricket, Books, International Relations</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/chayan-bez/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition
"
            >
              LinkedIn
            </a>

            <a
              href="/Chayan_Bez_resume.pdf"
              download
              className="px-6 py-2 rounded-full border-2 border-black text-black font-medium hover:bg-black hover:text-white transition"

            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-16 opacity-40" />
    </section>
  );
};

export default About;
