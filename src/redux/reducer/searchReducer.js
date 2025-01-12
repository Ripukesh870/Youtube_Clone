import { SET_FILTERED_DATA } from "../reducer/action";

const initialState = {
  filteredData: [], // Initial state for filtered data
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload, // Update the filtered data
      };
    default:
      return state;
  }
};

export default searchReducer;
