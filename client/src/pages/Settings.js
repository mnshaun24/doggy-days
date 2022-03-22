import React, { useState } from "react";
import Breed from "../components/Breed";
import Character from "../components/Character";
import Lifespan from "../components/Lifespan";
import Weight from "../components/Weight";
import Auth from "../utils/auth";

import {bubble as Menu} from "react-burger-menu";

import { Button } from "react-bootstrap";


const Settings = () => {

  const [breed, setBreed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [lifeSpan, setLifeSpan] = useState(false);
  const [weight, setWeight] = useState(false);


  function ToggleSetting(settingType) {

        if (settingType === "breed") {
          setBreed(!breed)
          console.log(breed, "breed");
        }

        if (settingType === "character") {
          setCharacter(!character)
          console.log(character, "character");
        }

        if (settingType === "lifeSpan") {
          setLifeSpan(!lifeSpan)
          console.log(lifeSpan, "lifespan");
        }

        if (settingType === "weight") {
          setWeight(!weight)
          console.log(weight, "weight");
        }
  }


  return (

    <div id="outer-container">
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container"}>
    <div id="page-wrap" className="settingspage">

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
      <Button onClick={Auth.logout} variant="outline-light" className="logoutbtn">
      Logout

      </Button>
    </div>
    </Menu>
    </div>

  );
};

export default Settings;


