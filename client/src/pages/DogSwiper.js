import React, { useState, useEffect } from "react";

import { Container, Button, Card } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import { saveDogIds, getSavedDogIds } from '../utils/localStorage';


// import DinderCard from "../components/DinderCard";


const DogSwiper = () => {

  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());

  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });

  const [saveDog] = useMutation(SAVE_DOG);

  const url = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const [dog, setDog] = useState();

  function getDog() {

    fetch(url, {
      method: 'GET',
      headers: {
        "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {

        setDog(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  useEffect(() => {
    getDog();
  }, []);

  const handleNextDog = () => {
    getDog();
  }

  const handleSaveDog = async () => {
    console.log(dog)
  }

  return (
    <section>

      {Auth.loggedIn() && (
        <Container>
          <Card.Body>
            <Card.Img src={dog && dog[0].url} alt={`This is a ${dog && dog[0].breeds[0].name}`}></Card.Img>
            <Card.Title>{dog && dog[0].breeds[0].name}</Card.Title>
            <p>Characteristics: {dog && dog[0].breeds[0].temperament}</p>
            <p>Life Span: {dog && dog[0].breeds[0].life_span}</p>
            <p>Weight: {dog && dog[0].breeds[0].weight.imperial} lbs.</p>

            <div className="savebtn">
              <Button variant="outline-secondary"
                disabled={savedDogIds?.some((savedDogId) => savedDogId === dog[0].id)} onClick={() => handleSaveDog()}>Save Dog</Button>
              <Button variant="outline-secondary" onClick={() => handleNextDog()}>Next</Button>
            </div>

          </Card.Body>
        </Container>
      )}
    </section>
  )
};

export default DogSwiper;



// return (
//   <section>
//     <DinderCard />

//     <Button
//       disabled={savedDogIds?.some((savedDogId) => savedDogId === dog[0].id)} onClick={() => handleSaveDog()}>Save Dog</Button>
//     <Button onClick={() => handleNextDog()}>Next</Button>

//   </section>
// );
// };

// export default DogSwiper;

