import React from "react";

function Weight({ ToggleSetting }) {
  return (
    <div>
      Attribute 4
      <label className="switch">
        <input
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Weight;
