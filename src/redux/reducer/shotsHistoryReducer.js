import { ADD_TO_HISTORY } from "./action";

const initialState = {
    history: [],
};

const shotsHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            // Avoid duplicate entries
            if (state.history.find((item) => item.src === action.payload.src)) {
                return state;
            }
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        default:
            return state;
    }
};

export default shotsHistoryReducer;


