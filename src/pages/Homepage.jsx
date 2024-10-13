import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload, FaEye } from "react-icons/fa";
import Typewriter from "../component/Typewriter";
import ProfileImg from "../assets/profileImg.png";
import anime from "../assets/animate.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  const texts = ["I'm Promise Aina...", "I'm a web developer"];
  const [repoCount, setRepoCount] = useState(0);
  const username = "Prom-ise";

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const adjustedRepoCount = Math.max(data.public_repos - 2, 0);
        setRepoCount(adjustedRepoCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRepoCount();
  }, [username]);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="homepage">
      <div>
        <div className="section-one flex flex-col lg:flex-row md:flex-row md:space-x-6 items-center lg:space-x-6">
          <div className="typed-section div-one ms-3 lg:w-6/12 w-full mb-4 lg:mb-0">
            <div
              className="intro"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Hi,
              <Typewriter
                texts={texts}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={1000}
              />
            </div>
            <h1
              className="devs"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Full Stack Developer
            </h1>
            <div
              className="short-intro"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              I'm a Nigerian-based dedicated{" "}
              <b style={{ color: "var(--mainColor)" }} className="">
                web developer
              </b>{" "}
              with a passion for crafting seamless digital experiences. From
              designing intuitive user interfaces to implementing robust backend
              solutions, I thrive on transforming ideas into functional and
              visually appealing websites.
            </div>
            <div
              className="linkGroup"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              <a
                href="https://www.linkedin.com/in/devpromise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="LinkedinBtn">
                  <span className="svgContainer">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                  <span className="BG"></span>
                </button>
              </a>

              <a
                href="https://www.x.com/Dev_Pr0mise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="LinkedinBtn">
                  <span className="svgContainer">
                    <svg
                      viewBox="0 0 512 512"
                      height="1.7em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svgIcon"
                      fill="black"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                  </span>
                  <span className="BG"></span>
                </button>
              </a>

              <a
                href="https://github.com/Prom-ise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="LinkedinBtn">
                  <span className="svgContainer">
                    <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </span>
                  <span className="BG"></span>
                </button>
              </a>
            </div>
            <div
              className="info-button"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="flex gap-2">
                <a
                  href="/myResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cv-btn" type="button">
                    <strong className="flex-icon">
                      <span>View CV</span>
                      <span className="mt-1">
                        <FaEye />
                      </span>{" "}
                    </strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                </a>
                <a href="/myResume.pdf" download>
                  <button className="cv-btn2">
                    <FaDownload />
                  </button>
                </a>
              </div>

              <a
                href="mailto:emmanuelpromise456@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hire-btn">
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

                  <span className="now">cool!</span>
                  <span className="play">Hire me</span>
                </button>
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img src={anime} alt="typing.." className="typing" />
            </div>
          </div>
          <div className=" flex justify-center align-center lg:w-6/12 w-full">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                className="home-imgHover"
                src={ProfileImg}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>

        <div className="section-two">
          <div className="flex justify-center items-center">
            {/* <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-red-700"></div> */}
          </div>
          <div className="dev" data-aos="fade-up">
            DEV_PROMISE
          </div>
          <div className="aim">
            <div className="mission" data-aos="zoom-in">
              <h4 className="aimed">Mission</h4>
              <h2 className="quote" data-aos="fade-up" data-aos-delay="500">
                Transforming ideas into interactive realities.
              </h2>
              <p
                className="catch-phrase"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Delivering exceptional user experiences through innovative and
                efficient web development solutions.
              </p>
            </div>
          </div>
          <div className="more-info">
            <div className="exp-info">
              <div className="num" data-aos="zoom-in" data-aos-delay="1000">
                3<span>+</span>
              </div>
              <div className="exp">
                <div className="xp1">Years</div>
                <div className="xp2">of Experience</div>
              </div>
            </div>
            <div className="project-info">
              <div
                className="num2 ms-1"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                {repoCount}
                <span>+</span>
              </div>
              <div className="exp mt-9 ms-2">Projects/Contributions</div>
            </div>
          </div>
          <div className="nextPageText text-center">
            "You've made it this far! Curious to know more about my journey?{" "}
            <span className="text-[var(--mainColor)] underline hover:text-[var(--shadowColor7)] cursor-pointer">
              <NavLink to="/about">Click here</NavLink>
            </span>{" "}
            to discover more about me!"
          </div>
          {/* <hr className="mx-auto line-through mt-5" data-aos="fade-up" /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
3;
