import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFood } from '../../models/ifood.interface';
import { MyAppState } from '../../models/myAppState.interface';
import { ACTIONS } from '../../models/action.const';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent implements OnInit{

  food: IFood = {} as IFood;

  constructor(private store: Store<MyAppState>){}

  ngOnInit(): void {
  }

  addFood(food:IFood) {
    let addAction = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }

    this.store.dispatch(addAction)
  }
}
