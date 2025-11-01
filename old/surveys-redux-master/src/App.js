import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurveyList from "./components/SurveyList/SurveyList";
import NewSurvey from "./components/NewSurvey/NewSurvey";
import Header from './common/Header';
import { useSelector } from "react-redux";
import "./App.css";
const App = () => {
  const MultiSelectValues = [
    {  id:"ddl_1",label: "self-paced modules",value:"spm" },
    {   id:"ddl_2",label: "classroom modules",value:"cm" },
    {   id:"ddl_3",label: "journeys",value:"js" },    
  ];  
  const allSurveys = useSelector((state) => {
    return state.surveyList.surveys
  });
  //return existing survey by id
  const findUserHandler=(surveyId)=>{
    const found = allSurveys.find(element => element.id === surveyId);
    return found;
  }  
  
  return (
    <>   
    {<div className='course-surveys'>      
    <Header/>
      <Router>
        <Switch>
          {/* home page */}
        <Route exact path="/surveys-redux" 
        render={(props)=><SurveyList 
        {...props}/>}/>  
        {/* add new survey*/}
          <Route exact path="/surveys-redux/addNewSurvey" 
          render={(props)=><NewSurvey          
          MultiSelectValues={MultiSelectValues}
          {...props}/>}/>      
          {/* edit survey*/}
          <Route exact path="/surveys-redux/editSurvey/:surveyId" 
          render={(props)=><NewSurvey          
          findUserHandler={findUserHandler} 
          MultiSelectValues={MultiSelectValues}
          {...props}/>}/>
        </Switch>
      </Router>
    </div>
    }
    </>
  );
};
export default App;
