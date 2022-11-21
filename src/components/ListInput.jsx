import { useState } from "react";

export default function ListInput({handleSubmit}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form
      className="list-input-form"
      onSubmit={(e) => (handleSubmit(value, e), setValue(""))}
    >
      <input
        className="list-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Add an item"
        onChange={handleChange}
        value={value}
      />
      <button className="btn btn-list-input" type="submit">
        Submit
      </button>
    </form>
  );
}
