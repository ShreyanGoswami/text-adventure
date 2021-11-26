import React from "react";

//Styles
import { Wrapper } from "./InteractiveButtons.styles";

const InteractiveButtons = ({playerId, id, buttons, callback, nextCallback }) => {

    const handleButtonClicked = e => {
        callback(playerId, id, e.target.value, nextCallback);
    }

    const buttonList = []
    if (Object.keys(buttons).length !== 0){
        buttons.forEach(b => {
            buttonList.push(<button key={b.id} value={b.value} type="button" onClick={handleButtonClicked}>{b.disp}</button>)
            
        });
    }
    
    return (
        <Wrapper>
            {buttonList}
        </Wrapper>
    );
};
export default InteractiveButtons;