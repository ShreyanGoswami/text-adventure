import React from "react";

//stlyes
import { Content, Wrapper } from "./Footer.styles";

const Footer = ({title}) => {
    return (
        <Wrapper>
            <Content>
                {title}
            </Content>
        </Wrapper>
    )
}

export default Footer;