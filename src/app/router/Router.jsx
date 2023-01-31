import { Switch } from "react-router-dom";
import GuestRoute from "../common/GuestRoute";
// import GuardedRoute from "../common/GuardedRoute";
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";
import { AllGalleriesPage } from "../views/AllGalleriesPage";
import { MyGalleriesPage } from "../views/MyGalleriesPage";
import { CreateNewGalleryPage } from "../views/CreateNewGalleryPage";

const Router = () => {
  return (
    <Switch>
      <GuestRoute component={AllGalleriesPage} exact path="/" />
      <GuestRoute component={MyGalleriesPage} path="/my-galleries" />
      <GuestRoute component={CreateNewGalleryPage} path="/create" />
      <GuestRoute component={LoginPage} path="/login" />
      <GuestRoute component={RegisterPage} path="/register" />
    </Switch>
  );
};

export default Router;

// rute su guest privremeno
