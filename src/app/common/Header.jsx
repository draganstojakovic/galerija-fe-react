import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        {!!window.localStorage.getItem("loginToken") ? (
          <>
            <div className="border border-primary">
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                All Galleries
              </Link>
            </div>
            <div className="border border-primary">
              <Link to="/my-galleries" style={{ textDecoration: "none" }}>
                {" "}
                My Galleries
              </Link>
            </div>
            <div className="border border-primary">
              <Link to="/create" style={{ textDecoration: "none" }}>
                {" "}
                Create New Gallery
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="border border-primary">
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                All Galleries
              </Link>
            </div>
            <div className="border border-primary">
              <Link to="/login" style={{ textDecoration: "none" }}>
                {" "}
                Login
              </Link>
            </div>
            <div className="border border-primary">
              <Link to="/register" style={{ textDecoration: "none" }}>
                {" "}
                Register
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
