import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const App = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    let newErrors = { ...errors };

    if (name === "email") {
      const emailRegex = /^\S+@\S+\.\S+$/;

      if (!emailRegex.test(value)) {
        newErrors.email = "Enter a valid email (must include @ and domain)";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      const passwordRegex = /^.{8,}$/;

      if (!passwordRegex.test(value)) {
        newErrors.password = "Password must be at least 8 characters";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "password" || name === "confirmPassword") {
      const passwordValue =
        name === "password" ? value : updatedFormData.password;

      const confirmValue =
        name === "confirmPassword"
          ? value
          : updatedFormData.confirmPassword;

      if (passwordValue !== confirmValue) {
        newErrors.confirmPassword = "Passwords do not match";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    alert("Form Submitted Successfully ✅");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <p className="text-center mb-2 font-medium text-gray-600">
          Step {step} of 3
        </p>

        <div className="w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="bg-indigo-600 h-2 rounded transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= num
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {num}
              </div>

              {num < 3 && (
                <div
                  className={`w-12 h-1 ${
                    step > num ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default App;