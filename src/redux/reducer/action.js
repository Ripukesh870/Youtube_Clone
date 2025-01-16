
//action.js

export const PLAY_VIDEO = 'PLAY_VIDEO';


export const videoPlay = (items) => {
    // console.log(items);
    // console.log(items.id);
    return {
        type: PLAY_VIDEO,
        payload: items,
    }
}




//menu close or open 

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});



// search filter work
export const SET_FILTERED_DATA = "SET_FILTERED_DATA";

export const setFilteredData = (data) => ({
  type: SET_FILTERED_DATA,
  payload: data,
});


export const ADD_TO_HISTORY = "ADD_TO_HISTORY";

export const addToHistory = (video) => ({
    type: ADD_TO_HISTORY,
    payload: video,
});



export const ADD_TO_SHOTS_HISTORY = "ADD_TO_HISTORY";

export const addToShotsHistory = (video) => ({
    type: ADD_TO_SHOTS_HISTORY,
    payload: video,
});