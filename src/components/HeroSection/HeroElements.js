import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0C0E14;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */
    height: 800px;
    top:-80px;
    margin-bottom:-100px;
    /* height: 100%; */
    position: relative;
    /* z-index: 1; */    
    
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const PicBg = styled.img`
    width: 100%; 
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const ImgWrap = styled.div`
    /* max-width: 555px; */
    height: 35rem;
    /* margin-right: 10rem;
    margin-top: -10rem; */
    padding: 1rem 0rem;
    filter: drop-shadow(0px 1px 2px #595959);

    &:hover{
        transform: scale(1.03);
        transition: all 0.1s ease;
        /* cursor: pointer; */
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`

export const BackgroundLight = styled.div`
    position: absolute;
    left: -25rem;
    right: 50rem;
    top: 35rem;
    bottom: 0;
    opacity: ${({imgHover}) => imgHover ? 1.0 : 0.2 }; 

    background: radial-gradient(217.68% 217.68% at 27.97% 49.05%, rgba(90, 233, 253, 0.75) 0%, rgba(90, 233, 253, 0) 100%);
    filter: blur(1199.5px);
    border-radius: 2141.97px;
    transform: matrix(-0.91, -0.48, 0.4, -0.89, 0, 0);
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    /* position: absolute; */
    justify-content: center;
    text-align: center;
    padding-top: 100px;

`;

export const HeroH1 = styled.span`
    color: white;
    /* font-size: 6rem; */
    font-size: ${({capital}) => capital ? capital : '100px' }; 
    letter-spacing: ${({space}) => space ? space : '0em' }; 
    text-align: center;
    font-family: 'Allerta Stencil', sans-serif;
    /* font-weight: 200; */


    &:hover{
        transform: scale(1.03);
        transition: all 0.1s ease;
        /* cursor: pointer; */
    }
`

export const HeroP = styled.p`
    padding: 10px 15rem 0 15rem;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 53px;
    text-align: center;

    color: #58FFE1;



`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const Column = styled.div`
    display: 15px;
    padding: 0 30px;
`


