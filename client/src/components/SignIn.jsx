import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // login(username, password);z
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        username,
        password,
      });
      console.log(res.data);
      if (res.status === 200) {
        history.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="update-container">
      <div className="update-contents">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
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
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
