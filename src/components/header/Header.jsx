import "./header.css";
import blogImg from "../../assets/blog-image-1.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={blogImg} alt="blog" className="headerImg" />
    </div>
  );
}

export default Header;
