import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-content">

        <Link to="/" className="logo">
          🎬 MovieExplorer
        </Link>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/movies">
            Movies
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;