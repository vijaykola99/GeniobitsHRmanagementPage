import Navbar from './components/Navbar'
import LeftSideNavbar from './components/LeftSideNavbar'
import Tasks from './components/Tasks'
import TablePage from './components/TablePage'

import './App.css'

const App = () => (
  <div className="app-background">
    <Navbar />
    <div className="app-background2">
      <LeftSideNavbar />
      <div>
        <Tasks />
        <TablePage />
      </div>
    </div>
  </div>
)

export default App
