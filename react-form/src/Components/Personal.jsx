import { useState } from "react";
import Button from "./Button";
export default function Personal() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name *
          <input
            name="nameInput"
            type="text"
            placeholder="John Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          E-mail *
          <input
            type="email"
            placeholder="johnsmith@example.com"
            name="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password *
          <input
            type="password"
            placeholder="Enter Password"
            name="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button />
      </form>
    </div>
  );
}
