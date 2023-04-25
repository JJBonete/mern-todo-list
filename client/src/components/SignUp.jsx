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
    <div>
      <h2> Sign Up </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
};
export default SignUp;
