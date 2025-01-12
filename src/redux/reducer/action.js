
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