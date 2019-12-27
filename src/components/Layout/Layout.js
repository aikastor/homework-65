import React, {Fragment} from 'react';
import Navigation from "../UI/Navigation/Navigation";
import {Container} from "reactstrap";


const Layout = (props) => {
  return (
      <Fragment>
        <Container>
          <Navigation/>
          <div> {props.children}</div>
        </Container>

      </Fragment>
  );
};

export default Layout;