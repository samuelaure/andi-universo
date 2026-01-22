import { Compass } from 'lucide-react';

const AboutAstrology = () => {
  return (
    <section id="sobre-mi" className="section" style={{ backgroundColor: 'var(--cream-pink)' }}>
      <div className="container about-grid">
        <div className="about-content">
          <div className="icon-wrapper">
            <Compass size={40} color="var(--primary-color)" />
          </div>
          <h2 className="heading-md">¿Qué es astrología evolutiva?</h2>
          <p className="about-text">
            La astrología evolutiva es una herramienta de autoconocimiento que revela el porqué de
            nuestras formas de ser, sentir y relacionarnos: muestra nuestras fortalezas, retos y
            necesidades de crecimiento según nuestra carta astral.
          </p>
          <p className="about-text">
            No predice ni encasilla; ayuda a comprender el propósito detrás de tus experiencias y la
            dinámica única de cada familia.
          </p>
        </div>
        <div className="about-image-placeholder">
          <div className="decorative-box">
            <img
              className="about-image"
              src="/assets/astrology.jpg"
              alt="Guía y contención para mamás"
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
          align-items: center;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .icon-wrapper {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .icon-wrapper {
          background: var(--white);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-sm);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .about-text {
          font-size: 1.2rem;
          margin-bottom: var(--space-sm);
          color: var(--text-color);
        }

        .decorative-box {
          height: 400px;
          width: 400px;
          max-width: 100%;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: rotate(2deg);
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .decorative-box {
            height: 300px;
            width: 300px;
          }
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.9;
          transition: var(--transition-smooth);
        }

        .decorative-box:hover .about-image {
          transform: scale(1.05);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default AboutAstrology;
