import React from 'react'
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title="Core Expertise" des="What I Bring to the Table"/>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>

        <Card
          title="Full-Stack Development"
          des="Building scalable web applications using React, Node.js, and modern architectures with clean, maintainable code."
          icon={<CgWebsite />}
        />

        <Card
          title="Mobile App Development"
          des="Developing cross-platform mobile apps using React Native, Flutter, and Android with focus on performance and user experience."
          icon={<FaMobile />}
        />

        <Card
          title="API & Backend Engineering"
          des="Designing and integrating RESTful APIs, authentication systems, and backend services for scalable applications."
          icon={<SiProgress />}
        />

        <Card
          title="Fintech & Payment Systems"
          des="Hands-on experience integrating M-Pesa Daraja API, building transaction systems, and handling secure payment workflows."
          icon={<FaGlobe />}
        />

        <Card
          title="System Architecture & Databases"
          des="Designing efficient system architectures, managing databases (MySQL, Firebase), and optimizing performance."
          icon={<SiAntdesign />}
        />

        <Card
          title="Deployment & DevOps"
          des="Deploying applications using modern tools like Vercel and Firebase, with CI/CD practices and version control via Git."
          icon={<FaGlobe />}
        />

      </div>
    </section>
  )
}

export default Features