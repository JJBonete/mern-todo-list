// client/src/components/SignUp.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";

const SignUp = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
    try {
      const res = await axios.post("http://localhost:8000/api/user/register", {
        username,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="update-container">
      <div className="update-contents">
        <form className="form-container">
          <h2> Sign Up </h2>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="button button-size" type="submit">
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
