// action creator will make request to npm api
import axios from 'axios';
import {ActionType} from '../action-types';
import {Action} from '../actions';
// Dispatch imported for typechecking
import {Dispatch} from 'redux';

export const searchRepositories=(term:string)=>{
    //dispatch is how we manually dispatch actions directly in redux store and get processed in reducer
    //we need to specify the Dispatch<Action> where we provide the appropriate Action
    return async(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        })
        try{
            const {data}=await axios.get('https://registry.npmjs.org/-/v1/search',{
                params:{
                    text:term
                }
            });
            const names=data.objects.map((result:any)=>{
                return result.package.name;
            })
            // after getting data names from the API, dispatch the success action with the payload names
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload:names
            })
        }catch(err){
           dispatch({
               type:ActionType.SEARCH_REPOSITORIES_ERROR,
               payload:err.message
           }) 
        }
    }
}