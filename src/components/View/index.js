import React from "react";

//Styles
import { Wrapper, Content, Text } from "./View.styles";

const View = ({text, nextCallback, disableNext}) => {

    return (
        <Wrapper>
            <Content>
                <Text>
                {text}
                </Text>
                <button type="button" onClick={(e)=>nextCallback()} hidden={disableNext}>Next</button>
            </Content>
        </Wrapper>
    );
};

export default View;