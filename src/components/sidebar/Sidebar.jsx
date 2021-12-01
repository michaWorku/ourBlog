import "./sidebar.css";
import blogImg from "../../assets/blog-image-2.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarItemTitle">ABOUT ME</span>
        <img src={blogImg} alt="about me" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quia
          amet? Quisquam nemo et minima blanditiis accusantium sunt atque amet
          aut.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
