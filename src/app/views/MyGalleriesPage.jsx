import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";

export const MyGalleriesPage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(makeSelectAuthUser);

  useEffect(() => {
    dispatch(getAuthUserAction());
  }, [dispatch])

  console.log(authUser)

  return <h1>MyGalleriesPage</h1>;
};
