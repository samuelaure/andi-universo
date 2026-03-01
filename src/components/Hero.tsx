import { Stars } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <Stars size={16} />
          <span>Acompañamiento Evolutivo para Madres</span>
        </div>
        <h1 className="heading-lg">
          Comprende tu <span className="text-primary">luz</span>, abraza tu camino familiar.
        </h1>
        <p className="hero-subtitle">
          Un espacio sagrado de escucha y guía donde tú eres la protagonista.
          Te acompaño a integrar tu naturaleza única para transformar tu experiencia de mujer y madre.
        </p>
        <div className="hero-actions">
          <a href="#sobre-mi" className="btn btn-primary">
            Mi Propuesta
          </a>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-color);
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh; /* Keep it full screen on mobile as requested */
          }
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .hero-badge {
          background: var(--cream-pink);
          color: var(--primary-color);
          padding: 8px 16px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: var(--space-md);
        }

        .text-primary {
          color: var(--primary-color);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: var(--space-md);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-color);
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-sm);
          justify-content: center;
        }

        .btn-outline {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 14px 30px;
          border-radius: 50px;
          font-weight: 600;
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: var(--white);
        }

        /* Orbs for premium look */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          opacity: 0.4;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-color);
          top: -100px;
          right: -100px;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: var(--primary-color);
          bottom: -50px;
          left: -50px;
        }

        @media (max-width: 600px) {
          .hero-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
