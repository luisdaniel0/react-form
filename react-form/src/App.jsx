import { useState } from "react";
import Personal from "./Components/Personal";
// import Button from "./Components/Button";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Personal
        handleChange={handleChange}
        formData={formData}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
}

export default App;
