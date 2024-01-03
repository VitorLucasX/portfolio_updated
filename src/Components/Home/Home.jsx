import React from 'react'
import './home.css'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";

const HomeSection = () => {
  return (
    <section id="home" className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
        <a href="https://github.com/VitorLucasX" target='_blank'>
          <FaGithub className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/vitor-araujodev/" target='_blank'>
        <FaLinkedinIn className="icon"/>
        </a>
        <a href="https://www.instagram.com/vitor.lucasz/" target='_blank'>
        <FaInstagram className="icon"/>
        </a>
        <div className="line"></div>
      </div>
        </div>

      <div className="container homeContainer">
        <span className="introText">Hi my name is,</span>

        <h1 className="title">Vitor Lucas</h1>
        
        <span className="subTitle">
        I develop responsive websites
        </span>

        <p className="homeParagraph">
          I code within required coding standars and
          styles to serve the exact need
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className='icon' />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6> 
              <FiChevronsDown className='icon' />
            </a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className="emailAdress">
            <a href="https://mailto:vitorlucasdev@gmail.com"
             target='_blank'>
              vitorlucasdev@gmail.com
             </a>
          </div>

          <div className="line"></div>
        </div>
    </div>
    </section>
  )
}

export default HomeSection
