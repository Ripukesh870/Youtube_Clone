import { ADD_TO_HISTORY } from "./action";

const initialState = {
    history: [],
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            // Avoid duplicate entries
            if (state.history.find((item) => item.id === action.payload.id)) {
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

export default historyReducer;


