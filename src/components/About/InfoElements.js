import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: '#f9f9f9' };

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

`

export const Column1 = styled.div`
    display: 20px;
    padding: 0 15px;
    /* grid-area: col1; */
`

export const Column2 = styled.div`
    display: 50px;
    padding: 0 15px;
    /* grid-area: col2; */
`

export const TextWrapper = styled.div`
    margin-top:60px;
`

export const TopLine = styled.p`
    color: #4ADDC2;
    font-size: 2rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Heading = styled.span`
    /* color: #010606; */
    margin-bottom: 24px;
    font-size: 2rem;
    /* line-height: 2rem; */
    font-weight: 600;
    color: ${({color}) => color};

    &:hover{
        transition: all 0.0001s ease-in-out;
        color: #58FFE1;
    }

    @media scrren and (max-width: 480px){
        font-size: 32px;
    }
`

export const ImgWrap = styled.div`
    /* max-width: 800px; */
    height: 100%;
    padding-right: 5rem;
`

export const Img = styled.img`
    width: 150%;
`