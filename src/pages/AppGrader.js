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


const AppGraderHome = () => {
    return (
        <>
        <ProjectContainer color='#2987CB' >
            <ProjectHeading> 
                AppGrader 
                <ProjectSubHeading> 
                    Creating a visual data solution to help faculty grade better 
                </ProjectSubHeading>
            </ProjectHeading>
            
        </ProjectContainer>
        </>
    );
}

const AppPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    

    const inpcolor = "#E0803A";
    return (
        <>

            <Navbar initscroll={false} />
            <AppGraderHome/>
            <ProjectContent >
                <ContentHeading> Context </ContentHeading>
                <ContentCard 
                    inpcolor={inpcolor}
                    topleft="Student Developer"
                    topright="Aug 2019 - Dec 2019"
                    bottomleft="Design Thinking, Development and Testing,Python Dash"
                    bottomright="Academic Undergraduate Studies Division, BITS Goa"
                />


                <ContentHeading> Insights </ContentHeading>
                <ContentSubHeading> Grading on the curve </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        Grading on a curve refers to the process of adjusting student grades to ensure that a test or 
                        assignment has the <ContentText color={inpcolor}>proper distribution</ContentText> throughout the class 
                        as well as a <ContentText color={inpcolor}>desired total average</ContentText>. Based on faculty feedback, they were required to grade on the curve 
                        in cases where 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>Certain <ContentText color={inpcolor}>outlying students</ContentText> disturbed the usual grade distribution due to extremely high or low marks.</ContentList>
                    <ContentList>A cohort of students <ContentText color={inpcolor}>performed poorly compared to previous batches</ContentText>, and the professor would prefer to assign grades from a grade lower than the highest ( the highest scorer might get a B for their marks ).</ContentList>
                </ContentListWrapper>





                <ContentHeading> Problem </ContentHeading>
                <ContentSubHeading> Visual Intuition </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        In cases when grading on the curve was necessary, the faculty faced difficulty in 
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList><ContentText color={inpcolor}>Visualizing</ContentText> how the grades were distributed and how many students recieved each grade.</ContentList>
                    <ContentList>Understanding how adjusting a grade would <ContentText color={inpcolor}>affect the overall grades</ContentText> the students received.</ContentList>
                </ContentListWrapper>


                <ContentHeading> Prototyping </ContentHeading>
                <ContentSubHeading> Visualization and Influence </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The prototypes tested how faculty reacted to the two problems of visualization and influence on the overall grade.
                    </ContentText>
                </ContentWrapper>



                <ContentHeading> Design Decision </ContentHeading>
                <ContentSubHeading> Perception and Flexibility </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The design decisions taken were
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        <ContentText color={inpcolor}>Interval-based visualization</ContentText>: Professors 
                        were more accustomed to seeing grades within marking intervals as opposed to seeing the percentage 
                        of students who fell within grade intervals.
                    </ContentList>
                    <ContentList>
                        <ContentText color={inpcolor}>Moving average grade</ContentText> : The professors found that keeping the average grade variable gave them more flexibility. 
                        A <ContentText color={inpcolor}>Moving Grade Point Variable ( MGPV )</ContentText> was added which shows the marks corresponding to the average grade received 
                        by the students. If this value is lower than the average marks, it indicates that the professor chose to give this 
                        cohort grades lower than usual ( possibly due to their poor performance ) and vice versa.
                    </ContentList>
                </ContentListWrapper>


                <ContentHeading> Distribution </ContentHeading>
                <ContentSubHeading> Trade-off </ContentSubHeading>
                <ContentWrapper>
                    <ContentText> 
                        The prototype had two possible modes of distribution
                    </ContentText>
                </ContentWrapper>
                <ContentListWrapper>
                    <ContentList>
                        <ContentText color={inpcolor}>Desktop Installation</ContentText>: This mode was more responsive, 
                        however, required a larger set-up time.
                    </ContentList>
                    <ContentList>
                        <ContentText color={inpcolor}>Browser Access</ContentText>: The code could be deployed 
                        online using a platform as a service like Heroku. This mode was less responsive but required no setup time.
                    </ContentList>
                </ContentListWrapper>
                <ContentWrapper>
                    <ContentText> 
                    The application was uploaded to Heroku as the professors <ContentText color={inpcolor}>did not mind the less responsive 
                    application as long as they got instant access directly using their browser</ContentText>. The application 
                    was later pushed to the university's <ContentText color={inpcolor}>AWS virtual machine</ContentText> where professors could access the 
                    application directly from their browser, and the virtual desktop ( EC2 instance ) ensured 
                    that there was high responsiveness as well.  
                    </ContentText>
                </ContentWrapper>         
                

            </ProjectContent>
        </> 
    )
}
export default AppPage
