import React from 'react'
import { 
    ContentBox,
    ContentItem,
    CardHeading,
    CardText,
    } from "./ProjectCardElements"

function ContentCard(props){
    
    return (
        <ContentBox>
            <ContentItem>
                <CardHeading color={props.inpcolor}>Role</CardHeading>
                <CardText>{props.topleft}</CardText>
            </ContentItem>
            <ContentItem>
                <CardHeading color={props.inpcolor}>Timeline</CardHeading>
                <CardText>{props.topright}</CardText>
            </ContentItem>
            <ContentItem>
                <CardHeading color={props.inpcolor}>Skills</CardHeading>
                <CardText>{props.bottomleft}</CardText>
            </ContentItem>
            <ContentItem>
                <CardHeading color={props.inpcolor}>Organization</CardHeading>
                <CardText>{props.bottomright}</CardText>
            </ContentItem>
        </ContentBox>
        
    )
}

export default ContentCard
