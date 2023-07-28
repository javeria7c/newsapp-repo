import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/products.css";

export default function ProductCards({ products }) {
  return (
    <>
      <Card className="card-css" style={{ width: "17rem" }}>
        <Card.Body className="card-body">
          <Card.Title className="product-description">{products.id}</Card.Title>
          <Card.Title className="product-description">
            {products.name}
          </Card.Title>
          <Card.Title className="product-description">
            {products.category}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
