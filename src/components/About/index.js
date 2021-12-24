import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Heading,
    TopLine,
 } from './InfoElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id='about'>
                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                            <TextWrapper>
                                <TopLine>Hi</TopLine>
                                <Heading color={"#0C0E14"} >I’m Shreyas, a </Heading>
                                <Heading color={"#4ADDC2"} > software developer </Heading> 
                                <Heading color={"#0C0E14"} >who is passionate about using technology to make lives easier. I currently work at a</Heading> 
                                <Heading color={"#4ADDC2"} > technology consultancy </Heading> 
                                <Heading color={"#0C0E14"} >where we use cloud, AI, and analytic solutions to solve client problems. I aspire to be a</Heading> 
                                <Heading color={"#4ADDC2"} > product designer </Heading> 
                                <Heading color={"#0C0E14"} >in the technological industry and start my own design firm one day. I used</Heading>
                                <Heading color={"#4ADDC2"} > Figma and React </Heading>
                                <Heading color={"#0C0E14"} >to design and code this website which is my first dive into portraying my work and experiences.</Heading>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection
