import { useFetch } from "../../useFetch";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Markdown from "react-markdown";
import "./experience.scss";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  //const { data } = useFetch("http://localhost:1337/api/experiences");
  const { data } = useFetch("./mocks/experiences.json");

  const [activeTab, setActiveTab] = useState("experience-tab-1");

  const experienceRef = useRef(null);

  useLayoutEffect(() => {
    const el = experienceRef.current;
    let animation = gsap.fromTo(
      el,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          // markers: { top: 50, fontWeight: "bold" },
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

  useEffect(() => {
    let selectedExperience = document.querySelector(
      `div.experience-description.active`,
    );

    if (selectedExperience) {
      gsap.fromTo(
        selectedExperience,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          pointerEvents: "auto",
        },
      );
    }
  }, [data, activeTab]);

  const handleExperience = (experienceId) => {
    setActiveTab(`experience-tab-${experienceId}`);

    const currentExperience = document.querySelector(
      `div.experience-description.active`,
    );

    const hideExperience = gsap.fromTo(
      currentExperience,
      { y: 0, opacity: 1 },
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
        pointerEvents: "none",
      },
    );

    return () => {
      hideExperience.kill();
    };
  };

  return (
    <section id="experience" className="container experience">
      <div ref={experienceRef}>
        <h2 className="section-title"> Experience</h2>
        <div className="experience-card-container">
          <div className="experience-companies">
            {data?.data.map((experience) => (
              <button
                onClick={() => handleExperience(`${experience.id}`)}
                key={experience.id}
                data-id={experience.id}
                className={`company ${
                  activeTab === `experience-tab-${experience.id}`
                    ? "active"
                    : ""
                }`}
                data-company={`company-${experience.id}`}
              >
                <img
                  className="company-image"
                  src={experience.image.url}
                  alt={experience.image.alt}
                  loading="lazy"
                />
                <div className="company-detail">
                  <p className="company-name">
                    {experience.attributes.companyName}
                  </p>
                  <p className="company-position small-text">
                    {experience.attributes.positionName}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="experience-details">
            {data?.data.map((experience) => (
              <div
                key={`detail-${experience.id}`}
                data-id={experience.id}
                className={`experience-description ${
                  activeTab === `experience-tab-${experience.id}`
                    ? "active"
                    : ""
                }`}
              >
                <p className="body-text">
                  {experience.attributes.positionName} at{" "}
                  <a
                    href={experience.attributes.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {experience.attributes.companyName}
                  </a>
                </p>
                <p className="position-period">
                  {experience.attributes.positionStart} -{" "}
                  {experience.attributes.positionEnd}
                </p>
                <Markdown>{experience.attributes.positionDescription}</Markdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
