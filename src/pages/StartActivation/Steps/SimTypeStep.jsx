import React, { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

function OptionCard({ icon, title, description, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center text-center transition
        ${selected ? "border-red-500" : "border-gray-300"}
        hover:border-red-500`}
    >
      <div className="mb-4 text-red-500">{icon}</div>
      <h3 className="font-semibold mb-2 text-sm">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}

function SimTypeStep({ nextStep, setServiceType }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);  // highlight the selected card
    setServiceType(option);     // tell parent which flow to follow
    nextStep();                 // move to the next step dynamically
  };

  return (
    <div className="max-w-xl mx-auto grid grid-cols-2 gap-6 mb-6">
      <OptionCard
        icon={<Calendar size={32} />}
        title="Schedule Your Service for a Future Date"
        description="Use this option to start service later. Billing begins on the date you select."
        selected={selectedOption === "future"}
        onClick={() => handleSelect("future")}
      />
      <OptionCard
        icon={<ArrowRight size={32} />}
        title="Start Your Service Now"
        description="Service activates immediately, and billing begins at once."
        selected={selectedOption === "now"}
        onClick={() => handleSelect("now")}
      />
    </div>
  );
}

export default SimTypeStep;