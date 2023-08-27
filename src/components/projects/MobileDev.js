import React from 'react'
import Title from '../layouts/Title'
import {MobileP1 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const MobileDevProjects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Mobile Development Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Blood Bank Android/IOS APP"
                    des="Project involves developing a cross-platform mobile application that connects blood donors with blood recipients. The app is built using React Native, allowing it to run on both Android and iOS devices"
                    src={MobileP1}
                    githubLink={"https://github.com/AsadAli00/Blood-Bank-App"}
                    webpagelink={"https://github.com/AsadAli00/Blood-Bank-App"}
                />
            </div>
        </section>

    );
}

export default MobileDevProjects