import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurveyList from "./components/SurveyList/SurveyList";
import NewSurvey from "./components/NewSurvey/NewSurvey";
import Header from './common/Header';
import "./App.css";
import Axios from "axios";
const App = () => {
  const [courseSurveys, setCourseSurveys] = useState([])
  const [isLoading,setIsLoading]=useState(true);
  const MultiSelectValues = [
    {  id:"ddl_1",label: "self-paced modules",value:"spm" },
    {   id:"ddl_2",label: "classroom modules",value:"cm" },
    {   id:"ddl_3",label: "journeys",value:"js" },    
  ];
  useEffect(()=>{    
      Axios.get("http://localhost:5000/surveys").then((response) => {
        console.log("response.data.surveys", response.data.surveys);
        if(response.data.surveys){
          setCourseSurveys(response.data.surveys);
          setIsLoading(false);
        }else{
          setIsLoading(false);
        }
      }).catch(error=>{
        //In case axios request fails we will use a local test data
        setIsLoading(false);
        console.log("error",error);
        const testSurvey=[
          { id: "cg1", text: "Training Feedback",
          dropdownVal:[
            {  label: "self-paced modules",value:"spm"  },
            {  label: "classroom modules",value:"cm"  },
          ]},
          { id: "cg2", text: "External COntent Rating",
          dropdownVal:[
            {  label: "classroom modules",value:"cm"  },
          ] },
          { id: "cg3", text: "HTrainer Effectiveness",
          dropdownVal:[{  label: "journeys",value:"js"  },],
        },
        ]
        setCourseSurveys(testSurvey);
      })
  },[])

  const saveSurvey = (NewSurvey) => {
    // setCourseSurveys(courseSurveys.concat(NewSurvey));
    setCourseSurveys((prevCourseSurveys) => prevCourseSurveys.concat(NewSurvey));
  };
  //return existing survey by id
  const findUserHandler=(surveyId)=>{
    const found = courseSurveys.find(element => element.id === surveyId);
    return found;
  }
  //Edit Survey
  const editSurvey=(surveyToBeEdited)=>{
    const updatedSurveys=courseSurveys.map((coursesurvey)=>{
      if (coursesurvey.id === surveyToBeEdited.id) {
        return { ...surveyToBeEdited, text: surveyToBeEdited.text,dropdownVal:surveyToBeEdited.dropdownVal };
      } else {
        return coursesurvey;
      }
    })
    setCourseSurveys(updatedSurveys)
  }
  //delete Survey
  const deleteSurvey=(surveyToBeDeleted)=>{
    const remainingSurveys = courseSurveys.filter((coursesurvey) => {
      return coursesurvey.id !== surveyToBeDeleted;
    });
    setCourseSurveys(remainingSurveys);
  }

  return (
    <>
    {isLoading&&<p>Loading</p>}
    {!isLoading&&<div className='course-surveys'>      
    <Header/>
      <Router>
        <Switch>
          {/* home page */}
        <Route exact path="/survey-app" 
        render={(props)=><SurveyList 
        Surveys={courseSurveys}   
        deleteSurveyHandler={deleteSurvey}      
        {...props}/>}/>  
        {/* add new survey*/}
          <Route exact path="/survey-app/addNewSurvey" 
          render={(props)=><NewSurvey 
          onAddsurvey={saveSurvey} 
          MultiSelectValues={MultiSelectValues}
          {...props}/>}/>      
          {/* edit survey*/}
          <Route exact path="/survey-app/editSurvey/:surveyId" 
          render={(props)=><NewSurvey 
          onEditsurvey={editSurvey} 
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
