import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import registrationSchema from './schemas/formSchemas';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange" 
  });

  const nextStep = async () => {
    const fields = step === 1 
      ? ['firstName', 'lastName', 'dob'] 
      : ['email', 'password', 'confirmPassword'];
    
    const isValidStep = await trigger(fields);
    if (isValidStep) setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Submitted!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1 register={register} errors={errors} nextStep={nextStep} />
          )}
          {step === 2 && (
            <Step2 
              register={register} 
              errors={errors} 
              nextStep={nextStep} 
              prevStep={prevStep} 
              isValid={isValid} 
            />
          )}
          {step === 3 && (
            <Step3 formData={getValues()} prevStep={prevStep} />
          )}
        </form>
      </div>
    </div>
  );
};

export default App;