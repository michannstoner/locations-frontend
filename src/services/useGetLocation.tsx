import { useEffect, useReducer } from "react";
import { locations } from "../mocks/locations";
import { Location } from "../models/Location";
import locationReducer from "./locationReducer";

const useGetLocation = () => {
  const initialLocationData = {} as Location;
  const [{ isLoading, location }, dispatch] = useReducer(locationReducer, {
    isLoading: false,
    location: initialLocationData,
  });

  // eventually update this to grab params from url
  const locationId = "1";

  const getLocation = async () => {
    // eventually make api call with query param string from url
    let result = locations.find(
      (location: Location) => location.id === locationId
    );
    dispatch({ type: "setLocation", data: result });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { isLoading, location };
};

export default useGetLocation;
