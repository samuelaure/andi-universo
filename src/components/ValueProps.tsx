import { Heart, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

const ValueProps = () => {
  const props = [
    {
      icon: <Heart size={32} />,
      title: 'Validación Real',
      description:
        'Un espacio donde tus emociones no solo son aceptadas, sino comprendidas desde la raíz.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Sin Etiquetas',
      description:
        'Mi enfoque no te encasilla ni te limita; te ofrece claridad para que seas la mujer y madre que auténticamente eres.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Herramientas Prácticas',
      description:
        'Sugerencias adaptadas a tu vida cotidiana, no teorías genéricas que suenan bien pero no funcionan.',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Acompañamiento Intimo',
      description:
        'Sesiones personalizadas con un enfoque compasivo y directo al corazón de los desafíos familiares.',
    },
  ];

  return (
    <section className="section-small">
      <div className="container">
        <div className="props-grid">
          {props.map((prop, index) => (
            <div key={index} className="prop-card">
              <div className="prop-icon">{prop.icon}</div>
              <h3 className="prop-title">{prop.title}</h3>
              <p className="prop-description">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-small {
          padding: var(--space-lg) 0;
        }
        
        .props-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-md);
        }

        .prop-card {
          text-align: center;
          padding: var(--space-md);
          border-radius: 20px;
          transition: var(--transition-smooth);
        }

        .prop-card:hover {
          transform: translateY(-5px);
        }

        .prop-icon {
          color: var(--primary-color);
          background: var(--cream-pink);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-sm);
        }

        .prop-title {
          font-size: 1.4rem;
          margin-bottom: 12px;
          color: var(--text-color);
        }

        .prop-description {
          color: var(--text-color);
          opacity: 0.8;
          font-size: 1rem;
          line-height: 1.5;
        }
        @media (max-width: 480px) {
          .prop-card {
            margin: 0 0.5rem;
            padding: var(--space-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default ValueProps;
