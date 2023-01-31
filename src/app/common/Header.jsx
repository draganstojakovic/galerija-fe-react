import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        {!!window.localStorage.getItem("loginToken") ? (
          <>
            <Link to="/">All Galleries</Link>
            <Link to="/my-galleries">My Galleries</Link>
            <Link to="/create">Create New Gallery</Link>
          </>
        ) : (
          <>
            <Link to="/">All Galleries</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};
