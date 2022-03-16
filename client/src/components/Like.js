import React, {useState} from "react";

const Like = () => {

    const [showMeNext, setShowMeNext] = useState(false);

    return (
        <button onClick={() => setShowMeNext(true)}>
            {/* insert graphic here */} this is like
        </button>
    )
};

export default Like;