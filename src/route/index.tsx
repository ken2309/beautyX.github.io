import React from "react";
import Home from "../features/Home/index";
import SearchResult from "../features/SearchResult/index";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { RouteComponentProps } from "@reach/router";
import MerchantDetail from "../features/MerchantDetail/index";
import Partner from "../features/Partner";
import Cart from "../features/Cart/index";
import CartPayment from "../features/CartPayment/index";
import Account from "../features/Account";
import ProductDetail from "../features/ProductDetail";
import ServiceDetail from "../features/ServiceDetail";
import PopupAppointInfor from "../features/PopupAppointInfor";
//import { AppContext } from "../context/AppProvider";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
function RouterConfig(props: any) {
  //const { t } = useContext(AppContext)
  const routes = [
    {
      path: `/Home`,
      component: <Home />,
    },
    {
      path: "/Search-result/",
      component: <SearchResult />,
    },
    {
      path: "/Merchant-detail/",
      component: <MerchantDetail />,
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
      path: "/Cart",
      component: <Cart />,
    },
    {
      path: "/Payment",
      component: <CartPayment />,
    },
    {
      path: "/Product-detail/:name",
      component: <ProductDetail />,
    },
    {
      path: "/Service-detail/",
      component: <ServiceDetail />,
    },
    {
      path: "/popup",
      component: <PopupAppointInfor />,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="home" />
        {routes.map((item, index) => (
          <RouterPage
            key={index}
            path={`${item.path}`}
            pageComponent={item.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
