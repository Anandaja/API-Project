import React, { useState, useEffect } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [stroke, setStroke] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body,
        html = document.documentElement;

      const totalHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      setProgress(totalHeight);

      const currentDistance = window.scrollY / (totalHeight / 3000);
      setStroke(totalHeight - currentDistance / 8);

      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      }

      if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }

      if (window.innerHeight + window.scrollY >= totalHeight) {
        setStroke(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isScrolled && (
        <div
          onClick={scrollToTop}
          className={`progress-wrap ${stroke < progress ? 'active-progress' : ''}`}
        >
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: 'stroke-dashoffset 10ms linear 0s',
                strokeDasharray: `${progress}px, ${progress}px`,
                strokeDashoffset: `${stroke}px`,
              }}
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default Progress;
