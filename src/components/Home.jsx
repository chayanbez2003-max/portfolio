import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

const techStack = [
  { icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
  { icon: FaReact, label: "React", color: "text-cyan-400" },
  { icon: IoLogoNodejs, label: "Node.js", color: "text-green-500" },
  { icon: SiExpress, label: "Express", color: "text-gray-300" },
];

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/chayanbez/", label: "Instagram", color: "hover:text-pink-400" },
  { icon: CiLinkedin, href: "https://www.linkedin.com/in/chayan-bez-b74505281/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: FaXTwitter, href: "https://x.com/ChayanBez", label: "Twitter", color: "hover:text-gray-200" },
];

const Home = () => {
  return (
    <>
      <div name="Home" className="min-h-screen relative flex items-center overflow-hidden dot-pattern">
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-24 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Content */}
            <div className="md:w-1/2 order-2 md:order-1 space-y-6">
              <div>
                <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">Welcome to my portfolio</span>
                <div className="flex flex-wrap items-center gap-3 text-3xl md:text-5xl font-bold mt-2">
                  <h1 className="text-white">Hi, I'm</h1>
                  <ReactTyped
                    className="gradient-text text-glow"
                    strings={["Chayan", "a Developer", "a Thinker", "a Dreamer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                Emerging Full-stack developer with strong problem-solving skills and hands-on experience in
                JavaScript, React, Node.js, Express.js and databases. Driven to adapt quickly to new technologies
                and build scalable, impactful products.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bezchayan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  Hire Me
                </a>
                <a
                  href="/Chayan_Bez_resume.pdf"
                  download
                  className="px-7 py-3 rounded-full font-semibold text-gray-200 gradient-border hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  Download CV
                </a>
              </div>

              {/* Socials */}
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Find me on</p>
                  <div className="flex space-x-4 text-2xl text-gray-400">
                    {socials.map(({ icon: Icon, href, label, color }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className={`${color} transition-all duration-200 hover:scale-125`}
                        aria-label={label}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Tech Stack</p>
                  <div className="flex space-x-3 text-2xl">
                    {techStack.map(({ icon: Icon, label, color }) => (
                      <div key={label} className="group relative">
                        <Icon className={`${color} hover:scale-125 transition-all duration-200 cursor-default`} />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center relative">
              <div className="relative float-anim">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 blur-2xl opacity-30 scale-110" />
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full p-1" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', padding: '3px', borderRadius: '50%' }}>
                  <div className="w-full h-full rounded-full bg-[#060912]" />
                </div>
                <img
                  src={pic}
                  alt="Chayan Bez"
                  className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
                  style={{ border: '3px solid transparent', background: 'linear-gradient(#060912, #060912) padding-box, linear-gradient(135deg, #7c3aed, #06b6d4) border-box' }}
                />
              </div>

              {/* Stats badges */}
              <div className="absolute top-4 -right-4 md:right-8 glass rounded-2xl px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text">3+</p>
                <p className="text-xs text-gray-400">Years Coding</p>
              </div>
              <div className="absolute bottom-8 -left-4 md:left-8 glass rounded-2xl px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-xs text-gray-400">Projects Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
