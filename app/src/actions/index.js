import axios from "axios";
import { FETCH_VIDEOS } from "./types";

export const fetchVideos = () => dispatch => {
  return axios
    .get("https://www.scorebat.com/video-api/v1/")
    .then(res => {
      console.log("fetchVideos", res);
      dispatch({ type: FETCH_VIDEOS, payload: res.data });
    })
    .catch(err => console.log(err));
};
