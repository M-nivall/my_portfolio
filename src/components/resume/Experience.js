import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
      className="w-full font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="kakamega Revenue Agency - (2023-2024)"
            result="Kakamega"
            des="Worked as a sofware enginner at Kakamega Revenue Agency. Designed and developed an advertising
             website for the Agency."
          />
          <ResumeCard
            title="Network Admin"
            subTitle="Kakamega Revenue Agency - (2023 - 2024)"
            result="Kakamega"
            des="Also worked as a Network Admin at Kakamega Revenue Agency whereby I was responsible for network configuration 
            and maintenance."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mobile App Development"
            subTitle="Kenya Methodist University (2021-2024)"
            result="KeMU"
            des="Attended an Innovators Club bootcamp workshop for mobile app development at Kenya Mehodist University."
          />
          <ResumeCard
            title="Web Development"
            subTitle="Apple Developer Team - (2023)"
            result="CANADA"
            des="Attended an online workshop for web application using react framework for fronted development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
