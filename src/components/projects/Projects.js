import React, { useState } from 'react'
import MLandDL from './MLandDL';
import PythonProjetcs from './Python';
import WebDevProjects from './WebDev';
import Title from '../layouts/Title'
import MobileDevProjects from './MobileDev';
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
// import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [MLAndDL, setMLAndDL] = useState(true);
  const [Python, setPython] = useState(false);
  const [WebDev, setWebDev] = useState(false);
  const [MobileDev, setMobileDev] = useState(false);
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      {/* <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div> */}
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setMLAndDL(true) &
              setPython(false) &
              setWebDev(false) &
              setMobileDev(false)
            }
            className={`${MLAndDL
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            ML & DL
          </li>
          <li
            onClick={() =>
              setMLAndDL(false) &
              setPython(true) &
              setWebDev(false) &
              setMobileDev(false)
            }
            className={`${Python ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Python Projects
          </li>
          <li
            onClick={() =>
              setMLAndDL(false) &
              setPython(false) &
              setWebDev(true) &
              setMobileDev(false)
            }
            className={`${WebDev
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Web Development
          </li>
          <li
            onClick={() =>
              setMLAndDL(false) &
              setPython(false) &
              setWebDev(false) &
              setMobileDev(true)
            }
            className={`${MobileDev
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Mobile Development
          </li>
        </ul>
      </div>
      {MLAndDL && <MLandDL />}
      {Python && <PythonProjetcs />}
      {WebDev && <WebDevProjects />}
      {MobileDev && <MobileDevProjects />}
    </section>
  );
}

export default Projects