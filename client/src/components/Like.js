import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Like = () => {
  const [showMeNext, setShowMeNext] = useState(false);

  return (
    <Button variant="outline-light" onClick={() => setShowMeNext(true)}>
      {/* insert graphic here */} this is like
    </Button>
  );
};

export default Like;
