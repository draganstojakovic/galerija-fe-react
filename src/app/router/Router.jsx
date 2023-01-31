import { Switch, Route } from "react-router-dom";
import GuestRoute from "../common/GuestRoute";
import GuardedRoute from "../common/GuardedRoute";
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";
import { AllGalleriesPage } from "../views/AllGalleriesPage";
import { MyGalleriesPage } from "../views/MyGalleriesPage";
import { CreateNewGalleryPage } from "../views/CreateNewGalleryPage";
import { SingleGalleryPage } from "../views/SingleGalleryPage";

const Router = () => {
  return (
    <Switch>
      <Route component={AllGalleriesPage} exact path="/" />
      <GuardedRoute component={MyGalleriesPage} path="/my-galleries" />
      <GuardedRoute component={SingleGalleryPage} path="/galleries/:id" />
      <GuardedRoute component={CreateNewGalleryPage} path="/create" />
      <GuestRoute component={LoginPage} path="/login" />
      <GuestRoute component={RegisterPage} path="/register" />
    </Switch>
  );
};

export default Router;
