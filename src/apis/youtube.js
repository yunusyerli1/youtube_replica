import axios from "axios";

const KEY ="AIzaSyADv0kcYp4pTQkcTWiXoHe_Ib21droKpk8";
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: `${KEY}`
  }
});
