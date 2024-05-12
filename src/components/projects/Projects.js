import React from 'react'
import { projectOne, projectTwo, projectThree, payroll } from "../../assets/index";
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <section 
    id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'>
       <div className='flex justify-center items-center'>
            <Title
                title="VISIT MY PORTFOLIO AND SEND YOUR FEEDBACK"
                des="My Projects"
            />
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Advertising Websites"
          des="Design and develop responsive advertising web applications with interactive features, optimized 
          for SEO, performance and analytics tracking."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce mobile Apps"
          des=" Create an intuitive e-commerce mobile application with seamless navigation, secure transaction
           personalized recommendations and efficient order management."
          src={projectTwo}
        />
        <ProjectsCard
          title="E-commerce websites"
          des="Craft dynamic e-commerce websites featuring user-friendly interfaces, secure payment gateways,
          product catalogs and seamless checkout experience for optimal customer satisfaction."
          src={projectThree}
        />
        <ProjectsCard
          title="Portfolio websites"
          des=" Develop captivating websites showcasing projects with elegant design, intuitive navigation and
          responsive layouts for a memorable user experience."
          src={projectThree}
        />
        <ProjectsCard
          title="Management systems"
          des="Create management website systems with intuitive interfaces, comprehensive features and secure
           data management for streamlined organizational operations."
          src={payroll}
        />
        <ProjectsCard
          title="Inventoty management Apps"
          des="Design inventory management apps with user-friendly interface, real-time tracking, barcode
           scanning and reporting functionalities for efficient inventory control."
          src={projectTwo}
        />
      </div>
    </section>
  )
}

export default Projects