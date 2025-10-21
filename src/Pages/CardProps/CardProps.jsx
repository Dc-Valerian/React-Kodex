import "./CardProps.css";

const CardProps = ({ h3, p, cardImages, bgColor }) => {
  return (
    <div className="card-props" style={{ backgroundColor: bgColor }}>
      <img src={cardImages} alt="francesImage" className="card-image" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default CardProps;
