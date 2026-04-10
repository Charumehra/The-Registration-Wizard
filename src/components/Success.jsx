import React from "react";
import { CheckCircle, ArrowRight, PartyPopper } from "lucide-react";

const Success = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-emerald-100 p-4 rounded-full">
          <CheckCircle
            className="w-16 h-16 text-emerald-600"
            strokeWidth={2.5}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
          Wizardry Complete!
        </h2>
        <p className="text-gray-500 max-w-[250px] mx-auto text-sm leading-relaxed">
          Your account has been successfully summoned. Welcome to the inner
          circle!
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 w-full flex items-center justify-around">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            Status
          </p>
          <p className="text-emerald-600 font-bold text-sm">Verified</p>
        </div>
        <div className="h-8 w-[1px] bg-gray-200"></div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            Access
          </p>
          <p className="text-indigo-600 font-bold text-sm">Instant</p>
        </div>
      </div>
      <div className="w-full space-y-3 pt-4">
        <Link to="/">
          <button
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            Go to Dashboard
          </button>
        </Link>

        <button
          onClick={onReset}
          className="text-gray-400 hover:text-gray-600 text-xs font-semibold underline underline-offset-4 decoration-gray-200 hover:decoration-gray-400 transition-all"
        >
          Start a new registration
        </button>
      </div>

      <div className="flex gap-2">
        <PartyPopper className="w-4 h-4 text-amber-700 animate-bounce" />
        <span className="text-[10px] text-gray-900 font-medium uppercase tracking-[0.2em]">
          Magical Registration Inc.
        </span>
      </div>
    </div>
  );
};

export default Success;
