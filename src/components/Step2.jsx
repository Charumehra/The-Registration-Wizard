import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Step2 = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Account Details</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 mb-1 rounded"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-1 rounded pr-10"
        />

        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>

      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
      )}

      <div className="relative">
        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border p-2 mb-1 rounded pr-10"
        />

        <span
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>

      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mb-2">
          {errors.confirmPassword}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={
            errors.email ||
            errors.password ||
            errors.confirmPassword ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
          }
          className="bg-indigo-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;