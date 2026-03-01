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

      <style>{`
        .astrologia-page {


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
