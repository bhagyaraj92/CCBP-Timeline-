import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  TimeLineContainer,
  ResponsiveContainer,
  HeadingContainer,
  MainHeading,
  CcbpHeading,
} from './styledComponents'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimelineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <>
      <TimeLineContainer>
        <ResponsiveContainer>
          <HeadingContainer>
            <MainHeading>
              MY JOURNEY OF <br /> <CcbpHeading>CCBP 4.0 </CcbpHeading>
            </MainHeading>
          </HeadingContainer>
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(each => renderTimelineView(each))}
          </Chrono>
        </ResponsiveContainer>
      </TimeLineContainer>
    </>
  )
}

export default TimeLineView
