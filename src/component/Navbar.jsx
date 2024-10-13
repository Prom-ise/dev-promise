import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { GrProjects } from "react-icons/gr";
import { SiHomebridge } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import pyrite from "../assets/gold.png";
import gold from "../assets/golden.png";
import diamond from "../assets/rare.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = ({
  currentTrophy,
  unlockAchievement,
  showLastNotification,
}) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const [colorTheme, setColorTheme] = useState("red-theme");
  const [indicatorLeft, setIndicatorLeft] = useState(50);
  const navLinksRef = useRef([]);
  const { pathname } = useLocation();

  const trophyImages = {
    bronze: bronze,
    silver: silver,
    pyrite: pyrite,
    gold: gold,
    diamond: diamond,
  };

  const changeColorTheme = (newColorTheme) => {
    setColorTheme(newColorTheme);
    document.documentElement.className = `${theme} ${newColorTheme}`;
    localStorage.setItem("colorTheme", newColorTheme);

    unlockAchievement("changedTheme");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    const savedColorTheme = localStorage.getItem("colorTheme") || "red-theme";
    setTheme(savedTheme);
    setColorTheme(savedColorTheme);
    document.documentElement.className = `${savedTheme} ${savedColorTheme}`;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;

      if (scrollPercentage >= 20) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    document.documentElement.className = `${newTheme} ${colorTheme}`;
    localStorage.setItem("theme", newTheme);

    unlockAchievement("changedTheme");
  };
  const handleLinkClick = (index) => {
    setIndicatorLeft(index * 95 + 45);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
    const activeIndex = navLinksRef.current.findIndex((link) =>
      link.classList.contains("link-item")
    );
    if (activeIndex !== -1) {
      setIndicatorLeft(activeIndex * 95 + 40);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="flex items-center" data-aos="flip-right">
        <div className="homie">
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                id="toggle"
                checked={theme === "light-theme"}
                onChange={toggleTheme}
                className="checkbox"
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="dev-name">
            {"<"}Dev_Promise/{">"}
          </div>
        </div>

        <div>
          <Menubar
            className="menu !ring-0 rounded-full"
            style={{ backgroundColor: "transparent", border: "transparent" }}
          >
            <MenubarMenu>
              <MenubarTrigger className="trigger custom-trigger data-[state=open]:!text-[var(--mainColor)] data-[state=closed]:!text-[var(--mainColor)] !ring-0 !shadow-none dark:!border-none !border-none !border-transparent !bg-transparent !p-1 rounded-full text-3xl text-[var(--mainColor)]">
                <CiMenuKebab className="!focus:text-[var(--mainColor)]" />
              </MenubarTrigger>
              <MenubarContent className="theme-selection">
                <MenubarItem className="custom-item focus:!bg-transparent">
                  More Theme <MenubarShortcut>⌘</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  className="custom-item !bg-transparent"
                  onClick={() => changeColorTheme("red-theme")}
                >
                  <div className="redTheme"></div>
                </MenubarItem>
                <MenubarItem
                  className="custom-item !bg-transparent"
                  onClick={() => changeColorTheme("blue-theme")}
                >
                  <div className="blueTheme"></div>
                </MenubarItem>
                <MenubarItem
                  className="custom-item !bg-transparent"
                  onClick={() => changeColorTheme("yellow-theme")}
                >
                  <div className="yellowTheme"></div>
                </MenubarItem>
                <MenubarItem
                  className="custom-item !bg-transparent"
                  onClick={() => changeColorTheme("lime-theme")}
                >
                  <div className="limeTheme"></div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* Trophy display */}
        <div
          className="trophy-display"
          onClick={showLastNotification}
          style={{ cursor: "pointer" }}
        >
          <img
            src={trophyImages[currentTrophy]}
            alt={`${currentTrophy} Trophy`}
          />
        </div>
      </div>

      <nav className="large-nav" data-aos="fade-down">
        <NavLink
          className={({ isActive }) => (isActive ? "navlinked" : "navlinks")}
          to="/Dev_Promise"
        >
          Home <span></span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "navlinked" : "navlinks")}
          to="/about"
        >
          About <span></span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "navlinked" : "navlinks")}
          to="/projects"
        >
          Projects <span></span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "navlinked" : "navlinks")}
          to="/contact"
        >
          Contact <span></span>
        </NavLink>
      </nav>

      <nav className={`small-nav ${showNavBar ? "show" : ""}`}>
        <div className="trophy-displayed">
          <img
            src={trophyImages[currentTrophy]}
            alt={`${currentTrophy} Trophy`}
          />
        </div>
        <ul className="link-nav">
          <li>
            <NavLink
              to="/Dev_Promise"
              className={({ isActive }) =>
                isActive ? "nav-iconed" : "nav-icon"
              }
            >
              <div className="tooltip-container">
                <SiHomebridge />
                <span className="tooltip">Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-iconed" : "nav-icon"
              }
            >
              <div className="tooltip-container">
                <FaUserAlt />
                <span className="tooltip">About</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-iconed" : "nav-icon"
              }
            >
              <div className="tooltip-container">
                <GrProjects />
                <span className="tooltip">Projects</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-iconed" : "nav-icon"
              }
            >
              <div className="tooltip-container">
                <AiFillMessage />
                <span className="tooltip">Contact</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="small-trophy-display"
        onClick={showLastNotification}
        style={{ cursor: "pointer" }}
      >
        <img
          src={trophyImages[currentTrophy]}
          alt={`${currentTrophy} Trophy`}
        />
      </div>

      <nav className="nav">
        <ul className="nav-content mx-auto">
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-item" : "linked-item"
              }
              to="/Dev_Promise"
              ref={(el) => (navLinksRef.current[0] = el)}
              onClick={() => handleLinkClick(0)}
            >
              <SiHomebridge className="links-icon" />
              <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-item" : "linked-item"
              }
              to="/about"
              ref={(el) => (navLinksRef.current[1] = el)}
              onClick={() => handleLinkClick(1)}
            >
              <FaUserAlt className="links-icon" />
              <span className="link-text">About</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-item" : "linked-item"
              }
              to="/projects"
              ref={(el) => (navLinksRef.current[2] = el)}
              onClick={() => handleLinkClick(2)}
            >
              <GrProjects className="links-icon" />
              <span className="link-text">Projects</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-item" : "linked-item"
              }
              to="/contact"
              ref={(el) => (navLinksRef.current[3] = el)}
              onClick={() => handleLinkClick(3)}
            >
              <AiFillMessage className="links-icon" />
              <span className="link-text">Contact</span>
            </NavLink>
          </li>

          <span
            className="link-indicator"
            style={{ left: `${indicatorLeft}px` }}
          ></span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
