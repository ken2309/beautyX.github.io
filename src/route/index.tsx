import React from 'react';
import Home from '../features/Home/index';
import SearchResult from '../features/SearchResult/index'
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import {RouteComponentProps} from '@reach/router'

const RouterPage = (
      props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
function RouterConfig(props: any) {
      const routes = [
            {
                  path: '/Home',
                  component: <Home />
                  //component: Home
            },
            {
                  path: '/Search-result/',
                  component: <SearchResult />
                  //component: SearchResult
            }
      ]
      return (
            <BrowserRouter>
                  <Switch>
                        <Redirect exact from="/" to="/Home" />
                        {routes.map((item, index) => (
                              <RouterPage key={index} path={`${item.path}`} pageComponent={item.component} />
                              // <Route key={index} path={`${item.path}`} component={item.component} />
                        ))}
                  </Switch>
            </BrowserRouter>
      );
}

export default RouterConfig;