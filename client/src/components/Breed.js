import React from "react";

function Breed(breedToggled, breedOnToggle) {
  return (
    <div>
      Breed
      <label className="switch">
        <input
          type="checkbox"
          breedToggled={breedToggled}
          breedOnToggle={breedOnToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Breed;
