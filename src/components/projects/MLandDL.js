import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree , DLP4} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const MLandDL = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Machine Learning and Deep learning Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Image Classification using CNN (Cats & Dogs)"
                    des="The goal is to train a model that can accurately classify images into different predefined categories or classes"
                    src={projectOne}
                    githubLink={"https://github.com/AsadAli00/cat-and-Dogs-predictive-AI-Model"}
                    webpagelink={"https://github.com/AsadAli00/cat-and-Dogs-predictive-AI-Model"}
                />
                <ProjectsCard
                    title="House Price Prediction Model"
                    des=" The goal is to train a model that can accurately estimate the sale price of a house given its characteristics."
                    src={projectTwo}
                    githubLink={"https://github.com/AsadAli00/Buston_Housing-ML-Example-"}
                    webpagelink={"https://github.com/AsadAli00/Buston_Housing-ML-Example-"}
                />
                <ProjectsCard
                    title="BBC-News-Classification-AI-Model"
                    des="The model scans the content of each article and determines whether the tone and sentiment conveyed are predominantly positive or negative"
                    src={projectThree}
                    githubLink={"https://github.com/AsadAli00/BBC-News-Classification-AI-Model-"}
                    webpagelink={"https://github.com/AsadAli00/BBC-News-Classification-AI-Model-"}
                />
                 <ProjectsCard
                    title="Pakistan Sign Language Detection using CNN"
                    des="Classifying Pakistan Sign Language (PSL) gestures using a pretrained neural network involves using a deep learning model that has been trained on a large dataset of images or videos containing PSL gestures"
                    src={DLP4}
                    githubLink={"https://github.com/AsadAli00/Pakistan-Sign-Language-Detection-using-Pretrained-CNN"}
                    webpagelink={"https://github.com/AsadAli00/Pakistan-Sign-Language-Detection-using-Pretrained-CNN"}
                />
            </div>
        </section>

    );
}

export default MLandDL