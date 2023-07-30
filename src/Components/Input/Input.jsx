import "./Input.css";
const Input = ({ placeholder, checkbox, id, checked }) => {
  if (checkbox) {
    return <input type="checkbox" id={id} checked={checked} />;
  }
  return (
    <input
      placeholder={placeholder}
      className="w-3/4 p-4 border-solid border border-gray-300 rounded-xl outline-1 transition-all"
    />
  );
};

export default Input;
