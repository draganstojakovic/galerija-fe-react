import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">All Galleries</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Link to="/my-galleries">My Galleries</Link>
        <Link to="/create">Create New Gallery</Link>
      </nav>
    </header>
  );
};
