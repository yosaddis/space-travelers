import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// prettier-ignore
import { fetchApiRockets } from './redux/rockets/rockets';
import { fetchApiMissions } from './redux/missions/missions';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

import './App.css';

function App() {
  const ROCKETS = 'https://api.spacexdata.com/v3/rockets';
  const MISSIONS = 'https://api.spacexdata.com/v3/missions';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiMissions(MISSIONS));
    dispatch(fetchApiRockets(ROCKETS));
  }, []);
  return (
    <div className="App">
      <Router className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<h1>Don&apos;t exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
