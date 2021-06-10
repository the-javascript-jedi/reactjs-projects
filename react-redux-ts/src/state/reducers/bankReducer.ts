import {ActionType} from '../action-types/index';
import {IAction} from '../actions/index';
const initialState=0;

// reducer will return the state and it will accept state and action as arguments
const reducer=(state:number=initialState,action:IAction)=>{
    //action.type on hover - (property) type: "deposit" | "withdraw" | "bankrupt"
    switch(action.type){
        case ActionType.DEPOSIT:
            return state+action.payload;
        case ActionType.WITHDRAW:
            return state-action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
}
export default reducer;