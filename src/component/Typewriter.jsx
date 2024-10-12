import React, { useState, useEffect } from 'react';
// import './Typewriter.css';

const Typewriter = ({ texts, typingSpeed, deletingSpeed, pauseTime }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loop % texts.length;
      const fullText = texts[currentIndex];

      setCurrentText(
        isDeleting 
          ? fullText.substring(0, charIndex - 1) 
          : fullText.substring(0, charIndex + 1)
      );
      setCharIndex(charIndex + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loop, texts, typingSpeed, deletingSpeed, pauseTime]);

  return <span className="typewriter" dangerouslySetInnerHTML={{ __html: currentText }}></span>;
};

export default Typewriter;
