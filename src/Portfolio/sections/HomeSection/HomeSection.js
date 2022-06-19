import React from "react";

import {
    Container,
    RightContainer,
    LeftContainer,
    Title,
    SubTitle,
    Content,
} from "./HomeSection.style";

export const HomeSection = (props) => {

    return (
        <Container theme={props.theme}>
            <LeftContainer>
                <Title>Hello, My name is <i style={{ fontFamily: 'cursive', color: '#02c37cde' }}>Reddy Prasanth Kumar</i></Title>
                <SubTitle>I am a Software Developer</SubTitle>
                <Content>
                    In​genious and determined Software developer with 3 years experience as
                    Frontend Developer in reputed organizations.​ Majorly
                    contributed to developing performant cross-platform applications using
                    modern frameworks to provide the best product experience to the users.
                    Always aims to be a reliable software developer and resilient leader
                    who can lead teams to build robust and highly scalable products.
                </Content>
            </LeftContainer>
            <RightContainer>
                <img
                    src="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png"
                    alt="profile-pic"
                    style={{ height: "380px", width: '360px' }}
                />
            </RightContainer>
        </Container>
    );
};
