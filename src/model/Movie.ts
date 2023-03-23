import Genre from "./Genre";

export default interface Movie {
  //image
  backdrop_pat: string;
  poster_path: string;
  overview: string;
  release_date: string;

  //movielist
  id: number;
  title: string;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  runtime: number;
  genre_ids: [number];
  //vote_average: number,

  //details
  // adult: boolean,
  // genre_ids: number[],
  // original_language: string,
  // original_title: string,
  // overview: string,
  // popularity: number,
  // release_date: Date,
  // video: boolean,
  genres?: Genre[];
}
