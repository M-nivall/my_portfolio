import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Title from "./components/layouts/Title";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar/>
      <div className="max-w-sceen-xl max-auto px-16">
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
