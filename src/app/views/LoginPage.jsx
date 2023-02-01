import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAuthUserAction } from "../store/auth/slice";
import { UserForm } from "./components/UserForm.component";
import { unwrapResult } from "@reduxjs/toolkit";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
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
      dispatch(logInAuthUserAction(user))
      // const unwrap = unwrapResult(response);
      // const resultAction = await dispatch(fetchUserById(userId));
      // const originalPromiseResult = unwrapResult(resultAction);
    } catch (err) {
      console.log("error = ", err);
    }
  };

  // console.log("jebem", errMsg);

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
