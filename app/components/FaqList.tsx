"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FaqQuestionProps {
  question: string;
  answer: string;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 transition-all duration-300 ease-in-out">
      {/* Question Section */}
      <div
        className={`flex items-center justify-between py-3 px-4 rounded-md cursor-pointer transition-colors duration-500 ease-in-out ${
          isOpen ? "bg-[#5b8e22]" : "bg-[#4c7419]"
        } text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <div className="ml-4">
          {isOpen ? (
            <FaChevronUp className="w-4 h-4" />
          ) : (
            <FaChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Answer Section with smooth transition and lighter background when open */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 bg-gray-50" : "max-h-0 bg-gray-100"
        }`}
      >
        <div className="p-4">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestion;
