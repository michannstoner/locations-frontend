import { useEffect, useReducer } from "react";
import { locations as mockLocations } from "../mocks/locations";
import { Location } from "../models/Location";
import locationReducer from "./locationReducer";

const useGetAllLocations = () => {
  const initialLocations = [] as Location[];
  const [{ isLoading, locations }, dispatch] = useReducer(locationReducer, {
    isLoading: false,
    locations: initialLocations,
  });

  const getAllLocations = async () => {
    // eventually make api call to get all locations
    let result = mockLocations;
    console.log(result);
    dispatch({ type: "setAllLocations", data: result });
  };

  const updateLocation = async (location: Location) => {
    // eventually
    // .put(`api/locations/${location.id}`, {
    //  ...location,
    //  isActive: !location.isActive
    // });
    location.isActive === true
      ? dispatch({ type: "deactivate", id: location.id })
      : dispatch({ type: "activate", id: location.id });
  };

  // eventually make api call to update isActive on a location
  const deactivateLocation = async (location: Location) => {
    updateLocation(location);
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return { isLoading, locations, deactivateLocation };
};

export default useGetAllLocations;
