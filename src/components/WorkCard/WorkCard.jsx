import Tag from "../Tag/Tag";
import { ModalContext } from "../../modalContext";
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
  let { handleModal } = useContext(ModalContext);

  const enterKey = 13;
  const spaceKey = 32;

  function handleKeyDown(e) {
    if (e.keyCode === enterKey || e.keyCode === spaceKey) {
      e.preventDefault();
      handleModal(
        <WorkDetails
          heading={heading}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          description={description}
          relatedLinks={relatedLinks}
        />,
      );
    }
  }

  return (
    <>
      <div
        className="work-card"
        tabIndex="0"
        role="button"
        onClick={() =>
          handleModal(
            <WorkDetails
              heading={heading}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              description={description}
              relatedLinks={relatedLinks}
            />,
          )
        }
        onKeyDown={handleKeyDown}
      >
        <div className="title-wrapper">
          <p className="title">{heading}</p>
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
