import React from "react";
import Card from "react-bootstrap/Card";
import logo from '../../images/Sreemongol.png'

const PlaceCard = ({ p }) => {
  const { place, id } = p;
  return (
    <div className="g-col-3">
      <Card className="text-white rounded">
        <Card.Img className="img-fluid" src={logo} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{place}</Card.Title>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default PlaceCard;
