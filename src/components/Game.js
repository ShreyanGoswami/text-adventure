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

    const playerId = Math.floor(Math.random()*100000);

    console.log("Player id " + playerId);

    return (<Wrapper>
    <Header title="Welcome to the climate change game"></Header>
    <h2><u>Welcome player {playerId}</u></h2>
    <StoryPlayer playerId={playerId} story={Story}></StoryPlayer>
    <Footer title="Created by Shreyan"></Footer>
    </Wrapper>)
};

export default Game;