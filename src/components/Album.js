import React from "react";
import { Container } from "react-bootstrap";

const Album = (props) => {
  return (
    <>
      <Container id="album">{props.children}</Container>
    </>
  );
};

export default Album;
