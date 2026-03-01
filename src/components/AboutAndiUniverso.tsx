import { Heart } from 'lucide-react';

const AboutAndiUniverso = () => {
  return (
    <section id="sobre-mi" className="section">
      <div className="container about-grid">
        <div className="about-content">
          <div className="icon-wrapper">
            <Heart size={40} color="var(--primary-color)" />
          </div>
          <h2 className="heading-md">Acompañamiento para la mujer que maternas</h2>
          <p className="about-text">
            Mi enfoque no se trata de herramientas, se trata de ti. Te ofrezco un espacio de contención
            y claridad profesional para que puedas reconciliarte con tu naturaleza, validar tus procesos
            y liderar tu hogar desde la paz, no desde la exigencia.
          </p>
          <p className="about-text">
            Utilizo sistemas como el Diseño Humano o la Astrología como mapas técnicos, pero el protagonista
            es siempre tu proceso personal. Aquí no vienes a aprender una teoría, vienes a recordarte quién eres.
          </p>
        </div>
        <div className="about-image-placeholder">
          <div className="decorative-box">
            <img
              className="about-image"
              src="/assets/astrology.jpg"
              alt="Acompañamiento Andi Universo"
            />
          </div>
        </div>
      </div>
      <div className="hero-actions">
        <a href="#pricing" className="btn btn-primary">
          Explorar acompañamiento
        </a>
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

export default AboutAndiUniverso;
