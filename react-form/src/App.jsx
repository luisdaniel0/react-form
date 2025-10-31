import { useState } from "react";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
import Review from "./Components/Review";
import ProgressBar from "./Components/ProgressBar";
import "./App.css";

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
  const [errors, setErrors] = useState({});

  function handleNext(e) {
    e.preventDefault();

    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Please enter a name";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Please enter a valid email address";
      }
      if (formData.password.length < 6) {
        newErrors.password = "Password must be longer than 6 characters";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.address.trim()) {
        newErrors.address = "Please enter a street address";
      }
      if (!formData.city.trim()) {
        newErrors.city = "Please enter a city";
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = "Please enter a zip code";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      setCurrentStep(3);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      <div className="container">
        {/* <ProgressBar currentStep={currentStep} /> */}
        {currentStep === 1 && (
          <Personal
            handleChange={handleChange}
            formData={formData}
            errors={errors}
            handleNext={handleNext}
            showPrevious={false}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && (
          <Address
            handleNext={handleNext}
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handlePrev={handlePrev}
            showPrevious={true}
          />
        )}
        {currentStep === 3 && (
          <Review
            formData={formData}
            handlePrev={handlePrev}
            showPrevious={true}
          />
        )}
        /
      </div>
    </>
  );
}

export default App;
