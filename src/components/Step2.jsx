import React from 'react';

const Step2 = ({ register, errors, nextStep, prevStep, isValid }) => {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input 
          {...register("email")}
          type="email"
          className={`w-full px-4 py-2 border rounded-lg outline-none ${
            errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-indigo-500'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
        <input 
          {...register("password")}
          type="password"
          className={`w-full px-4 py-2 border rounded-lg outline-none ${
            errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-indigo-500'
          }`}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
        <input 
          {...register("confirmPassword")}
          type="password"
          className={`w-full px-4 py-2 border rounded-lg outline-none ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-indigo-500'
          }`}
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex gap-3 pt-4">
        <button type="button" onClick={prevStep} className="w-1/2 py-2 border border-gray-300 rounded-lg">
          Back
        </button>
        <button 
          type="button" 
          onClick={nextStep} 
          disabled={!isValid}
          className={`w-1/2 py-2 rounded-lg font-bold transition-all ${
            isValid ? "bg-indigo-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;