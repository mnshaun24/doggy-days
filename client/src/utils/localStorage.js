export const getSavedDogIds = () => {
  const savedDogIds = localStorage.getItem("saved_dogs")
    ? JSON.parse(localStorage.getItem("saved_dogs"))
    : [];

  return savedDogIds;
};

export const saveDogIds = (dogIdArr) => {
  if (dogIdArr.length) {
    localStorage.setItem("saved_dogs", JSON.stringify(dogIdArr));
  } else {
    localStorage.removeItem("saved_dogs");
  }
};

export const removeDogId = (dogId) => {
  const savedDogIds = localStorage.getItem("saved_dogs")
    ? JSON.parse(localStorage.getItem("saved_dogs"))
    : null;

  if (!saveDogIds) {
    return false;
  }

  const updatedSavedDogIds = savedDogIds?.filter(
    (savedDogId) => savedDogId !== dogId
  );
  localStorage.setItem("saved_dogs", JSON.stringify(updatedSavedDogIds));

  return true;
};