import DeleteIcon from "@mui/icons-material/Delete";
import Input from "../Input/Input";

function ToDo({ text, completed }) {
  if (completed) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input checkbox id={text} />
          <label htmlFor={text} style={{ textDecoration: "line-through" }}>
            {text}
          </label>
        </div>
        <DeleteIcon />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Input checkbox id={text} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}

export default ToDo;
