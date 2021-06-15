import {useSelector,TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state';
//rather than try to use the useSelector, we will instead use the useTypedSelector
export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector;