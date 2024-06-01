import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MoviesStoreModule } from './movie-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot([
      // routes
    ]),
    StoreRouterConnectingModule.forRoot(),
    MoviesStoreModule
  ]
})
export class RootStoreModule { }
