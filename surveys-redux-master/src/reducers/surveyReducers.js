import {   
    SURVEY_ADD_ITEM,
    SURVEY_REMOVE_ITEM,
    SURVEY_EDIT_ITEM
  } from "../constants/surveyConstants";
 
  // test surveys
  const ALL_SURVEYS = [
    { id: "cg1", text: "test-Training Feedback",
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

  export const surveyListReducer = (state = { surveys: ALL_SURVEYS }, action) => {
    switch (action.type) {     
      case SURVEY_ADD_ITEM:
          const item = action.payload;
          return {
            ...state,
            surveys:[...state.surveys,item]
          }    
      case SURVEY_EDIT_ITEM:  
        // action.payload-{id,text,dropdoenVal};
        const surveyToBeEdited = action.payload;
        // update the survey if survey id exists
        const updatedSurveys=state.surveys.map((coursesurvey)=>{
          if (coursesurvey.id === surveyToBeEdited.id) {
            return { ...surveyToBeEdited, text: surveyToBeEdited.text,dropdownVal:surveyToBeEdited.dropdownVal };
          } else {
            return coursesurvey;
          }
        })
        return{
          ...state,
          surveys:updatedSurveys
        }
      case SURVEY_REMOVE_ITEM:        
        return{
          ...state,
          surveys:state.surveys.filter((survey)=>{
            return survey.id!==action.payload;
          })
        }
      default:
        return state;
    }
  };
  
      
  