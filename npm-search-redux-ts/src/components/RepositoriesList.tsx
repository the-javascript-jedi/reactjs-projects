import React, {useState} from 'react';
//use the useTypedSelector instead of useSelector
import { useTypedSelector } from '../hooks/useTypedSelector';
// custom hook gives access to dispatch function inside component
import {useActions} from '../hooks/useActions';
const RepositoriesList:React.FC=()=>{
    // state 
    const [term,setTerm]=useState('');
    //call the custom hook-and destructure the action
    const {searchRepositories}=useActions();
    //accessing the state
    //use the useTypedSelector instead of useSelector hook
    const {data,error,loading}=useTypedSelector((state)=>state.repositories)
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
        {/* error */}
        {error&&<h3>{error}</h3>}
        {/* loading */}
        {loading&&<h3>{loading}</h3>}
        {/* display data */}
        {!error && !loading &&data.map((name)=><div>{name}</div>)}
    </div>
}
export default RepositoriesList;