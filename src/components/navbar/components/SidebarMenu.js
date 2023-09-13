import { NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../../images/ic_close.svg";
import { ReactComponent as TitleFrame } from "../../../images/Frame.svg";
import { ReactComponent as FacebookIcon } from "../../../images/ic_facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../images/ic_instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../../images/ic_linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../../images/ic_twitter.svg";

export default function SidebarMenu({
  closeMenu,
  setCloseMenu,
  handleCloseSidebar,
  navItems,
  matches,
}) {
  const lists = [
    "Home",
    "Activity",
    "Map",
    "Membership",
    "Amazing Places",
    "Popular Place",
    "Join advisory board",
    "Blog",
    "Conect with us",
  ];
  return (
    <div className={`sidebar-menu ${closeMenu ? "hide-sidebar" : ""}`}>
      <div className="close-icon">
        <CloseIcon onClick={handleCloseSidebar} />
      </div>
      <div className="sidebar-lists">
        {lists.map((item, index) => (
          <NavLink key={index}>{item}</NavLink>
        ))}
        {navItems &&
          navItems.map((item, index) => <NavLink key={index}>{item}</NavLink>)}
      </div>
      <div className="frame">
        <TitleFrame />
      </div>
      <div className="social-icons">
        <span>Follow US</span>
        <div className="icons">
          <LinkedInIcon />
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}
