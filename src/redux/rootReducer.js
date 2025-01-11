// rootReducer.js
import { combineReducers } from 'redux';

import videoReducer from "../redux/reducer/videoReducer";
import menuReducer from "../redux/reducer/menuReducer";
const rootReducer = combineReducers({
    videoReducer,
    menu: menuReducer,

});

export default rootReducer;