import Pricing from '../components/Pricing';
import AboutAstrology from '../components/AboutAstrology';
import FAQ from '../components/FAQ';

const AstrologiaPage = () => {
    return (
        <div className="astrologia-page">
            <main>
                {/* Exact order: Pricing (Sesión Única & Plan Familiar) -> About -> FAQ */}
                <Pricing />
                <AboutAstrology />
                <FAQ />
            </main>

            <style>{`
        .astrologia-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding-top: var(--space-md);
        }
      `}</style>
        </div>
    );
};

export default AstrologiaPage;
