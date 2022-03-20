import React from "react";
import Breed from "../components/Breed";
import Character from "../components/Character";
import Lifespan from "../components/Lifespan";
import Weight from "../components/Weight";
// import Auth from "../utils/auth";
// import { Nav } from "react-bootstrap";

const Settings = () => {
  return (
    <section>
      {/* toggle switch code used from the following video: https://youtu.be/bztDMD4HSL0 */}
      <div>
          <Breed />
      </div>
      <div>
          <Character />
      </div>
      <div>
          <Lifespan />
      </div>
      <div>
          <Weight />
      </div>
    </section>
  );
};

export default Settings;

  /* <div onClick={Auth.logout}>Logout</div> */

