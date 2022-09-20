import {Table} from 'reactstrap'
import {BsCircle} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

import './index.css'

const TablePage = () => (
  <div className="table-page-background">
    <div>
      <p className="task-list-heading">Task List</p>
    </div>
    <div className="search-input">
      <AiOutlineSearch />
      <input type="search" className="search" />
      <div className="left-right-arrows">
        <MdKeyboardArrowLeft />
        <p className="search-paragraph">1-10 of 50</p>
        <MdKeyboardArrowRight />
      </div>
    </div>
    <Table className="table" borderless>
      <thead>
        <tr>
          <th>Task</th>
          <th>Time</th>
          <th>Date</th>
          <th>Assigned By</th>
          <th>Assigned To</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">BGV of new Candidates</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>
          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="red-circle" />
          </td>
          <td>High</td>
        </tr>
        <tr>
          <th scope="row">Onboard new Client</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>

          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="yellow-circle" />
          </td>
          <td>High</td>
        </tr>
        <tr>
          <th scope="row">BGV of new Candidates</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>

          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="red-circle" />
          </td>
          <td>Low</td>
        </tr>
        <tr>
          <th scope="row">BGV of new Candidates</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>

          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="green-circle" />
          </td>
          <td>Low</td>
        </tr>
        <tr>
          <th scope="row">BGV of new Candidates</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>

          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="yellow-circle" />
          </td>
          <td>High</td>
        </tr>
        <tr>
          <th scope="row">BGV of new Candidates</th>
          <td>2:00pm</td>
          <td>Fri, 21May22</td>
          <td>Manohar Patnaik</td>
          <td>Arvind Karmakar</td>

          <td>Fri,21May22</td>
          <td className="status-color">
            <BsCircle className="green-circle" />
          </td>
          <td>Medium</td>
        </tr>
      </tbody>
    </Table>
  </div>
)
export default TablePage
