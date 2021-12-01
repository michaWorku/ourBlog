import "./posts.css";
import Post from "../post/Post";
import blogImg from "../../assets/blog-image-3.jpg";

function Posts() {
  return (
    <div className="posts">
      <Post img={blogImg} />
      <Post img={blogImg} />
      <Post img={blogImg} />
      <Post img={blogImg} />
      <Post img={blogImg} />
    </div>
  );
}

export default Posts;
