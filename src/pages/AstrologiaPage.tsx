import SalesHero from '../components/SalesHero';
import ValueProps from '../components/ValueProps';
import Pricing from '../components/Pricing';
import AboutAstrology from '../components/AboutAstrology';
import FAQ from '../components/FAQ';
import AnimatedSection from '../components/AnimatedSection';
import { useBooking } from '../hooks/useBooking';

const AstrologiaPage = () => {
  const { openBooking } = useBooking();
  return (
    <div className="astrologia-page">
      <main>
        <SalesHero />

        <AnimatedSection>
          <ValueProps />
        </AnimatedSection>

        <div id="servicios">
          <AnimatedSection>
            <Pricing
              title="Inicia tu viaje de autoconocimiento"
              subtitle="Elige la sesión que mejor resuene con tu momento actual y comienza a construir una dinámica familiar más armoniosa."
            />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <AboutAstrology />
        </AnimatedSection>

        <AnimatedSection className="cta-divider">
          <div className="container cta-content">
            <h2 className="heading-md" style={{ color: 'white' }}>
              ¿Lista para dar el primer paso?
            </h2>
            <p
              style={{
                color: 'white',
                opacity: 0.9,
                marginBottom: 'var(--space-md)',
                fontSize: '1.2rem',
              }}
            >
              Tu carta astral tiene las respuestas que has estado buscando.
            </p>
            <button onClick={openBooking} className="btn btn-accent btn-large">
              Reservar mi Sesión
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
      </main>

      <footer className="astrologia-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Andi Universo | Astrología Evolutiva para Madres</p>
        </div>
      </footer>

      <style>{`
        .astrologia-page {
          background-color: var(--bg-color);
          min-height: 100vh;
        }

        .cta-divider {
          background: var(--primary-color);
          padding: var(--space-xl) 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-divider::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .astrologia-footer {
          padding: var(--space-md) 0;
          text-align: center;
          background: #3a1320;
          color: white;
          opacity: 0.8;
          font-size: 0.9rem;
        }

        .btn-large {
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* Smooth scroll for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default AstrologiaPage;
