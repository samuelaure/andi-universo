import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingProps {
  title?: string;
  subtitle?: string;
}

const Pricing = ({
  title = 'Nuestras Sesiones',
  subtitle = 'Elige el camino que mejor se adapte a tu momento actual.',
}: PricingProps) => {
  const plans = [
    {
      title: 'Sesión Única',
      price: '€90',
      offer: 'Primera sesión €30',
      description: 'Lectura profunda y personalizada de tu carta astral (mamá).',
      features: [
        'Enfoque práctico para comprender tu camino personal y maternal.',
        'Orientación sobre patrones, desafíos y herramientas para criar con más claridad y compasión.',
        'Espacio seguro para validar tus emociones y procesos.',
        'Sugerencias simples adaptadas a tu realidad, nada genérico.',
      ],
      buttonText: 'Agendar Sesión',
      highlight: false,
    },
    {
      title: 'Plan Familiar',
      price: '€270',
      description: 'Lectura completa del núcleo familiar: mamá, pareja e hijos.',
      features: [
        'Análisis de vínculos, dinámicas, retos y talentos colectivos desde la carta de cada miembro.',
        'Comprensión de los puntos de encuentro y diferencia entre cada integrante.',
        'Estrategias para fortalecer la convivencia y la comunicación en casa.',
        'Guía para abordar desafíos recurrentes (distancias emocionales, rencores, celos, etc) desde la raíz.',
        'Espacio íntimo de contención para cada momento de la crianza y la vida familiar.',
      ],
      buttonText: 'Agendar Plan Familiar',
      highlight: true,
    },
  ];

  return (
    <section id="servicios" className="section container">
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
            <Link
              to="/astrologia/sesion"
              className={`btn ${plan.highlight ? 'btn-primary' : 'btn-accent'}`}
              style={{ textAlign: 'center' }}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-md);
          align-items: stretch;
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
