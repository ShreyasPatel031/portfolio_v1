import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 1105px;
    height: 362px;
    margin-left: 160px;
    margin-top: 19px;

    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 65px;
    
    display: grid;
    grid-template-columns: auto auto;
    padding: 60px 100px 50px 100px;
    
`;

export const ContentItem = styled.div`
    padding:10px;
    
`;

export const CardHeading = styled.h1`
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 37px;

    letter-spacing: 0.03em;

    color: #E0803A;
    color: ${({color}) => color };

`
export const CardText = styled.h2`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: 0.03em;

    padding-left:50px;

    color: #000000;

`