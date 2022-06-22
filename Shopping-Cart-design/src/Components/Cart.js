import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h2 className="text-warning text-center rounded mt-5 pt-2 pb-4">
        Your Cart
      </h2>
      <ListGroup >
      <CardHeader className="bg-warning rounded text-center">
        Your Items
      </CardHeader>
        {cartItem.map(item => (
          <ListGroupItem key={item.id} >
            <Row>
              <Col>
                <img height={50} src={item.tinyImage} alt="" />
              </Col>
              <Col className="text-left">
                <div className="text-dark text-uppercase text-left font-weight-bold ">
                  {item.productName}
                </div>
                <span className=" text-left pr-2">
                  Price <span className="font-weight-bold">${item.productPrice}</span>
                </span>
              </Col>
              <Button
                color=""
                onClick={() => removeItem(item)}
                >
               Remove
                </Button>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-4">
          <CardHeader>Grand Total</CardHeader>
          <h5>
          <CardBody className="text-dark">
            Your amount for {cartItem.length} product is :
            <span className="font-weight-bold"> 
              ${amount}
            </span>
          </CardBody>
          </h5>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Click to Purchase
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h5 className="text-light text-center mt-5 pt-5">
          Your cart is empty
        </h5>
      )}
    </Container>
  );
};

export default Cart;
