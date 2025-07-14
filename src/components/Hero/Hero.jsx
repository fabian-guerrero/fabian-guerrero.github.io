import { useRef, useLayoutEffect } from "react";
//import { useFetch } from "../../useFetch";
import gsap from "gsap";
import Tag from "../Tag/Tag";
import { useTranslation } from "react-i18next";

import "./hero.scss";

const Hero = () => {
  const section = useRef(null);

  // const { data } = useFetch(
  //   "http://localhost:1337/api/heroes?populate=technologies",
  // );
  //const { data } = useFetch("./mocks/heroes.json");

  const { t } = useTranslation("heroes");
  const heroes = t("heroes", { returnObjects: true });

  useLayoutEffect(() => {
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
  }, []);

  return (
    <section className="container hero" id="hero">
      <div className="hero-content" ref={section}>
        <h1
          className="intro"
          dangerouslySetInnerHTML={{ __html: heroes[0].intro }}
        ></h1>
        <p className="bio">{heroes[0].smallBio}</p>
        <div className="technologies-wrapper">
          {heroes[0].technologies.data.map((technology) => (
            <Tag key={technology.id} copy={technology.attributes.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
