import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const SessionBookingPage = () => {
  useEffect(() => {
    // Load Google Calendar Scheduling Button Script
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).calendar?.schedulingButton) {
      (window as any).calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qg89L-AidvnYo-gBtG0TLnup4eIJxnBDzbnfi8beiiOaBJnssxay3PKsONdZItkx_Lf_7wWJV?gv=true',
        color: '#802b48',
        label: 'Reservar sesión',
        target: e.currentTarget,
      });
    } else {
      // Fallback to direct link if script hasn't loaded
      window.open(
        'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qg89L-AidvnYo-gBtG0TLnup4eIJxnBDzbnfi8beiiOaBJnssxay3PKsONdZItkx_Lf_7wWJV?gv=true',
        '_blank',
      );
    }
  };

  return (
    <div className="booking-page">
      <div className="container">
        <header className="booking-header">
          <Link to="/astrologia" className="back-link">
            ← Volver a servicios
          </Link>
          <h1 className="heading-md">Reserva tu Sesión</h1>
          <p className="text-muted">
            Selecciona el horario que mejor te convenga para nuestro encuentro.
          </p>
        </header>

        <div className="booking-cta-card card-glow">
          <div className="booking-info">
            <div className="icon-group">
              <div className="icon-circle">
                <Calendar size={24} />
              </div>
              <div className="icon-circle">
                <Clock size={24} />
              </div>
              <div className="icon-circle">
                <Sparkles size={24} />
              </div>
            </div>
            <h2 className="card-title">Agenda tu Espacio</h2>
            <p className="card-description">
              Nuestras sesiones se realizan vía Google Meet. <br />
              Elige una fecha y recibirás el enlace de acceso automáticamente.
            </p>
            <button onClick={handleBookingClick} className="btn btn-primary btn-booking">
              Ver Horarios Disponibles
            </button>
            <p className="booking-note">
              Se abrirá el calendario oficial de Google para una reserva segura.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .booking-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: var(--space-lg) 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .booking-header {
          text-align: center;
          margin-bottom: var(--space-lg);
        }

        .back-link {
          display: inline-block;
          margin-bottom: var(--space-sm);
          color: var(--primary-color);
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .back-link:hover {
          transform: translateX(-5px);
        }

        .booking-cta-card {
          background: var(--white);
          border-radius: 32px;
          padding: var(--space-xl) var(--space-md);
          text-align: center;
          box-shadow: 0 20px 50px rgba(128, 43, 72, 0.08);
          border: 1px solid rgba(128, 43, 72, 0.05);
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .card-glow::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(128, 43, 72, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .icon-group {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: var(--space-md);
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: var(--cream-pink);
          color: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-family: var(--font-header);
          font-size: 2rem;
          color: var(--text-color);
          margin-bottom: var(--space-sm);
        }

        .card-description {
          font-size: 1.1rem;
          color: var(--text-color);
          opacity: 0.8;
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .btn-booking {
          width: 100%;
          max-width: 300px;
          padding: 1.2rem;
          font-size: 1.2rem;
          box-shadow: 0 10px 20px rgba(128, 43, 72, 0.2);
        }

        .booking-note {
          margin-top: var(--space-md);
          font-size: 0.85rem;
          color: var(--text-color);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .booking-page {
            padding: var(--space-md) 0;
          }
          .booking-cta-card {
            border-radius: 24px;
            padding: var(--space-lg) var(--space-sm);
            margin: 0 0.5rem;
          }
          .card-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SessionBookingPage;
