import React from "react";

//stlyes
import { Content, Wrapper } from "./Header.styles";

const Header = ({title}) => {
    return (
        <Wrapper>
            <Content>
                {title}
            </Content>
        </Wrapper>
    )
}

export default Header;