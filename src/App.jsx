import './App.css';
import Form from './components/Form';
import Movies from './components/Movies';

// omdbapi.com/?apikey=f8e80ec0&s=superman

// omdbapi.com/?apikey=f8e80ec0&i=tt11796304

function App() {
 return (
  <div className="App">
   <Form/>
   <Movies/>
  </div>
 );
}

export default App;