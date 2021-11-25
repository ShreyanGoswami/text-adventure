import React from "react";

//components
import StoryPlayer from './StoryPlayer'
import Header from './Header'
import Footer from "./Footer";

/// styles
import { Wrapper } from "./Game.styles";

//main story
import Story from './../Story/Story';

const Game = () => {

    return (<Wrapper>
    <Header title="Welcome to the climate change game"></Header>
    <StoryPlayer story={Story}></StoryPlayer>
    <Footer title="Created by Shreyan"></Footer>
    </Wrapper>)
};

export default Game;