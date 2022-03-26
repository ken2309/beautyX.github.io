import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = (props: any) => {
      const { component: Component, profile, ...rest } = props;
      const local = localStorage.getItem("_WEB_TK");
      const sess = window.sessionStorage.getItem("_WEB_TK")
      return (
            <Route
                  {...rest}
                  render={(routeProps: any) =>
                        local || sess ? (
                              <Component {...routeProps} />
                        ) : (
                              <Redirect
                                    to={{
                                          pathname: '/sign-request',
                                          state: { from: routeProps.location }
                                    }}
                              />
                        )
                  }
            />
      )
}
export default PrivateRoute