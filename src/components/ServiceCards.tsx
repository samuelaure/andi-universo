import { ScrollText, UserSearch, Sparkles } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      title: 'Pergaminos Familiares',
      description: 'El manual de instrucciones escrito de tu hogar y tus vínculos.',
      link: '/pergaminos',
      icon: <ScrollText />,
    },
    {
      title: 'Sesión de Diseño Humano',
      description: 'Descubre tu manual de usuario para una vida sin resistencias.',
      link: '/human-design/sesion',
      icon: <UserSearch />,
    },
    {
      title: 'Sesión de Astrología',
      description: 'Tu mapa astral como brújula para una crianza consciente.',
      link: '/astrologia/sesion',
      icon: <Sparkles />,
    },
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="service-cards-grid">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="service-card">
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <span className="service-card-cta">Saber más →</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .service-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-md);
          position: relative;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .service-cards-grid {
            margin-top: 0;
            padding: 0 1rem;
          }
        }

        .service-card {
          background: white;
          padding: var(--space-md);
          border-radius: 20px;
          text-decoration: none;
          color: var(--text-color);
          box-shadow: 0 15px 30px rgba(76, 43, 8, 0.08);
          border: 1px solid rgba(128, 43, 72, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(76, 43, 8, 0.12);
          border-color: var(--primary-color);
        }

        .service-card-icon {
          width: 60px;
          height: 60px;
          background: var(--cream-pink);
          color: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-sm);
        }

        .service-card-icon svg {
          width: 30px;
          height: 30px;
        }

        .service-card-title {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: var(--primary-color);
          font-family: var(--font-header);
        }

        .service-card-description {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.8;
          margin-bottom: var(--space-md);
          flex-grow: 1;
        }

        .service-card-cta {
          font-weight: 700;
          color: var(--accent-color);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
};

export default ServiceCards;
