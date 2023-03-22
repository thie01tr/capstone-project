//import './GenreList.css'
import { useEffect, useState } from 'react';
import Genre from '../model/Genre';
import { getGenreLists } from '../services/movieApiService';

const GenreList = () => {
    const [genre, setGenre] =  useState<Genre[]>([]);
                             //useState<Movie[]>([]);
    useEffect(() => {
        getGenreLists().then((res) => {
          setGenre(res.genres)
          console.log("res.data", res.genres)
        });
      }, [genre]);
      
  return (
    <div className='GenreList'>
       <div>
          <select>
            {genre ? genre.map((genre) => {
                console.log("download list", genre)
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })
            :""};
          </select>
        </div>
    </div>
  )
};

export default GenreList;
