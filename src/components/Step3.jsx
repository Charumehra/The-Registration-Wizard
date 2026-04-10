import React from 'react';

const Step3 = ({ formData, prevStep }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
        <h3 className="text-indigo-900 font-bold mb-3 border-b border-indigo-200 pb-2 text-center">
          Review Your Details
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Full Name:</span>
            <span className="text-gray-900 font-semibold">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Date of Birth:</span>
            <span className="text-gray-900 font-semibold">{formData.dob}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Email Address:</span>
            <span className="text-gray-900 font-semibold">{formData.email}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button 
          type="button" 
          onClick={prevStep} 
          className="w-1/2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors"
        >
          Back
        </button>
        <button 
          type="submit" 
          className="w-1/2 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-md font-bold transition-all"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Step3;