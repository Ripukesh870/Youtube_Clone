// rootReducer.js
import { combineReducers } from 'redux';

import videoReducer from "../redux/reducer/videoReducer";
import menuReducer from "../redux/reducer/menuReducer";
import searchReducer from './reducer/searchReducer';
import historyReducer from './reducer/historyReducer';
import shotsHistoryReducer from './reducer/shotsHistoryReducer';


const rootReducer = combineReducers({
    videoReducer,
    menu: menuReducer,
    filter: searchReducer,
    history:historyReducer,
    shots:shotsHistoryReducer,
});

export default rootReducer;