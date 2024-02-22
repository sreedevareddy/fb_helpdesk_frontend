import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const { userName, email, password, rememberMe } = formData;

  const onCheckboxChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://fb-helpdesk-server.vercel.app/api/auth/register", formData);
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="userName"
          value={userName}
          onChange={onChange}
          required
        />
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
        <button className="button" type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
