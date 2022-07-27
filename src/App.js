import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Strength from './components/Strength';
import Agility from './components/Agility';
import Intelligence from './components/Intelligence';
import { getStrengthHeroesList } from './redux/strength/Strength';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/agility" element={<Agility />} />
          <Route path="/intelligence" element={<Intelligence />} />
        </Routes>
      </Router>
    </>
  );
}
getStrengthHeroesList();
export default App;
