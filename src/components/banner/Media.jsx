import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact , FaPython, FaNodeJs, FaAws} from "react-icons/fa";
import {SiTensorflow } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/realAxadali/'> <FaFacebookF /></a>
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/AsadAli00'> <FaGithub/></a>
          </span>
          <span className="bannerIcon">
             <a href='https://www.linkedin.com/in/engr-asad-9910a0172/'><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <FaPython />
          </span>
          <span className="bannerIcon">
             <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiTensorflow />
          </span>
          <span className="bannerIcon">
            <FaAws />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media