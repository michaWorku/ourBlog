import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className="loginInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="loginInput"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link">Register</Link>{" "}
      </button>
    </div>
  );
}
