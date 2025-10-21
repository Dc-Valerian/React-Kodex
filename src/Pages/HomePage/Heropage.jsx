import CardProps from "../CardProps/CardProps";
import "../CardProps/CardProps.css";
const Heropage = () => {
  return (
    <div>
      <h1>This is the hero page</h1>
      <div className="card-props-container">
        <CardProps
          h3="First Card"
          p="woh4ufwhuiw"
          cardImages="../../../public/image.jpg"
          bgColor={"#f9c74f"}
        />

        <CardProps
          h3="Second Card"
          p="woh4ufwhuiw"
          cardImages="https://images.pexels.com/photos/34288156/pexels-photo-34288156.jpeg"
          bgColor={"#90be6d"}
        />
        <CardProps
          h3="Third Card"
          p="woh4ufwhuiw"
          cardImages="https://images.pexels.com/photos/31618288/pexels-photo-31618288.jpeg"
          bgColor={"#f3722c"}
        />

        <CardProps
          h3="Fifth card"
          p="ui7gyg"
          cardImages="https://images.pexels.com/photos/31618288/pexels-photo-31618288.jpeg"
          bgColor={"#577590"}
        />
      </div>
    </div>
  );
};

export default Heropage;
