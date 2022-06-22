import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email }, //, role
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card p-4 bg-dark">
        <h4 className="card-header bg-warning text-dark font-weight-bold">
          Admin Navigation
        </h4>
        <ul className="list-group">
          <li className="list-group-item bg-success">
            <Link
              to="/admin/create/category"
              className="nav-link bg-warning text-dark font-weight-bold"
            >
              Create Categories
            </Link>
          </li>
          <li className="list-group-item bg-success">
            <Link
              to="/admin/categories"
              className="nav-link bg-warning text-dark text-success font-weight-bold"
            >
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item bg-success">
            <Link
              to="/admin/create/product"
              className="nav-link bg-warning text-dark text-success font-weight-bold"
            >
              Create Product
            </Link>
          </li>
          <li className="list-group-item bg-success">
            <Link
              to="/admin/products"
              className="nav-link bg-warning text-dark text-success font-weight-bold"
            >
              Manage Products
            </Link>
          </li>
          <li className="list-group-item font-weight-bold bg-secondary">
            <Link
              // to="/admin/orders"
              className="nav-link bg-warning text-dark text-success text-muted"
            >
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-warning">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container  bg-success mb-4 p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
