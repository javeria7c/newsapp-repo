import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import "../styles/news.css";

export default function NewsCards({ news }) {
  return (
    <>
      <Card className="card-css" style={{ width: "20rem" }}>
        <Card.Img className="card-img" src={news.urlToImage} />

        <Card.Body className="card-body">
          <Card.Title className="product-description">{news.title}</Card.Title>
          <Card.Text className="product-description">
            {news.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

//  <>
//       <Card className="card-container">
//         <div className="card-img">
//           <Card.Img
//             src={`https://image.tmdb.org/t/p/w1280${news.poster_path}`}
//             alt="movie-thumbnail"
//           />
//         </div>

//         <div className="card-content">
//           <h6 className="card-text">{news.title}</h6>
//         </div>
//       </Card>
//     </>
