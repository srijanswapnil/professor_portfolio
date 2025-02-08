import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fade } from "react-awesome-reveal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(detailsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <Fade direction="down" duration={1500}>
          <h1 ref={titleRef} className="hero-title">
            Welcome to <span className="highlight">Professor's Portfolio</span>
          </h1>
        </Fade>

        {/* Professor's Image */}
        <Fade direction="up" duration={1800}>
          <img src="/IMG_7931.JPG" alt="Professor" className="profile-image" />
        </Fade>

        {/* Professor's Details */}
        <Fade direction="up" duration={2000}>
          <p ref={detailsRef} className="hero-subtitle">
            <strong>Dr. John Doe</strong> <br />
            Ph.D. in Artificial Intelligence <br />
            National Institute of Technology, Jamshedpur
          </p>
        </Fade>

        {/* Button */}
        <Fade direction="up" duration={2500}>
          <a href="/projects" className="btn btn-primary btn-lg mt-3">
            View Research & Projects
          </a>
        </Fade>
      </div>
    </div>
  );
}

