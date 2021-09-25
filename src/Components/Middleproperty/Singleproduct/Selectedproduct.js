import React from "react";
import { Carousel } from "react-bootstrap";

function Selectedproduct(props) {
  console.log(props);
  const slides = props.slidepics.map((pic) => {
    console.log(pic);
    return (
      <Carousel.Item key={pic.id}>
        <img
          src={pic.slidepic}
          key={pic.id}
          alt="slide"
          className="d-block w-100"
          style={{ maxHeight: "1500px" }}
        />
      </Carousel.Item>
    );
  });

  return <Carousel fade>{slides}</Carousel>;
}
export { Selectedproduct };
