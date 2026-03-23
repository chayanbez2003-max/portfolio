import React from "react";
import Profilepic from "../../public/Profilepic.jpeg";

const skills = [
  { name: "Java", level: 80, color: "from-orange-400 to-red-500" },
  { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-400" },
  { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 60, color: "from-gray-300 to-gray-500" },
  { name: "Node.js", level: 60, color: "from-green-400 to-emerald-500" },
  { name: "Express.js", level: 60, color: "from-gray-400 to-gray-600" },
  { name: "MongoDB", level: 60, color: "from-green-500 to-teal-500" },
];

const About = () => {
  return (
    <section
      name="About"
      id="about"
      className="relative py-24 px-4 md:px-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SECTION */}
          <div className="glass rounded-2xl p-8 flex flex-col items-center lg:items-start hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 blur-lg opacity-40 scale-110" />
              <img
                src={Profilepic}
                alt="Profile"
                className="relative w-44 h-44 rounded-full object-cover"
                style={{ border: '3px solid transparent', background: 'linear-gradient(#0f1117, #0f1117) padding-box, linear-gradient(135deg, #7c3aed, #06b6d4) border-box' }}
              />
            </div>

            <div className="text-center lg:text-left space-y-2 mb-8">
              <p className="text-gray-400"><span className="font-semibold text-purple-400">Name:</span> <span className="text-white">Chayan Bez</span></p>
              <p className="text-gray-400"><span className="font-semibold text-purple-400">Role:</span> <span className="text-white">MERN Stack Developer</span></p>
              <p className="text-gray-400"><span className="font-semibold text-purple-400">Location:</span> <span className="text-white">Kolkata, India</span></p>
            </div>

            {/* Skills */}
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-5 text-white">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800/60 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-gray-400 leading-relaxed text-base">
              I'm a final-year Computer Science student passionate about building
              scalable, user-focused web applications using the MERN stack. I enjoy
              transforming ideas into real-world products and continuously refining
              them through feedback and iteration.
            </p>

            <div className="glass rounded-2xl p-6 space-y-4">
              {[
                { label: "Profile", value: "MERN Stack Development" },
                { label: "Education", value: "B.Tech in Computer Science" },
                { label: "Languages", value: "English, Hindi, Bengali" },
                { label: "Other Skills", value: "Java, DSA, Web Development" },
                { label: "Interests", value: "Cricket, Books, International Relations" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="font-semibold text-purple-400 w-28 shrink-0">{label}:</span>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/chayan-bez/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                LinkedIn Profile
              </a>
              <a
                href="/Chayan_Bez_resume.pdf"
                download
                className="px-7 py-3 rounded-full font-semibold text-gray-200 gradient-border hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
