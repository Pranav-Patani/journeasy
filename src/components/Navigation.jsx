import { FaUser, FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navigation = ({handleSearch, places}) => {
  const {isAuthenticated} = useAuth0();
  const list = places.filter(({inWishlist})=>inWishlist);
  return (
    <>
      <div className="header">
        <nav className="header__logo-box">
          <NavLink className="header__logo-box-nav" to="/">
            <h2 className="heading-secondary header__logo-box-nav__text">journeasy</h2>
          </NavLink>
        </nav>
        <div className="header__search-bar-container">
          <input
            className="header__search-bar-container-bar"
            type="text"
            placeholder="Search for Places"
            onChange={(e)=>handleSearch(e)}
          />
          <span className="header__search-bar-container-bottom"></span>
        </div>

        <nav className="header__nav-container">
          <NavLink className="header__nav-container-item" to="/">
            <h1 className="header__nav-container-item">Home</h1>
            <span className="header__nav-container-item__bottom"></span>
          </NavLink>
          <NavLink className="header__nav-container-item" to={isAuthenticated ? "/profile" : "/login"}>
            <FaUser className="header__nav-container-item"/>
            <span className="header__nav-container-item__bottom"></span>
          </NavLink>
          <NavLink className="header__nav-container-item" to={isAuthenticated ? "/liked" : "/login"}>
            <FaHeart className="header__nav-container-item"/>
            <span className="header__nav-container-item__bottom"></span>
            {isAuthenticated ? <div className="header__nav-container-item__counter">{list?.length}</div> : <div></div>}
          </NavLink>
        </nav>
      </div>
    </>
  );
};
