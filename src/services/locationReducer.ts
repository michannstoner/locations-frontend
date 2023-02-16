import { useReducer } from "react";
import { Location } from "../models/Location";

function locationReducer(state: any, action: any) {
  function updateIsActive(activeValue: boolean) {
    return state.allLocations.map((location: Location, index: number) => {
      if (location.id === action.id) {
        return { ...location, isActive: activeValue };
      }
      return location;
    });
  }
  switch (action.type) {
    case "setLocation": {
      return { ...state, location: action.data, isLoading: false };
    }
    case "setAllLocations": {
      return { ...state, locations: action.data, isLoading: false};
    }
    case "deactivate": {
      return { ...state, locations: updateIsActive(true) };
    }
    case "activate": {
      return { ...state, locations: updateIsActive(false) };
    }
    default:
      return state;
  }
}

export default locationReducer;