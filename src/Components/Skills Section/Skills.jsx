import React from 'react'
import './skills.css'
import { TbBrandReact } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section id="skills" className='skills container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        
        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">
              1 Year Experience
            </span>
            </div>

            <div className="generalSkills">
          <div className="singleSkill">
            <div className="iconBox flex">
              <TbBrandReact className='icon' />
            </div>
            <span className="skillName">React</span>
          </div>

          <div className="singleSkill">
            <div className="iconBox flex">
              <IoLogoJavascript className='icon' />
            </div>
            <span className="skillName">JavaScript</span>
          </div>

          <div className="singleSkill">
            <div className="iconBox flex">
              <IoLogoSass className="icon" />
            </div>
            <span className="skillName">Sass</span>
          </div>

          <div className="singleSkill">
            <div className="iconBox flex">
              <SiCss3 className='icon'/>
            </div>
            <span className="skillName">CSS</span>
          </div>

          <div className="singleSkill">
            <div className="iconBox flex">
              <FaHtml5 className='icon' />
            </div>
            <span className="skillName">HTML</span>
          </div>
        </div>
        </div>


        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle">
              1 Year Experience
            </span>
            </div>

            <div className="generalSkills">
          <div className="singleSkill">
            <div className="iconBox flex">
              <CgFigma  className='icon'/>
            </div>
            <span className="skillName">Figma</span>
          </div>   
        </div>
        </div>


        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">
              1 Year Experience
            </span>
            </div>

            <div className="generalSkills">
          <div className="singleSkill">
            <div className="iconBox flex">
            <FaGitAlt className='icon' />
            </div>
            <span className="skillName">Git</span>
          </div>   

            <div className="generalSkills">
          <div className="singleSkill">
            <div className="iconBox flex">
              <FaGithub className='icon' />
            </div>
            <span className="skillName">Github</span>
          </div>   
        </div>
        </div>
        </div>
      
      
      
      
      
      
      
      
      
      
      </div>

    </section>
  )
}

export default SkillsSection
