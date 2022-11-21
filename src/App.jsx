import { useState, useEffect } from "react";
import "./index.css";
import ListInput from "./components/ListInput";
import Item from "./components/Item";
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (value, e) => {
    e.preventDefault();
    value
      ? setList((oldList) => [
          ...oldList,
          { id: nanoid(), value, isEditing: false },
        ])
      : alert("You need to enter something");
  };

  const handleDelete = (e) => {
    let newList;
    const id = e.target.parentNode.id;
    setList((oldList) => {
      return (newList = oldList.filter((item) => item.id !== id));
    });
  };

  const handleEdit = (e) => {
    const id = e.target.parentNode.id;
    const value = e.target.value;
    setList((oldList) => {
      return oldList.map((item) => {
        return item.id === id ? { ...item, value } : item;
      });
    });
  };

  const handleDoubleClickOnBlur = (e, isBlur) => {
    const id = e.target.parentNode.id;
    console.log(e, isBlur);
    setList((oldList) => {
      return oldList.map((item) => {
        return item.id === id
          ? { ...item, isEditing: isBlur ? false : true }
          : item;
      });
    });
  };

  return (
    <div className="App">
      <h1>
        TODO app in <span className="react">Ract</span> +{" "}
        <span className="vite">Vite</span>
      </h1>
      <ListInput handleSubmit={handleSubmit} />
      <ul>
        {list.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleDoubleClickOnBlur={handleDoubleClickOnBlur}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
