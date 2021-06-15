import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {IWeatherAction,IWeatherData,IWeatherError,GET_WEATHER,SET_LOADING,SET_ERROR} from '../types';

export const getWeather=(city:string):ThunkAction<void,RootState,null,IWeatherAction>=>{
    return async dispatch=>{
        try{
            // const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab0c1237c271094b8379df4181ffa50`);
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);            
            if(!res.ok){
                const resData:IWeatherError=await res.json();
                throw new Error(resData.message);
            }

            const resData:IWeatherData=await res.json();
            dispatch({
                type:GET_WEATHER,
                payload:resData
            })
        }
        catch(err){
            dispatch({
                type:SET_ERROR,
                payload:err.message
            })
        }
    }
}

export const setLoading=():IWeatherAction=>{
  return {
      type:SET_LOADING
  }  
}

export const setError=():IWeatherAction=>{
    return{
        type:SET_ERROR,
        payload:''
    }
}