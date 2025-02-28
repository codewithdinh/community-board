const Card = ({ title, description, link, image }) => {
    return (
      <div className="card">
        {/* Display the image */}
        <img src={image} alt={title} className="card-image" />
        {/* Display the title */}
        <h3>{title}</h3>
        {/* Display the description */}
        <p>{description}</p>
        {/* Link to the resource */}
        <a href={link} target="_blank" className="card-button">
          Learn More
        </a>
      </div>
    );
  };
  
  export default Card;