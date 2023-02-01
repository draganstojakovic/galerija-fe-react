import { Link } from "react-router-dom";
import { LogOutButton } from "./LogOutButton";

export const Header = () => {
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
    </header>
  );
};
