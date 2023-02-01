import { useDispatch } from "react-redux";
import { logOutUserAction } from "../store/auth/slice";

export const LogOutButton = () => {
  const dispatch = useDispatch();

  const handleLogOutUser = () => {
    try {
      dispatch(logOutUserAction());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => handleLogOutUser()}
    >
      Log Out
    </button>
  );
};
