import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark testnav ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/about us" className="nav-link" href="#">
                About us
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/tools"
                className="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tools
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/tools/garden" className="dropdown-item" href="#">
                  Garden
                </Link>
                <Link to="/tools/" className="dropdown-item" href="#" />
                <Link
                  to="/tools/repairs and maintenance"
                  className="dropdown-item"
                  href="#"
                >
                  repairs and maintenance
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/tools"
                className="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  to="/services/health-care"
                  className="dropdown-item"
                  href="#"
                >
                  Health-care
                </Link>
                <Link
                  to="/services/maintenance"
                  className="dropdown-item"
                  href="#"
                >
                  Maintenance
                </Link>
                <Link
                  to="/services/car-rental"
                  className="dropdown-item"
                  href="#"
                >
                  Car rental agencies
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/Houses"
                className="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Houses
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/Loisirs/studio" className="dropdown-item" href="#">
                  Studio
                </Link>
                <Link
                  to="/Loisirs/apartments"
                  className="dropdown-item"
                  href="#"
                >
                  Apartments
                </Link>
                <Link
                  to="/Loisirs/boardingHouses"
                  className="dropdown-item"
                  href="#"
                >
                  Boarding Houses
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
