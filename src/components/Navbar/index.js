import {IoIosNotificationsOutline} from 'react-icons/io'
import {MdOutlineAccountCircle} from 'react-icons/md'

import './index.css'

const Navbar = () => (
  <nav className="navbar-background">
    <div className="options">
      <img
        className="logo"
        src="https://res.cloudinary.com/dijmpdww2/image/upload/v1663591700/download_rpkz7f.png"
        alt="website-logo"
      />
      <p className="my-apps-paragraphs">My Apps> </p>
      <p className="tasks-paragraph">Tasks</p>
    </div>
    <div>
      <IoIosNotificationsOutline height={100} className="icons" />
      <MdOutlineAccountCircle className="icons" />
    </div>
  </nav>
)
export default Navbar
