import "./App.css"
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="bg-[rgb(248,250,253)]">
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App