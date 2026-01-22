import Pricing from '../components/Pricing';
import AboutAstrology from '../components/AboutAstrology';
import FAQ from '../components/FAQ';

const AstrologiaPage = () => {
  return (
    <div className="astrologia-page">
      <main>
        {/* Updated high-quality header for the pricing section */}
        <Pricing
          title="Tu Transformación Comienza Aquí"
          subtitle="Sesiones de acompañamiento profundo diseñadas para brindarte la claridad y las herramientas necesarias en tu camino de crianza y evolución personal."
        />
        <AboutAstrology />
        <FAQ />
      </main>

      <style>{`
        .astrologia-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: var(--space-lg) 0;
        }
      `}</style>
    </div>
  );
};

export default AstrologiaPage;
