import "./App.css";
import NavBar from "./components/appNav";
import InputFields from "./components/inputFields";
import ReadData from "./components/readData";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [editObj, setEditObj] = useState({});

  const onAddHandler = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  const onEditHandler = (updateObject, index) => {
    setEntries((prev) => {
      return prev.map((entry, i) => {
        return i === index ? updateObject : entry;
      });
    });
  };

  const onDeleteHandler = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const editButtonHandler = (valueObject, index) => {
    setEditObj({ ...valueObject, index });
  };

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
