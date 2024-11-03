import { useRef, useEffect } from "react";
import { useFetch } from "../../useFetch";
import gsap from "gsap";
import Tag from "../Tag/Tag";
import "./hero.scss";

const Hero = () => {
  const section = useRef(null);

  // const { data } = useFetch(
  //   "http://localhost:1337/api/heroes?populate=technologies",
  // );
  const { data } = useFetch("./mocks/heroes.json");

  useEffect(() => {
    const el = section.current;
    let animation = gsap.fromTo(
      el.childNodes,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          each: 0.2,
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, [data]);

  return (
    <section ref={section} className="container hero" id="hero">
      <p className="intro">{data?.data[0].attributes.intro}</p>
      <p className="bio">{data?.data[0].attributes.smallBio}</p>
      <div className="technologies-wrapper">
        {data?.data[0].attributes.technologies.data.map((technology) => (
          <Tag key={technology.id} copy={technology.attributes.name} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
