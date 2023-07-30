import "./Input.css";
const Input = ({ placeholder, name, setValue }) => {
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <input
      placeholder={placeholder}
      className="w-3/4 p-4 border-solid border border-gray-300 rounded-xl outline-1 transition-all"
      value={name}
      onChange={onChange}
    />
  );
};

export default Input;
