import "./Input.css";
const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-3/4 p-4 border-solid border border-gray-300 rounded-xl outline-1 transition-all"
    />
  );
};

export default Input;
