import React from "react";

function Weight(weightToggled, weightOnToggle) {
  return (
    <div>
      Attribute 4
      <label className="switch">
        <input
          type="checkbox"
          weightToggled={weightToggled}
          weightOnToggle={weightOnToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Weight;
