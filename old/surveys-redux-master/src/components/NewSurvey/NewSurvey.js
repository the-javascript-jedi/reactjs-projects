import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { addSurvey ,editSurvey} from "../../actions/surveyActions";

const NewSurvey = props => {
  const history = useHistory();
  const [enteredText, setEnteredText] = useState('');
  const [foundEdit,setFoundEdit]=useState('');  
  const [selected, setSelected] = useState([]);
  const dispatchHook = useDispatch();

  //get existing data based on survey id from url
  const surveyId = props.match.params.surveyId;
  useEffect(()=>{
    if(surveyId){
      const found=props.findUserHandler(surveyId);      
      //if existing data populate textboxes with data
      if(found){
        setFoundEdit(found);
        setEnteredText(found.text);
        setSelected(found.dropdownVal)
      }
    }
  },[surveyId,props]);  
  // Form Submit Event
  const SurveyFormHandler = event => {
    event.preventDefault();
    if(surveyId){
      // Edit Survey  
      const editedData={
        id: foundEdit.id,
        text: enteredText,
        dropdownVal:selected
      }
      dispatchHook(editSurvey(editedData));
    }else{
      // Add Survey
      const NewSurvey = {
        id: Math.random().toString(),
        text: enteredText,
        dropdownVal:selected
      };
      setEnteredText('');
    // props.onAddsurvey(NewSurvey);
    dispatchHook(addSurvey(NewSurvey));
    }      
    history.push('/surveys-redux');
  };
  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  }; 
  // JSX--NewSurvey
  return (
    <section id="details">
 <div className="container">
      <div className="row">
        <div className="col">
      <div className="card">
            <div className="card-header">
            <h1>{surveyId?"Edit Survey":"Add Survey"}</h1>
            </div>
            <div className="card-body">

          
      <form className="new-survey" onSubmit={SurveyFormHandler}>
      <div className="form-group">                 
          <label>Template Name</label>                 
              <input className="form-control" type="text" value={enteredText} onChange={textChangeHandler} />     
           </div>     
        {/* Multiselect */}
        <div className="form-group">    
        <label>Applicable For:</label>          
        <MultiSelect
        options={props.MultiSelectValues}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />       
        </div>       
      {/* Form Buttons */}
      <div className="container">
      <div className="row">
        <div className="col-md-3">         
          <button className="btn btn-light btn-block" onClick={()=>history.push('/surveys-redux')}> <i className="fas fa-arrow-left"></i> Cancel</button>    
        </div>
        <div className="col-md-3">        
        <button className="btn btn-success btn-block" type="submit" disabled={(!enteredText&&selected.length>0)||selected.length===0}>Save</button>      
        </div>      
      </div>
    </div>     
    </form>   
    </div>  
    </div>
    </div>
    {/* col ends */}
        </div>
        {/* row ends */}
        </div>
        {/* container ends */}
    </section>

  );
};
export default NewSurvey;
