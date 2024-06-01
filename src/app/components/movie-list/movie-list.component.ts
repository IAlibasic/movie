import { Component } from '@angular/core';
import { MovieHttpService } from 'src/app/services/movie-http.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { State } from 'src/app/root-store/root-state';
import * as movieActions from '../../root-store/movie-store/actions';
import * as movieSelectors from '../../root-store/movie-store/selectors';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies$ = this.store$.select(movieSelectors.selectMovies);
  isLoading$ = this.store$.select(movieSelectors.selectIsLoading);

  constructor(private movieService: MovieHttpService,  private store$: Store<State>,
    public router: Router) { }

  ngOnInit(): void {
    //this.searchShows();
    this.movies$.subscribe(movie => { 
      console.log(movie)})
    this.store$.dispatch(movieActions.loadDataRequest({searchValue: ""}))
  }

  searchMovies(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    this.store$.dispatch(movieActions.loadDataRequest({searchValue: inputElement.value}))

  }

}
