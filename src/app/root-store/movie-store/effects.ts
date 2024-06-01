import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";

import { ActionTypes, loadDataSuccess, noAction } from "./actions";
import { MovieHttpService } from "../../services/movie-http.service";
import { State } from "../root-state";


@Injectable()
export class MoviesEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieHttpService,
        private store$: Store<State>
    ) { }

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.LOAD_DATA_REQUEST),
            switchMap(action => this.movieService.searchShows(action['searchValue']).pipe(
                map(movies => loadDataSuccess({ movies })),
                catchError(() => of(noAction))
            ))
        )
    );

   
}