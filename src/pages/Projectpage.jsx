import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import project from "../assets/project.gif";
import todoList from "../assets/todoList.jpg";
import todo2 from "../assets/todo2.jpg";
import todo3 from "../assets/todo3.jpg";
import todo4 from "../assets/todo4.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import tictac2 from "../assets/tictac2.jpg";
import tictac3 from "../assets/tictac3.jpg";
import blockVault from "../assets/blockvault.jpg";
import blockVault2 from "../assets/blockVault2.jpg";
import color from "../assets/colorpicker.jpg";
import color2 from "../assets/colorpicker2.jpg";
import rest1 from "../assets/restaurant.jpg";
import rest2 from "../assets/rest2.jpg";
import rest3 from "../assets/rest3.jpg";
import rest4 from "../assets/rest4.jpg";
import rest5 from "../assets/rest5.jpg";
import comm from "../assets/e-commerce.jpg";
import comm2 from "../assets/comm2.jpg";
import comm3 from "../assets/comm3.jpg";
import comm4 from "../assets/comm4.jpg";
import calc from "../assets/calculator.jpg";
import calc2 from "../assets/calculator2.jpg";
import firevault from "../assets/fireVault.jpg";
import firevault2 from "../assets/fireVault2.jpg";
import weather from "../assets/weather.jpg";
import weather2 from "../assets/weather2.jpg";
import weather3 from "../assets/weather3.jpg";
import weather4 from "../assets/weather4.jpg";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpg";
import country from "../assets/country.jpg";
import edo from "../assets/edo.jpg";
import expo from "../assets/expo.jpg";
import love from "../assets/love.jpg";
import vanlife from "../assets/vanlife.jpg";
import vigma from "../assets/vigma.jpg";
import zion from "../assets/zion.jpg";
import webdev from "../assets/webdev.jpg";
import grade from "../assets/grade.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const project1 = [
  {
    id: 1,
    picture: blockVault,
    name: "Block Vault",
  },
  {
    id: 2,
    picture: blockVault2,
    name: "Block Vault",
  },
  {
    id: 3,
    picture: blockVault,
    name: "Block Vault",
  },
  {
    id: 4,
    picture: blockVault2,
    name: "Block Vault",
  },
];
const project2 = [
  {
    id: 1,
    picture: color,
    name: "Block Vault",
  },
  {
    id: 2,
    picture: color2,
    name: "Block Vault",
  },
  {
    id: 3,
    picture: color,
    name: "Block Vault",
  },
  {
    id: 4,
    picture: color2,
    name: "Block Vault",
  },
];
const project3 = [
  {
    id: 1,
    picture: rest1,
    name: "Restaurant",
  },
  {
    id: 2,
    picture: rest2,
    name: "Restaurant",
  },
  {
    id: 3,
    picture: rest3,
    name: "Restaurant",
  },
  {
    id: 4,
    picture: rest4,
    name: "Restaurant",
  },
  {
    id: 5,
    picture: rest5,
    name: "Restaurant",
  },
];
const project4 = [
  {
    id: 1,
    picture: firevault,
    name: "Fire Vault",
  },
  {
    id: 2,
    picture: firevault2,
    name: "Fire Vault",
  },
  {
    id: 3,
    picture: firevault,
    name: "Fire Vault",
  },
  {
    id: 4,
    picture: firevault2,
    name: "Fire Vault",
  },
];
const project5 = [
  {
    id: 1,
    picture: tictactoe,
    name: "TicTacToe Game",
  },
  {
    id: 2,
    picture: tictac2,
    name: "TicTacToe Game",
  },
  {
    id: 3,
    picture: tictac3,
    name: "TicTacToe Game",
  },
  {
    id: 4,
    picture: tictac3,
    name: "TicTacToe Game",
  },
];
const project6 = [
  {
    id: 1,
    picture: comm,
    name: "E-commerce Website",
  },
  {
    id: 2,
    picture: comm2,
    name: "E-commerce Website",
  },
  {
    id: 3,
    picture: comm3,
    name: "E-commerce Website",
  },
  {
    id: 4,
    picture: comm4,
    name: "E-commerce Website",
  },
];
const project7 = [
  {
    id: 1,
    picture: calc,
    name: "Calculator Application",
  },
  {
    id: 2,
    picture: calc2,
    name: "Calculator Application",
  },
  {
    id: 3,
    picture: calc,
    name: "Calculator Application",
  },
  {
    id: 4,
    picture: calc2,
    name: "Calculator Application",
  },
];
const project8 = [
  {
    id: 1,
    picture: port1,
    name: "Portfolio",
  },
  {
    id: 2,
    picture: port2,
    name: "Portfolio",
  },
  {
    id: 3,
    picture: port3,
    name: "Portfolio",
  },
  {
    id: 4,
    picture: port4,
    name: "Portfolio",
  },
];
const project9 = [
  {
    id: 1,
    picture: weather,
    name: "Weather Application",
  },
  {
    id: 2,
    picture: weather2,
    name: "Weather Application",
  },
  {
    id: 3,
    picture: weather3,
    name: "Weather Application",
  },
  {
    id: 4,
    picture: weather4,
    name: "Weather Application",
  },
];
const project10 = [
  {
    id: 1,
    picture: todoList,
    name: "TODO LIST APP",
  },
  {
    id: 2,
    picture: todo2,
    name: "TODO LIST APP",
  },
  {
    id: 3,
    picture: todo3,
    name: "TODO LIST APP",
  },
  {
    id: 4,
    picture: todo4,
    name: "TODO LIST APP",
  },
];
const Projectpage = ({ unlockAchievement }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        localStorage.setItem("projectsPageViewed", true);
        checkForSilverAchievement();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkForSilverAchievement = () => {
    const aboutViewed = localStorage.getItem("aboutPageViewed") === "true";
    const projectsViewed =
      localStorage.getItem("projectsPageViewed") === "true";

    if (aboutViewed && projectsViewed) {
      unlockAchievement("scrolledAboutAndProjects");
    }
  };

  const handleProjectLinkClick = () => {
    unlockAchievement("visitedProjectLinks");
  };

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);
  const handleNext = () => {
    setCurrent((prev) => (prev === project1.length - 1 ? 0 : prev + 1));
  };
  const goToSlide = (index) => {
    setCurrent(index);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="projects">
      <div className="project" data-aos="fade-in">
        <div data-aos="fade-right" data-aos-delay="300">
          <div className="project-text">Project</div>
          <div className="project-info">Here are my completed projects.</div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <img src={project} className="project-images" alt="" />
        </div>
      </div>
      <div
        className="pro-ject flex flex-wrap items-center justify-center"
        data-aos="fade-left"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Block Vault</h1>
          <p className="project-infom">
            This is a site for documents manager, I was inspired by a design I
            found on Figma so I decided to try it out.
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://block-vault-mu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/BlockVault"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project1.map((project1, index) => (
            <div
              key={project1.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-imgs">
                <img
                  src={project1.picture}
                  alt={`${project1.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-jects flex flex-wrap items-center justify-between"
        data-aos="fade-right"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Color Picker</h1>
          <p className="project-infom">
            A dynamic color picker tool that allows users to select, customize,
            and apply colors effortlessly. Designed to enhance user experience
            with an intuitive interface and seamless integration into various
            projects.
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://color-picker-three-ruddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/Color-Picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project2.map((project2, index) => (
            <div
              key={project2.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project2.picture}
                  alt={`${project2.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-ject flex flex-wrap items-center justify-center"
        data-aos="fade-left"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Promsy Food Restaurant</h1>
          <p className="project-infom">
            A responsive restaurant website featuring interactive menus,
            reservation capabilities, and an engaging user experience for
            exploring dishes and special offers.
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://resturant-five-pi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/resturant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project3.map((project3, index) => (
            <div
              key={project3.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project3.picture}
                  alt={`${project3.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-jects flex flex-wrap items-center justify-center"
        data-aos="fade-right"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Keep Tasks</h1>
          <p className="project-infom">
            A task management application integrated with Firebase, allowing
            users to securely create, update, and organize tasks across devices.
          </p>
          <ul className="list flex gap-[2em]">
            <div>
              <li>HtML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </div>
            <div>
              <li>FIREBASE</li>
              <li>BOOTSTRAP</li>
            </div>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://fire-vault.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/fire-Vault"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project4.map((project4, index) => (
            <div
              key={project4.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project4.picture}
                  alt={`${project4.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-ject flex flex-wrap items-center justify-center"
        data-aos="fade-left"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Tic-Tac-Toe Game</h1>
          <p className="project-infom">
            An interactive and engaging web-based Tic-Tac-Toe game featuring
            smart AI for competitive play and a polished user interface for a
            fun gaming experience
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>BOOTSTRAP</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://tictactoe-max.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/TicTacToe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project5.map((project5, index) => (
            <div
              key={project5.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project5.picture}
                  alt={`${project5.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-jects flex flex-wrap items-center justify-center"
        data-aos="fade-right"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Calculator Application</h1>
          <p className="project-infom">
            An advanced calculator capable of performing basic arithmetic
            operations as well as more complex calculations such as squares,
            square roots, trigonometric functions (tan, cos, sin), and
            percentages, all in an easy-to-use interface.
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>BOOTSTRAP</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://calculator-xupn.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                  onClick={handleProjectLinkClick}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project7.map((project7, index) => (
            <div
              key={project7.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project7.picture}
                  alt={`${project7.name} picture`}
                  className="project-imgs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-ject flex flex-wrap items-center justify-center"
        data-aos="fade-left"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">E-commerce Web</h1>
          <p className="project-infom">
            A modern e-commerce platform designed for seamless product browsing,
            secure checkout, and easy management with responsive design and
            real-time functionality.
          </p>
          <ul className="list">
            <li>HtML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://e-commerce-dun-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/e-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project6.map((project6, index) => (
            <div
              key={project6.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project6.picture}
                  alt={`${project6.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-jects flex flex-wrap items-center justify-center"
        data-aos="fade-right"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Portfolio</h1>
          <p className="project-infom">
            A professional showcase of projects and skills, built with a modern
            and responsive design, demonstrating a range of web development
            capabilities including interactive elements and theme management.
          </p>
          <ul className="list">
            <li>REACT</li>
            <li>SCSS</li>
            <li>TAILWIND CSS</li>
            <li>NODE JS</li>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://dev-promise.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/dev-promise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project8.map((project8, index) => (
            <div
              key={project8.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project8.picture}
                  alt={`${project8.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-ject flex flex-wrap items-center justify-center"
        data-aos="fade-left"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">Weather Checker Site</h1>
          <p className="project-infom">
            A dynamic weather application that fetches real-time weather data
            based on both user location and manually entered locations. It
            provides current conditions and forecasts in a clear and
            user-friendly interface, making it easy to check weather details
            anytime, anywhere.
          </p>
          <ul className="list flex gap-[2em]">
            <div>
              <li>HtML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </div>
            <div>
              <li>BOOTSTRAP</li>
              <li>API</li>
            </div>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://weather-app-henna-delta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/Weather-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project9.map((project9, index) => (
            <div
              key={project9.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-imgs">
                <img
                  src={project9.picture}
                  alt={`${project9.name} picture`}
                  className="project-imge"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="pro-jects flex flex-wrap items-center justify-center"
        data-aos="fade-right"
      >
        <div className="space-up lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          <h1 className="project-name">TODO-LIST APPLICATION</h1>
          <p className="project-infom">
            A powerful todo list application with features such as task
            creation, editing, completion tracking, and user authentication. It
            integrates Firebase for secure data storage and synchronization
            across devices.
          </p>
          <ul className="list flex gap-[2em]">
            <div>
              <li>REACT</li>
              <li>SCSS</li>
              <li>TAILWIND CSS</li>
              <li>NODE JS</li>
            </div>
            <div>
              <li>MONGO DB</li>
              <li>API</li>
              <li>FIREBASE</li>
            </div>
          </ul>
          <div className="flex gap-[1em] items-center mt-3">
            <div>
              <a
                href="https://todolist-client-0nr0.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-[var(--textColor)] text-lg bg-black-500 backdrop-blur-md lg:font-semibold isolation-auto border-[var(--mainColor)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--mainColor)] hover:text-[var(--textColor)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  style={{ borderColor: "var(--mainColor)" }}
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-red-50 text-red-50 ease-linear duration-300 rounded-full border border-[var(--mainColor)] group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-[var(--mainColor)] group-hover:fill-[var(--mainColor)]"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Prom-ise/todoList-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="git-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="git-text">View Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-6/12 flex-grow basis-[200]">
          {project10.map((project10, index) => (
            <div
              key={project10.id}
              className={`project-carousel ${
                index === current ? "active" : ""
              }`}
            >
              <div className="pro-img">
                <img
                  src={project10.picture}
                  alt={`${project10.name} picture`}
                  className="project-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          className="text-2xl mt-[4em] mb-[1em] text-[var(--mainColor)]"
          data-aos="fade-right"
        >
          Other Projects
        </div>
        <div className="project-card-group mb-[3em]">
          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="top-section">
              <img className="about-picture" src={country} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Fun Facts and Population</span>
              <div className="card-info">
                Explore population data and fun facts about every country
                worldwide.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, CSS, JS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://country-s-data.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/Country-s-Data"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="top-section">
              <img className="about-picture" src={webdev} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Web Dev Portfolio</span>
              <div className="card-info">
                A sleek landing page design portfolio for aspiring web
                developers.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, SCSS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://web-portfolio-prototype.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/web-portfolio-prototype"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="top-section">
              <img className="about-picture" src={edo} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">School Management System</span>
              <div className="card-info">
                A modern landing page for a comprehensive school management
                system.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, SCSS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://my-ca-test-1.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/My-CA-TEST-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card-group my-[3em]">
          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="top-section">
              <img className="about-picture" src={love} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Love Calculator</span>
              <div className="card-info">
                Calculate love compatibility by inputting two names for a fun
                percentage result.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">HTML, CSS, JS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://love-calculator-rose.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/love-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="top-section">
              <img className="about-picture" src={zion} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Zion Graphics</span>
              <div className="card-info">
                A business management site tailored for a graphic designer.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">REACT, CSS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://zion-graphics.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/Zion-Graphics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="top-section">
              <img className="about-picture" src={grade} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Grading System</span>
              <div className="card-info">
                A simple, straightforward online grading system.
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
                  <a
                    href="https://grading-score.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/Grading-Score"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card-group my-[3em]">
          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="top-section">
              <img className="about-picture" src={vanlife} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Travel Van Site</span>
              <div className="card-info">
                A travel van site based on a Figma design.
              </div>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">Frontend</span>
                  <span className="regular-text">REACT, CSS</span>
                </div>
                <div className="item">
                  <span className="big-text">Backend</span>
                  <span className="regular-text">-</span>
                </div>
                <div className="item">
                  <a
                    href="https://vanlife-rct.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/vanlife-rct"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="top-section">
              <img className="about-picture" src={expo} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">Ibadan Tech Expo Landing Page</span>
              <div className="card-info">
                A stylish landing page for the Ibadan Tech Expo event.
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
                  <a
                    href="https://ibadan-tech-expo-psi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/ibadan-tech-expo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projects-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="top-section">
              <img className="about-picture" src={vigma} alt="profile-pic" />
            </div>
            <div className="bottom-section">
              <span className="title">House Environment Management</span>
              <div className="card-info">
                A site built from a Figma design for managing home environments.
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
                  <a
                    href="https://project-1-0-eight.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="big-texts">Explore</span>
                  </a>
                  <a
                    href="https://github.com/Prom-ise/Project-1.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="regular-texts">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nextPageText !mb-[-2em] !mt-[1em]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        "Impressed with what you see? Let's collaborate or discuss how I can
        help with your next project.{" "}
        <span className="text-[var(--mainColor)] underline hover:text-[var(--shadowColor7)] cursor-pointer">
          <NavLink to="/contact">Get in touch</NavLink>
        </span>{" "}
        and let's make something great together!"
      </div>
    </div>
  );
};

export default Projectpage;
