import React, { useState, useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import { saveDogIds, getSavedDogIds } from "../utils/localStorage";
// const DinderStuff = ({ breed, character, lifespan, weight }) => {
// }
const DinderCard = () => {
  const url =
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
  const [dog, setDog] = useState();
  const [savedDogs, setSavedDogs] = useState([]);
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());
  // const [settingToggle, setSettingToggle] = useState();
  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });
  const [saveDog] = useMutation(SAVE_DOG);
  function getDog() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDog(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  useEffect(() => {
    getDog();
  }, []);
  const handleNextDog = () => {
    getDog();
  };
  const handleSaveDog = async (dogId) => {
    console.log("HIT SAVED DAG", dogId)
    // const dogData = dogId.map(() => ({
    //   image: dogId[0].url,
    //   breed: dogId[0].breeds[0].name,
    //   characteristics: dogId[0].breeds[0].temperament,
    //   life_span: dogId[0].breeds[0].life_span,
    //   weight: dogId[0].breeds[0].weight.imperial,
    //   dogId: dogId[0].id,
    // }));

    const dogData = {
      image: dogId[0].url,
      breed: dogId[0].breeds[0].name,
      characteristics: dogId[0].breeds[0].temperament,
      life_span: dogId[0].breeds[0].life_span,
      weight: dogId[0].breeds[0].weight.imperial,
      dogId: dogId[0].id,
    }
    console.log('doggydata',dogData)
    setSavedDogs(dogData);
  
    console.log('DOG STATE',savedDogs);
    const dogToSave = savedDogs.find(() => dog[0].id === dogId);
    console.log("dog to save", dogToSave)
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log(savedDogIds);
    // if (!token) {
    //   return false;
    // }
    // try {
    //   const response = await saveDog({
    //     variables: {
    //       input: dogToSave,
    //     },
    //   });
    //   console.log(dogToSave);
    //   console.log(response);
    //   setSavedDogIds([...savedDogIds, dogToSave.dogId]);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <section>
      {Auth.loggedIn() && (
        <Container className="cardpage">
          <Card.Body>
            <Card.Img
              className="apiImages"
              src={dog && dog[0].url}
              alt={`This is a ${dog && dog[0].breeds[0].name}`}
            ></Card.Img>
            <Card.Title>
              <h5>Breed: {dog && dog[0].breeds[0].name}</h5>
            </Card.Title>
            <p>Characteristics: {dog && dog[0].breeds[0].temperament}</p>
            <p>Life Span: {dog && dog[0].breeds[0].life_span}</p>
            <p>Weight: {dog && dog[0].breeds[0].weight.imperial} lbs.</p>
            <>
              <div className="saveBtn">
                <Button
                  className="heartbtn"
                  // disabled={savedDogIds?.some(
                  //   (savedDogId) => savedDogId === dog && dog[0].id
                  // )}
                  onClick={() => handleSaveDog(dog)}
                  alt="heart icon"
                ></Button>
                <Button className="arrowbtn" onClick={() => handleNextDog()}>
                  <img
                    className="arrow"
                    src={require("../assets/images/right-arrow.png")}
                    alt="arrow"
                  />
                </Button>
              </div>
            </>
          </Card.Body>
        </Container>
      )}
    </section>
  );
};
export default DinderCard;