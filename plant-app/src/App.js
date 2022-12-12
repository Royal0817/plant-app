import './App.css';
import axios from 'axios'
import React, {useState } from 'react'


function App() {
  const [file, setFile] = useState()

  function handleChange(e) {
    setFile(e.target.files[0])
  
  }
  return (
    <div className="app">
      <form action="">
        <h1>file upload</h1>
        <input type="file" onChange={handleChange} />
        <button type='submit'>upload</button>
      </form>
    </div>
  );
}

export default App;
