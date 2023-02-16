import React, { useState } from "react";
import useGetLocation from "../../services/useGetLocation";

export const RequestLocation = (): any => {
  const { isLoading, location } = useGetLocation();
  const [checked, setChecked] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (!location.isActive) return <div>Error</div>;
  return (
    <div>
      <div>{location.name}</div>
      <div>You are requesting access to {location.name}</div>
      <label>
        <input
          type="checkbox"
          onChange={() => setChecked(!checked)}
          checked={checked}
        ></input>
        You have read the agreements for {location.name}
      </label>
      <button disabled={!checked}>Request Location</button>
    </div>
  );
};
