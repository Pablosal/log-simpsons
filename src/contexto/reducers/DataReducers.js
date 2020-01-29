import {
  SAVE_QUOTES,
  SAVE_FAVORITE_QUOTE,
  SAVE_COMMENTS,
  SET_LOADING
} from "../types";

const DataReducer = (state, action) => {
  switch (action.type) {
    case SAVE_QUOTES:
      return {
        ...state,
        quotes: action.payload
      };
    case SAVE_FAVORITE_QUOTE:
      return {
        ...state,
        quotesFavoritas: [...state.quotesFavoritas, action.payload]
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comentarios: [...state.comentarios, action.payload]
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
export default DataReducer;
//   const initialState = {
//     quotes: [],
//     quotesFavoritas: {},
//     comentarios: [],
//     loading: false
//   };
