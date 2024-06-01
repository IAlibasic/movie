import { MoviesState } from "./movie-store";


export interface State {
    movies: MoviesState.State | null;
}

export const initialState: State = {
    movies: null
}