import {
  SURVEY_LIST_SUCCESS,
  SURVEY_ADD_ITEM,
  SURVEY_REMOVE_ITEM,
  SURVEY_EDIT_ITEM
} from "../constants/surveyConstants";
// display all surveys
export const listSurveys=()=>(dispatch, getState)=>{  
 dispatch({ type: SURVEY_LIST_SUCCESS, payload: getState().surveyList.surveys });
}
// add a survey
export const addSurvey=(data) => (dispatch) => {
  dispatch({
    type: SURVEY_ADD_ITEM,
    payload: data,
  });
}
//remove a survey - @params(surveyId)
export const removeSurvey = (id) => (dispatch, getState) => {
  dispatch({
    type: SURVEY_REMOVE_ITEM,
    payload: id,
  });
};
//edit a survey - @params(edited data)
export const editSurvey=(dataToBeUpdated)=>(dispatch, getState)=>{
  dispatch({
    type: SURVEY_EDIT_ITEM,
    payload: dataToBeUpdated,
  });
}