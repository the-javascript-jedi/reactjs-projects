import {IAlertState,IAlertAction, SET_ALERT} from '../types';
const initialState:IAlertState={
    message:''
}

export default(state=initialState,action:IAlertAction):IAlertState=>{
    switch(action.type){
        case SET_ALERT:
            return{
                message:action.payload
            }
        default:
            return state;    
    }
}
