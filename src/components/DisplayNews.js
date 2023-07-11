import React, { useEffect, useState } from "react";
import NewsCards from "./NewsCards";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default function DisplayNews() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: "874f613279bc4678a74b24a072f7a2c3",
        },
      })
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark">
        <h1 className="website-brand">TECHNOLOGY UPDATES !</h1>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </Nav>

      <Container className="min-vh-100 d-flex flex-wrap justify-content-evenly mb-5 pt-5">
        {newsData.map((news) => (
          <NewsCards news={news} key={news.id} />
        ))}
      </Container>
    </>
  );
}
