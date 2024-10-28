import { useFetch } from "../../useFetch";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "../WorkCard/WorkCard";
import "./work.css";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // const { data } = useFetch(
  //   "http://localhost:1337/api/latest-works?populate=technologies",
  // );

  const { data } = useFetch("./mocks/works.json");

  const section = useRef(null);

  useEffect(() => {
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
          start: "top 50%",
          // markers: { fontWeight: "bold" },
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, [data]);

  return (
    <>
      <section className="container work" id="work">
        <div ref={section}>
          <p className="section-title heading-2">Featured Works</p>
          <div className="work-card-container">
            {data?.data.map((work) => (
              <WorkCard
                key={work.id}
                heading={work.attributes.name}
                imageUrl={work.image.url}
                imageAlt={work.image.alt}
                technologies={work.attributes.technologies}
                description={work.attributes.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
