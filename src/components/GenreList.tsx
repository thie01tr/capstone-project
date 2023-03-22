//import './GenreList.css'
import { useEffect, useState } from 'react';
import Genre from '../model/Genre';
import { getGenreLists } from '../services/movieApiService';

const GenreList = () => {
    const [genre, setGenre] =  useState<Genre[]>([]);
                             //useState<Movie[]>([]);
    useEffect(() => {
        const genrelist = getGenreLists().then((res) => setGenre(res.data));
        console.log("genrelist =>", genrelist);
        console.log("genre response =>", genre);
      }, []);

      //{
            
            //console.log("GenreList => ", res);
            //console.log("GenreList results => ", res.results); 
            
            //console.log("Genre  => ", genre); 
        //}
        //);
      
  return (
    <div className='GenreList'>
       <div>
        <>
            {console.log("genre => ", genre)}
        </>
        {genre ? "array exists" : "array empty"}
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
