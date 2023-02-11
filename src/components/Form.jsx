import {useState, useContext} from 'react';
import {Data} from '../context/Data';

const Form = () => {
 const [title, setTitle] = useState('');
 const {setSearch, error} = useContext(Data);

 const handleSubmit = event => {
  setSearch(title);
  console.log('data: ', title);
  event.preventDefault();
 }

 return (
  <div className='form-search'>
   <h2 className='mb-4'> Movies Finder </h2>
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Movie/Serie Title' onChange={event => setTitle(event.target.value)}/>
    <input type='submit' value='Buscar'/>
   </form>
   {error && <p className='error'> This movie, doesn't exist </p>}
  </div>
 );
}

export default Form;