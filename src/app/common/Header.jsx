import { Link } from "react-router-dom";
import { LogOutButton } from "./LogOutButton";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light d-flex justify-content-start">
        {!!window.localStorage.getItem("loginToken") ? (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              All Galleries
            </Link>
            <Link to="/my-galleries" style={{ textDecoration: "none" }}>
              {" "}
              My Galleries
            </Link>
            <Link to="/create" style={{ textDecoration: "none" }}>
              {" "}
              Create New Gallery
            </Link>
            <LogOutButton />
          </>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              All Galleries
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              Login
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              {" "}
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
