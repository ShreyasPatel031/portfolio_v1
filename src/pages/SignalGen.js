import React, {useEffect} from 'react'

// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { 
    ProjectContainer,
    ProjectHeading,
    ProjectSubHeading,
    ProjectContent,
    ContentHeading,
    ContentSubHeading,
    ContentText,
    ContentList,
    ContentWrapper,
    ContentListWrapper
} from './ProjectElements';
import ContentCard from './ProjectCard/ProjectCard';

const ProjectHome = () => {
    const inpcolor = "#F44B4B";
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Navbar initscroll={false} />
            <ProjectContainer color='#E0803A' >
                <ProjectHeading> 
                    Signal Generator 
                    <ProjectSubHeading> Visualizing queries for data science </ProjectSubHeading>
                </ProjectHeading>
                
            </ProjectContainer>
            <ProjectContent >
                <ContentHeading> Context </ContentHeading>
                <ContentCard 
                    inpcolor={inpcolor}
                    topleft="Full Stack Developer, Frontend Lead"
                    topright="May 2020 – July 2020"
                    bottomleft="User flow Design, Software Development, React.js, Java, HiveQL"
                    bottomright="Flipkart"
                />



                <ContentHeading> Background </ContentHeading>
                <ContentSubHeading> Engineering Overhaul </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        Flipkart ( Walmart-owned ) is the <ContentText color={inpcolor}>largest online retailer in India</ContentText>. 
                        The Flipkart <ContentText color={inpcolor}>demand and supply planning team</ContentText> oversaw the forecast of 
                        the commodities to be sold and the recommendation of goods to buy. 
                        The data science team required queried data (signals) to run 
                        <ContentText color={inpcolor}> forecasting models</ContentText> for the above. Providing data required a <ContentText color={inpcolor}>member 
                        of the development team an average of two hours to send each 
                        time the data</ContentText> was requested. As part of a five member group I and a 
                        team of developers were assigned the responsibility developing a 
                        user interface which could give the data science team the ability 
                        to write queries to access the database internally thereby <ContentText color={inpcolor}>bypassing 
                        the need for development intervention</ContentText> saving developer time and increasing efficiency.
                    </ContentText>
                </ContentWrapper>




                <ContentHeading> Challenge </ContentHeading>
                <ContentSubHeading> Complexity </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The challenge in creating a user interface that simulated query writing was 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>The <ContentText color={inpcolor}>syntax</ContentText> and process of <ContentText color={inpcolor}>learning</ContentText> a query language was fairly <ContentText color={inpcolor}>complex</ContentText>.</ContentList>
                    <ContentList>
                        Some queries would be <ContentText color={inpcolor}>repeated multiple times</ContentText> across different teams 
                        ( for example a query that calculated Profit = Sales - Loss ) doing <ContentText color={inpcolor}>redundant work</ContentText>.
                    </ContentList>
                </ContentListWrapper>




                <ContentHeading> Solution </ContentHeading>
                <ContentSubHeading> Query User Interface </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The solution for developing an easy-to-use query user interface is twofold: 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        Real time results: While the entire process of writing 
                        a query might be complex, the <ContentText color={inpcolor}>individual operations</ContentText> that 
                        can be performed on a query are fairly <ContentText color={inpcolor}>straightforward</ContentText> and 
                        can be abstracted into <ContentText color={inpcolor}>six possible operations</ContentText>. The above, when 
                        coupled with a real time display which shows the result of the 
                        query after each operation <ContentText color={inpcolor}>simplifies the complex process into 
                        numerous straightforward steps taken in succesion</ContentText>.
                    </ContentList>
                    <ContentList>
                        Store Intermediate results: The repetition of work due
                        to repeated queries was eliminated by  <ContentText color={inpcolor}>utilising the tradeoff 
                        of using more memory</ContentText>, the cost of additional memory being lesser 
                        than the running cost of the query multiple times in this particular 
                        instance. The query would be  <ContentText color={inpcolor}>stored once in the form of a view </ContentText> 
                        ( result set of a stored query ) and then  <ContentText color={inpcolor}>used from memory when 
                        required again</ContentText>. and A fact dimension schema was used which fit 
                        well with requierment for data warehouse modelling.
                    </ContentList>
                </ContentListWrapper>

            </ProjectContent>
        </> 
    )
}
export default ProjectHome
