import './App.css';
import Main from './components/Main';
import Single from './components/Single';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

// omdbapi.com/?apikey=f8e80ec0&i=tt11796304

function App() {
 return (
  <div className="App">
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/movies/:id' element={<Single/>}/>
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;