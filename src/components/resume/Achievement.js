import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cisco International Python Certification"
            subTitle="Cisco"
            result="Success"
            des="This esteemed certification program is designed to validate your proficiency in Python programming and its practical application in networking, automation, and IT solutions"
          />
          <ResumeCard
            title="AI For Everyone"
            subTitle="Coursera"
            result="Success"
            des="This course offers a non-technical introduction to the world of AI, providing you with the knowledge and insights needed to understand, leverage, and navigate the AI revolution"
          />
          <ResumeCard
            title="Neural Networks and Deep Learning"
            subTitle="Coursera"
            result="Success"
            des="This course delves into the foundations of artificial neural networks and equips you with the skills to construct and train deep learning models."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Introduction to Artificial Intelligence (AI)"
            subTitle="IBM"
            result="Success"
            des="This course serves as your gateway to understanding the fundamentals of AI and its practical applications. Guided by industry experts, you'll explore the building blocks of AI, delve into real-world examples, and discover how AI is transforming industries worldwide"
          />
          <ResumeCard
            title="Cisco Linux Essentials Professional Development Certificate"
            subTitle="Cisco Networking Academy"
            result="Success"
            des="This certificate program is designed to equip you with a fundamental understanding of Linux operating systems, empowering you to navigate and utilize the world of open-source technology effectively"
          />
          <ResumeCard
            title="Artificial Intelligence"
            subTitle="Presidential Initiative for Artificial Intelligence & Computing (PIAIC)"
            result="Success"
            des="Learn the foundations of AI, its history, and its impact on various industries.
            Discover the art of training machines to learn and make predictions from data.
            Explore neural networks and their role in creating intelligent systems and so on."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
