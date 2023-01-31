import { useState } from "react";
import { UserForm } from "./components/UserForm.component";
import { useDispatch } from "react-redux";
import { registerNewUserAction } from "../store/auth/slice";

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [checkUserPw, setCheckuserPw] = useState({
    confirm_password: "",
  });

  const handleCheckbox = (isChecked) => {
    if (!isChecked) {
      setUser({
        ...user,
        terms: 0,
      });
    } else {
      setUser({
        ...user,
        terms: 1,
      });
    }
  };
  console.log(user, checkUserPw)
  const handleRegisterNewUser = async (e) => {
    e.preventDefault();
    if (
      !user.first_name ||
      !user.last_name ||
      !user.email ||
      !user.password ||
      !checkUserPw.confirm_password
    ) {
      alert("All fields are mandatory.");
      return;
    }
    if (user.password !== checkUserPw.confirm_password) {
      alert("The passwords do not match.");
      return;
    }
    if (!user.terms || user.terms === 0) {
      alert("Please accept terms of usage before submitting.");
      return;
    }
    try {
      dispatch(registerNewUserAction(user));
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <UserForm
      handleSubmit={handleRegisterNewUser}
      user={user}
      onChange={setUser}
      checkPw={checkUserPw}
      onChangeCheckPw={setCheckuserPw}
      formText={"Register"}
      register={true}
      handleCheckbox={handleCheckbox}
    />
  );
};
