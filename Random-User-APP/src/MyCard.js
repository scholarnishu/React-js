import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt=""
        />
        <CardTitle className="text-primary">
          <h1 className="text-success">
            <span className="pr-2">{details.name?.title}</span>
            <span className="pr-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
          <h6 className="text-center text-dark text-uppercase">{details.gender}</h6>
          
            <h6 className="text-center text-primary">
              <span className="pr-2"><FaEnvelope/></span>
              {details.email}
            </h6> 
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt/>
            <span className="pl-2 pr-4">{details.location?.country}</span>
            <FaPhone/>
            <span className="pl-2">{details.phone}</span>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
