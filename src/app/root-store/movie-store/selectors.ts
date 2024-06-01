import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';
import { Movie } from '../../models/movie.model';

export const selectState = createFeatureSelector<State>('movies');

const getMovies = (state: State): Movie[] | null => state.movies;
export const selectMovies = createSelector(selectState, getMovies);

const getIsloading = (state: State): boolean => state.isLoading;
export const selectIsLoading = createSelector(selectState, getIsloading);
