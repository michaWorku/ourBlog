import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name..."
          className="registerInput"
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="registerInput"
        />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link">Login</Link>{" "}
      </button>
    </div>
  );
}
