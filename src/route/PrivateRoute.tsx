import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = (props: any) => {
      const { component: Component, profile, ...rest } = props;
      return (
            <Route
                  {...rest}
                  render={(routeProps: any) =>
                        profile ? (
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