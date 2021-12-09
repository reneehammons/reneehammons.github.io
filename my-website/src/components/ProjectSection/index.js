import React from 'react';
import {
    ProjectContainer,
    ProjectWrapper,
    TaskAppHeader,
    TaskOrganizerContainer,
    GithubLink,
} from './ProjectElements';
import App from '../../taskorganizer/App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const ProjectSection = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectWrapper>
                <TaskAppHeader>
                    Try Out My Task Organizer App  
                </TaskAppHeader>
                <GithubLink 
                    className="btn btn-outine-info"
                    href="https://github.com/reneehammons/TaskOrganizer"
                    target="_parent">
                    View on Github <FontAwesomeIcon icon={faGithub} size="1x" color="#108A69"/>    
                </GithubLink>
            </ProjectWrapper>
            <TaskOrganizerContainer><App /></TaskOrganizerContainer>
        </ProjectContainer>
    )
}

export default ProjectSection
