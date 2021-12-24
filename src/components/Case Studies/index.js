import React from 'react'
import Icon1 from '../../images/Grades.svg'
import Icon2 from '../../images/Data processing-pana.svg'
import Icon3 from '../../images/Financial data-amico.svg'
import { 
    ServicesContainer,
    ServiceH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP

 } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='case_studies'>
                <ServiceH1> Case Studies </ServiceH1>
                <ServicesWrapper>
                    <ServicesCard to='/appgrader'>
                        <ServicesIcon  src={Icon1}/>
                        <ServicesH2>AppGrader</ServicesH2>
                        <ServicesP>creating a visual data solution to help faculty grade better </ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/signal'>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Signal Generator </ServicesH2>
                        <ServicesP>visualizing queries for data science</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/optima'>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Optima+ </ServicesH2>
                        <ServicesP>creating a financial tool built for simplicity</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
