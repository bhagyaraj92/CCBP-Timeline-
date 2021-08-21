import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectContainer,
  ProjectImage,
  ProjectContent,
  ProjectHeading,
  ProjectDurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <>
      <ProjectContainer>
        <ProjectImage src={imageUrl} alt="project" />
        <ProjectContent>
          <ProjectHeading>{projectTitle}</ProjectHeading>
          <ProjectDurationContainer>
            <AiFillCalendar color="#171f46" />
            <Duration>{duration}</Duration>
          </ProjectDurationContainer>
        </ProjectContent>
        <ProjectDescription>{description}</ProjectDescription>
        <VisitLink href={projectUrl}>Visit</VisitLink>
      </ProjectContainer>
    </>
  )
}

export default ProjectTimelineCard
