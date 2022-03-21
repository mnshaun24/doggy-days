import React from "react";
import Breed from "../components/Breed";
import Character from "../components/Character";
import Lifespan from "../components/Lifespan";
import Weight from "../components/Weight";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";

const Settings = () => {
  return (
    <section className="settingspage">
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
      <Button onClick={Auth.logout} variant="outline-light" className="logoutbtn">
      Logout
      </Button>
    </section>
  );
};

export default Settings;


