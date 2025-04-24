import React from "react";
import "./Login.css";
import { login } from "../../services/login.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);

  if (!user) {
    const onSubmit = async (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      const username = formData.get("username");
      const password = formData.get("password");

      const result = await login(username, password);

      if (result.status == 200) {
        const jwt = await result.text();
        setUser(jwt);
      } else {
        const error = await result.text();
        console.error(error);
      }
    };

    return (
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" name="login">
            Login
          </button>
        </form>
      </div>
    );
  } else {
    const onClick = () => {
      setUser(null);
    };

    return (
      <div className="login-form">
        <button className="logout" name="logout" onClick={onClick}>
          Logout
        </button>
      </div>
    );
  }
};

export default Login;
