import styled from 'styled-components'

export const ProjectContainer = styled.div`
    background: ${props => props.color };
    display:flex;
    justify-content: center;
    align-items: center;
    /* padding: 15rem 0 0 0; */
    padding-top: 80px;
    height: 800px;
    top:-80px;
    position: relative;
`

export const ProjectHeading = styled.h1`
    /* padding-top: 8rem; */
    color: white;
    font-size: 5rem;
    text-align: center;
    font-family: 'Allerta Stencil', sans-serif;

`
export const ProjectSubHeading = styled.h2`
    padding: 2rem 15rem 0 15rem;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 53px;
    text-align: center;

    color: #58FFE1;

`

export const ProjectContent = styled.div`
    background: white;
    /* height: 700px; */
    padding-bottom: 150px;
`
export const ContentHeading = styled.h1`
    margin-left: 154px;
    padding-top: 100px;

    font-family: Allerta;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 33px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #C4C4C4;
`

export const ContentSubHeading = styled.h2`
    margin-left: 190px;
    padding-top: 9px;

    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 46px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #595959;
`

export const ContentWrapper = styled.div`
    margin-left: 225px;
    margin-right: 225px;
    margin-top: 10px;
`

export const ContentText = styled.span`

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 32px;
    /* or 152% */

    letter-spacing: 0.03em;

    color: ${props => props.color || '#0C0E14'};
    /* color: ${({highlight}) => highlight ? '#E0803A' : '#0C0E14' }; */
`

export const ContentListWrapper = styled.div`
    margin-left: 250px;
    margin-right: 225px;
    margin-top: 5px;
`

export const ContentList = styled.li`

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 32px;
    /* or 152% */

    letter-spacing: 0.03em;
    color: '#0C0E14'; 
`