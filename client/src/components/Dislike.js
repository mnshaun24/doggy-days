import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Dislike = () => {
  const [showNext, setShowNext] = useState(false);

  return (
    <Button variant="outline-light" onClick={() => setShowNext(true)}>
      {/* insert graphic here */} this is dislike
    </Button>
  );
};

export default Dislike;