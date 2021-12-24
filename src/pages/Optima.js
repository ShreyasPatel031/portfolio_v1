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
    const inpcolor = "#2987CB";
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Navbar initscroll={false} />
            <ProjectContainer color='#F44B4B' >
                <ProjectHeading> 
                    Optima+ 
                    <ProjectSubHeading> Creating a financial tool built for simplicity </ProjectSubHeading>
                </ProjectHeading>
                
            </ProjectContainer>
            <ProjectContent >
                <ContentHeading> Context </ContentHeading>
                <ContentCard 
                    inpcolor={inpcolor}
                    topleft="Development and Design Lead"
                    topright="August 2020 – 
                    December 2020"
                    bottomleft="User flow Design, Software Development, Python, VB.NET"
                    bottomright="J.P Morgan"
                />




                <ContentHeading> Problem </ContentHeading>
                <ContentSubHeading> Simplicity </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                    The <ContentText color={inpcolor}>Centralised Research Group</ContentText> at J.P takes on the responsibility of valuation, 
                    modelling, and investment proposals at J.P Morgan. The <ContentText color={inpcolor}>Fintech group</ContentText> dealt with 
                    creating scripts and automations for internal teams to automate tasks and streamline 
                    workflows. The problem that had to be solved for it was 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        There was <ContentText color={inpcolor}>no user-friendly way</ContentText> to run the programs 
                        and they could only be run by individuals who were accustomed 
                        to working with technology.
                    </ContentList>
                    <ContentList>
                    There were <ContentText color={inpcolor}>numerous internal teams</ContentText> with team-specific tools 
                    and creating a user interface for each of them was impractical.
                    </ContentList>
                </ContentListWrapper>



                <ContentHeading> People Insights </ContentHeading>
                <ContentSubHeading> Background </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The feedback received regarding the need for a user-friendly 
                        automation tool was broken down into two subgroups:
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        Higher management, who were generally older individuals, were not 
                        very accustomed to technology and felt <ContentText color={inpcolor}>apprehensive about 
                        having to give full control</ContentText> of the automation to the team they had under them
                        and prefered to have some control over the process themselves. 
                    </ContentList>
                    <ContentList>
                    Being a finance centric company, <ContentText color={inpcolor}>not all teams had the technical 
                    human resources</ContentText> needed to take full advantage of all the developed  programs.
                    </ContentList>
                </ContentListWrapper>



                <ContentHeading> Design Choices </ContentHeading>
                <ContentSubHeading> Platform </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        There were essentially two design choices, both linked to 
                        the two languages the scripts were written in:
                    </ContentText>
                    <ContentText> 
                        Python Application
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        Python has access to a host of <ContentText color={inpcolor}>analytical and graphical libraries</ContentText> not accessible in Excel.
                    </ContentList>
                    <ContentList>
                        The python applications would be more compatible with the Dash app.
                    </ContentList>
                </ContentListWrapper>
                <ContentWrapper>
                    <ContentText> 
                        Excel Add-in 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        With an excel addin, the scripts could be <ContentText color={inpcolor}>integrated into 
                        the excel workspace</ContentText>, which was the main tool of work for most team members.
                    </ContentList>
                    <ContentList>
                        An excel addin did not require administrator access; 
                        Visual Basic (VB) scripts could be integrated more easily 
                        and <ContentText color={inpcolor}>equipping the tool for different teams would not require separate development</ContentText>. 
                    </ContentList>
                </ContentListWrapper>


                <ContentHeading> Working Prototypes </ContentHeading>
                <ContentSubHeading> Team independent </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        I took the decision to create an excel addin as
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        Most python scripts were webscraping tools which did not 
                        require much user input and could be run as <ContentText color={inpcolor}>bash scripts from the Excel Addin</ContentText>.
                    </ContentList>
                    <ContentList>
                        Team-specific tools could be uploaded easily by pushing 
                        the code into the addin so that a <ContentText color={inpcolor}>different user 
                        interface would not be required for each team</ContentText>.
                    </ContentList>
                    <ContentList>
                        A pilot test was done with the North America Oil 
                        and Gas Team, and the <ContentText color={inpcolor}>team responded well to the 
                        ability to access tools directly from their workspace</ContentText>.
                    </ContentList>
                </ContentListWrapper>


                <ContentHeading> Outcome </ContentHeading>
                <ContentSubHeading> Optimization </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                    On initial testing of the interface, team members reported 
                    a drop of twenty percent in the number of hours spent per 
                    task per person. Shortly after, a second version was pushed 
                    that was equipped to three teams and their twenty workstations.
                    </ContentText>
                </ContentWrapper>
        

            </ProjectContent>
        </> 
    )
}
export default ProjectHome
