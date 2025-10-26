import { useState } from "react";
import Button from "./Button";
export default function Personal() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  function handleNext(e) {
    e.preventDefault(e);
  }

  return (
    <div className="container">
      <h1>Personal Information</h1>
      <form>
        <label>
          Full Name *
          <input
            name="nameInput"
            type="text"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail *
          <input
            type="email"
            placeholder="johnsmith@example.com"
            name="emailInput"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password*
          <input
            type="password"
            placeholder="Enter Password"
            name="passwordInput"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <Button onClick={handleNext} />
      </form>
    </div>
  );
}
