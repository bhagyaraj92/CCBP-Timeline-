import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTimeCard,
  CourseHeading,
  DurationContainer,
  DurationP,
  Description,
  CourseUl,
  CourseLi,
  ListContent,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTimeCard>
        <CourseHeading>{courseTitle}</CourseHeading>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <DurationP>{duration}</DurationP>
        </DurationContainer>
      </CourseTimeCard>
      <Description>{description}</Description>
      <CourseUl>
        {tagsList.map(each => (
          <CourseLi key={each.id}>
            <ListContent>{each.name}</ListContent>
          </CourseLi>
        ))}
      </CourseUl>
    </>
  )
}
export default CourseTimelineCard
