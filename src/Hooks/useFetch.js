import {useEffect, useState} from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=f8e80ec0`;

export const useFetch = params => {
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(false);
 const [data, setData] = useState(null);

 const fetchMovie = url => {
  setIsLoading(true);
  fetch(url)
  .then(response => response.json())
  .then(data => {
   if(data.response === true) {
    setData(data.Search);
    setError(false);
   }
   else {
    setError(true);
   }
   setIsLoading(false);
  }).catch(error => console.log(error));
 }

 useEffect(() => {
  fetchMovie(`${API_ENDPOINT}${params}`);
 }, [params]);

 return {isLoading, error, data}
}