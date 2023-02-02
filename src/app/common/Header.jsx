import { Link } from "react-router-dom";
import { LogOutButton } from "./LogOutButton";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getAuthUserAction } from "../store/auth/slice";

export const Header = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAuthUserAction());
  // },[ dispatch])

  return (
    <header>
      <nav className="navbar navbar-light bg-light d-flex justify-content-start">
        {!!window.localStorage.getItem("loginToken") ? (
          <>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <h5>Galerija</h5>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              All Galleries
            </Link>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/my-galleries" style={{ textDecoration: "none" }}>
              {" "}
              My Galleries
            </Link>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/create" style={{ textDecoration: "none" }}>
              {" "}
              Create New Gallery
            </Link>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <LogOutButton />
          </>
        ) : (
          <>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <h5>Galerija</h5>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              All Galleries
            </Link>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              Login
            </Link>
            <div style={{ color: "#f8f9fa" }}>_</div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              {" "}
              Register
            </Link>
          </>
        )}
      </nav>
      <br />
    </header>
  );
};
