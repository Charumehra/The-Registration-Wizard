import React, { useState } from "react";
import { EyeClosed, Eye } from "lucide-react";

const Step2 = ({ register, errors, nextStep, prevStep, isValid }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={`w-full px-4 py-2 border rounded-lg outline-none pr-10 transition-all ${
              errors.password
                ? "border-red-500"
                : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Confirm Password
        </label>
        <div className="relative">
          <input
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            className={`w-full px-4 py-2 border rounded-lg outline-none pr-10 transition-all ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            {showConfirmPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={!isValid}
          className={`w-1/2 py-2 rounded-lg font-bold transition-all ${
            isValid
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
