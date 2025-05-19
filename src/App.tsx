import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // You can move your existing content to Home.tsx
import Success from './pages/Success'; // This already exists

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
