import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Search({ addItem }) {
  const [value, setValue] = useState("");
  function onSubmit(e) {
    addItem(value);
    e.preventDefault();
    setValue("");
  }
  return (
    <form onSubmit={onSubmit} className="flex justify-around items-center">
      <Input placeholder="Add ToDo" name={value} setValue={setValue} />
      <Button>Add</Button>
    </form>
  );
}
