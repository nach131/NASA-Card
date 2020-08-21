import React from 'react';
import { Container } from 'react-bootstrap';

const Album = (props) => {
  return (
    <>
<Container className="py-5">

      {props.children}

</Container>
  
    </>
  );
};

export default Album;