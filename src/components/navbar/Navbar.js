import "./Navbar.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as ProfileImg } from "../../images/ic_user_profile.svg";
import { ReactComponent as SideMenu } from "../../images/ic_side_menu.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  const navcategories = [
    "advanture",
    "popular places",
    "products",
    "tranding places",
  ];

  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const handldeSidebar = () => {
    setHamburger(true);
    setCloseMenu(false);
  };
  const handleCloseSidebar = () => {
    setHamburger(false);
    setCloseMenu(true);
  };

  return (
    <div className="navbar">
      <div>
        <Logo className="mileaway-logo" />
      </div>
      <div className="nav-category">
        {navcategories.map((item, index) => (
          <NavLink key={index}>{item}</NavLink>
        ))}
      </div>
      <div className="others">
        <div>
          <select>
            <option value="en">en</option>
          </select>
          <button className="add-advanture">add your advanture</button>
          <div className="profile">
            <ProfileImg />
          </div>
        </div>
        <label className="hamburger-menu">
          <SideMenu className="sidebar" onClick={handldeSidebar} />
        </label>
      </div>
      <div className="sidebar-nav">
        <SidebarMenu
          closeMenu={closeMenu}
          setCloseMenu={setCloseMenu}
          handleCloseSidebar={handleCloseSidebar}
          navItems={matches && navcategories}
        />
      </div>
    </div>
  );
}
