import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import bronze from "./assets/bronze.png";
import silver from "./assets/silver.png";
import pyrite from "./assets/gold.png"; // Ensure correct path
import gold from "./assets/golden.png";       // Ensure correct path
import diamond from "./assets/diamond.png"; // Ensure correct path
import 'animate.css';

function App() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [lastNotification, setLastNotification] = useState(null);
  const [achievementUnlocked, setAchievementUnlocked] = useState("");
  
  // Initialize achievements from localStorage or default values
  const [achievements, setAchievements] = useState(() => {
    const savedAchievements = JSON.parse(localStorage.getItem("achievements")) || {
      firstVisit: false,
      changedTheme: false,
      scrolledAboutAndProjects: false,
      visitedProjectLinks: false,
      sentMessage: false,
    };
    return savedAchievements;
  });

  // Determine the current trophy based on unlocked achievements
  const [currentTrophy, setCurrentTrophy] = useState(() => {
    const unlockedCount = Object.values(achievements).filter(Boolean).length;
    if (unlockedCount >= 5) return "diamond";
    if (unlockedCount >= 4) return "gold";
    if (unlockedCount >= 3) return "pyrite";
    if (unlockedCount >= 2) return "silver";
    return "bronze";
  });

  // Unlock the first visit achievement on initial load
  useEffect(() => {
    if (!achievements.firstVisit) {
      unlockAchievement("firstVisit");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to unlock an achievement
  const unlockAchievement = (achievementKey) => {
    if (!achievements[achievementKey]) {
      const updatedAchievements = { ...achievements, [achievementKey]: true };
      setAchievements(updatedAchievements);
      localStorage.setItem("achievements", JSON.stringify(updatedAchievements));

      // Update the trophy based on the new achievements
      const newTrophy = updateTrophy(updatedAchievements);

      // Define achievement messages
      const achievementMessages = {
        firstVisit: "You’ve just entered the realm! Welcome aboard! 🌟",
        changedTheme: "You’ve just given your space a fresh new vibe! 🌈✨",
        scrolledAboutAndProjects: "Nice move! You've explored my story and unveiled the secrets of my projects! 📜✨",
        visitedProjectLinks: "Boom! You clicked the link! Let's dive deeper! 🚀 🔗",
        sentMessage: "You’ve reached out! Let's collaborate and create something amazing together! 🚀✨ 📩",
      };

      const message = achievementMessages[achievementKey];

      // Set the achievement unlocked message
      setAchievementUnlocked(message);

      // Set the current notification
      setNotification(`🎉 Congrats! You've unlocked the ${newTrophy} badge! 🏆. Explore more to claim the Diamond badge 💎, if you have, GOOD JOB!!`);

      // Store the last notification message for later use
      setLastNotification(`Your current badge is the ${newTrophy} badge`);

      // Show the notification overlay
      setOverlayVisible(true);

      // Hide the notification after 10 seconds
      setTimeout(() => {
        setNotification(null);
        setOverlayVisible(false);
      }, 10000); 
    }
  };

  // Effect to handle body scroll based on overlay visibility
  useEffect(() => {
    const htmlElement = document.documentElement; // Reference the HTML element
    const bodyElement = document.body;
  
    if (isOverlayVisible) {
      htmlElement.classList.add("no-scroll");
      bodyElement.classList.add("no-scroll");
    } else {
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
    }
  
    return () => {
      // Clean up on component unmount or when overlay is hidden
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
    };
  }, [isOverlayVisible]);
  

  // Function to show the last notification when the trophy is clicked
  const showLastNotification = () => {
    if (lastNotification && !isOverlayVisible) { // Prevent overlapping notifications
      setNotification(lastNotification);
      setOverlayVisible(true);
      setTimeout(() => {
        setNotification(null);
        setOverlayVisible(false);
      }, 10000);
    }
  };

  // Function to handle closing the notification manually
  const handleCloseNotification = () => {
    setNotification(null);
    setOverlayVisible(false); // Hide overlay
  };

  // Function to update the trophy based on achievements
  const updateTrophy = (achievements) => {
    const unlockedCount = Object.values(achievements).filter(Boolean).length;
    let newTrophy = "bronze";
    if (unlockedCount >= 2) newTrophy = "silver";
    if (unlockedCount >= 3) newTrophy = "pyrite";
    if (unlockedCount >= 4) newTrophy = "gold";
    if (unlockedCount === 5) newTrophy = "diamond";
    setCurrentTrophy(newTrophy);
    localStorage.setItem("currentTrophy", newTrophy);
    return newTrophy; // Return the new trophy for use in notifications
  };

  // Map of trophy images
  const trophyImages = {
    bronze: bronze,
    silver: silver,
    pyrite: pyrite,
    gold: gold,
    diamond: diamond,
  };

  return (
    <>
      <Navbar
        currentTrophy={currentTrophy}
        unlockAchievement={unlockAchievement}
        showLastNotification={showLastNotification}
      />
      {isOverlayVisible && <div className="overlay" onClick={handleCloseNotification} />}
      {notification && (
        <div className="notification animate__animated animate__zoomIn animate__fast">
          <div>
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="10"
              loop="infinite"
              className="notification-text"
            >
              {notification}
            </marquee>

            <div className="trophy-name">{currentTrophy}</div>
            <div className="notify-trophy mx-auto">
              <img
                src={trophyImages[currentTrophy]}
                alt={`${currentTrophy} badge`}
              />
            </div>
            <div className="unlocked">{achievementUnlocked}</div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/Dev_Promise" element={<Homepage />} />
        <Route path="/" element={<Navigate to="/Dev_Promise" />} />
        <Route
          path="/about"
          element={<Aboutpage unlockAchievement={unlockAchievement} />}
        />
        <Route
          path="/projects"
          element={<Projectpage unlockAchievement={unlockAchievement} />}
        />
        <Route
          path="/contact"
          element={<Contactpage unlockAchievement={unlockAchievement} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;