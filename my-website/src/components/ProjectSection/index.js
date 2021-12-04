import React from 'react';
import {
    ProjectContainer,
    ProjectHeader,
    TaskOrganizerContainer,
    ProjectWrapperNarrow,
    ProjectWrapperWide,
    Arrow,
    TaskAppHeader,
    Line,
    TaskOrganizerList
} from './ProjectElements';
import App from '../../taskorganizer/App';
import { TiArrowLeftOutline } from 'react-icons/ti';

const ProjectSection = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectWrapperWide></ProjectWrapperWide>
            <ProjectWrapperNarrow></ProjectWrapperNarrow>
            <ProjectHeader> 
                My Projects 
                <Line></Line>
            </ProjectHeader>
            <TaskAppHeader>
                Task Organizer App
                <TaskOrganizerList> - React JS </TaskOrganizerList>
            </TaskAppHeader>
            <TaskOrganizerContainer>
                <App />
            </TaskOrganizerContainer>
            <Arrow> <TiArrowLeftOutline></TiArrowLeftOutline> </Arrow>
        </ProjectContainer>
    )
}

export default ProjectSection
