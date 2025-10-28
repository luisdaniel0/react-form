import Button from "./Button";
export default function Address({
  handleNext,
  formData,
  errors,
  handleChange,
  handlePrev,
  showPrevious,
}) {
  return (
    <div className="container">
      <h1 className="formHeader">Address Information</h1>
      <form className="form">
        <label>
          Street Address
          <input
            name="address"
            type="text"
            placeholder="123 Main St"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span style={{ color: "red", display: "block" }}>
              {errors.address}
            </span>
          )}
        </label>
        <label>
          City
          <input
            type="text"
            placeholder="New York"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <span style={{ color: "red", display: "block" }}>
              {errors.city}
            </span>
          )}
        </label>
        <label>
          Zip Code
          <input
            type="text"
            placeholder="10345"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && (
            <span style={{ color: "red", display: "block" }}>
              {errors.zipCode}
            </span>
          )}
        </label>
        <Button
          onClick={handleNext}
          handlePrev={handlePrev}
          showPrevious={showPrevious}
        />
      </form>
    </div>
  );
}
