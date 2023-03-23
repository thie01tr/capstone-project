//import './GenreList.css'
import { useEffect, useState } from "react";
import Genre from "../model/Genre";
import { getGenreLists } from "../services/movieApiService";
import Select from '@mui/material/Select';
//import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const GenreList = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  //useState<Movie[]>([]);
  useEffect(() => {
    getGenreLists().then((res) => {
      setGenre(res.genres);
      console.log("res.data", res.genres);
    });
  }, []);

  return (
    <div className="GenreList">
      <div>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
          {/* <InputLabel shrink htmlFor="select-multiple-native">
            Genre
          </InputLabel> */}
          <Select multiple
          native
          inputProps={{
            id: 'select-multiple-native',
          }}>
          {genre
            ? genre.map((genre) => {
                console.log("download list", genre);
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })
            : ""}
          ;
        </Select>
      </FormControl>
      </div>
    </div>
  );
};

export default GenreList;
