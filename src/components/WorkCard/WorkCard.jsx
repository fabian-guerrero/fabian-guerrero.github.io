import Tag from "../Tag/Tag";
import { ModalContext } from "../Modal/ModalContext";
import { useContext } from "react";
import WorkDetails from "../WorkDetails/WorkDetails";
import "./work-card.scss";

const WorkCard = ({
  heading,
  imageUrl,
  imageAlt,
  technologies,
  description,
  relatedLinks,
}) => {
  const { openModal } = useContext(ModalContext);

  const handleOpen = (
    heading,
    imageUrl,
    imageAlt,
    description,
    relatedLinks,
  ) => {
    openModal(
      <WorkDetails
        heading={heading}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        description={description}
        relatedLinks={relatedLinks}
      />,
    );
  };

  const enterKey = 13;
  const spaceKey = 32;

  function handleKeyDown(e) {
    if (e.keyCode === enterKey || e.keyCode === spaceKey) {
      e.preventDefault();
      handleOpen(heading, imageUrl, imageAlt, description, relatedLinks);
    }
  }

  return (
    <>
      <div
        className="work-card"
        tabIndex="0"
        role="button"
        onClick={() =>
          handleOpen(heading, imageUrl, imageAlt, description, relatedLinks)
        }
        onKeyDown={handleKeyDown}
      >
        <div className="title-wrapper">
          <h3 className="title">{heading}</h3>
          {/* <p className="year small-text">{work.attributes.year}</p> */}
        </div>
        <div>
          <div className="image-wrapper">
            <img
              className="card-image"
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
          <div className="copy-wrapper">
            <div className="tags-wrapper">
              {technologies.data.map((technology) => (
                <Tag key={technology.id} copy={technology.attributes.name} />
              ))}
            </div>
            <div
              className="description body-text"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
