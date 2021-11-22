import React from "react";
import Header from "../features/Header/index";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { RouteComponentProps } from "@reach/router";
import Partner from "../features/Partner";
import PopupAppointInfor from "../components/PopupAppointInfor";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
function RouterConfig(props: any) {
  const routes = [
    {
      path: "/Home",
      component: <Header />,
    },
    {
      path: "/Partner",
      component: <Partner />,
    },
    {
      path: "/popup",
      component: <PopupAppointInfor />,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/Home" />
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
