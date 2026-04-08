import React from 'react';

const Step3 = ({ formData, handleSubmit, prevStep }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
        <p className="text-gray-500 text-sm">Please verify your details before submitting.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3">
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-500 text-sm">Full Name</span>
          <span className="text-gray-800 font-medium">{formData.firstName} {formData.lastName}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-500 text-sm">Date of Birth</span>
          <span className="text-gray-800 font-medium">{formData.dob}</span>
        </div>
        <div className="flex justify-between pt-1">
          <span className="text-gray-500 text-sm">Email</span>
          <span className="text-gray-800 font-medium">{formData.email}</span>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button 
          onClick={prevStep}
          className="w-1/2 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Edit Info
        </button>
        <button 
          onClick={handleSubmit}
          className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-colors"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;