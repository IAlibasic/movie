import { Action, createReducer, on } from "@ngrx/store";
import { initialState, State } from "./state";
import * as actions from './actions';


const deviceReducer = createReducer (
    initialState,
    on(actions.loadDataRequest, (state: State) => {
      const tmpState = { ... state };
      tmpState.isLoading = true
      return tmpState;
    }),
    on(actions.loadDataSuccess, (state: State, { movies }) => {
      const tmpState = { ... state };
      tmpState.movies = movies,
      tmpState.isLoading = false
      return tmpState;
    }),
  
);

export function reducer(state: State | undefined, action: Action ) {
    return deviceReducer(state, action)
}