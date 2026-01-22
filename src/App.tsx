import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AstrologiaPage from './pages/AstrologiaPage';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/astrologia" element={<AstrologiaPage />} />
          </Routes>
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
