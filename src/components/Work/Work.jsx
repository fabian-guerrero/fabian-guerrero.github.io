//import { useFetch } from "../../useFetch";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "../WorkCard/WorkCard";
import { useTranslation } from "react-i18next";

import "./work.scss";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // const { data } = useFetch(
  //   "http://localhost:1337/api/latest-works?populate=technologies",
  // );

  //const { data } = useFetch("./mocks/works.json");

  const { t } = useTranslation("works");
  const works = t("works", { returnObjects: true });

  const section = useRef(null);

  useLayoutEffect(() => {
    const el = section.current;
    let animation = gsap.fromTo(
      el,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          //markers: { fontWeight: "bold" },
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <>
      <section className="container work" id="work">
        <div ref={section}>
          <h2 className="section-title heading-2">
            {t("works", { ns: "common" })}
          </h2>
          <div className="work-card-container">
            {works.map((work) => (
              <WorkCard
                key={work.id}
                heading={work.name}
                imageUrl={work.image.url}
                imageAlt={work.image.alt}
                technologies={work.technologies}
                description={work.description}
                relatedLinks={work.relatedLinks}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
