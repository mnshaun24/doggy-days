import React, { useState } from "react";
import Breed from "../components/Breed";
import Character from "../components/Character";
import Lifespan from "../components/Lifespan";
import Weight from "../components/Weight";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

const Settings = () => {
  const [breed, setBreed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [lifeSpan, setLifeSpan] = useState(false);
  const [weight, setWeight] = useState(false);

  function ToggleSetting(settingType) {
    if (settingType === "breed") {
      setBreed(!breed);
      console.log(breed, "breed");
    }

    if (settingType === "character") {
      setCharacter(!character);
      console.log(character, "character");
    }

    if (settingType === "lifeSpan") {
      setLifeSpan(!lifeSpan);
      console.log(lifeSpan, "lifespan");
    }

    if (settingType === "weight") {
      setWeight(!weight);
      console.log(weight, "weight");
    }
  }

  return (
    <section>

      {/* toggle switch code used from the following video: https://youtu.be/bztDMD4HSL0 */}
      <div className="breedtog">
        <Breed ToggleSetting={ToggleSetting} />
      </div>
      <div className="chartog">
        <Character ToggleSetting={ToggleSetting} />
      </div>
      <div className="lifetog">
        <Lifespan ToggleSetting={ToggleSetting} />
      </div>
      <div className="weighttog">
        <Weight ToggleSetting={ToggleSetting} />
      </div>
      <Button
        onClick={Auth.logout}
        variant="outline-light"
        className="logoutbtn"
      >
        Logout
      </Button>
    </section>
  );
};

export default Settings;
