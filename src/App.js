import './App.css';
import SleepPlanning from './components/SleepPlanning';
import InformationPage from './components/InformationPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='root'>
      <Router>
           <div className="App">
           <NavBar/>
           <Routes>
                 <Route exact path='/sleep-calculator/' element={< SleepPlanning />}></Route>
                 <Route exact path='/sleep-calculator/information' element={< InformationPage />}></Route>
          </Routes>
          </div>
       </Router>
    </div>
    
  );
}

export default App;
