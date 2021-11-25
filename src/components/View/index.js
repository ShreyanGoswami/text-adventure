import React from "react";
import Bleh from "../Bleh";

//Styles
import { Wrapper, Content } from "./View.styles";

const View = ({text, nextCallback, disableNext}) => {

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