import axios from "axios";
import GenreResponse from "../model/GenreResponse";
import Movie from "../model/Movie";
import MovieResponse from "../model/MovieResponse";

// https://image.tmdb.org/t/p/original/{poster_path}
// https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg

const apiKey: string = process.env.REACT_APP_MOVIE_API_KEY || "";

export const getTopRatedMovies = (): Promise<MovieResponse> => {
  console.log("getTopRatedMovies - apikey = ", apiKey);
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

export const getFilteredMovie = (
  genreId?: number,
  lang?: string,
  isAdult?: boolean,
  releaseYear?: number,
  page?: number
): Promise<MovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genreId,
        with_original_language: lang,
        include_adult: isAdult,
        page: page,
        certification: isAdult ? "R" : "",
        certification_country: "US",
        primary_release_year: releaseYear,
        sort_by: "vote_count.desc",
      },
    })
    .then((res) => res.data);
};
