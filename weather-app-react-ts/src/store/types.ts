export const GET_WEATHER='GET_WEATHER';
export const SET_LOADING='SET_LOADING';
export const SET_ERROR='SET_ERROR';
export const SET_ALERT='SET_ALERT';

export interface IWeather{
    description:string;
    icon:string;
    id:number;
    main:string;
}

export interface IWeatherData{
    base:string;
    clouds:{
        all:number;
    };
    cod:number;
    coord:{
        lon:number;
        lat:number;
    }
    dt:number;
    id:number;
    main:{
        feels_like:number;
        humidity:number;
        pressure:number;
        temp:number;
        temp_max:number;
        temp_min:number;
    };
    name:string;
    sys:{
      country:string;
      id:number;
      sunrise:number;
      sunset:number;
      type:number  
    };
    timezone:number;
    visibility:number;
    weather:IWeather[];
    wind:{
        speed:number;
        deg:number;
    }
}

export interface IWeatherError{
   cod:string;
   message:string; 
}

export interface IWeatherState{
   data:IWeatherData|null;
   loading:boolean;
   error:string; 
}
// Interface for actions
interface IGetWeatherAction{
    type:typeof GET_WEATHER;
    payload:IWeatherData;
}

interface ISetLoadingAction{
    type:typeof SET_LOADING;
}

interface ISetErrorAction{
    type:typeof SET_ERROR;
    payload:string;
}
// export action types interfaces
export type IWeatherAction = IGetWeatherAction|ISetLoadingAction|ISetErrorAction;

export interface IAlertAction{
    type:typeof SET_ALERT;
    payload:string;
}

export interface IAlertState{
    message:string;
}