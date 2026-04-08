import React from 'react';

const Step3 = ({ formData, prevStep }) => {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
        <h3 className="text-indigo-900 font-bold mb-3 border-b border-indigo-200 pb-2 text-center">Summary</h3>
        <div className="space-y-2 text-sm">
          <p><span className="text-gray-500">Name:</span> <span className="font-medium">{formData.firstName} {formData.lastName}</span></p>
          <p><span className="text-gray-500">DOB:</span> <span className="font-medium">{formData.dob}</span></p>
          <p><span className="text-gray-500">Email:</span> <span className="font-medium">{formData.email}</span></p>
        </div>
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={prevStep} className="w-1/2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Edit
        </button>
        <button type="submit" className="w-1/2 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-md font-bold transition-all">
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Step3;