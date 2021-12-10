import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const PrivateRoute = (props: any) => {
      const { profile } = useContext(AppContext)
      const { ...rest  } = props;
      if (profile) {
            return <Route {...rest} />
      }
      return <Redirect to="/Home" />
}
export default PrivateRoute