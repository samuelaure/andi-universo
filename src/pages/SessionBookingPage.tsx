import { Link } from 'react-router-dom';

const SessionBookingPage = () => {
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

        <div className="calendar-container">
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qg89L-AidvnYo-gBtG0TLnup4eIJxnBDzbnfi8beiiOaBJnssxay3PKsONdZItkx_Lf_7wWJV?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            title="Agenda tu sesión"
          ></iframe>
          {/* end Google Calendar Appointment Scheduling */}
        </div>
      </div>

      <style>{`
        .booking-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: var(--space-lg) 0;
        }

        .booking-header {
          text-align: center;
          margin-bottom: var(--space-md);
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

        .calendar-container {
          background: var(--white);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(76, 43, 8, 0.05);
          border: 1px solid rgba(128, 43, 72, 0.1);
        }

        @media (max-width: 768px) {
          .calendar-container {
            height: 800px;
          }
          iframe {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SessionBookingPage;
