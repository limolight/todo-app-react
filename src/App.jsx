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
    if (value) {
      return setList((oldList) => [
        ...oldList,
        { id: nanoid(), value: value, isEditing: false },
      ]);
    } else {
      return alert("You need to enter something");
    }
  };

  const handleDelete = (e) => {
    let newList = [];
    const id = e.target.parentNode.id;
    setList((oldList) => {
      newList = oldList.filter((item) => item.id !== id);
      return newList;
    });
  };

  const handleEdit = (e) => {
    setList((oldList) => {
      return oldList.map((item) => {
        if (item.id === e.target.parentNode.id) {
          return { ...item, value: e.target.value };
        } else {
          return item;
        }
      });
    });
  };

  const handleDoubleClick = (e) => {
    const id = e.target.parentNode.id;
    setList((oldList) => {
      return oldList.map((item) => {
        if (item.id === id) {
          return { ...item, isEditing: true };
        } else {
          return item;
        }
      });
    });
  };

  const handleBlur = (e) => {
    const id = e.target.parentNode.id;
    setList((oldList) => {
      return oldList.map((item) => {
        if (item.id === id) {
          return { ...item, isEditing: false };
        } else {
          return item;
        }
      });
    });
  };
  const todoList = list.map((item) => {
    const id = item.id;
    const value = item.value;
    return (
      <Item
        key={id}
        id={id}
        value={value}
        isEditing={item.isEditing}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleBlur={handleBlur}
        handleDoubleClick={handleDoubleClick}
      />
    );
  });

  return (
    <div className="App">
      <h1>
        TODO app in <span className="react">Ract</span> +{" "}
        <span className="vite">Vite</span>
      </h1>
      <ListInput handleSubmit={handleSubmit} />
      <ul>{todoList}</ul>
    </div>
  );
}

export default App;
