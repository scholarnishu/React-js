import React from "react";
import Menu from "./Menu";
import HeroSection from "./helper/heroSection";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-transperent text-dark p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="mt-2 bg-dark text-warning text-center font-weight-bold">
      <p></p>
    </div>
    <div className="container-fluid">
      <div className="jumbotron bg-info text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        <HeroSection />
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer-block bg-dark mt-auto py-auto">
      <div className="container-fluid bg-info text-black text-center py-3">
        <h5>If you got any questions, feel free to reach out!</h5>
        <button className="btn rounded btn-warning btn-sm">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing<span className="text-white">MERN</span> Project By
          <span className="text-white">
            Nishant Sharma | | Copyrights &copy; 2020
          </span>
        </span>
      </div>
    </footer>
  </div>
);
export default Base;
