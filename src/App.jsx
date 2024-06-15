import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TimerHome from './Pages/TimerHome/TimerHome';
import WorldClock from './Pages/WorldClock/WorldClock';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/timer" />} />
        <Route path='/timer' element={<TimerHome />} />
        <Route path='/clock' element={<WorldClock />} />
      </Routes>
    </>
  );
}

export default App;
