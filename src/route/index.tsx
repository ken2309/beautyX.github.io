import React from 'react';
import Home from '../features/Home/index';
import SearchResult from '../features/SearchResult/index'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { RouteComponentProps } from '@reach/router';
import MerchantDetail from '../features/MerchantDetail/index';
import Partner from "../features/Partner";
import Cart from "../features/Cart/index"
import Account from "../features/Account";

const RouterPage = (
      props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
function RouterConfig(props: any) {
      const routes = [
            {
                  path: '/Home',
                  component: <Home />
            },
            {
                  path: '/Search-result/',
                  component: <SearchResult />
            },
            {
                  path: '/Merchant-detail/',
                  component: <MerchantDetail />
            },
            {
                  path: "/Partner",
                  component: <Partner />,
            },
            {
                  path: "/Account",
                  component: <Account />,
            },
            {
                  path:"/Cart",
                  component: <Cart/>
            }
      ]
      return (
            <BrowserRouter>
                  <Switch>
                        <Redirect exact from="/" to="/Home" />
                        {routes.map((item, index) => (
                              <RouterPage key={index} path={`${item.path}`} pageComponent={item.component} />
                        ))}
                  </Switch>
            </BrowserRouter>
      );
}

export default RouterConfig;
