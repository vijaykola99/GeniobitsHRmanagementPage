import {
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineSetting,
} from 'react-icons/ai'
import {MdOutlineLogout} from 'react-icons/md'

import './index.css'

const LeftSideNavbar = () => (
  <div>
    <div className="left-side-options">
      <div className="set-of-items">
        <AiOutlineAppstore className="ai-logos" />
        <p>My Apps</p>
      </div>
      <div className="set-of-items2">
        <AiOutlineUser className="ai-logos" />
        <p>Resources</p>
      </div>
      <div className="set-of-items3">
        <AiOutlineHome className="ai-logos" />
        <p>My Organisations</p>
      </div>
      <div className="set-of-items2">
        <AiOutlineSetting className="ai-logos" />
        <p>Settings</p>
      </div>
      <div className="set-of-items2">
        <MdOutlineLogout className="ai-logos" />
        <p>Logout</p>
      </div>
    </div>
  </div>
)
export default LeftSideNavbar
