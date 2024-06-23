import {useContext} from 'react';
import {Data} from '../context/Data';
import Item from './Item';

const Movies = () => {
 const {isLoading, data} = useContext(Data);

 return (
  <div className="row">
    <div className="col">
    <div className='movies-content'>
   {
    !isLoading ? data.map(item => (
     <Item
      key={item.imdbID}
      id={item.imdbID}
      title={item.Title}
      type={item.Type}
      year={item.Year}
      poster={item.Poster}
     />
   )) : ''}
  </div>
    </div>
  </div>
 );
}

export default Movies;