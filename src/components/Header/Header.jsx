import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NotificationBell from "./NotificationBell";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="header-start">
        <HamburgerMenu />
        <Logo />
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
      <div className="header-end">
        <div className="create-icon">
        <i className="fa-solid fa-circle-plus" ></i>Create
        </div>
        <NotificationBell />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
