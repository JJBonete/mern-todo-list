// client/src/components/SignUp.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";


const SignUp = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log(handleSubmit)
    e.preventDefault();
    
    login(username, password);
    
    try {
      const res = await axios.post("http://localhost:8000/api/user/register", {
        username,
        password,
      });
      
      console.log(res.data);
      login(username, password);
  
      // Redirect to homepage on successful registration
      if (res.status === 200) {
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <section className="update-container">
      <div className="update-contents">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2> Sign Up </h2>
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
      </div>
    </section>
  );
};
export default SignUp;
