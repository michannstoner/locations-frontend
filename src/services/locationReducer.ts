import { useReducer } from "react";

function locationReducer(state: any, action: any) {
  // function updateFavorite(favoriteValue) {
  //   return state.speakerList.map((item, index) => {
  //     if (item.firstName === action.id) {
  //       return { ...item, favorite: favoriteValue };
  //     }
  //     return item;
  //   });
  // }
  switch (action.type) {
    case "setLocation": {
      return { ...state, location: action.data, isLoading: false };
    }
    // case "favorite": {
    //   return { ...state, speakerList: updateFavorite(true) };
    // }
    // case "unfavorite": {
    //   return { ...state, speakerList: updateFavorite(false) };
    // }
    default:
      return state;
  }
}

export default locationReducer;