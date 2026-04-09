import React from "react";

const Step1 = ({ register, errors, nextStep }) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Personal Info</h2>
      
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input 
          {...register("firstName")} 
          className={`w-full border p-2 rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input 
          {...register("lastName")}
          className={`w-full border p-2 rounded ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
      </div>
<div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input 
          {...register("dob")}
          type="date"
          max={today}
          className={`w-full border p-2 rounded ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
      </div>
      <button                                                                                                     
        type="button" 
        onClick={nextStep}
        className="w-full bg-indigo-600 text-white py-2 rounded shadow hover:bg-indigo-700"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;