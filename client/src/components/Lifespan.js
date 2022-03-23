import React from "react";

function Lifespan({ ToggleSetting }) {
  return (
    <div>
      Life Span
      <label className="switch">
        <input type="checkbox" onChange={() => ToggleSetting("lifeSpan")} />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Lifespan;
