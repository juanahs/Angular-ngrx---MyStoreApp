import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFood } from '../../models/ifood.interface';
import { MyAppState } from '../../models/myAppState.interface';
import { ACTIONS } from '../../models/action.const';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{

  foods: Observable<Array<IFood>>

  constructor(private store: Store<MyAppState>){
    this.foods = store.select('foods');
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: ACTIONS.GET_FOODS
    })
  }

  deleteFood(food: IFood) {
    let removeAction = {
      type: ACTIONS.REMOVE_FOOD,
      payload: food
    }

    this.store.dispatch(removeAction)
  }


}
