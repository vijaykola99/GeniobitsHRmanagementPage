import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {BsCalendarWeek} from 'react-icons/bs'

import ReactPopUp from '../ReactPopUp'
import './index.css'

const data = [
  {id: 1, count: 66, status: 'ongoing', color: '#fbbd54'},
  {id: 2, count: 24, status: 'Delayed', color: '#fb5a63'},
  {id: 3, count: 10, status: 'Completed', color: '#7ed353'},
  {id: 4, count: 100, status: 'Total Assigned', color: '#40afda'},
]

const Tasks = () => (
  <div className="task-background1">
    <div className="task-background2">
      <nav className="task-navbar">
        <p>Tasks</p>
        <div className="arrow-logos">
          <MdKeyboardArrowLeft className="arrow-icons" />
          <BsCalendarWeek />
          <p className="task-paragraph">may 9,2022</p>
          <MdKeyboardArrowRight className="arrow-icons" />
        </div>
      </nav>
      <hr className="horizontal-line" />
      <ul className="unorder-list-items">
        {data.map(eachItem => {
          const {count, status, color, id} = eachItem
          return (
            <li
              className="list-items"
              key={id}
              style={{backgroundColor: color}}
            >
              <p>{count}</p>
              <p>{status}</p>
            </li>
          )
        })}
      </ul>
    </div>
    <ReactPopUp />
  </div>
)
export default Tasks
