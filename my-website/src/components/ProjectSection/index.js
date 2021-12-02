import React from 'react';
import {
    ProjectContainer,
    ProjectHeader,
    TaskOrganizerContainer,
    ProjectWrapperWide,
    ProjectWrapperNarrow,
} from './ProjectElements';
import App from '../../taskorganizer/App';

const ProjectSection = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectWrapperWide>
                <TaskOrganizerContainer>
                    <App />
                </TaskOrganizerContainer>
            </ProjectWrapperWide>
            <ProjectWrapperNarrow>
                <ProjectHeader>My Projects</ProjectHeader>
            </ProjectWrapperNarrow>
        </ProjectContainer>
    )
}

export default ProjectSection
