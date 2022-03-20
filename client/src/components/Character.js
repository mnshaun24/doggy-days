import React from "react";

function Character(characterToggled, characterOnToggle) {
  return (
    <div>
      Characteristics
      <label className="switch">
        <input
          type="checkbox"
          charToggled={characterToggled}
          charOnToggle={characterOnToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Character;
