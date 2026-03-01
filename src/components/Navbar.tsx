import { useState, useEffect } from 'react';
import { useBooking } from '../hooks/useBooking';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">
            Andi<span className="text-accent">Universo</span>
          </span>
        </div>
        <div className="nav-links">
          <a href="#servicios">Sesiones</a>
          <a href="#sobre-mi">Sobre Mí</a>
          <a href="#faq">Preguntas</a>
          <button onClick={openBooking} className="btn btn-primary nav-cta">
            Reservar
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 0;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          background: rgba(248, 244, 232, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 0;
          box-shadow: 0 4px 20px rgba(76, 43, 8, 0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-family: var(--font-header);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .text-accent {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-links a:not(.btn) {
          font-weight: 600;
          color: var(--text-color);
          position: relative;
        }

        .nav-links a:not(.btn)::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: var(--transition-smooth);
        }

        .nav-links a:not(.btn):hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 8px 20px;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .nav-links a:not(.btn) {
            display: none;
          }
          .nav-cta {
            padding: 10px 16px;
            font-size: 0.85rem;
          }
          .logo-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
