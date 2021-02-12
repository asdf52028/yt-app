import axios from "axios";

const KEY = "AIzaSyDF8QUfdJUGcIjlMcb9t7bFV_0tU8Iy2qg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
