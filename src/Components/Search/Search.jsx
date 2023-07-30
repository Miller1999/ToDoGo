import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Search() {
  return (
    <div className="flex justify-around items-center">
      <Input placeholder="Add ToDo" />
      <Button>Add</Button>
    </div>
  );
}
