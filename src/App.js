import "./App.css";
import NavBar from "./components/appNav";
import InputFields from "./components/inputFields";
import ReadData from "./components/readData";
import { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [editObj, setEditObj] = useState({});

  const onAddHandler = async (newEntry) => {
    try {
      const res = await fetch(`http://localhost:5000/addtodo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });

      const data = await res.json();

      if (data.status === "success") {
        let todo = data.data.saveTodo;
        setEntries(entries.concat(todo));
      } else {
        alert("Error adding data");
      }
    } catch (error) {
      alert("Error adding data");
    }
  };

  const onEditHandler = async (updateObject, id) => {
    const res = await fetch(`http://localhost:5000/updatetodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObject),
    });

    const data = await res.json();

    let newtodos = [...entries];

    for (let index = 0; index < newtodos.length; index++) {
      const element = newtodos[index];

      if (element._id === id) {
        newtodos[index].title = updateObject.title;
        newtodos[index].desc = updateObject.desc;
        break;
      }
    }

    if (data.status === "success") {
      setEntries(newtodos);
    } else {
      alert("Error updating data");
    }
  };

  const onDeleteHandler = async (id) => {
    const res = await fetch(`http://localhost:5000/deletetodo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let newTodo = entries.filter((todo) => {
      return todo._id !== id;
    });

    if (res.ok) {
      setEntries(newTodo);
    } else {
      alert("Error deleting data");
    }
  };

  const editButtonHandler = (valueObject, index) => {
    setEditObj({ ...valueObject, index });
  };

  const getAllTodos = async () => {
    try {
      const res = await fetch(`http://localhost:5000/fetchalltodos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.status === "success") {
        setEntries(data.data.todos);
      } else {
        alert("Error fetching data");
      }
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="body">
        <div className="left-section">
          <InputFields
            onAddHandler={onAddHandler}
            onEditHandler={onEditHandler}
            editObj={editObj}
            setEditObj={setEditObj}
          />
        </div>
        <div className="right-section">
          <ReadData
            entries={entries}
            onDeleteHandler={onDeleteHandler}
            editButtonHandler={editButtonHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
