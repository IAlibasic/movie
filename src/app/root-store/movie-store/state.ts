import { Movie } from "../../models/movie.model"


export interface State {
    movies: Movie[] | null,
    isLoading: boolean
};

export const initialState: State = {
    movies: null,
    isLoading: false
};