import AnimatedSection from '../components/AnimatedSection';
import GenericFAQ from '../components/GenericFAQ';
import { useBooking } from '../hooks/useBooking';

const PergaminosPage = () => {
    const { openBooking } = useBooking();

    const faqHome = [
        {
            question: '¿Qué recibo exactamente con el sistema de pergaminos?',
            answer:
                'Recibes un conjunto de documentos digitales personalizados: un pergamino de identidad por cada miembro de la familia y un pergamino vinculado por cada relación clave dentro del núcleo. Todo está diseñado para ser impreso y usado como guía de convivencia.',
        },
        {
            question: '¿Cuánto tiempo tarda la entrega?',
            answer:
                'Al ser un trabajo artesanal que requiere el análisis de las naturalezas de cada miembro y sus interacciones, el tiempo de entrega suele ser de 7 a 10 días hábiles tras recibir la información necesaria.',
        },
        {
            question: '¿Necesito conocimientos de Diseño Humano o Astrología?',
            answer:
                'Para nada. Mi trabajo es traducir esos sistemas complejos a un lenguaje cotidiano, directo y práctico. Tú solo recibes las instrucciones de funcionamiento de tu familia en &quot;idioma humano&quot;.',
        },
        {
            question: '¿Qué pasa si mis hijos son muy pequeños?',
            answer:
                'Es el momento ideal. Los pergaminos te darán el manual de instrucciones para acompañar su naturaleza desde el inicio, evitando imponerles formas de ser que no les corresponden y ahorrándote años de resistencia.',
        },
        {
            question: '¿Y si mi pareja no está muy convencida?',
            answer:
                'Los pergaminos no requieren &quot;creencia&quot;. Son mapas lógicos de cómo funcionamos. Incluso si solo tú los usas para entender cómo relacionarte con ellos, la dinámica familiar cambiará porque tú dejarás de forzar engranajes que no encajan.',
        },
    ];

    return (
        <div className="pergaminos-page">
            <main>
                {/* HERO SECTION */}
                <section className="pergaminos-hero">
                    <div className="container hero-content">
                        <AnimatedSection>
                            <h1 className="heading-lg text-glow">Pergaminos Familiares</h1>
                            <p className="hero-promise">
                                Imagina una familia donde cada quien sabe, sin confusión ni desgaste, quién es, cómo
                                funciona y cómo puede relacionarse con el otro desde ese lugar. No más amor lleno de
                                malentendidos, ni expectativas silenciosas que duelen. Aquí el cariño se expresa y
                                se sostiene en claridad. Eso es lo que te traen estos pergaminos: una base estable,
                                escrita y replicable para convivir con menos fricción y mucho más sostén.
                            </p>
                            <button onClick={openBooking} className="btn btn-accent btn-large hero-btn">
                                Quiero el sistema completo para mi familia
                            </button>
                        </AnimatedSection>
                    </div>
                    <div className="hero-overlay"></div>
                </section>

                {/* TRANSFORMACIÓN SECTION */}
                <section className="section bg-light">
                    <div className="container">
                        <AnimatedSection>
                            <div className="transform-header">
                                <h2 className="heading-md px-1 text-center">Una Transformación Estructural</h2>
                                <p className="subtitle text-center">
                                    Esta transformación no es emocional. Es estructural. Ordena la convivencia desde
                                    la raíz.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="transform-grid">
                            <AnimatedSection delay={0.2} className="transform-card before-card">
                                <div className="card-badge">Antes</div>
                                <ul className="transform-list">
                                    <li>Se aman, pero terminan haciéndose daño sin querer.</li>
                                    <li>Se acompañan, pero se sienten solos en la incomprensión.</li>
                                    <li>
                                        Se esfuerzan por mejorar el ambiente familiar, pero todo se siente improvisado y
                                        agotador.
                                    </li>
                                    <li>
                                        Cada uno pone su voluntad, pero faltan referencias claras para entender y
                                        decidir juntos.
                                    </li>
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection delay={0.4} className="transform-card after-card">
                                <div className="card-badge after-badge">Después</div>
                                <ul className="transform-list">
                                    <li>
                                        Cada miembro de la familia puede reconocerse, y ser reconocido, en lo que es y
                                        en lo que no es.
                                    </li>
                                    <li>
                                        Cada vínculo tiene un espacio y un lenguaje propio para funcionar sin desgaste.
                                    </li>
                                    <li>
                                        La comunicación se hace simple y comprensible porque ahora hay acuerdos claros,
                                        no solo intenciones.
                                    </li>
                                    <li>
                                        La familia deja de ser un lugar de tensión escondida y se vuelve un núcleo real
                                        de sostén, desarrollo y calma.
                                    </li>
                                </ul>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* QUÉ ES ESTE PRODUCTO */}
                <section className="section product-section">
                    <div className="container">
                        <AnimatedSection>
                            <h2 className="heading-md text-center text-white">¿Qué es este producto?</h2>
                            <p className="subtitle text-center text-white" style={{ marginBottom: '3rem' }}>
                                Un sistema de pergaminos escritos, personalizados, construidos para tu familia, que
                                dejan por escrito:
                            </p>
                        </AnimatedSection>

                        <div className="features-grid">
                            <AnimatedSection delay={0.1} className="feature-item">
                                <div className="feature-icon">1</div>
                                <h3>La identidad de cada miembro</h3>
                                <p>Recibes un pergamino personal para cada integrante, pensado para:</p>
                                <ul>
                                    <li>Reforzar su carácter y su derecho a ser quien es.</li>
                                    <li>Alinear comportamiento y decisiones diarias con esa naturaleza.</li>
                                    <li>Quitar culpa, exigencia inútil y esa sensación de que &quot;algo falta&quot;.</li>
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3} className="feature-item">
                                <div className="feature-icon">2</div>
                                <h3>La forma sana de relacionarse</h3>
                                <p>
                                    Un texto para cada vínculo (madre→hijo, hijo→madre, pareja, hermanos). Cada uno
                                    está escrito intencionalmente para que encaje y corresponda con el del otro:
                                </p>
                                <ul>
                                    <li>Sin contradicciones.</li>
                                    <li>Sin dobles mensajes.</li>
                                    <li>Sin frases genéricas.</li>
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection delay={0.5} className="feature-item">
                                <div className="feature-icon">3</div>
                                <h3>Un lenguaje que se instala y ordena</h3>
                                <p>
                                    Estos no se leen una vez y se olvidan. Se usan como anclaje diario, como
                                    recordatorio y como una guía viva para convivir mejor.
                                </p>
                                <div className="feature-highlight">
                                    No es inspiración. No es terapia. Es verte y ver al otro sin suposiciones, con un
                                    mapa real y repetible.
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CÓMO LO CREO */}
                <section className="section creation-section">
                    <div className="container creation-container">
                        <AnimatedSection className="creation-content">
                            <h2 className="heading-md">¿Cómo lo creo?</h2>
                            <p className="large-text">
                                Trabajo con el diseño humano y la astrología como materia prima, no como creencia.
                                Lo traduzco en palabras simples, directas y orientadas a la vida cotidiana de tu
                                familia. No es necesario que &quot;creas en nada&quot;:
                            </p>
                            <div className="highlight-box">
                                Aquí sólo importa que las palabras reflejen la verdad relacional y la puedas usar.
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* PARA QUIÉN ES / NO ES */}
                <section className="section audience-section bg-light">
                    <div className="container audience-grid">
                        <AnimatedSection>
                            <div className="audience-card for-who">
                                <h3>Es para:</h3>
                                <ul>
                                    <li>
                                        Familias que sienten amor, pero fatiga, confusión o desgaste por no saber cómo
                                        engranar sus diferencias.
                                    </li>
                                    <li>
                                        Padres que quieren dar estructura y dirección, no solo apagar fuegos
                                        emocionales.
                                    </li>
                                    <li>
                                        Madres y padres preocupados por formar vínculos sanos y carácter sólido, no sólo
                                        evitar broncas.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="audience-card not-for-who">
                                <h3>NO es para:</h3>
                                <ul>
                                    <li>Si buscas sólo frases inspiradoras bonitas.</li>
                                    <li>Si quieres un cambio inmediato sin compromiso.</li>
                                    <li>Si prefieres seguir improvisando sobre la marcha.</li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FINAL CTA & FORMATO */}
                <section className="section final-cta-section">
                    <div className="container">
                        <AnimatedSection className="final-wrapper">
                            <div className="format-box">
                                <h3 className="format-title">Formato del Servicio</h3>
                                <ul>
                                    <li>Entrega digital, lista para usar, imprimir, leer y consultar.</li>
                                    <li>
                                        Pergaminos redactados para cada persona y para cada vínculo, de principio a fin.
                                    </li>
                                    <li>Es un sistema: todo encaja y se refuerza a lo largo del tiempo.</li>
                                </ul>
                            </div>

                            <div className="investment-box">
                                <p className="value-prop">Libera a tu familia de:</p>
                                <ul className="value-list">
                                    <li>Años de peleas, malentendidos y confusión.</li>
                                    <li>Terapias que no logran cambiar la dinámica de raíz.</li>
                                    <li>El desgaste de intentar resolver todo a ciegas.</li>
                                </ul>
                                <button onClick={openBooking} className="btn btn-accent btn-large final-btn">
                                    Quiero el sistema completo para mi familia
                                </button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <AnimatedSection delay={0.2}>
                    <GenericFAQ
                        questions={faqHome}
                        title="Dudas frecuentes sobre los Pergaminos"
                        subtitle="Todo lo que necesitas saber antes de ordenar el sistema para tu hogar."
                    />
                </AnimatedSection>

                {/* CIERRE */}
                <section className="section closure-section">
                    <div className="container">
                        <AnimatedSection>
                            <div className="closure-content">
                                <p className="closure-p">
                                    &quot;Una familia alineada no tiene que esforzarse tanto para entenderse; solo necesita
                                    verse y corresponderse desde la verdad de cada quien.&quot;
                                </p>
                                <p className="closure-sub">
                                    Estos pergaminos son el principio real de ese nuevo orden.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <footer className="astrologia-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Andi Universo | Astrología Evolutiva para Madres</p>
                </div>
            </footer>

            <style>{`
        .pergaminos-page {
          background-color: var(--bg-color);
          min-height: 100vh;
        }

        .text-center { text-align: center; }
        .text-white { color: white; }
        .bg-light { background-color: var(--cream-pink); }

        /* HERO */
        .pergaminos-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(76, 43, 8, 0.9), rgba(128, 43, 72, 0.85)), url('https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80') center/cover;
          color: white;
          text-align: center;
          padding: var(--space-xl) 0;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .text-glow {
          text-shadow: 0 4px 15px rgba(0,0,0,0.3);
          margin-bottom: var(--space-md);
          font-size: clamp(3rem, 8vw, 5rem);
        }

        .hero-promise {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          line-height: 1.8;
          opacity: 0.95;
          margin-bottom: var(--space-lg);
          font-family: var(--font-body);
        }

        .hero-btn {
          font-size: 1.3rem;
          padding: 1.2rem 3rem;
          box-shadow: 0 10px 30px rgba(225, 162, 57, 0.4);
        }

        /* TRANSFORMACION */
        .transform-header {
          margin-bottom: var(--space-lg);
        }
        .transform-header .subtitle {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--primary-color);
          max-width: 600px;
          margin: 0 auto;
        }

        .transform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }

        @media (max-width: 768px) {
          .transform-grid { grid-template-columns: 1fr; }
        }

        .transform-card {
          background: white;
          border-radius: 20px;
          padding: var(--space-md);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: relative;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .card-badge {
          display: inline-block;
          font-family: var(--font-header);
          font-weight: bold;
          font-size: 0.9rem;
          text-transform: uppercase;
          background: var(--text-color);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .after-badge {
          background: var(--primary-color);
        }

        .before-card {
          opacity: 0.9;
        }
        .after-card {
          transform: scale(1.02);
          border: 2px solid var(--primary-color);
          box-shadow: 0 15px 40px rgba(128, 43, 72, 0.1);
        }
        @media (max-width: 768px) {
          .after-card { transform: scale(1); }
        }

        .transform-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .transform-list li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-color);
        }
        .before-card .transform-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: rgba(76, 43, 8, 0.5);
        }
        .after-card .transform-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        /* PRODUCT SECTION */
        .product-section {
          background-color: var(--primary-color);
          position: relative;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-md);
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: var(--space-md);
          color: white;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }
        .feature-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: var(--font-header);
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(225, 162, 57, 0.4);
        }

        .feature-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feature-item p {
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .feature-item ul {
          list-style: none;
          padding: 0;
        }
        .feature-item ul li {
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
          opacity: 0.85;
        }
        .feature-item ul li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-color);
        }

        .feature-highlight {
          background: rgba(225, 162, 57, 0.2);
          border-left: 3px solid var(--accent-color);
          padding: 1rem;
          border-radius: 0 10px 10px 0;
          margin-top: 1.5rem;
          font-weight: 500;
        }

        /* CREATION SECTION */
        .creation-section {
          background-image: radial-gradient(circle at top right, var(--cream-pink) 0%, var(--bg-color) 40%);
        }
        .creation-container {
          max-width: 800px;
          text-align: center;
        }
        .large-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-color);
          margin-bottom: 2rem;
        }
        .highlight-box {
          font-family: var(--font-header);
          font-size: 1.4rem;
          color: var(--primary-color);
          font-weight: bold;
          padding: 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: relative;
        }
        .highlight-box::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: 20px;
          font-size: 5rem;
          color: var(--cream-pink);
          font-family: serif;
          opacity: 0.5;
        }

        /* AUDIENCE SECTION */
        .audience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }
        @media (max-width: 768px) {
          .audience-grid { grid-template-columns: 1fr; gap: var(--space-md); }
        }
        
        .audience-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }
        .not-for-who h3 {
          color: var(--text-color);
          opacity: 0.7;
        }
        
        .audience-card ul {
          list-style: none;
          padding: 0;
        }
        .audience-card ul li {
          margin-bottom: 1.2rem;
          padding-left: 2.5rem;
          position: relative;
          font-size: 1.1rem;
        }
        .for-who ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          background: var(--accent-color);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .not-for-who ul li::before {
          content: '✕';
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(76, 43, 8, 0.2);
          color: var(--text-color);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        /* FINAL CTA & FORMATO */
        .final-cta-section {
          background-color: var(--bg-color);
          padding-top: var(--space-xl);
          padding-bottom: calc(var(--space-xl) * 1.5);
        }
        .final-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-lg);
          background: white;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }
        @media (max-width: 900px) {
          .final-wrapper { grid-template-columns: 1fr; }
        }

        .format-box {
          background: var(--cream-pink);
          padding: var(--space-lg) var(--space-md);
        }
        .format-title {
          font-size: 1.6rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }
        .format-box ul {
          list-style: none;
          padding: 0;
        }
        .format-box ul li {
          margin-bottom: 1.2rem;
          padding-left: 1.8rem;
          position: relative;
          color: var(--text-color);
          line-height: 1.5;
        }
        .format-box ul li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--primary-color);
        }

        .investment-box {
          padding: var(--space-lg) var(--space-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .final-btn {
          align-self: flex-start;
          margin-top: 2rem;
          margin-bottom: 2rem;
          font-size: 1.2rem;
        }
        @media (max-width: 768px) {
          .final-btn { align-self: stretch; text-align: center; }
        }
        .investment-note {
          font-size: 1.1rem;
          color: var(--text-color);
          font-style: italic;
          margin-bottom: 1.5rem;
          border-left: 3px solid var(--accent-color);
          padding-left: 1rem;
        }
        .value-prop {
          font-weight: bold;
          font-family: var(--font-header);
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .value-list {
          list-style: none;
          padding: 0;
        }
        .value-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-color);
          opacity: 0.9;
        }
        .value-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary-color);
        }

        /* CLOSURE */
        .closure-section {
          background: var(--text-color);
          color: white;
          text-align: center;
          padding: var(--space-lg) 0;
          position: relative;
        }
        .closure-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, rgba(128,43,72,0.4) 0%, transparent 70%);
        }
        .closure-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        .closure-p {
          font-family: var(--font-header);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          line-height: 1.4;
          margin-bottom: 1.5rem;
          color: var(--cream-pink);
        }
        .closure-sub {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .astrologia-footer {
          padding: var(--space-md) 0;
          text-align: center;
          background: #3a1320;
          color: white;
          opacity: 0.8;
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
};
export default PergaminosPage;
