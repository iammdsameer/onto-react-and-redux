import { combineReducers } from "redux";

const songs = () => [
  { title: "Nevermind", duration: "4:05" },
  { title: "Don't wanna miss a thing", duration: "3:12" },
  { title: "So Far Away", duration: "7:19" },
  { title: "Wishful Thinking", duration: "10:45" }
];

const selectedSong = (selection = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selection;
};

export default combineReducers({ songs, selectedSong });
