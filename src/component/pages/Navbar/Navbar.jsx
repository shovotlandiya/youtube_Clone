import React from "react";
import "./Navbar.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Burger from "../../../Assets/img/burger.svg";
import YouTube from "../../../Assets/img/Logo.svg";
import HomeImg from "../../../Assets/img/Home.svg";
import Trending from "../../../Assets/img/Trending.svg";
import Subscription from "../../../Assets/img/Subscriptions.svg";
import Library from "../../../Assets/img/Library.svg";
import History from "../../../Assets/img/History.svg";
import WatchLater from "../../../Assets/img/WatchLater.svg";
import Favourites from "../../../Assets/img/Favourites.svg";
import Liked from "../../../Assets/img/Liked.svg";
import Games from "../../../Assets/img/Games.svg";
import ShowMore from "../../../Assets/img/ShowMore.svg";
import Music from "../../../Assets/img/Music.svg";
import Setting from "../../../Assets/img/Setting.svg";
import Parol from "../../../Assets/img/parol.jpg";
import Dollie from "../../../Assets/img/Dollie.svg"
import Belle from "../../../Assets/img/Belle.svg"
import Nora from "../../../Assets/img/Nora.svg"

import Home from "../home/Home";

function Navbar() {
  const [token, setToken] = React.useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__images">
          <img src={Burger} alt="burger" width="20" />
          <a className="nav__img__link" href="#link">
            <img src={YouTube} alt="YouTube" width="120" />
          </a>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <img src={Parol} alt="Home" width="20" />
            <button
              className="nav__link btn"
              onClick={() => window.localStorage.removeItem('token')}
            >
              To Login
            </button>
          </li>
          <li className="nav__item">
            <img src={HomeImg} alt="Home" width="20" />
            <NavLink className="nav__link" to="">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Trending} alt="Trending" width="20" />
            <NavLink className="nav__link" to="/trending">
              Trending
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Subscription} alt="Subscription" width="20" />
            <NavLink className="nav__link" to="/subscription">
              Subscription
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Library} alt="Library" width="20" />
            <NavLink className="nav__link" to="/library">
              Library
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={History} alt="History" width="20" />
            <NavLink className="nav__link" to="/history">
              History
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={WatchLater} alt="Watch later" width="20" />
            <NavLink className="nav__link" to="/watch">
              Watch later
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Favourites} alt="favourites" width="20" />
            <NavLink className="nav__link" to="/favourites">
              Favourites
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Liked} alt="Liked videos" width="20" />
            <NavLink className="nav__link" to="/liked">
              Liked videos
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Music} alt="Music" width="20" />
            <NavLink className="nav__link" to="/music">
              Music
            </NavLink>
          </li>
          <li className="nav__item">
            <img src={Games} alt="Games" width="20" />
            <NavLink className="nav__link" to="/games">
              Games
            </NavLink>
          </li>
          <li className="nav__item ">
            <img src={ShowMore} alt="Show more" width="20" />
            <NavLink className="nav__link" to="/show">
              Show more
            </NavLink>
          </li>
          <li className="nav__item ">
            <img src={Dollie} alt="Dollie" width="26" />
            <NavLink to="/showMore" className="nav__link">Gussie Singleton</NavLink>
          </li>
          <li className="nav__item ">
            <img src={Nora} alt="Nora" width="26" />
            <NavLink to="/showMore1" className="nav__link">Nora Francis</NavLink>
          </li>
          <li className="nav__item ">
            <img src={Belle} alt="Belle" width="26" />
            <NavLink to="/showMore2" className="nav__link">Belle Briggs</NavLink>
          </li>
          <li className="nav__item">
            <img src={Setting} alt="Settings" width="20" />
            <NavLink className="nav__link" to="/setting">
              Setting
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
