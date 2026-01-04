import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <header className="header">
        <p>Performance Demo</p>
        <nav className="nav-header">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/products" className="nav-links">
            Products
          </Link>
          <Link to="/heavy-component" className="nav-links">
            Heavy Component
          </Link>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
