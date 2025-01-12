// rootReducer.js
import { combineReducers } from 'redux';

import videoReducer from "../redux/reducer/videoReducer";
import menuReducer from "../redux/reducer/menuReducer";
import searchReducer from './reducer/searchReducer';


const rootReducer = combineReducers({
    videoReducer,
    menu: menuReducer,
    filter: searchReducer,
});

export default rootReducer;