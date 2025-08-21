import { NavLink } from "react-router-dom";
import CategoriesMenu from "./categoriesMenu";
import logo from "../../assets/logo.png";
import { MdOutlineTask, MdOutlineSettings } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";
import "./index.css";

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-items">
        <NavLink
          to="/tasks"
          className={({ isActive }) => `navbar-item${isActive ? "-active" : ""}`}
        >
          <MdOutlineTask className="navbar-item-i" />
          <p>Tasks</p>
        </NavLink>

        <CategoriesMenu
          isOpen={isCategoriesOpen}
          toggle={() => setIsCategoriesOpen(!isCategoriesOpen)}
        />

        <NavLink
          to="/settings"
          className={({ isActive }) => `navbar-item${isActive ? "-active" : ""}`}
        >
          <MdOutlineSettings className="navbar-item-i" />
          <p>Settings</p>
        </NavLink>
      </div>

      <div className="logout">
        <RiLogoutBoxLine />
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
