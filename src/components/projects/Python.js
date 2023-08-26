import React from 'react'
import Title from '../layouts/Title'
import { PythonP1, PythonP2} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const PythonProjetcs = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Python related Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Web Scraping using Python Beautifulsoup"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={PythonP1}
                    githubLink={"https://github.com/AsadAli00/Final-Assignment"}
                    webpagelink={"https://github.com/AsadAli00/Final-Assignment"}
                />
                <ProjectsCard
                    title="Data visualization and feature Engineering using Python"
                    des="Data visualization and feature engineering are essential steps in the data preprocessing phase of machine learning and data analysis"
                    src={PythonP2}
                    githubLink={"https://github.com/AsadAli00/Data-visualization-and-feature-Engineering"}
                    webpagelink={"https://github.com/AsadAli00/Data-visualization-and-feature-Engineering"}
                />
            </div>
        </section>

    );
}

export default PythonProjetcs