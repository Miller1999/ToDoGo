import DeleteIcon from "@mui/icons-material/Delete";
const Button = ({ children, deleteAll }) => {
  if (deleteAll) {
    return (
      <button className="bg-red-600 text-white w-24 p-4 rounded-xl flex items-center justify-center gap-1">
        <DeleteIcon fontSize="small" /> {children}
      </button>
    );
  } else {
    return (
      <button className="bg-blue-500 text-white w-24 p-4 rounded-xl">
        {children}
      </button>
    );
  }
};

export default Button;
