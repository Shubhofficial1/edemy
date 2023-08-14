import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    const { data } = await axios.post("/api/register", {
      name,
      email,
      password,
    });
    console.log("API RESPONSE : ", data);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Register Page</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type={"submit"}> Submit </button>
        </form>
      </div>
    </>
  );
};

export default Register;
