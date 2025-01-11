
//action.js

export const PLAY_VIDEO = 'PLAY_VIDEO';


export const TOGGLE_MENU = 'TOGGLE_MENU';
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const videoPlay = (items) => {
    // console.log(items);
    // console.log(items.id);
    return {
        type: PLAY_VIDEO,
        payload: items,
    }
}


// Action creators
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});