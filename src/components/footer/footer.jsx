import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer pt-lg-1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-white">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img src="image/menu%20copy.png" alt="" />
              </span>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="image/Group1.png" alt="" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link mr-lg-3 ml-lg-4" to="/kurslar">
                    Kurslar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-3" to="/bolimlar">
                    Bo'limlar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-3" to="/topshiriqlar">
                    Topshiriqlar
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="badge">
                  <img src="image/telegram.png" alt="" />
                </div>
                <div className="badge mx-lg-1">
                  <img src="image/instagram.png" alt="" />
                </div>
                <div className="badge">
                  <img src="image/facebook-logo.png" alt="" />
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
