import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import AboutAstrology from '../components/AboutAstrology';
import FAQ from '../components/FAQ';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <AboutAstrology />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
      </main>
      <footer className="footer section">
        <div className="container footer-content">
          <div className="footer-info">
            <h3 className="logo-text">
              Andi<span className="text-accent">Universo</span>
            </h3>
            <p>© {new Date().getFullYear()} Samuel Aure. Todos los derechos reservados.</p>
          </div>
          <div className="footer-links">
            <p>Astrología Evolutiva para la Crianza</p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background: var(--text-color);
          color: var(--white);
          padding: var(--space-md) 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer p {
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .logo-text {
          margin-bottom: 8px;
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
