import React from "react";

function Lifespan({ ToggleSetting }) {
  return (
    <div>
      Life Span
      <label className="switch">
        <input
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Lifespan;
