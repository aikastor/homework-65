import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import Navigation from "../UI/Navigation/Navigation";
import Page from "../Page/Page";

const Layout = (props) => {
  return (
      <Fragment>
          <Navigation/>
          <div> {props.children}</div>
      </Fragment>
  );
};

export default Layout;