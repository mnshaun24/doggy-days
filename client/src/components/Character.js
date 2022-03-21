import React from "react";

function Character({ ToggleSetting }) {
  return (
    <div>
      Characteristics
      <label className="switch">
        <input
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Character;
