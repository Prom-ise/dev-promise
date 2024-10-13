import React from "react";
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdCall } from "react-icons/io";
import mail from "../assets/mail.gif";
import  AOS from "aos"
import "aos/dist/aos.css";

const Contactpage = ({ unlockAchievement }) => {
  const [mailSent, setMailSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { firstName, lastName, email, subject, message } = formData;
    
    if (!firstName || !lastName || !email || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    setError('');
  
    try {
      const response = await fetch('https://devpromise-backfolio.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Clear the form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
      unlockAchievement("sentMessage");
      // Show the mail-sent code and start countdown
      setMailSent(true);
      setCountdown(7); // Set countdown to 7 seconds
  
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(interval);
            setMailSent(false); // Hide the mail-sent code after countdown
          }
          return prevCountdown - 1;
        });
      }, 1000);
  
    } catch (error) {
      setError('Error sending email: check your connection and try again');
    }
  };
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  
  return (
    <div className="contact-page lg:px-5">
      <div className="mt-[2.4em] flex flex-wrap justify-between">
        <div className="lg:w-6/12 w-full">
          <h1 className="getIn" data-aos="fade-right">
            Get in <span>touch</span>
          </h1>
          <p data-aos="fade-right">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className="contect-info mt-[1.1em]" data-aos="fade-up" data-aos-delay="200">
            <div className="cont-icon">
              <IoMdMail />
            </div>
            <div className="cont-text">emmanuelpromise456@gmail.com</div>
          </div>
          <div className="contect-info mb-[1em]" data-aos="fade-up" data-aos-delay="250">
            <div className="cont-icon">
              <IoMdCall />
            </div>
            <div className="cont-text">+234 810 065 9398</div>
          </div>
          <div className="getintouch-links">
            <a
              href="https://www.linkedin.com/in/devpromise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="touch-link" data-aos="zoom-in" data-aos-delay="500">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.instagram.com/promise.emmanuel.35110418?igsh=dXo4bWFjaHpvbjh5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="touch-link" data-aos="zoom-in" data-aos-delay="500">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.x.com/Dev_Pr0mise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="touch-link" data-aos="zoom-in" data-aos-delay="500">
                <FaXTwitter />
              </div>
            </a>
          </div>
        </div>

        {mailSent && (
  <div className="mail-sent">
    <div>Messaged sent successfully! ✅</div>
    <img src={mail} alt="mail sent.." />
    <div>Will get back to you within 48 hours</div>
    <div className="countdown">{countdown}</div>
  </div>
)}

        <div className="lg:w-6/12 w-full" data-aos="fade-left">
          <form className="form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
      <div className="flex">
        <div className="textInputWrapper lg:w-6/12 md:w-6/12">
          <label className="label">First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="capitalize !text-[var(--textColor)] focus:outline-none focus:ring-0 border-none textInput"
          />
        </div>
        <div className="textInputWrapper lg:w-6/12 md:w-6/12">
          <label className="label">Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="capitalize !text-[var(--textColor)] focus:outline-none focus:ring-0 border-none textInput"
          />
        </div>
      </div>
      <div className="textInputWrapper">
        <label className="label">Email Address</label>
        <input
          name="email"
          placeholder="Enter your Email address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="lowercase !text-[var(--textColor)] focus:outline-none focus:ring-0 border-none textInput"
        />
      </div>
      <div className="textInputWrapper">
        <label className="label">Your Subject</label>
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="uppercase !text-[var(--textColor)] focus:outline-none focus:ring-0 border-none textInput"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="mt-2 focus:outline-none !text-[var(--textColor)] focus:ring-0 border-none textArea resize-none"
        cols="75"
        rows="6"
      ></textarea>
      <div>
        <button className="hire-btn mt-4" type="submit">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>

          <span className="now">Shoot!</span>
          <span className="play">Submit</span>
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
