import Button from "./Button";
export default function Personal({
  formData,
  handleChange,
  errors,
  handleNext,
}) {
  return (
    <div className="container">
      <h1>Personal Information</h1>
      <form>
        <label>
          Full Name *
          <input
            name="fullName"
            type="text"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <span style={{ color: "red", display: "block" }}>
              {errors.fullName}
            </span>
          )}
        </label>
        <label>
          E-mail *
          <input
            type="email"
            placeholder="johnsmith@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red", display: "block" }}>
              {errors.email}
            </span>
          )}
        </label>
        <label>
          Password*
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: "red", display: "block" }}>
              {errors.password}
            </span>
          )}
        </label>
        <Button onClick={handleNext} />
      </form>
    </div>
  );
}
