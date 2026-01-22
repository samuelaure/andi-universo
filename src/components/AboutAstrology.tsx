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
          {/* In a real scenario, we'd use an image here. I'll use a styled div with a subtle gradient */}
          <div className="decorative-box">
            <span>Tu mapa personal</span>
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
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-family: var(--font-header);
          font-size: 2rem;
          font-weight: 700;
          opacity: 0.8;
          transform: rotate(2deg);
        }
      `}</style>
    </section>
  );
};

export default AboutAstrology;
