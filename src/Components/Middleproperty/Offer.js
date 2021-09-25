import React from "react";
import { Carousel } from "react-bootstrap";
import Products from "../../ProductsList/ProductList";

export default function Offer() {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Products[1].image}
            alt="First slide"
            style={{ height: "800px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Products[0].image}
            alt="Second slide"
            style={{ height: "800px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Products[2].image}
            alt="Third slide"
            style={{ height: "800px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
