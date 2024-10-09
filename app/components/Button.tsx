type btn = {
  value: string;
  type: "button" | "submit" | "reset";
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({ value, type, click }: btn) => {
  return (
    <div>
      <button
        type={type}
        onClick={click}
        className="bg-[#f3a13f] py-3 sm:text-lg text-base text- sm:px-6 px-4 text-white rounded-md text-center hover:scale-105 transition-all hover:bg-[#e3bf94]"
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
