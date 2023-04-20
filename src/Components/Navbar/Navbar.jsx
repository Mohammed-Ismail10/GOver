import React, { useContext } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { loginContext } from "../../Context/loginContext.js";

export default function Navbar() {
  let { userData,logOut } = useContext(loginContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand font-logo" to="/">
            <img style={{ width: "4rem" }} src={logo} alt="logo game over" />
            Game Over
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-3" id="collapsibleNavId">
            {userData?<ul className="navbar-nav me-auto mt-2 mt-lg-0 align-items-center justify-content-lg-start">
              <li className="nav-item m-2 w-100">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-2 w-100">
                <Link className="nav-link " to="/all">
                  All
                </Link>
              </li>
              <li className="nav-item dropdown w-100">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`platform/pc`}>
                      pc
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`platform/browser`}>
                      browser
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  sort-by
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`sort-by/release`}>
                      release-date
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`sort-by/poularity`}>
                      poularity
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`sort-by/alphabetical`}>
                      alphabetical
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`sort-by/relevance`}>
                      relevance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`category/racing`}>
                      racing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/sports`}>
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/social`}>
                      social
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/shooter`}>
                      shooter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/open`}>
                      open-world
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/zombie`}>
                      zombie
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/fantasy`}>
                      fantasy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/actionr`}>
                      action-rpg
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/action`}>
                      action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/flight`}>
                      flight
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`category/battle`}>
                      battle-royale
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>:null}

            <ul className="navbar-nav mt-2 mt-lg-0 justify-content-lg-end w-100 text-center align-items-lg-center">
              {userData ? (
                <li className="nav-item m-2">
                  <Link
                  onClick={logOut}
                    className="nav-link text-primary btn-noneBg btn btn-outline-primary py-1"
                    to="login"
                  >
                    Log Out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item m-2">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item m-2">
                    <Link
                      className="nav-link text-primary btn-noneBg btn btn-outline-primary py-1"
                      to="/register"
                    >
                      Join Free
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
