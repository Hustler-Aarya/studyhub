import './App.css'
import React from 'react'
import { BrowserRouter,Routes,  Route} from "react-router-dom"
import Navbar from './components/Navbar'

import Home from './components/Home'
import Course from './components/Course'
import Roadmaps from './components/Roadmaps'
import About from './components/About'
import Viewcourse from './CourseInner/Viewcourse'

function App()  {
  return (
    <div>
     
      <BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course" element={<Course />} />
  <Route path="/roadmaps" element={<Roadmaps />} />
  <Route path="/about" element={<About />} />
  <Route path="/viewcourse" element={<Viewcourse/>} />
  {/* <Route exact path="/" component={MyComponent} />
  <Route path="/Sign In" component={OtherPage} /> */}
</Routes>


</BrowserRouter>
  
      
      </div>
   
     
   
  )
}

export default App;
