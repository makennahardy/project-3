import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {DogBoss} from './pages/DogBoss';
import {CatBoss} from './pages/CatBoss';
import {SquirrelBoss} from './pages/SquirrelBoss';
import {HorseBoss} from './pages/HorseBoss';
import {Loser} from './pages/Loser';
import {Winner} from './pages/Winner';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
  <BrowserRouter basename="/project-3/build">
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/dogboss" element={<DogBoss />} />
      <Route path ="/catboss" element={<CatBoss />} />
      <Route path ="/horseboss" element={<HorseBoss />} />
      <Route path ="/squirrelboss" element={<SquirrelBoss />} />
      <Route path ="/loser" element={<Loser />} />
      <Route path ="/winner" element={<Winner />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
