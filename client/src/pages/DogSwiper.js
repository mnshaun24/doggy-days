import React, { useState, useEffect } from "react";
import Dislike from "../components/Dislike";
import Like from "../components/Like";
import DinderCard from "../components/DinderCard";

const DogSwiper = () => {
  const url =
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
  const [dog, setDog] = useState();

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDog(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <DinderCard />
    </section>
  );
};

export default DogSwiper;
