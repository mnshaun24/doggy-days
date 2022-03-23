import React from "react";

function Breed({ ToggleSetting }) {
  return (
    <div>
      Breed
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => ToggleSetting("breed")}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Breed;
