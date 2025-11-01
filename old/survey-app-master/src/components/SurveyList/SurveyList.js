import React,{useState} from "react";
import { useHistory } from "react-router";

const SurveyList = (props) => {
  const [surveyId,setsurveyId]=useState(null);
  const history = useHistory();

  // Add New Survey
  const addNewHandler=()=>{
    history.push('/survey-app/addNewSurvey');
  }
  // Edit Survey
  const editHandler=()=>{
    history.push(`/survey-app/editSurvey/${surveyId}`);
  }
// //  Delete Survey
const deleteHandler=()=>{
  props.deleteSurveyHandler(surveyId);
}
  const handleRadioButton=(id)=>{    
    setsurveyId(id);
  }
  // JSX--SurveyList
  return (
    <section id="posts">
    <div className="container">
    <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Latest Posts</h4>
            </div>
          
      <br/>
      {/* table */}
      <div>
      <table className='table table-striped'>
       <thead className="thead-dark">
            <tr>
              <th>&nbsp;</th>
              <th>Survey Template Name</th>
              <th>Applicable For</th>
            </tr>
          </thead>
          <tbody>
            {
            props.Surveys.map((survey,index) => {       
return <tr key={survey.id} onClick={()=>handleRadioButton(survey.id)} >     
      <td className="pr-0">
      <div className="form-check-inline mr-0">
  <label className="form-check-label">
    <input type="radio" 
    className="form-check-input mr-0"
          name="site_name" 
          value={survey.id}
          checked={surveyId === survey.id} 
          onChange={()=>{}}
          />
  </label>
</div>
        </td>                            
      <td>{survey.text}</td>
      <td>{survey.dropdownVal&&survey.dropdownVal.map((ddl,index)=>
      {     
        return <span key={ddl.label+index}>{ddl.label} {index !== (survey.dropdownVal.length-1) ? ',' : ''}</span>
      }      
      )}</td>     
              </tr>
            })
            }
          </tbody>      
    </table>
    {/* Buttons */}
    <div>
      <button onClick={addNewHandler} className="btn btn-primary btn-block"> <i className="fas fa-plus"></i> Add New</button>
      <button onClick={editHandler} className="btn btn-warning btn-block" disabled={!surveyId?true:false}><i className="fas fa-pencil-alt"></i> Edit</button>
      <button onClick={deleteHandler} className="btn btn-danger btn-block" disabled={!surveyId?true:false}><i className="fas fa-trash"></i> Delete</button>
    </div>
      </div>
      <br />    
      </div>
      {/* card ends*/} 
    </div>
    {/* col-md-9 ends*/}     
    </div>  
    {/* row ends*/}     
      </div> 
      {/* container ends*/}     
    </section>
  );
};
export default SurveyList;