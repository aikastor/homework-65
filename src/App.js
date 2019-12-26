import React, {Fragment} from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import Page from "./components/Page/Page";
import {Redirect} from "react-router";

const App = () => {
  return (
        <BrowserRouter>
          <div>
            <Layout>
              <Switch>
                <Route path='/pages/:category' exact component={Page} />
                <Redirect exact from="/" to='pages/about'/>
              </Switch>
            </Layout>
          </div>
        </BrowserRouter>
  );
};

export default App;