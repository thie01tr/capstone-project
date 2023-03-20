import axios from "axios";
import { MovieDetailResponse } from "../model/MovieDetailResponse";
import Movie from "../model/Movie";
import MovieResponse from "../model/MovieResponse";

// https://image.tmdb.org/t/p/original/{poster_path}
// https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg

const apiKey: string = process.env.REACT_APP_MOVIE_API_KEY || "";


export const getTopRatedMovies = (): Promise<MovieResponse> => {
    console.log("apikey = " , apiKey);
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};

// export const getMoviesRelatedByLists = (
//   id: string
// ): Promise<GiphyResponse> => {
//   return axios
//     .get("https://api.themoviedb.org/3/movie/${id}/lists", {
//       params: {
//         api_key: apiKey,
//         q: id,
//       },
//     })
//     .then((res) => res.data);
// };

export const getMovieById = (id: string): Promise<Movie> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};