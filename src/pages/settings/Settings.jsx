import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import userImg from "../../assets/user.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTittle">
          <span className="settingsTiteUpdate">Update Your Account</span>
          <span className="settingsTiteDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={userImg} alt="user profile" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
              {""}
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="onesimus" name="name" />
          <label>Email</label>
          <input type="email" placeholder="onesimus@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
