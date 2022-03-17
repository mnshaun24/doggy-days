import React, {useState} from "react";

const Dislike = () => {

    const [showNext, setShowNext] = useState(false);

    return (
        <button onClick={() => setShowNext(true)}>
            {/* insert graphic here */} this is dislike
        </button>
    )
};

export default Dislike;