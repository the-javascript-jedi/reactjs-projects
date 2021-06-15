import {combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducer';
const reducers=combineReducers({
    repositories:repositoriesReducer
})
export default reducers;
//we find the type of the reducers we are returning and set that as the rootstate
export type RootState=ReturnType<typeof reducers>;
/* type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    repositories: RepositoriesState;
}*/