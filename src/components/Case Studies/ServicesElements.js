import styled from 'styled-components'
import { Link as linkRouter } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background: #0C0E14;

`

export const ServicesWrapper = styled.div`
    max-width: 1000 px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

`

export const ServicesCard = styled(linkRouter)`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    border-radius: 10px;
    max-width: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    color:black;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
  
`
export const ServiceH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: left;
    margin-left: 3rem;

`

export const ServicesH2 = styled.h2`
    font-size: 20px; 
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Roboto Slab;
    color:#0C0E14;
`

export const ServicesP = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    color:#0C0E14;
`
