import React from "react";

// Components
import InteractiveButtons from "../InteractiveButtons";
import Slider from "../Slider";

// Styles
import { Wrapper, Content } from "./Interaction.styles";

const Interaction = ({playerId, id, buttons, range, buttonCallback, handleSlider, nextCallback}) => {
    return (
        <Wrapper>
            <Content>
            <InteractiveButtons
                playerId={playerId}
                id={id}
                buttons={buttons !== undefined ? buttons: {}}
                callback={buttonCallback}
                nextCallback={nextCallback}
            ></InteractiveButtons>
            <Slider
                id={id}
                range={range !== undefined ? range : {}}
                callback={handleSlider}
                nextCallback={nextCallback}
            />
            </Content>
        </Wrapper>

    )
}

export default Interaction