import { FormEvent, useEffect, useState } from 'react';
import Genre from '../model/Genre';
import { getGenreLists } from '../services/movieApiService';
//import './GenreList.css'

interface Props
{
    genre: Genre[]
}

const GenreList = () => {
    const [genre, setGenre] =  useState<Genre[]>([]);
    useEffect(() => {
        getGenreLists().then((res) => setGenre(genre));
      }, []);
    
      let handleGenreChange = (e: FormEvent) => {
        e.preventDefault();
        setGenre(e.target.)
      }

  return (
    <div className='GenreList'>
        <DropDown
    </div>
  )
};

export default GenreList;
