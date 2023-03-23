import Movie from "./Movie";

export default interface MovieResponse {
  results: Movie[];
  total_pages: number;
}
