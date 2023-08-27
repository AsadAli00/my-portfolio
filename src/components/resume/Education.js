import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MS in Artificial Intelligence"
            subTitle="NED University of Engineering & Technology (2022 - present)"
            result="3.45/4"
            des="
            A Master of Science (MS) degree in Artificial Intelligence from NED University offers an advanced and specialized education in the field of AI. This program is designed to equip students with in-depth knowledge and practical skills related to artificial intelligence, machine learning, data analysis, and related technologies. Throughout the program, students delve into topics such as neural networks, natural language processing, computer vision, reinforcement learning, and ethical considerations in AI."
          />
          <ResumeCard
            title="Artificial Intelligence Engineer"
            subTitle="Presidential Initiative for Artificial Intelligence & Computing (PIAIC) (2019 - 2021)"
            result="Done"
            des="Designing, developing, and researching Machine Learning systems, models, and schemes 
            Studying, transforming, and converting data science prototypes
            Searching and selecting appropriate data sets
            Performing statistical analysis and using results to improve models
            Training and retraining ML systems and models as needed
            Identifying differences in data distribution that could affect model performance in real-world situations
            Visualizing data for deeper insights
            Analyzing the use cases of ML algorithms and ranking them by their success probability
            Understanding when your findings can be applied to business decisions
            Enriching existing ML frameworks and libraries
            Verifying data quality and/or ensuring it via data cleaning"
          />
           <ResumeCard
            title="BS in Electronics"
            subTitle="Sir Syed University of Engineering and Technology (2016 - 2020)"
            result="3.26/4"
            des="A Bachelor of Science (BS) degree in Electronics from the Sir Syed University of Engineering and Technology (SSUET) is a comprehensive undergraduate program designed to provide students with a solid foundation in the field of electronics. This degree program typically spans four years and offers a blend of theoretical knowledge and practical skills necessary for a career in the electronics industry"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Officer I"
            subTitle="Meezan Bank Limited - (2012 - Present)"
            result="Pakistan"
            des="I will be working with the IT Department , and I'm very eager to learn, grow and contribute to my new role."
          />
          <ResumeCard
            title="React and Node JS Developer"
            subTitle="East West Consulting · Freelance - (Jan 2022 - July 2022)"
            result="Istanbul, Turkey · Remote"
            des="HTML5 · REST APIs · Cascading Style Sheets (CSS) · Node.js · MongoDB · React.js"
          />
          <ResumeCard
            title="Freelancing"
            subTitle="Fiverr,Upwork (2021 - 2022)"
            result="Pakistan"
            des="Mern Stack Developer and Python Developer."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education