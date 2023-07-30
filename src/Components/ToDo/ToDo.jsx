import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function ToDo({ text, completed, onComplete, onDelete }) {
  if (completed) {
    return (
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <button>
            <CheckBoxIcon color="primary" onClick={onComplete} />
          </button>
          <p className="line-through">{text}</p>
        </div>
        <div>
          <button>
            <DeleteIcon sx={{ color: "red" }} onClick={onDelete} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <button>
        <CheckBoxOutlineBlankIcon color="primary" onClick={onComplete} />
      </button>
      <p>{text}</p>
    </div>
  );
}

export default ToDo;
