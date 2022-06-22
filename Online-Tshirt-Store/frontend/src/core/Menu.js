import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <a class="navbar-brand" href="mylogo.png">
      <img
        src="mylogo.png"
        width="40"
        height="40"
        class="d-inline-block align-top"
        alt=""
        loading="lazy"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link
            style={currentTab(history, "/")}
            className="nav-link text-dark font-weight-bold"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link text-dark font-weight-bold"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {isAutheticated() && isAutheticated().user.role === 0 && (
          <li className="nav-item active">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link text-dark font-weight-bold"
              to="/user/dashboard"
            >
              User-Dashboard
            </Link>
          </li>
        )}
        {isAutheticated() && isAutheticated().user.role === 1 && (
          <li className="nav-item active">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link text-dark font-weight-bold"
              to="/admin/dashboard"
            >
              Admin-dashboard
            </Link>
          </li>
        )}
        {!isAutheticated() && (
          <Fragment>
            <li className="nav-item active">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link text-dark font-weight-bold"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link text-dark font-weight-bold"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAutheticated() && (
          <li className="nav-item active">
            <span
              className="nav-link text-warning font-weight-bold"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
        <li>
          <form class="form-inline px-4">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-sm btn-outline-dark my-2 my-sm-0 text-white rounded"
              type="submit"
            >
              Search
            </button>
          </form>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Menu);
