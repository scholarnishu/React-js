import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CartItem";

import { random, commerce } from "faker";
import { Container, Col, Row, CardHeader } from "reactstrap";

// const apiKey = "INSET_YOUR_KEY_HERE";

// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://api.jsonbin.io/b/5ffb3b8de67cd62c80595f6e";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey
  //       }
  //     });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProduct = photos.map(photo => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid()
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <CardHeader className="text-warning text-left rounded mt-5 pl- pt-2 pb-2">
        <h2>Laptops with core-i3 processor (intel)</h2>
      </CardHeader>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
