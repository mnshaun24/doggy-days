import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SavedDogs from "../pages/SavedDogs";
import DogSwiper from "../pages/DogSwiper";

function Page(props) {
    

    const renderedPage = () => {
        switch(props.currentPage) {
            case "Home":
                return <DogSwiper />
            case "Saved Dogs":
              return <SavedDogs />
            case "Login":
              return <Login />
            case "Signup":
                return <Signup />
            default:
              return <DogSwiper />
          }

    }

    return (
        <section>
            {renderedPage()}
        </section>
    );
}

export default Page;