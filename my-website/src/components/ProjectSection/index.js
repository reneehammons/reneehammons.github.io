import React from 'react';
import {
    ProjectContainer,
    ProjectHeader,
    TaskOrganizerContainer,
    ProjectWrapperNarrow,
    ProjectWrapperWide,
    Arrow,
    TaskAppHeader,
    TaskOrganizerNotableFeature,
    GithubLink,
    Line,
    TaskOrganizerList
} from './ProjectElements';
import App from '../../taskorganizer/App';
import { TiArrowLeftOutline } from 'react-icons/ti';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const ProjectSection = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectWrapperWide></ProjectWrapperWide>
            <ProjectWrapperNarrow></ProjectWrapperNarrow>
            <ProjectHeader> 
                Recent Project 
                <Line></Line>
            </ProjectHeader>
            <TaskAppHeader>
                Try Out My Task Organizer App!
                <TaskOrganizerNotableFeature> Notable Features: </TaskOrganizerNotableFeature>
                <TaskOrganizerList> - Built with React </TaskOrganizerList>
                <TaskOrganizerList> - Displays Inputed Tasks </TaskOrganizerList>
                <TaskOrganizerList> - Sorts Tasks By Date and Time </TaskOrganizerList>
                <GithubLink 
                    className="btn btn-outine-info"  
                    target="_blank"
                    href="https://github.com/reneehammons/TaskOrganizer" 
                    role="button" >
                    View on Github <FontAwesomeIcon icon={faGithub} size="1x" color="#E27D60"/> 
                </GithubLink>
            </TaskAppHeader>
            <TaskOrganizerContainer>
                <App />
            </TaskOrganizerContainer>
            <Arrow> <TiArrowLeftOutline></TiArrowLeftOutline> </Arrow>
        </ProjectContainer>
    )
}

export default ProjectSection
