import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export const TopHeader = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>devAgam-MemeMaker</h1>
          <p>
            A MemeMaker made in react as a little side project to experiment
            with a few tedious react hooks
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};
