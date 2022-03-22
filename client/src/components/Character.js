import React from "react";

function Character({ ToggleSetting }) {
  return (
    <div>
      Characteristics
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => ToggleSetting("character")}

        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Character;
