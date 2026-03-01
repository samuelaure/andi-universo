import { Check } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';

interface PricingProps {
  title?: string;
  subtitle?: string;
}

const Pricing = ({
  title = 'Propuestas de Acompañamiento',
  subtitle = 'Espacios diseñados para tu evolución personal y armonía familiar.',
}: PricingProps) => {
  const { openBooking } = useBooking();
  const plans = [
    {
      title: 'Sesión de Claridad',
      price: '€90',
      offer: 'Primera sesión €30',
      description: 'Un encuentro profundo centrado en tu momento actual y tus necesidades.',
      features: [
        'Espacio seguro de escucha, contención y guía profesional.',
        'Análisis técnico de tu naturaleza única (Astrología o Diseño Humano).',
        'Herramientas prácticas para integrar en tu día a día familiar.',
        'Identificación de patrones y bloqueos que afectan tu bienestar.',
      ],
      buttonText: 'Agendar Sesión',
      highlight: false,
    },
    {
      title: 'Acompañamiento Familiar',
      price: '€270',
      description: 'Transformación profunda de la dinámica y el orden de tu hogar.',
      features: [
        'Análisis integral de los vínculos y energías de todo el núcleo familiar.',
        'Estrategias personalizadas para reducir la fricción y mejorar la comunicación.',
        'Guía para acompañar la naturaleza de tus hijos desde la comprensión real.',
        'Soporte continuado para asentar los cambios y el nuevo orden familiar.',
      ],
      buttonText: 'Agendar Acompañamiento',
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="section container">
      <div className="pricing-header">
        <h2 className="heading-md">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
            {plan.highlight && <div className="badge">Recomendado</div>}
            <h3 className="plan-title">{plan.title}</h3>
            <div className="price-container">
              <span className="price">{plan.price}</span>
              {plan.offer && <span className="offer">{plan.offer}</span>}
            </div>
            <p className="plan-description">{plan.description}</p>
            <ul className="feature-list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <Check size={18} className="icon-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pricing-actions">
        <button onClick={openBooking} className="btn btn-primary btn-large">
          Reservar mi Sesión
        </button>
      </div>

      <style>{`
        .pricing-header {
          text-align: center; 
          margin-bottom: var(--space-lg);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-md);
          align-items: stretch;
          margin-bottom: var(--space-lg);
        }

        @media (max-width: 480px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .pricing-card {
            padding: var(--space-md); /* Keep decent padding */
            margin: 0 0.5rem; /* Add a bit of space from container edges */
          }
        }

        .pricing-actions {
          display: flex;
          justify-content: center;
          margin-top: var(--space-md);
        }

        .btn-large {
          padding: 1.2rem 3.5rem;
          font-size: 1.2rem;
          box-shadow: 0 15px 30px rgba(128, 43, 72, 0.15);
        }

        .pricing-card {
          background: var(--white);
          padding: var(--space-md);
          border-radius: 24px;
          border: 1px solid rgba(128, 43, 72, 0.1);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(76, 43, 8, 0.05);
        }

        .pricing-card.highlight {
          border: 2px solid var(--primary-color);
          background-color: var(--cream-pink);
        }

        .badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: var(--white);
          padding: 4px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .plan-title {
          font-size: 1.8rem;
          color: var(--primary-color);
          margin-bottom: var(--space-sm);
        }

        .price-container {
          display: flex;
          flex-direction: column;
          margin-bottom: var(--space-sm);
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .offer {
          color: var(--primary-color);
          font-weight: 600;
          background: rgba(128, 43, 72, 0.1);
          padding: 4px 12px;
          border-radius: 8px;
          display: inline-block;
          width: fit-content;
          margin-top: 4px;
        }

        .plan-description {
          margin-bottom: var(--space-md);
          font-weight: 500;
          color: var(--text-color);
          min-height: 3em;
        }

        .feature-list {
          list-style: none;
          margin-bottom: var(--space-md);
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .icon-check {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
