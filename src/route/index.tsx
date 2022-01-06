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
import SignPage from "../features/SignPage/index";
import SignPageRequest from "../features/SignPageRequest/index";
import Notification from "../features/Notification/index";
import PrivateRoute from "./PrivateRoute";
import CountDown from "../features/CountDown";
import DatePicker from "../components/DatePicker"
//import { AppContext } from "../context/AppProvider";
// feature mobile
import Calendar from "../featuresMobile/Calendar";
import MerchantComment from "../features/MerchantComment";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
function RouterConfig(props: any) {
  //const { t } = useContext(AppContext)
  const routes = [
    {
      path: `/Home`,
      component: <CountDown />,
    },
    {
      path: `/beta`,
      component: <Home />,
    },
    {
      path: "/Search-result/",
      component: <SearchResult />,
    },
    {
      path: "/Merchant-detail/:name",
      component: <MerchantDetail />,
    },
    {
      path: "/Cart",
      component: <Cart />,
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
    {
      path: "/sign-up",
      component: <SignPage />,
    },
    {
      path: "/sign-in",
      component: <SignPage />,
    },
    {
      path: "/sign-request",
      component: <SignPageRequest />,
    },
    {
      path: "/tai-khoan",
      component: <Account />,
    },
    {
      path: "/Partner",
      component: <Partner />,
    },
    {
      path: "/MerchantComment",
      component: <MerchantComment />,
    },
    {
      path:"/date",
      component:<DatePicker/>
    }
    // {
    //   path: "/Calendar",
    //   component: <Calendar />,
    // },
  ];
  const routesPrivate = [
    // {
    //   path: "/tai-khoan",
    //   component: Account,
    // },
    // {
    //   path: "/Partner",
    //   component: Partner,
    // },
    {
      path: "/Payment",
      component: CartPayment,
    },
    {
      path: "/Calendar",
      component: Calendar,
    },
    {
      path: "/Notifications",
      component: Notification,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="Home" />
        {routes.map((item, index) => (
          <RouterPage
            key={index}
            path={`${item.path}`}
            pageComponent={item.component}
          />
        ))}
        {routesPrivate.map((item, index) => (
          <PrivateRoute
            key={index}
            path={`${item.path}`}
            component={item.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
