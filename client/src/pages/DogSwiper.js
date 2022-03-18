import React, { useState, useEffect } from "react";
import Dislike from "../components/Dislike";
import Like from "../components/Like";

const DogSwiper = () => {

    const url = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
    const [dog, setDog] = useState();
  
    useEffect(() => {
      fetch(url, {
        method: 'GET',
        headers: {
          "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDog(data)
      })
      .catch(function(err) {
        console.log(err)
      })
    }, []);
  

    return (
      <section>
        <div className="dogswiperbg" style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        {/* insert header */}
        <h1>Dinder</h1>
        <img
        src={dog && dog[0].url} 
        alt="A dog"
        className="dogPic">
          </img>
        <p>Breed: {dog && dog[0].breeds[0].name}</p>
        <Dislike /> <span><Like /></span>
        </div>
        </section>
    )
};

export default DogSwiper;

    // <div className="App">
    //   <h1>Doggy Days</h1>
    //   <img src={dog && dog[0].url} alt="A dog"></img>
    //   <p>Breed: {dog && dog[0].breeds[0].name}</p>
    //   <p>Characteristics: {dog && dog[0].breeds[0].temperament}</p>
    //   <p>Life Span: {dog && dog[0].breeds[0].life_span}</p>
    //   <p>Weight: {dog && dog[0].breeds[0].weight.imperial} lbs.</p>
    // </div>
