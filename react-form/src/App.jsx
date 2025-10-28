import { useState } from "react";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
// import Button from "./Components/Button";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zipCode: "",
  });
  function handleNext(e) {
    e.preventDefault(e);

    const newErrors = {};
    if (currentStep === 1) {
      if (formData.fullName === "") {
        newErrors.fullName = "Please enter a name";
      }
      if (formData.email === "") {
        newErrors.email = "Please enter a valid email address";
      }
      if (formData.password.length < 6) {
        newErrors.password = "Password must be longer than 6 characters";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    console.log("all validations passed! move to next step");
    setCurrentStep(2);
  }
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
        handleNext={handleNext}
      />
      {currentStep === 2 ? <Address /> : null}
    </>
  );
}

export default App;
