import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg 
      top 
      height="200" 
      width="100%" 
      src={product.smallImage} 
      />
      
      <CardBody className="text-left bg-light font-wei text-primary">
        <h5><CardTitle>
          {product.productName}
        </CardTitle>
        </h5>
        <CardText className="text-dark">
          Laptop 15.6" with core-i3 gen, 16GB, RAM and 1TB HDD
          <p className="text-dark font-weight-bold" > 
           for : ${product.productPrice}
          </p>
        </CardText>
        <Button 
        color="warning"
        onClick={() => addInCart(product)}
        >
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
