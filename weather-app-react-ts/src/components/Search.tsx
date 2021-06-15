import React,{FC,useState,FormEvent} from 'react';
// import dispatch
import {useDispatch} from 'react-redux';
// import actions
import {setAlert} from '../store/actions/alertActions';
import {getWeather,setLoading} from '../store/actions/weatherActions';

interface SearchProps{
    title:string;
}

const Search:FC<SearchProps> = ({title}) => {
    // dispatch function
    const dispatch=useDispatch();

    // state
    const [city,setCity]=useState('');
    // event handlers
    // input event handler
    const changeHandler=(e:FormEvent<HTMLInputElement>)=>{
        setCity(e.currentTarget.value)
    }
    // submit form event handler
    const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(city.trim()===''){
            // dispatch alert
            return dispatch(setAlert('City is required'));
        }
        // dispatch setLoading action 
        dispatch(setLoading());
        //dispatch the API call
        dispatch(getWeather(city));
        setCity('')
    }
    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>   
                    <form className="py-5" onSubmit={submitHandler}>
                        <input type="text" className="input has-text-centered mb-2" placeholder="Enter City Name" style={{maxWidth:300}} value={city} onChange={changeHandler}/>    
                        <button className="button is-primary is-fullwidth" style={{maxWidth:300,margin:'0 auto'}}>
                            Search
                        </button>
                    </form> 
                </div>    
            </div>            
        </div>     
    )
}
export default Search;
