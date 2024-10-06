import React from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-100 text-green-700 border-green-500",
  error: "bg-red-100 text-red-700 border-red-500",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
  info: "bg-blue-100 text-blue-700 border-blue-500",
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <div
      className={`border-l-4 p-4 rounded-md ${alertStyles[type]} flex justify-between items-center`}
      role="alert"
    >
      <span>{message}</span>
      {onClose && (
        <button
          className="text-xl font-bold px-2 py-0 ml-4 hover:text-opacity-75"
          onClick={onClose}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
