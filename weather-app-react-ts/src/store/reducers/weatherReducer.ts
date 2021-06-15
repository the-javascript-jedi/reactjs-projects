import {IWeatherState,IWeatherAction, GET_WEATHER, SET_LOADING, SET_ERROR} from '../types';
const initialState:IWeatherState={
    data:null,
    loading:false,
    error:''
}

export default(state=initialState,action:IWeatherAction):IWeatherState=>{
    switch(action.type){
        case GET_WEATHER:
            return {
                data:action.payload,
                loading:false,
                error:''
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        case SET_ERROR:
            return{
                ...state,
                loading:false
            }    
        default:
            return state;    
    }
}