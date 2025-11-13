import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");

  //   const handleChange = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(`Welcome,${name}`);
  //   };

  //   const [formData, setFormData] = useState({ email: "", password: "" });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(`Email:${formData.email}\nPassword:${formData.password}`);
  //   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("InValid Email Address");
      return;
    }

    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Signup Successful!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
