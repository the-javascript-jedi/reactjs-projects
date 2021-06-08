import React, {useState} from 'react';
// hook gives access to dispatch function inside component
import {useDispatch} from 'react-redux';
import {actionCreators} from '../state';
const RepositoriesList:React.FC=()=>{
    // state 
    const [term,setTerm]=useState('');
    // dispatch
    const dispatch=useDispatch();

    // event handlers
    const onSubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term))

    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={e=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
}
export default RepositoriesList;