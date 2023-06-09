import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateTodo() {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <Link to="/home">
        <button type="button" className="button button-back">
          back
        </button>
      </Link>

      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
            placeholder="title"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            spellCheck="true"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input-description"
            placeholder="description"
          />
          <button type="submit" className="button button-size">
            create todo
          </button>
        </form>
      </section>
    </section>
  );
}
