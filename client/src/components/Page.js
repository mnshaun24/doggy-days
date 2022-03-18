import React from "react";
import SavedDogs from "../pages/SavedDogs";
import DogSwiper from "../pages/DogSwiper";
import ModalContain from "../pages/ModalContain";

function Page(props) {
    

    const renderedPage = () => {
        switch(props.currentPage) {
            case "Login":
                return <ModalContain />
            case "Home":
                return <DogSwiper />
            case "Saved Dogs":
              return <SavedDogs />
            default:
              return <ModalContain />
          }

    }

    return (
        <section className="mainpg">
            {renderedPage()}
        </section>
    );
}

export default Page;