import './App.css';
import NavBar from './frontend/appNav';
import InputFields from './frontend/inputFields';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='left-section'>
        <InputFields />
      </div>
      
    </div>
  );
}

export default App;