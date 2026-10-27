import React from 'react';
import { motion } from "framer-motion";

// ---- Edit your skills here. Levels are percentages (0-100). ----
const developmentSkills = [
  { name: "React & Next.js", level: 98 },
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "Node.js & Express", level: 85 },
  { name: "PHP & Laravel", level: 88 },
  { name: "React Native & Flutter", level: 90 },
  { name: "Java (Android)", level: 98 },
  { name: "C# / .NET", level: 85 },
  { name: "Python", level: 80 },
];

const engineeringSkills = [
  { name: "REST API Design & Integration", level: 92 },
  { name: "Payment Integration (M-Pesa Daraja)", level: 90 },
  { name: "eTIMS Integration (KRA)", level: 80 },
  { name: "SasaPay Integration", level: 85 },
  { name: "Database Design (SQL & NoSQL)", level: 88 },
  { name: "Git Workflow & Code Review", level: 88 },
  { name: "Multi-Tenant & RBAC Architecture", level: 80 },
  { name: "Technical Documentation", level: 80 },
];

const tools = [
  "Tailwind CSS", "Angular", "ASP.NET Core", "MySQL", "PostgreSQL", "MongoDB",
  "Firebase", "Redis", "GraphQL", "Docker", "GitHub Actions", "CI/CD",
  "Vercel", "Postman", "Jest", "Cypress", "Visual Studio Code", "Visual Studio", "Android Studio",
];

const SkillBar = ({ name, level }) => (
  <div className="overflow-x-hidden">
    <p className='text-sm uppercase font-medium'>{name}</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
      >
        <span className='absolute -top-7 right-0'>{level}%</span>
      </motion.span>
    </span>
  </div>
);

const SkillColumn = ({ label, title, skills }) => (
  <div className='w-full lgl:w-1/2'>
    <div className='font-titleFont flex flex-col gap-4'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>{label}</p>
      <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
    </div>
    <div className='mt-14 w-full flex flex-col gap-5'>
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-12 font-titleFont flex flex-col gap-14'
    >
      <div className='flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
        <SkillColumn label="Core Stack" title="Development Skills" skills={developmentSkills} />
        <SkillColumn label="How I Build" title="Engineering Skills" skills={engineeringSkills} />
      </div>

      <div>
        <div className='font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>Also Working With</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Tools & Technologies</h2>
        </div>
        <div className='mt-8 flex flex-wrap gap-3'>
          {tools.map((tool) => (
            <span
              key={tool}
              className='text-sm border border-gray-600 rounded-md px-3 py-1 hover:border-designColor duration-300'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills
