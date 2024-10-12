import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AccordionComponent from '../component/AccordionComponent';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import story from "../assets/sucStory.jpeg";
import story2 from "../assets/sucStory2.jpeg";
import image from "../assets/Prof.png";
import todo from "../assets/fireVault.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import restaurant from "../assets/restaurant.jpg";
import question from "../assets/question.gif";
import glorystar from "../assets/glorystar.jpeg";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaCss3Alt,
  FaArrowRightLong,
  FaBriefcase,
  FaUser,
} from "react-icons/fa6";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoFirebase,
  IoLogoWindows,
} from "react-icons/io5";
import { RiTailwindCssFill, RiSettings5Fill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import {
  SiCloudinary,
  SiMongodb,
  SiExpress,
  SiGithubactions,
  SiVisualstudiocode,
  SiVercel,
  SiPostman,
  SiBookstack,
} from "react-icons/si";
import { ImUserTie } from "react-icons/im";
import  AOS from "aos"
import "aos/dist/aos.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const testimonials = [
  {
    id: 1,
    picture: story,
    comment:
      "Promise is both diligent and proactive in our project collaboration. He seamlessly adapted to new technologies, demonstrating a strong willingness to learn and grow.",
    name: "Amao Flourish",
    job: "Web Developer"
  },
  {
    id: 2,
    picture: story2,
    comment:
      "Promise is an outstanding Front End Developer with a keen eye for detail, making sure websites not only look amazing but run smoothly as well. His work went beyond expectations, delivering exceptional quality.",
    name: "Peace Adewale",
    job: "Graphic designer"
  },
  {
    id: 3,
    picture: glorystar,
    comment: "Very creative, innovative and efficient solutions. Great experience!",
    name: "Glorystar International College",
    job: "Management"
  },
];

const Aboutpage = ({ unlockAchievement }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        localStorage.setItem("aboutPageViewed", true);
        checkForSilverAchievement();
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const checkForSilverAchievement = () => {
    const aboutViewed = localStorage.getItem("aboutPageViewed") === "true";
    const projectsViewed = localStorage.getItem("projectsPageViewed") === "true";
  
    if (aboutViewed && projectsViewed) {
      unlockAchievement("scrolledAboutAndProjects");
    }
  };
  

  const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--mainColor').trim();
  const shadowColor7 = getComputedStyle(document.documentElement).getPropertyValue('--shadowColor7').trim();
  const shadowColor4 = getComputedStyle(document.documentElement).getPropertyValue('--shadowColor4').trim();
  // Data for Pie Chart
  const pieData = {
    labels: ['Frontend', 'Backend', 'Design'],
    datasets: [
      {
        data: [50, 30, 20], // Adjust the values to represent your proficiency
        backgroundColor: [mainColor, shadowColor7, shadowColor4],
        hoverBackgroundColor: [mainColor, shadowColor7, shadowColor4],
      },
    ],
  };
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 8000);

    return () => clearTimeout(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  return (
    <div className="aboutpage">
      {/* <---------------CATCHY QUOTE---------------> */}
      <div className="catchy">
        <h1 className="about" data-aos="fade-right">
          About <span>Me</span>
        </h1>
        <h1 className="catchy-intro" data-aos="slide-left">
          <span>
            <FaQuoteLeft />
          </span>
          <b className="quote-shine">
            Transforming visions into digital realities
          </b>
          <span>
            <FaQuoteRight />
          </span>
        </h1>
      </div>

      {/* <---------------MY INTRODUCTION---------------> */}
      <div className="introduction flex flex-col lg:flex-row lg:space-x-6">
        <div className="img lg:w-5/12 w-full" data-aos="fade-right">
          <img className="about-pic" src={image} alt="profile-pic" />
        </div>
        <div className="mt-4 ms-3 lg:w-7/12 w-full mb-4 lg:mb-0" data-aos="fade-left">
          <h1 className="intro-1">Intro!! 😄</h1>
          <p className="body-intro">
            Hey there!👋 <l>I'm</l> <b style={{color: 'var(--mainColor)'}}>Promise Aina</b> from{" "}
            <b style={{color: 'var(--mainColor)'}}>Nigeria</b>, a web developer with{" "}
            <span>3+ years experience</span> who turns <l>creative</l> ideas into
            digital realities 💻. With a passion for technology and an eye for
            design, I build websites that are not only functional but also
            visually stunning ✨.
          </p>
          <p className="body-intro">
            <b className="ms-[100px]">As</b> a MERN Satck developer specializing
            in <i>JavaScript</i>, <i>React</i>, <i>Node.js</i>, and{" "}
            <i>Express.js</i>, I focus on developing scalable backend solutions
            using <i>MongoDB</i>, <i>firebase</i>. My skills include designing
            efficient database schemas, optimizing performance, and ensuring
            data integrity. I excel in creating <i>RESTful APIs</i> with robust
            authentication, authorization, and data validation mechanisms. I
            enable smooth deployment processes and scalability. My experience
            spans various projects, where I have successfully delivered
            high-quality software solutions. Passionate about learning and
            adopting new backend technologies, I enjoy solving complex
            challenges. Let's connect and build outstanding backend systems
            together.
          </p>
        </div>
      </div>

      <hr className="mx-auto line-through mt-5" data-aos="fade-up" />

      {/* <---------SERVICE----------> */}
      <div className="services">
        <h1 className="service-rendered" data-aos="fade-up">SERVICES</h1>
        <h2 className="code" data-aos="fade-up">
          Creating seamless web solutions that captivate users and drive
          results.
        </h2>

        <div className="service-group">
          <div className="serve1 lg:w-4/12 w-full" data-aos="zoom-in">
            <div className="service-icon">
              <ImUserTie />
            </div>
            <h1 className="text-2xl">What I can do for you</h1>
            <p>
              Deliver faster, better products that your users will love. Here
              are the services I provide:
            </p>
            <ul>
              <li>Design Strategy</li>
              <li>Frontend Developer</li>
              <li>Mern Stack Developer</li>
            </ul>
          </div>
          <div className="serve1 lg:w-4/12 w-full" data-aos="zoom-in">
            <div className="service-icon">
              <FaCode />
            </div>
            <h1 className="text-2xl">Applications I'm fluent in</h1>
            <p>
              Every designer needs the right tools to craft the perfect product.
              Thankfully, I'm proficient in multiple platforms:
            </p>
            <ul>
              <li>Vs Code</li>
              <li>Github</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>Postman</li>
            </ul>
          </div>
          <div className="serve1 lg:w-4/12 w-full" data-aos="zoom-in">
            <div className="service-icon">
              <FaUser />
            </div>
            <h1 className="text-2xl">What you can expect</h1>
            <p>
              I design products that go beyond aesthetics—they're shippable and
              usable:
            </p>
            <ul>
              <li>
                Clean and Functional: Intuitive designs that prioritize
                functionality.
              </li>
              <li>
                Device and User Friendly: Seamless experiences across all
                devices.
              </li>
              <li>
                Efficient and Maintainable: Code that is easy to manage and
                scale.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <-----------FEW OF MY PROJECT------------> */}
      <div className="sector-two">
        <div className="div-on">
          <div className="left-line" data-aos="fade-right"></div>
          <h1 className="latest-work" data-aos="fade-up">Few of my Projects</h1>
          <div className="right-line" data-aos="fade-left"></div>
        </div>
        <div className="project-card-group">
          <div className="project-card" data-aos="zoom-in">
            <div className="top-section">
              <img className="about-pics" src={todo} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">KEEP TASK</span>
              <div className="card-info">
              A task management allowing users to securely organize tasks across devices.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, CSS, JS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">Firebase</span>
                </div>
                <div className="item">
                <a href="https://fire-vault.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="big-texts">Explore</span>
                  </a>
                  <a href="https://github.com/Prom-ise/fire-Vault" target="_blank" rel="noopener noreferrer">
                  <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="zoom-in">
            <div className="top-section">
              <img className="about-pics" src={ecommerce} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">PromyShop E-commerce</span>
              <div className="card-info">
              A modern e-commerce platform designed for seamless product browsing
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, CSS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                <a href="https://e-commerce-dun-eight.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="big-texts">Explore</span>
                  </a>
                  <a href="https://github.com/Prom-ise/e-commerce" target="_blank" rel="noopener noreferrer">
                  <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="zoom-in">
            <div className="top-section">
              <img className="about-pics" src={restaurant} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Reservation Restaurant</span>
              <div className="card-info">
              A responsive restaurant engaging user experience for exploring dishes
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, BOOTSTRAP</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                <a href="https://resturant-five-pi.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="big-texts">Explore</span>
                  </a>
                  <a href="https://github.com/Prom-ise/resturant" target="_blank" rel="noopener noreferrer">
                  <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <-----------VIEW PROJECT-----------> */}
        <button className="me-auto" data-aos="fade-right">
          <NavLink to="/projects">
            <span className="view-all">
              View all Project
              <FaArrowRightLong className="arrow mt-1 ms-2" />
            </span>
          </NavLink>
        </button>
      </div>

      <hr className="mx-auto line-through" data-aos="fade-up" />

      {/* <-------------- TOOOLS, SKILLS AND APPLICATION I USE ------------------> */}
      <div className="professionals">
        <h1 className="prof-skill" data-aos="fade-up">
          Professional <span>Skillset</span>
        </h1>
        <div className="skill-group">
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <FaHtml5 className="icon" />
                <div>HTML</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <FaCss3Alt className="icon" />
                <div>CSS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <IoLogoJavascript className="icon" />
                <div>JS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <FaReact className="icon" />
                <div>REACT</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <RiTailwindCssFill className="icon" />
                <div>TAILWIND</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
        <div className="skill-group">
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <div>
                  <FaBootstrap className="icon" />
                </div>
                <div>BOOTSTRAP</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <FaGitAlt className="icon" />
                <div>GIT</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <DiNodejs className="icon" />
                <div>NODE.JS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <SiCloudinary className="icon" />
                <div>CLOUDINARY</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <IoLogoFirebase className="icon" />
                <div>FIREBASE</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
        <div className="skill-group2">
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <div>
                  <SiMongodb className="icon" />
                </div>
                <div>MONGODB</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <SiExpress className="icon" />
                <div>EXPRESS.JS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <RiSettings5Fill className="icon" />
                <div>EJS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="bg">
              <div>
                <SiGithubactions className="icon" />
                <div>GITHUBACTIONS</div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
        {/* <----TOOLS----->  */}
        <h1 className="prof-skill" data-aos="fade-up">
          <span>Tools</span> I use
        </h1>
        <div className="skill-group2">
          <div className="card" data-aos="fade-right">
            <div className="bg">
              <div>
                <IoLogoWindows className="icon" />
                <div></div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="fade-right">
            <div className="bg">
              <div>
                <SiVisualstudiocode className="icon" />
                <div></div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="fade-left">
            <div className="bg">
              <div>
                <SiVercel className="icon" />
                <div></div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card" data-aos="fade-left">
            <div className="bg">
              <div>
                <SiPostman className="icon" />
                <div></div>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
      </div>

      <hr className="mx-auto line-through" data-aos="fade-up" />

      <div className="mt-[4em]">
      <div className="personal-skill" data-aos="fade-up">
      <b>Skill Distribution</b> & <b>Technical Skills</b>
      </div>
      <div className="skills-container mb-[5em] flex flex-wrap">
      {/* Pie Chart Div */}
      <div className="chart-container flex justify-center items-center text-center lg:w-5/12 w-full" data-aos="fade-right">
        <Pie data={pieData} />
      </div>

      {/* Technical Skills Div */}
      <div className="progress-container lg:w-5/12 w-full" data-aos="fade-left">
        <div className="skill-bar" data-aos="slide-left">
          <label>HTML</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '90%' }}>90%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>CSS</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '85%' }}>85%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>JavaScript</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '80%' }}>80%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>React</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '75%' }}>75%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>MongoDB</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '70%' }}>70%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>Tailwind CSS</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '85%' }}>85%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>Bootstrap</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '80%' }}>80%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>Firebase</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '65%' }}>65%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>Node.js</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '70%' }}>70%</div>
          </div>
        </div>
        <div className="skill-bar" data-aos="slide-left">
          <label>Version Control (Git)</label>
          <div className="progress">
            <div className="progress-level" style={{ width: '85%' }}>85%</div>
          </div>
        </div>
      </div>
    </div>
      </div>

    <hr className="mx-auto line-through" data-aos="fade-up" />

      {/* <------------ PERSONAL INFO------------> */}
      <div className="personal-info">
        <div className="personal" data-aos="fade-up">
          <b>Education</b> & <b>Experience</b>
        </div>
        <div className="w-e flex flex-wrap items-center justify-center">
          <div className="Education lg:w-6/12 md:mb-[3em] flex-grow basis-[200]" data-aos="zoom-in">
            <h1 className="edu">
              <span>
                <SiBookstack className="book-icon" />
              </span>
              Education
            </h1>
            <div className="edu-body">
              <h2 className="edu-year text-center">2022</h2>
              <h1 className="edu-topic">
                O LEVEL GRADUATE - KINGS INTERNATIONAL COLLEGE
              </h1>
              <p className="edu-note">
                Graduated from Kings International College with outstanding
                results, ranking among the top students with the best scores and
                achievements.
              </p>
            </div>
            <div className="edu-body mt-9">
              <h2 className="edu-year">2023 - DATE</h2>
              <h1 className="edu-topic">
                UNDER GRADUATE - KWARA STATE UNIVERSITY
              </h1>
              <p className="edu-note">
              I am currently an undergraduate studying Medicine and Surgery at Kwara State University. While my academic focus is on healthcare, I am fully committed to my tech journey. Balancing both fields has only strengthened my ability to manage time effectively, and I ensure that my tech skills remain sharp and up to date alongside my studies.
              </p>
            </div>
          </div>
          <div className="Experience lg:w-6/12 flex-grow basis-[200]" data-aos="zoom-in">
            <h1 className="expe">
              <span>
                <FaBriefcase className="expe-icon" />
              </span>
              Experience
            </h1>
            <div className="edu-body">
              <h2 className="edu-year">2022-2024</h2>
              <h1 className="edu-topic">
              INTERN (FULL STACK WEB DEVELOPER) - SQI
              </h1>
              <p className="edu-note">
              Interned as a full stack web developer at Soft Quest Incorporated (SQI), gaining hands-on experience in various web development technologies and practices. Received a certificate of completion for successfully fulfilling internship requirements.
              </p>
            </div>
            <div className="edu-body mt-9">
              <h2 className="edu-year">2024</h2>
              <h1 className="edu-topic">
              FRONTEND DEVELOPER - GLORYSTAR INTERNATIONAL COLLEGE
              </h1>
              <p className="edu-note">
              Worked as a frontend developer at Glorystar International College for two months, contributing to various frontend development tasks. Received a certificate with outstanding remarks upon successful completion of the role.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto line-through" data-aos="fade-up"/>

      {/* <----------------REVIEWS-----------------> */}
      <div className="reviews" data-aos="fade-in">
        <h1 className="success-stories" data-aos="slide-right">Success Stories</h1>
        <h2 className="client-thought text-3xl ms-[1.1em]" data-aos="slide-right">Here's what my clients say about me</h2>

        <div className="flex items-center justify-center">
        <div className="carousel-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${index === current ? "active" : ""}`}
            >
              <div className="carous flex gap-4 justify-between items-center">
                <div className="lg:w-6/12 flex-grow basis-[200] client-picture" data-aos="fade-right">
                  <img
                    src={testimonial.picture}
                    alt={`${testimonial.name} picture`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="lg:w-6/12 flex-grow basis-[200] client-comment mt-[-1.5em]" data-aos="fade-left">
                <div className="text-4xl" style={{color: "var(--mainColor)"}}><FaQuoteLeft /></div>
                  <p>{testimonial.comment}</p>
                  <h4 className="test-name" data-aos="fade-up">- {testimonial.name}</h4>
                  <h5 className="test-job" data-aos="fade-up">{testimonial.job}</h5>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <div>
            <div>
            <button className="prev" onClick={handlePrev}>
            &#10094;
          </button>
            </div>
            <div>
            <button className="next" onClick={handleNext}>
            &#10095;
          </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === current ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* <-------------------FAQ--------------------> */}
      <div className="faqs">
        <div className="flex justify-center items-center">
        <div className="flex items-center" data-aos="fade-up">
        <h1 className="faq">FAQ</h1>
        <div><img src={question} className="quest" alt="" /></div>
        </div>
        </div>
        
        <h2 className="quests mb-[1em] text-4xl text-center" style={{color: "var(--mainColor)"}} data-aos="fade-up">
          Frequently asked Questions
        </h2>
        <AccordionComponent />
      </div>
      <div className="nextPageText !text-center !mt-[-4em]">
  "Thanks for getting to know me! Now, <span className="text-[var(--mainColor)] underline hover:text-[var(--shadowColor7)] cursor-pointer"><NavLink to="/projects">Check out the projects</NavLink></span> I've been working on and see what I can do."
</div>
    </div>
  );
};

export default Aboutpage;
