import "./write.css";
import blogImg from "../../assets/blog-image-1.jpg";

export default function Write() {
  return (
    <div className="write">
      <img src={blogImg} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="filte" id="filteInput" style={{ display: "none" }} />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
