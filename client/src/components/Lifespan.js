import React from "react";

function Lifespan(lifeToggled, lifeOnToggle) {
  return (
    <div>
      Life Span
      <label className="switch">
        <input
          type="checkbox"
          lifeToggled={lifeToggled}
          lifeOnToggle={lifeOnToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Lifespan;
