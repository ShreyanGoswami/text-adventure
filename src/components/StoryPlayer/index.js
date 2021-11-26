import React, { useState } from "react";

// Contants
import { NEXT_ID, TEXT, IS_NEXT_DISABLED, BUTTONS, RANGE } from "../../Story/Constants";

//Components
import View from "../View";
import Interaction from "../Interaction";

// Styles
import { Wrapper, Content } from "./Story.styles";

//Functions
import { handleDecision, handleSlider, onStoryCompletion } from "../../Story/Story";

const StoryPlayer = ({ playerId, story }) => {

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const moveToNext = (nextId) => {
        if (nextId === undefined) {
            const newIndex = story[getIndexBasedOnId(currentStoryIndex, story)][NEXT_ID];
            if (story[getIndexBasedOnId(newIndex, story)][NEXT_ID] === -1) {
                // check if this is the last panel
                setCurrentStoryIndex(newIndex);
                onStoryCompletion();
            }
            else {
                setCurrentStoryIndex(newIndex);
            }
        } else {
            setCurrentStoryIndex(nextId);
        }

    }

    const getIndexBasedOnId = (id, story) => {
        for (let i = 0; i < story.length; i++) {
            if (story[i]["id"] === id) {
                return i;
            }
        }
    }

    return (
        <Wrapper>
            <Content>
                <View class="text"
                    text={story[getIndexBasedOnId(currentStoryIndex, story)][TEXT]}
                    nextCallback={moveToNext}
                    disableNext={story[getIndexBasedOnId(currentStoryIndex, story)][IS_NEXT_DISABLED]}></View>
                <Interaction
                    playerId={playerId}
                    id={currentStoryIndex}
                    buttons={story[getIndexBasedOnId(currentStoryIndex, story)][BUTTONS]}
                    buttonCallback={handleDecision}
                    range={story[getIndexBasedOnId(currentStoryIndex, story)][RANGE]}
                    handleSlider={handleSlider}
                    nextCallback={moveToNext}
                />
            </Content>
        </Wrapper>
    );
};

export default StoryPlayer;