import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = ({ isLoggedIn, handleLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { email, password, rememberMe } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCheckboxChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log(res.data);
      handleLogin();
      navigate('/facebook-integrate');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="container">
      <h1>Login to your account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          required
        />
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={onCheckboxChange}
          />{" "}
          Remember Me
        </label>
        <button className="button" type="submit">Login</button>
      </form>
      <p>
        New to MyApp? <a href="/">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
