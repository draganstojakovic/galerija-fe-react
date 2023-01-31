import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, ...rest }) => {
  const isAuth = !!window.localStorage.getItem("loginToken");

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default GuestRoute;
