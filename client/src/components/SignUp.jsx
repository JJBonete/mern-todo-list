// client/src/components/SignUp.jsx
import React, { useState } from "react";
import { AuthContext } from "../AuthContext";

const SignUp = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <h2> Sign Up </h2>{" "}
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
        <button type="submit"> Sign Up </button>{" "}
      </form>{" "}
    </div>
  );
};
export default SignUp;
