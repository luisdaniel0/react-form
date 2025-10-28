import { useState } from "react";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
import Review from "./Components/Review";

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

  // function resetState() {
  //   const newErrors = {};
  //   setErrors(newErrors);
  // }
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
      setErrors({});
      console.log("all validations passed! move to next step");
      setCurrentStep(2);
    }
    if (currentStep === 2) {
      if (formData.address === "") {
        newErrors.address = "Please enter a street address";
      }
      if (formData.city === "") {
        newErrors.city = "Please enter a city";
      }
      if (formData.zipCode === "") {
        newErrors.zipCode = "Please enter a zip code";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      console.log("step 2 passed!");
      setErrors({});
      setCurrentStep(3);
      console.log(currentStep);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    console.log("clicking prev");
    console.log(e);
    if (currentStep === 2) {
      setCurrentStep(1);
    }
    if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <Personal
          handleChange={handleChange}
          formData={formData}
          errors={errors}
          setErrors={setErrors}
          handleNext={handleNext}
          showPrevious={false}
        />
      )}

      {currentStep === 2 && (
        <Address
          handleNext={handleNext}
          formData={formData}
          errors={errors}
          setErrors={setErrors}
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
    </>
  );
}

export default App;
