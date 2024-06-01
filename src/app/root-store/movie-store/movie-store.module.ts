import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers";
import { MoviesEffects } from "./effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', reducer),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesStoreModule { }