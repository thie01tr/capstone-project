import axios from "axios";
import GenreResponse from "../model/GenreResponse";
import Movie from "../model/Movie";
import MovieResponse from "../model/MovieResponse";

// https://image.tmdb.org/t/p/original/{poster_path}
// https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg

const apiKey: string = process.env.REACT_APP_MOVIE_API_KEY || "";

export const getTopRatedMovies = (page:number): Promise<MovieResponse> => {
  console.log("getTopRatedMovies - apikey = ", apiKey);
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        api_key: apiKey,
        page:page
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

export const getGenreLists = (): Promise<GenreResponse> => {
  console.log("getGenreLists - apikey = ", apiKey);
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => {
      console.log("getGenreLists api call", res);
      return res.data;
    });
};
