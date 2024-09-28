import { Link } from "react-router-dom";
import "./header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Redux/login/action";
import { addToCart } from "../../Redux/cart/action";

export const Header = () => {
  const { cart } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")) || null;
    if (user.user == null && token != null) {
      dispatch(auth(token));
    }
    if (token != null) {
      axios
        .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
        .then(({ data }) => {
          dispatch(addToCart(data.length));
        });
    }
  }, [dispatch, user]);

  return (
    <header>
      <div className="topnavbar">
        <Link className="udemylink" to={"/"}>
          <img className="udemylogo" src="/leeza.png" alt="Leeza Logo" />
        </Link>
        <nav>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              aria-haspopup="true"
              aria-expanded="false"
            >
        Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Diplomas
              </a>
              <a className="dropdown-item" href="#">
                short-term certificate
              </a>
              
            </div>
          </div>
        </nav>
        <div className="searchbar">
          <button>
            <SearchIcon />
          </button>
          <input type="text" placeholder="Search for anything" />
        </div>
        <div>
          <Link className="linkstyle" to={"#"}>
            <span className="nav-span">Leeza Business</span>
          </Link>
        </div>
        <div>
          <Link className="linkstyle" to={"#"}>
            <span className="nav-span">Teach on Leeza</span>
          </Link>
        </div>
        {user?.user && (
          <div>
            <Link className="linkstyle" to={"#"}>
              <span className="nav-span">My learning</span>
            </Link>
          </div>
        )}
        {user?.user && (
          <div>
            <Link to={"/wishlist"}>
              <button className="cart">
                <FavoriteBorderOutlinedIcon />
              </button>
            </Link>
          </div>
        )}
        <div>
          <Link to={"/cart"}>
            <button className="cart">
              <Badge color="secondary" badgeContent={cart}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </button>
          </Link>
        </div>
        {user?.user && (
          <div>
            <Link to={"#"}>
              <button className="cart">
                <Badge color="secondary" badgeContent={0}>
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </button>
            </Link>
          </div>
        )}
        {user?.user && (
          <div>
            <Link to={"#"}>
              <button className="cart">
                <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {user.user?.name[0].toUpperCase()}
                  </Avatar>
                </Badge>
              </button>
            </Link>
          </div>
        )}
        {!user?.user && (
          <>
            <div>
              <Link to={"/join/login-popup"}>
                <button className="login">Log in</button>
              </Link>
            </div>
            <div>
              <Link to={"/join/signup-popup"}>
                <button className="signup">Sign up</button>
              </Link>
            </div>
            <div>
              <Link to={"#"}>
                <button className="lang">
                  <LanguageIcon />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
