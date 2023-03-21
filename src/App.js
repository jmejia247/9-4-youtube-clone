import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./Components/common/Home"
import Navbar from "./Components/common/Navbar"

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>

        </Routes>
      </main>
    </div>
  );
}

export default App;
