import React, { useCallback } from "react";
import useGetAllLocations from "../../services/useGetAllLocations";
import { Location } from "../../models/Location";

export const AdminPage = (): any => {
  const { isLoading, locations, deactivateLocation } = useGetAllLocations();

  const toggleIsActive = useCallback((location: Location) => {
    // event.preventDefault();
    deactivateLocation(location);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {locations ? (
        locations.map((location: Location) => {
          return (
            <div key={location.id}>
              <div>{location.name}</div>
              <input
                type="checkbox"
                checked={location.isActive}
                // eslint-disable-next-line no-restricted-globals
                onChange={() => toggleIsActive(location)}
                id={location.id}
              ></input>
            </div>
          );
        })
      ) : (
        <div> oops </div>
      )}
    </div>
  );
};
