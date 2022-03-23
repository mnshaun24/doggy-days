import React from "react";

function Weight({ ToggleSetting }) {
  return (
    <div>
      Weight
      <label className="switch">
        <input type="checkbox" onChange={() => ToggleSetting("weight")} />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Weight;
