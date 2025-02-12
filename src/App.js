import './App.css';
import NavBar from './frontend/appNav';
import InputFields from './frontend/inputFields';
import ReadData from './frontend/readData';
import { useState } from 'react';


function App() {
  const [entries, setEntries] = useState([]);
  const [editObj, setEditObj] = useState({});
  console.log(editObj);
  

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries])
  };
  const handleDelete = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleEdit = (valueObject, index) => {
    setEditObj({...valueObject, index})
  };

  const handleEditEntry = (updateObject, index) => {
    setEntries((prev)=>{
      return prev.map((entry, i)=>{
       return i === index ? updateObject: entry
      })
    })

  }



  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='body'>
        <div className='left-section'>
          <InputFields onAdd={handleAddEntry} editObj={editObj} onEdit={handleEditEntry} setEditObj={setEditObj}/>
        </div>
        <div className='right-section'>
          <ReadData entries={entries} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
      </div>
    </div>
  );
}

export default App;