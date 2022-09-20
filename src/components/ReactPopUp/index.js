import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="add-new-task-button">
          <AiOutlinePlus /> Add New Task
        </button>
      }
    >
      {close => (
        <>
          <div>
            <p>Add Task</p>
            <hr className="popup-vertical-line" />

            <div className="popup-items">
              <div className="each-item">
                <p>Task Name</p>
                <input
                  type="text"
                  className="popup-inputs"
                  placeholder="Get Appointment letter from Hr"
                />
                <p>Description</p>
                <textarea
                  placeholder="Write Description"
                  className="popup-inputs"
                />
                <p>Related To</p>
                <input
                  type="text"
                  className="popup-inputs"
                  placeholder="Hr Department"
                />
              </div>

              <vl className="verticalLine" />

              <div className="each-item">
                <p>Assign To</p>
                <input type="text" className="popup-inputs popup-inputs2" />
                <p className="list-of-names">
                  Gautham Sharma <GrFormClose />
                </p>
                <p className="list-of-names2">
                  Harshad Joshi <GrFormClose />
                </p>
                <p className="list-of-names3">
                  Kavish Sen <GrFormClose />
                </p>
              </div>

              <vl className="verticalLine" />

              <div className="each-item">
                <p>Set Deadline</p>
                <input
                  type="text"
                  placeholder="Date"
                  className="popup-inputs"
                />
                <p>Set Priority</p>
                <group>
                  <input type="radio" id="high" checked />
                  <label className="label-elements" htmlFor="high">
                    High
                  </label>
                  <br />
                  <input type="radio" id="Medium" />
                  <label className="label-elements" htmlFor="medium">
                    Medium
                  </label>
                  <br />
                  <input type="radio" id="low" />
                  <label className="label-elements" htmlFor="low">
                    Low
                  </label>
                </group>
              </div>
            </div>
          </div>
          <nav className="close-button">
            <button type="button" className="popup-cancel-button">
              Cancel
            </button>
            <button
              type="button"
              className="close-trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </nav>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
