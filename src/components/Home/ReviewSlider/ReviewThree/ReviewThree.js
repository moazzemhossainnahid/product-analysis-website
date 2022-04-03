import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewThree = (props) => {
    const { name, img, reviewTxt } = props.review;
  return (
    <div>
      <div className="">
        <Card className="p-2 mx-auto" style={{ width: "24rem", height: "22rem" }}>
          <Card.Img variant="top" className="rounded rounded-circle w-25 mx-auto my-3" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{reviewTxt}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ReviewThree;