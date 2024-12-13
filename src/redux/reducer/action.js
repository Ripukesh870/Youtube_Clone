
//action.js

export const PLAY_VIDEO = 'PLAY_VIDEO';


export const videoPlay = (items) => {
    console.log(items);
    console.log(items.id);
    return {
        type: PLAY_VIDEO,
        payload: items,
    }
}