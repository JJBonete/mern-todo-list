// client/src/components/SignUp.jsx
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log(handleSubmit);
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/user/register", {
        username,
        password,
      });

      console.log(res.data);

      // Redirect to homepage on successful registration
      if (res.status === 200) {
        history.push("/signin");
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
          <p className="p">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
