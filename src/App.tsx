import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AstrologiaPage from './pages/AstrologiaPage';
import SessionBookingPage from './pages/SessionBookingPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/astrologia" element={<AstrologiaPage />} />
          <Route path="/astrologia/sesion" element={<SessionBookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
