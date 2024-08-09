import './App.css'
import Ask from './Components/Ask'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
    <div className="w-full h-[100vh] flex">
      <Sidebar/>
      <Ask />
    </div>
    </>
  )
}

export default App
