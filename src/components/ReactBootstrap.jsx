import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ReactBootstrap() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Bangladesh</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod .
          i love banlgadesh
        </Card.Text>
        <Button variant="info">click me</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootstrap;
