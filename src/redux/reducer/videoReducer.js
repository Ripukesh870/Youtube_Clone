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



// const initialState = {
//     id: "",
//     title: "",
//     thumbnailUrl: "",
//     duration: "",
//     uploadTime: "",
//     views: "",
//     author: "",
//     videoUrl: "",
//     description: "",
//     subscriber: "",
//     isLive: true
// };

// const videoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'PLAY_VIDEO':
//             return {
//                 ...state,
//                 id: action.payload.id,
//                 title: action.payload.title,
//                 thumbnailUrl: action.payload.thumbnailUrl,
//                 duration: action.payload.duration,
//                 uploadTime: action.payload.uploadTime,
//                 views: action.payload.views,
//                 author: action.payload.author,
//                 videoUrl: action.payload.videoUrl,
//                 description: action.payload.description,
//                 subscriber: action.payload.subscriber,
//             };
//         default:
//             return state;
//     }
// };

// export default videoReducer;





// const initialState = {
//     id: "",
//     title: "",
//     thumbnailUrl: "",
//     duration: "",
//     uploadTime: "",
//     views: "",
//     author: "",
//     videoUrl: "",
//     description: "",
//     subscriber: "",
//     isLive: true, // Default value
// };



// const videoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'PLAY_VIDEO':
//             console.log(action.payload)

//             return {

//                 ...state,
//                 ...action.payload, // Dynamically merge properties
//             };
//         default:
//             return state;
//     }
// };

// export default videoReducer;
