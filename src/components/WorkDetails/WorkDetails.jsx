import "./workDetails.css";

const WorkDetails = ({ heading, imageUrl, imageAlt, description }) => {
  return (
    <div className="modal-content">
      <p className="modal-heading heading-5">{heading}</p>
      <div className="modal-details">
        <div className="image-wrapper">
          <img
            className="image-detail"
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
        <div
          className="info-detail body-text"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default WorkDetails;
