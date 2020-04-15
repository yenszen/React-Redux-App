import { FETCH_VIDEOS } from "../actions/types";

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};
