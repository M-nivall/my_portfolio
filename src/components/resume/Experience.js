import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* JOB EXPERIENCE */}
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="IT Officer & Mobile App Developer"
            subTitle="Nobel Lending Limited (Jan 2026 - Present)"
            result="Nairobi"
            des="Developing and maintaining a production mobile lending application for loan origination and repayment tracking. Integrated M-Pesa API for seamless payments, improved system uptime, and implemented performance and security enhancements."
          />

          <ResumeCard
            title="Software Developer (Contract)"
            subTitle="Veriscore Limited (Sep 2025 - Jan 2026)"
            result="Remote"
            des="Co-developed a real-time credit scoring engine with optimized backend logic and database performance. Contributed to scalable system architecture and API integrations for fast financial risk evaluation."
          />

          <ResumeCard
            title="Freelance Full-Stack Developer"
            subTitle="Self-Employed (2020 - Present)"
            result="Nairobi"
            des="Built and deployed 10+ applications across fintech, healthcare, e-commerce, and booking systems. Managed full project lifecycle including design, development, deployment, and client support."
          />

          <ResumeCard
            title="System Administrator Intern"
            subTitle="Kakamega County Revenue Agency (2023 - 2024)"
            result="Kakamega"
            des="Supported IT infrastructure including servers, networks, and databases. Handled system maintenance, backups, security, and technical support for staff."
          />
        </div>
      </div>

      {/* TRAINING / EDUCATION */}
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Training</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="BSc. Computer Information Systems"
            subTitle="Kenya Methodist University (2021 - 2024)"
            result="KeMU"
            des="Graduated with Second Class Honours (Upper Division). Gained strong foundation in software development, databases, and system architecture."
          />

          <ResumeCard
            title="Programming Certifications"
            subTitle="Cisco Networking Academy"
            result="Online"
            des="Completed certifications in Python, JavaScript, and C++, strengthening core programming and problem-solving skills."
          />

          <ResumeCard
            title="Web Development Training"
            subTitle="Apple Developer Program (2023)"
            result="Online"
            des="Completed training on modern web development using React, focusing on building responsive and scalable user interfaces."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;