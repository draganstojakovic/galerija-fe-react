import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAuthUserAction } from "../store/auth/slice";
import { UserForm } from "./components/UserForm.component";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogInUser = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("One or more field is blank.");
      return;
    }
    try {
      dispatch(logInAuthUserAction(user));
    } catch (err) {
      console.error("jebem");
    }
  };

  return (
    <UserForm
      handleSubmit={handleLogInUser}
      user={user}
      onChange={setUser}
      formText={"Log in"}
      register={false}
    />
  );
};
