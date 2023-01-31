import { Switch } from "react-router-dom";
import GuestRoute from "../common/GuestRoute";
// import GuardedRoute from "../common/GuardedRoute";
import { HomePage } from "../views/HomePage";

const Router = () => {
  return (
    <Switch>
      <GuestRoute component={HomePage} exact path="/" />
    </Switch>
  );
};

export default Router;
