import { ACTIONS } from "../models/action.const";
import { Action } from "../models/action.interface";
import { IFood } from "../models/ifood.interface";

export function food_reducer(state: Array<IFood> = [], action: Action){
    switch(action.type){
        case ACTIONS.ADD_FOOD:
            return [...state, action.payload];

        case ACTIONS.REMOVE_FOOD:
            return state.filter(food => {
                return food.id !== action.payload.id
            })
        case ACTIONS.GET_FOODS_SUCCESS:
          console.log("Side effect success");
          console.log(action.payload);

          var newState;
          if(state.length > 0){
            newState = [...state, ...action.payload]
          }else{
            newState = action.payload
          }
          return newState

        //case ACTIONS.GET_FOODS:
        //case ACTIONS.GET_FOODS_FAILED:

        default:
            return state;
    }
}
export { IFood, ACTIONS };

