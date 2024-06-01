import { createAction, props, union } from "@ngrx/store";
import { Movie } from "../../models/movie.model";

export enum ActionTypes {
    LOAD_DATA_REQUEST = "Load Data Request",
    LOAD_DATA_SUCCESS = "Load Data Success",
    SET_SEARCH_VALUE = "Set Search Value",
    NO_ACTION  = "No Action",
    ERROR  = "ERROR Action",
}

export const loadDataRequest = createAction(ActionTypes.LOAD_DATA_REQUEST, props<  { searchValue: string } >());
export const loadDataSuccess = createAction(ActionTypes.LOAD_DATA_SUCCESS, props<  { movies: Array<Movie> } >());
export const setSearchValue = createAction(ActionTypes.SET_SEARCH_VALUE, props<  { searchValue: string } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());


  