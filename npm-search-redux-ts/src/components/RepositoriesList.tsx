import React, {useState} from 'react';
import { useSelector } from 'react-redux';
// custom hook gives access to dispatch function inside component
import {useActions} from '../hooks/useActions';
const RepositoriesList:React.FC=()=>{
    // state 
    const [term,setTerm]=useState('');
    //call the custom hook-and destructure the action
    const {searchRepositories}=useActions();
    //accessing the state
    const {data,error,loading}=useSelector((state:any)=>state.repositories)
    console.log("data",data);
    console.log("error",error);
    console.log("loading",loading);
    // event handlers
    const onSubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        //dispatch(actionCreators.searchRepositories(term))
        //we use the custom hook to make the above dispatch call 
        searchRepositories(term);
    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={e=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
}
export default RepositoriesList;