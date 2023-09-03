

import {Route,Routes} from 'react-router-dom'
import docGetter from './components/docGetter'
import './App.css'
import Home from './Pages/home/home.jsx'
import CS from './Pages/cs/cs'
import DocumentUploader from './Pages/contribute/contribute'
function App() {
  
  return (
    <div>
     
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cs' element={<CS/>}/>
        <Route exact path='/contribute' element={<DocumentUploader/>}/>
      </Routes>
    </div>
  )
}

export default App
