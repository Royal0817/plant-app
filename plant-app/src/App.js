import './App.css';
import axios from 'axios'
import React, {useState} from 'react'
// import Results from './components/Results.jsx'


function App() {
  const [file, setFile] = useState([])
  // const [isFilePicked, setIsFilePicked] = useState(false)

  function handleChange(e) {
    setFile(e.target.files[0])
    // setIsFilePicked(true)
  }

  function handleSubmit(e) {
    // let instance = axios.create ({validateStatus: function (status) {
    //   return status >= 200 && status < 500; 
    // },})
    // console.log(instance)
    e.preventDefault()
    const baseURL = `http://localhost:3000/uploadFile`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'Content-Type' : 'multipart/form-data',
      },
    };
    axios.post(baseURL, formData, config).then((response) => {
        console.log(response.data);
        
    }
    
    ) ;
  
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange}/>
        <button type="submit">Upload</button>
        {/* <Results /> */}
      </form>
    </div>
  );
}

export default App;
