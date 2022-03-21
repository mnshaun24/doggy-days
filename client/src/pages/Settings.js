import React, { useState, useEffect } from "react";
import Breed from "../components/Breed";
import Character from "../components/Character";
import Lifespan from "../components/Lifespan";
import Weight from "../components/Weight";
import Auth from "../utils/auth";
// import { Nav } from "react-bootstrap";

const Settings = () => {

  const [breed, setBreed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [lifeSpan, setLifeSpan] = useState(false);
  const [weight, setWeight] = useState(false);


  function ToggleSetting(settingType) {

        if (settingType === "breed") {
          setBreed(!breed)
        } else if (settingType === "character") {
          setCharacter(!character)
        } else if (settingType === "lifeSpan") {
          setLifeSpan(!lifeSpan)
        } else if (settingType === "weight") {
          setWeight(!weight)
        }
  }


  return (
    <section>
      {/* toggle switch code used from the following video: https://youtu.be/bztDMD4HSL0 */}
      <div>
          <Breed ToggleSetting={ToggleSetting} />
      </div>
      <div>
          <Character ToggleSetting={ToggleSetting} />
      </div>
      <div>
          <Lifespan ToggleSetting={ToggleSetting} />
      </div>
      <div>
          <Weight ToggleSetting={ToggleSetting} />
      </div>
      <button  onClick={Auth.logout}>
      Logout
      </button>
    </section>
  );
};

export default Settings;


