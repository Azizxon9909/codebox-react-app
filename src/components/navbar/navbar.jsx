import React, { Component } from "react";
import { Link , NavLink} from "react-router-dom";
import "./navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-white bg-white">
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
              <img src="image/Group.png" alt="" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/kurslar">
                    Kurslar
                  </NavLink>
                </li>

                <li className="nav-item mx-lg-1">
                  <NavLink className="nav-link" to="/bolimlar">
                    Bolimlar
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/topshiriqlar">
                    Topshiriqlar
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btnA">
                  <img className="sss" src="image/search.png" alt="" />
                </button>
                <button className="btn btnA">
                  <img className="sss" src="image/bell.png" alt="" />
                </button>
                <img className="sss ml-1" src="image/image.png" alt="" />
                <dl className="ml-lg-3">
                  <dt>Azizxon Jalilov</dt>
                  <dd>Tarif: 6 oy | 22. 11. 2020</dd>
                </dl>
                <div className="dropdown">
                  <button
                    className="btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img className="" src="image/Group%203.png" alt="" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="/dashboard">
                      Sozlamalar
                    </NavLink>
                    <NavLink className="dropdown-item" to="/tolovlar">
                      To'lovlar
                    </NavLink>
                    <NavLink className="dropdown-item" to="/chiqish">
                      Chiqish
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
