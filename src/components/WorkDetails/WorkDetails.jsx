import "./workDetails.scss";

const WorkDetails = ({
  heading,
  imageUrl,
  imageAlt,
  description,
  relatedLinks,
}) => {
  return (
    <div className="modal-content">
      <p id="modal-title" className="modal-heading heading-5">
        {heading}
      </p>
      <div className="modal-details">
        <div className="image-wrapper">
          <img
            className="image-detail"
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
        <div id="modal-description" className="info-detail body-text">
          <span dangerouslySetInnerHTML={{ __html: description }}></span>
          <span dangerouslySetInnerHTML={{ __html: relatedLinks }}></span>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
