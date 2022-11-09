import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';{/*npm mosule for vertical map*/}
import 'react-vertical-timeline-component/style.min.css';


export const Timeline = () =>
{
    return (
        <>
         <div class="text-divider container"> <h3 className='text-center' style={{border:"1px solid silver",padding:'15px'}}>Journey</h3></div>
        <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - Present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h5 className="vertical-timeline-element-subtitle">Tech Mahindra</h5>
    <p>
      This was my first job after completing my degree where i working as a associate Software Engineer.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h5 className="vertical-timeline-element-subtitle">Jerusalem College of Engineering</h5>
    <p>
        Completed my B.tech degree specialized information technology
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Schooling</h3>
    <h5 className="vertical-timeline-element-subtitle">kendriya vidyalaya</h5>
    <p>
      The place where i gained lots of knowledge and memories.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</>
    )
}
