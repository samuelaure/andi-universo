import { Stars } from 'lucide-react';

const SalesHero = () => {
  return (
    <section className="sales-hero">
      <div className="container sales-hero-grid">
        <div className="sales-hero-content">
          <div className="sales-badge">
            <Stars size={16} />
            <span>Astrología Evolutiva</span>
          </div>
          <h1 className="heading-lg main-title">
            Guía y contención <br /> <span className="text-accent">para mamás</span>
          </h1>
          <p className="sales-description">
            Un espacio sagrado para comprender tu diseño único, validar tus procesos y encontrar la
            calma en medio del caos de la crianza. Descubre cómo tu mapa astral puede ser la brújula
            que necesitas hoy.
          </p>
          <div className="sales-hero-actions">
            <a href="#servicios" className="btn btn-primary btn-large">
              Explorar Sesiones
            </a>
          </div>
        </div>
        <div className="sales-hero-image">
          <div className="image-frame">
            <img src="/assets/hero-astrologia.png" alt="Guía y contención para mamás" />
          </div>
          {/* Decorative elements */}
          <div className="sales-orb blur-1"></div>
          <div className="sales-orb blur-2"></div>
        </div>
      </div>

      <style>{`
        .sales-hero {
          padding: var(--space-xl) 0 var(--space-lg);
          background: linear-gradient(180deg, var(--bg-color) 0%, #fffbf2 100%);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .sales-hero {
            padding: var(--space-lg) 0;
          }
        }

        .sales-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--space-lg);
          align-items: center;
        }

        @media (max-width: 992px) {
          .sales-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--space-md);
          }
          .sales-hero-content {
            order: 2;
          }
          .sales-hero-image {
            order: 1;
            margin-bottom: var(--space-sm);
          }
        }

        .sales-badge {
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

        .main-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: var(--space-md);
          color: var(--text-color);
        }

        .sales-description {
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: var(--space-lg);
          color: var(--text-color);
          opacity: 0.9;
        }

        @media (max-width: 992px) {
          .sales-description {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .btn-large {
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          box-shadow: 0 15px 30px rgba(128, 43, 72, 0.15);
        }

        .sales-hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          position: relative;
          z-index: 2;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(76, 43, 8, 0.15);
          border: 8px solid white;
          width: 100%;
          max-width: 500px;
        }

        .image-frame img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        @media (max-width: 992px) {
          .image-frame {
            margin: 0 1rem;
            width: auto;
          }
        }

        .image-frame:hover img {
          transform: scale(1.05);
        }

        .sales-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 1;
          opacity: 0.3;
        }

        .blur-1 {
          width: 300px;
          height: 300px;
          background: var(--primary-color);
          top: -50px;
          right: -50px;
        }

        .blur-2 {
          width: 250px;
          height: 250px;
          background: var(--accent-color);
          bottom: -30px;
          left: -30px;
        }
      `}</style>
    </section>
  );
};

export default SalesHero;
