import React from 'react'
import './projects.css'
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.png'
import img4 from '../../Assets/img4.png'
import img5 from '../../Assets/img5.png'
import img6 from '../../Assets/img6.png'
import img7 from '../../Assets/img7.png'
import { FaGithub } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

const data = [
  {
    id: 1,
    image: img1,
    github: 'https://github.com/VitorLucasX/trevor_packages_react',
    demo: 'https://trevor-packages-react.vercel.app/',
    title: 'Trips',
    desc: 'Website developed to filter trips according to the customers suggested price',
    tech1: 'Html',
    tech2: 'Scss',
    tech3: 'JavaScript',
    tech4: 'ReactJs',
  },
  {
    id: 2,
    image: img2,
    github: 'https://github.com/VitorLucasX/trevor_dreams_react',
    demo: 'https://trevor-dreams-react.vercel.app/',
    title: 'Trevor Dreams',
    desc: 'Dream travel package website',
    tech1: 'Html',
    tech2: 'ReactJS',
    tech3: 'JavaScript',
    tech4: 'Scss',
  },
  {
    id: 3,
    image: img3,
    github: 'https://github.com/VitorLucasX/galaxy_gallery_react',
    demo: 'https://galaxy-gallery-react.vercel.app/',
    title: 'Galaxy Gallery',
    desc: 'Galaxy image gallery with user filtering option',
    tech1: 'Html',
    tech2: 'ReactJS',
    tech3: 'StyledComponents',
    tech4: 'Scss',
  },
  {
    id: 4,
    image: img4,
    github: 'https://github.com/VitorLucasX/cinetag_react_sass_api',
    demo: 'https://cinetag-react-sass-api.vercel.app/',
    title: 'Cinetag',
    desc: 'Film catalog with the option to favorite, unfavorite and watch trailers.',
    tech1: 'Html',
    tech2: 'Scss',
    tech3: 'JavaScript',
    tech4: 'ReactJs',
  },
  {
    id: 5,
    image: img5,
    github: 'https://github.com/VitorLucasX/work_with_us_pizzaria_react',
    demo: 'https://work-with-us-pizzaria-react-gusq.vercel.app/',
    title: 'Work With Us',
    desc: 'Employee registration form for the selection process.',
    tech1: 'Html',
    tech2: 'Scss',
    tech3: 'JavaScript',
    tech4: 'ReactJs',
  },
  {
    id: 6,
    image: img6,
    github: 'https://github.com/VitorLucasX/pomodoro_react_typescript_sass',
    demo: 'https://pomodoro-react-typescript-sass.vercel.app/',
    title: 'Pomodoro',
    desc: 'Pomodoro with option to pause, start and rest. Used for studies and work.',
    tech1: 'Html',
    tech2: 'Scss',
    tech3: 'Typescript',
    tech4: 'ReactJs',
  },
  {
    id: 7,
    image: img7,
    github: 'https://github.com/VitorLucasX/finance_control_react_sass',
    demo: 'https://finance-control-react-sass.vercel.app/',
    title: 'Finance Control',
    desc: 'Used to control all your daily purchases.',
    tech1: 'Html',
    tech2: 'Scss',
    tech3: 'JavaScript',
    tech4: 'ReactJs',
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className='projects container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({id, demo, github, image, desc, title, tech1, tech2, 
          tech3, tech4}) => {
            return (
              <div key={id} className="singleProject">
                  <div className="externalLinks flex">
                      <div className="githubIcon">
                        <a href={github} target='_blank'>
                            <FaGithub className='icon'/>
                        </a>
                      </div>
                      <div className="demoIcon">
                        <a href={demo} target='_blank'>
                          <FaDisplay className='icon' />
                        </a>
                      </div>
                  </div>

                  <div className="imgDiv">
                    <a href={demo} target='_blank'>
                      <img src={image} alt={title} />
                    </a>
                  </div>

                  <div className="projectTitle">
                    <h3>{title}</h3>
                  </div>

                  <div className="desc">
                    {desc}
                  </div>

                  <div className="technologies flex">
                    <small>{tech1}</small>
                    <small>{tech2}</small>
                    <small>{tech3}</small>
                    <small>{tech4}</small>
                  </div>
              </div>
            )
          })
        }
      </div>


      </section>
  )
}

export default ProjectsSection
