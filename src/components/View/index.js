import React, { createRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Bleh from "../Bleh";

//Styles
import { Wrapper, Content, Text } from "./View.styles";

const View = ({text, nextCallback, disableNext}) => {

    const [isLoading, setIsLoading] = useState(true);
    const box = createRef(null);

    const animate = () => {
        console.log("Changed");
        box.current.className = "animate";
    }

    return (
        <Wrapper>
            <Content>
                {/* <Text ref={box} onChange={animate}>  */}
                {/* {text}
                </Text> */}
                <Bleh text={text}/>
                <button type="button" onClick={(e)=>nextCallback()} hidden={disableNext}>Next</button>
            </Content>
        </Wrapper>
    );
};

export default View;