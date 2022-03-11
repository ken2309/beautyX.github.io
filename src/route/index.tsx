import React, { useContext } from "react";
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
import ServicesUser from "../features/ServiceUser";
import DatePicker from "../components/DatePicker"
import { AppContext } from "../context/AppProvider";
import SearchResults from '../features/SearchResults/index';
import HomeTags from "../features/HomeResults/HomeTags";
import HomePromo from "../features/HomeResults/HomePromo";
import HomeProvince from "../features/HomeResults/HomeProvince";
import HomeListProvince from "../features/HomeResults/HomeListProvince";

// feature mobile
import Calendar from "../featuresMobile/Calendar";
import MerchantComment from "../features/MerchantComment";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
function RouterConfig(props: any) {
  const { profile } = useContext(AppContext)
  const routes = [
    {
      path: `/home`,
      component: <Home />,
    },
    // {
    //   path: `/beta`,
    //   component: <Home />,
    // },
    {
      path: "/search-result/",
      component: <SearchResult />,
    },
    {
      path:'/ket-qua-tim-kiem/',
      component:<SearchResults/>
    },
    {
      path: "/cart",
      component: <Cart />,
    },
    {
      path: "/product-detail/:name",
      component: <ProductDetail />,
    },
    {
      path: "/service-detail/",
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
    // {
    //   path: "/tai-khoan",
    //   component: <Account />,
    // },
    // {
    //   path: "/Partner",
    //   component: <Partner />,
    // },
    {
      path: "/merchant-comment",
      component: <MerchantComment />,
    },
    {
      path: "/date",
      component: <DatePicker />
    },
    // {
    //   path:''
    // }
    // {
    //   path: "/Calendar",
    //   component: <Calendar />,
    // },
    // {
    //   path: '/goi-dich-vu',
    //   component: <ServicesUser />
    // },
    {
      path: "/org/:subdomain",
      component: <MerchantDetail />,
    },
    {
      path:'/danh-muc/',
      component: <HomeTags/>
    },
    {
      path:'/deal-lam-dep-cuc-HOT',
      component: <HomePromo/>
    },
    {
      path:'/khu-vuc/',
      component: <HomeProvince/>
    },
    {
      path:'/dia-diem-quan-tam',
      component: <HomeListProvince/>
    }
  ];
  const routesPrivate = [
    {
      path:'/goi-dich-vu',
      component:ServicesUser
    },
    {
      path: "/tai-khoan",
      component: Account,
    },
    {
      path: "/partner",
      component: Partner,
    },
    {
      path: "/payment",
      component: CartPayment,
    },
    {
      path: "/Calendar",
      component: Calendar,
    },
    {
      path: "/notifications",
      component: Notification,
    }
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
        {routesPrivate.map((item, index) => (
          <PrivateRoute
            profile={profile}
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
