import "./topbar.css";
import userImg from "../../assets/user.jpg";
import { Link } from "react-router-dom";

function Topbar() {
  const user = true;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li to="/about" className="topListItem">
            <Link className="link">ABOUT</Link>
          </li>
          <li to="write" className="topListItem">
            <Link className="link">WRITE</Link>
          </li>
          <li to="logout" className="topListItem">
            <Link className="link">LOGOUT</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src={userImg} alt="user" className="topImg" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
