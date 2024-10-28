import Tag from "../Tag/Tag";
import { ModalContext } from "../../modalContext";
import { useContext } from "react";
import WorkDetails from "../WorkDetails/WorkDetails";

const WorkCard = ({
  heading,
  imageUrl,
  imageAlt,
  technologies,
  description,
}) => {
  let { handleModal } = useContext(ModalContext);

  return (
    <>
      <div
        className="work-card"
        aria-hidden="true"
        onClick={() =>
          handleModal(
            <WorkDetails
              heading={heading}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              description={description}
            />,
          )
        }
      >
        <div className="title-wrapper">
          <p className="title heading-3">{heading}</p>
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
