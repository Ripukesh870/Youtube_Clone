// // reducer.js

import { PLAY_VIDEO } from './action';

const initialState = {
    currentVideo: null, // Initially, no video is selected
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_VIDEO:
            return {
                ...state,
                currentVideo: action.payload, // Update current video
            };
        default:
            return state;
    }
};

export default videoReducer;


