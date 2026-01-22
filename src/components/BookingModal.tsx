import { X } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qg89L-AidvnYo-gBtG0TLnup4eIJxnBDzbnfi8beiiOaBJnssxay3PKsONdZItkx_Lf_7wWJV?gv=true';

const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  if (!isBookingOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={closeBooking}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          closeBooking();
        }
      }}
      role="button"
      tabIndex={-1}
      aria-label="Cerrar modal"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="presentation"
      >
        <button className="modal-close" onClick={closeBooking}>
          <X size={24} />
        </button>
        <div className="modal-body">
          <iframe
            src={BOOKING_URL}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Agenda tu sesión"
          ></iframe>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(76, 43, 8, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: var(--white);
          width: 95%;
          max-width: 1000px;
          height: 90vh;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--white);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-color);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 2;
          transition: var(--transition-smooth);
        }

        .modal-close:hover {
          transform: rotate(90deg);
          color: var(--primary-color);
        }

        .modal-body {
          flex: 1;
          width: 100%;
          height: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .modal-content {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
          .modal-close {
            top: 15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingModal;
