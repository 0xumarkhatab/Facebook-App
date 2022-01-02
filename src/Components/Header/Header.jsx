import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";
import { NotificationsActive } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="fb-logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="dropdown__middle__menu">
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <IconButton className="IconButton">
            <Avatar src={user.photoURL} />
          </IconButton>
          <h4>{user.displayName}</h4>
        </div>

        <div className="right__menu">
          <IconButton>
            <Add className="right__menu__icon" />
          </IconButton>
          <IconButton>
            <Forum className="right__menu__icon" />
          </IconButton>
          <IconButton>
            <NotificationsActive className="right__menu__icon" />
          </IconButton>
          <IconButton>
            <ExpandMore className="right__menu__icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
