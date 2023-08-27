import React from 'react'
import Title from '../layouts/Title'
import { WebP1, WebP2, WebP3 ,WebP4, WebP5} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const WebDevProjects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Web Develpment / Frontend & Backend Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="REGISTRATION FORM"
                    des="The User Registration Form with HTML and CSS project involves creating a user-friendly and visually appealing registration form using HTML for structure and CSS for styling. The goal of this project is to develop a basic web page where users can input their information to register for an account"
                    src={WebP1}
                    githubLink={"https://github.com/AsadAli00/form-using-HTML-and-CSS"}
                    webpagelink={"https://assignment-no2.web.app/"}
                />
                <ProjectsCard
                    title="Website Landing Page"
                    des="Project involves creating a modern and responsive landing page for a website using a combination of HTML for structure, CSS for styling, and Bootstrap for layout and components"
                    src={WebP2}
                    githubLink={"https://github.com/AsadAli00/Saylani-website-HTML-and-CSS-"}
                    webpagelink={"https://assignment-no-3-7f645.web.app/"}
                />
                <ProjectsCard
                    title="Fully Responsive Website"
                    des="Project involves designing and developing a website that adapts seamlessly to various screen sizes and devices, providing an optimal user experience. This project focuses on utilizing HTML, CSS, and potentially a CSS framework like Bootstrap to create a responsive and visually appealing website that works well on desktops, tablets, and mobile devices"
                    src={WebP3}
                    githubLink={"https://github.com/AsadAli00/Atech-Website"}
                    webpagelink={"https://responsive-atech-website.web.app/"}
                />
                 <ProjectsCard
                    title="OLX replica Website using ReactJS"
                    des="Project involves building a dynamic and interactive website using the ReactJS library. ReactJS is a popular JavaScript library for building user interfaces, and this project serves as an introduction to its core concepts"
                    src={WebP4}
                    githubLink={"https://github.com/AsadAli00/olx-replica"}
                    webpagelink={"https://olxreplica-app.web.app/"}
                />
                 <ProjectsCard
                    title="NodeJs, ExpressJS and MongoDB"
                    des="Project involves creating a dynamic web application with a backend powered by Node.js and Express.js, while utilizing MongoDB as the database. This project focuses on building a complete web application from scratch, including server-side logic, database integration, and API endpoints."
                    src={WebP5}
                    githubLink={"https://github.com/AsadAli00/Fiver-NodeJS-and-MongoDB-Job"}
                    webpagelink={"https://github.com/AsadAli00/Fiver-NodeJS-and-MongoDB-Job"}
                />
            </div>
        </section>

    );
}

export default WebDevProjects