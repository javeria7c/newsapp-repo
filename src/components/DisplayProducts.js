import React from "react";
import { useGetProductsQuery } from "../services/productapi";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ProductCards from "./ProductCards";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function DisplayProducts() {
  const { data, isFetching } = useGetProductsQuery(""); //This use query is a global store, and single source of tructh, all things are handled by this react query.
  // console.log(data, isFetching);
  //console.log(data?.data?.products);

  if (isFetching) {
    return "Loading...";
  }

  const productsList = data ? data.products : [];

  //const productsList = data && Array.isArray(data) ? data : [];
  // console.log(Array.isArray(data), data);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tech Gadgets</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Products</Nav.Link>
              <Nav.Link href="#link">Cart</Nav.Link>
              <NavDropdown title="Catalog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">New In</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sale</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Discounts
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2 className="d-flex justify-content-evenly pt-4">Our Products</h2>
      <Container className="min-vh-100 d-flex flex-wrap justify-content-evenly mb-5 pt-4">
        {productsList.map((products) => (
          <ProductCards products={products} key={products.id}></ProductCards>
        ))}
      </Container>
    </>
  );
}
