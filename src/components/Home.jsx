import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif"
const Home = () => {
  return (
   <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-3 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24  order-2 md:order-1">
                <span className="text-xl">Welcome in my Feed</span>
                <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1 className="">Hi, I'm </h1>
                    {/* <span  font-bold">a Developer</span> */}
                    <ReactTyped
                        className="text-red-700"
                        strings={["Chayan","a Developer", "a Thinker", "a Dreamer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br /> 
                <p className="text-sm md:text-md text-justify">Emerging MERN-stack developer with strong problem-solving skills and hands-on experience in JavaScript, React, Node.js,Express.js and 
databases. Aiming to join an innovative organization where I can contribute effectively and enhance my technical expertise. 
Driven to adapt quickly to new technologies and development practices. 
                </p>

            <br />
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="space-y-3" >
                        <h1 className="font-bold ">Available on</h1>
                        <ul className="flex space-x-2 text-2xl">
                        <li>
                            <a href="https://www.instagram.com/chayanbez/"
                            target='_blank'>
                        <FaInstagram className="cursor-pointer"/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/chayan-bez-b74505281/"
                            target='_blank'>
                            <CiLinkedin className="cursor-pointer"/>
                            </a>
                        </li>

                        <li>
                            
                            <a href="https://x.com/ChayanBez"
                            target='_blank'>
                                <FaXTwitter className="cursor-pointer"/>
                            </a>
                        </li>

                        </ul>
                        
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Currently Working on</h1>
                        <div className="flex space-x-2 text-2xl">
                            <SiMongodb  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                            <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                            <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                            <SiExpress  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>



                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="md:w-1/2 md:ml-40 md:mt-20 order-1" >
                <img src={pic} alt="" className="rounded-full md:w-[450px] md:h-[450px]" />
            </div>
        </div>
    </div>

    <hr />

   </>
  )
}

export default Home
