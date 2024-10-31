import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LogoLinkedIn from "../../images/svg/logo-linkedin.svg?react";
import LogoGitHub from "../../images/svg/logo-github.svg?react";
import LogoX from "../../images/svg/logo-x.svg?react";
import Email from "../../images/svg/mail.svg?react";

import "./footer.scss";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const el = footerRef.current;
    let animation = gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "50% bottom",
          // markers: {
          //   startColor: "yellow",
          //   endColor: "black",
          //   bottom: 0,
          //   fontWeight: "bold",
          // },
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="container footer">
      <div className="wrapper">
        <a href="mailto:guerrerofabian1985@gmail.com" className="email-link">
          <Email className="email-icon" />
          <span className="small-text">guerrerofabian1985@gmail.com</span>
        </a>
        <div className="social-networks">
          <a
            href="https://www.linkedin.com/in/fabian-eduardo-guerrero"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin Link"
          >
            <LogoLinkedIn className="logo" />
          </a>
          <a
            href="https://github.com/fabian-guerrero"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Link"
          >
            <LogoGitHub className="logo" />
          </a>
          {/* <a href="#" target="_blank" rel="noreferrer">
            <LogoX className="logo" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
