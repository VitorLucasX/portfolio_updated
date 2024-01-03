import React, { useRef } from 'react'
import './contact.css'
import { BsInstagram } from 'react-icons/bs'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_br1bjau', 'template_9h3z5dq', form.current, 'IjeZoqnCM-fDZN9lW')
    e.target.reset()
  };

  return (
    <section id="contact" className='contact section container'>
      
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contact
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon"/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                  @vitor.lucasz
              </span>

              <div>
                <a href="https://www.instagram.com/vitor.lucasz/" className='flex' target='_blank'>
                  Send Message
                  <TbArrowBigRightLinesFilled className='icon' />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
              <FaLinkedin className='icon' />
              </div>
              <h4>Linkedin</h4>
              <span className="userName">
                  @vitor-araujodev
              </span>

              <div>
                <a href="https://www.linkedin.com/in/vitor-araujodev/" className='flex' target='_blank'>
                  Send Message
                  <TbArrowBigRightLinesFilled className='icon' />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
              <FaWhatsapp className='icon'/>
              </div>
              <h4>Whatsapp</h4>
              <span className="userName">
                  (31) 9-9672-9996
              </span>

              <div>
                <a href="https://wa.me/5531996729996" className='flex' target='_blank'>
                  Send Message
                  <TbArrowBigRightLinesFilled className='icon' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
            <h3>Send me an email</h3>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Enter your Name' name='name' />
                <input type="email" placeholder='Enter your Email' name='email' />
                <textarea name="message" cols="30" rows="10" 
                placeholder='Enter your message'></textarea>
                <button className="formBtn" type='submit' name='submit'>
                    Send Email
                </button>
            </form>
        </div>
      </div>

    </section>
  )
}

export default Contact
