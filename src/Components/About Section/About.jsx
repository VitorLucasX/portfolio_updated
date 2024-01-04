import React from 'react'
import './about.css'
import { TbCloudDownload } from "react-icons/tb";
import imagem from '../../Assets/profile.png';

const About = () => {
  return (
    <section id="about" className='about section container'>
      
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          Systems Analysis and Development - Faculdade Pitágoras<br/>
          I constantly seek to expand my knowledge and skills
          in all front-end languages ​​and documentation. Creation
          of responsive landing pages, api integration,
          versioning with git and styling with UX Design,
          Figma and Sass.
          </h4>

          <div className="aboutBtn">
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1vXbXHgYss5iM1N_i-epqDkdKh5IU2OHH&export=download" className="flex">
              Download CV <TbCloudDownload className="icon"/>
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={imagem} alt="Vitor Lucas" className="aboutImg" />
        </div>

        
      </div>
      </section>
  )
}

export default About
