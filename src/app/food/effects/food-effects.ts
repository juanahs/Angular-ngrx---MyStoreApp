import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ACTIONS } from '../models/action.const';
import { FoodService } from '../services/food.service';

@Injectable()
export class FoodEffects {

  miEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.GET_FOODS),
      mergeMap(() =>
        this.foodService.getFoods().pipe(
          map((data) => ({ type: ACTIONS.GET_FOODS_SUCCESS, payload: data })),
          catchError(() => of({ type: ACTIONS.GET_FOODS_FAILED }))
        )
      )
    )
  );
  constructor(private foodService: FoodService, private actions$: Actions) {}
}
