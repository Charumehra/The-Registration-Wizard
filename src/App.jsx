import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registrationSchema from "./schemas/formSchemas";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";

const App = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    watch, 
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const watchAllFields = watch();
  const totalFields = 6;

  const filledFields = Object.values(watchAllFields).filter(
    (value) => value !== undefined && value !== "",
  ).length;

  const progressPercentage = (filledFields / totalFields) * 100;

  const nextStep = async () => {
    const fields =
      step === 1
        ? ["firstName", "lastName", "dob"]
        : ["email", "password", "confirmPassword"];

    const isValidStep = await trigger(fields);
    if (isValidStep) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setTimeout(() => {
    setIsSubmitted(true);
  }, 500);
  };

  return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      
      
      {!isSubmitted && (
        <>
          <div className="text-center mb-6">
            
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              The Registration Wizard
            </h1>
            <p className="text-sm text-gray-500 mt-1 font-medium">
              Complete the steps to cast your setup spell.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <h1 className="text-xl font-bold text-gray-800">Registration</h1>
              <p className="text-sm font-medium text-indigo-600">
                {Math.round(progressPercentage)}% Complete
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
              Step {step} of 3
            </p>
          </div>
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted ? (
          <Success onReset={() => { 
            setStep(1); 
            setIsSubmitted(false); 
            reset(); 
          }} />
        ) : (
          <>
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
          </>
        )}
      </form>
    </div>
  </div>
);
};

export default App;
