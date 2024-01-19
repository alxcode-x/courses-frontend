import React, { useState } from "react";

function Greeting() {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(currState => !currState)
    }
    return (
        <div>
            {!changeText && <p>Initial text</p>}
            {changeText && <p>Changed!</p>}
            <button type="button" onClick={changeTextHandler}>Change</button>
        </div>
    );
}

export default Greeting;
