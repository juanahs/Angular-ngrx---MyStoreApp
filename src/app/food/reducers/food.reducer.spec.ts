import { ACTIONS } from '../models/action.const';
import { Action } from '../models/action.interface';
import { IFood, food_reducer } from './food.reducer';

describe('Food Reducer', () => {
  it('should add food to new state', () => {
    let initialState : Array<IFood> = [];

    let apple: IFood = {
      id:0,
      name: "apple",
      description: "crunchy and fibrous",
      color: "red",
      group: "fruit"
    }

    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: apple
    }

    let newState = food_reducer (initialState, addAction)

    expect( initialState.length).toBe(0);

    expect (newState.length).toBe(1);

    expect (newState[0].name).toContain("apple");

  });


  it('should remove food to new state', () => {
    let initialState : Array<IFood> = [];

    let apple: IFood = {
      id:0,
      name: "apple",
      description: "crunchy and fibrous",
      color: "red",
      group: "fruit"
    }

    let banana: IFood = {
      id:1,
      name: "banana",
      description: "soft and peelable",
      color: "yellow",
      group: "fruit"
    }

    let firstUpdateState = food_reducer (initialState, {
      type: ACTIONS.ADD_FOOD,
      payload: apple
    })

    let secondUpdateState = food_reducer (firstUpdateState, {
      type: ACTIONS.ADD_FOOD,
      payload: banana
    })

    expect( initialState.length).toBe(0);
    expect (firstUpdateState.length).toBe(1);
    expect (secondUpdateState.length).toBe(2);
    expect (secondUpdateState[0].name).toContain("apple");
    expect (secondUpdateState[1].name).toContain("banana");

    let removeState = food_reducer (secondUpdateState, {
      type: ACTIONS.REMOVE_FOOD,
      payload: {id:0}
    })

    expect (removeState.length).toBe(1);
    expect (removeState[0].name).toContain("banana");

    console.log(firstUpdateState);
    console.log(secondUpdateState);
    console.log(removeState);

  });

});
