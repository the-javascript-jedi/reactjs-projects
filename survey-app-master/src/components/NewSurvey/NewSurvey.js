import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router";
import { MultiSelect } from "react-multi-select-component";

const NewSurvey = props => {
  const history = useHistory();
  const [enteredText, setEnteredText] = useState('');
  const [foundEdit,setFoundEdit]=useState('');
  // const MultiSelectValues = [
  //     {  id:"ddl_1",label: "self-paced modules",value:"spm" },
  //     {   id:"ddl_2",label: "classroom modules",value:"cm" },
  //     {   id:"ddl_3",label: "journeys",value:"js" },    
  //   ];
  const [selected, setSelected] = useState([]);

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
      props.onEditsurvey({
        id: foundEdit.id,
        text: enteredText,
        dropdownVal:selected
      });
    }else{
      // Add Survey
      const NewSurvey = {
        id: Math.random().toString(),
        text: enteredText,
        dropdownVal:selected
      };
      setEnteredText('');
    props.onAddsurvey(NewSurvey);
    }      
    history.push('/survey-app');
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
          <button className="btn btn-light btn-block" onClick={()=>history.push('/survey-app')}> <i className="fas fa-arrow-left"></i> Cancel</button>    
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
