import AnimatedSection from '../components/AnimatedSection';
import GenericFAQ from '../components/GenericFAQ';
import { useBooking } from '../hooks/useBooking';
import { UserCheck, Zap, Target, ShieldCheck, Sparkles, Compass, Check } from 'lucide-react';

const HumanDesignSesionPage = () => {
    const { openBooking } = useBooking();

    const faqHD = [
        {
            question: '¿Necesito saber mi hora de nacimiento exacta?',
            answer:
                'Sí, para el Diseño Humano la precisión es fundamental. La hora exacta nos permite determinar tu Tipo, Autoridad y sobre todo las puertas y centros definidos, que cambian rápidamente a lo largo del día.',
        },
        {
            question: '¿En qué se diferencia el Diseño Humano de la Astrología?',
            answer:
                'Mientras que la Astrología nos habla de nuestras tendencias y arquetipos, el Diseño Humano es un sistema mucho más mecánico y corporal. Se enfoca en el "cómo": cómo tomar decisiones y cómo usar tu energía de forma eficiente para no agotarte.',
        },
        {
            question: '¿Qué recibo después de la sesión?',
            answer:
                'Dependiendo de la sesión, recibirás una grabación del encuentro y un resumen práctico con los puntos clave de tu diseño: tu Estrategia, tu Autoridad y consejos específicos para aplicar en tu maternidad y vida diaria.',
        },
        {
            question: '¿Sirve si mis hijos son adolescentes?',
            answer:
                '¡Por supuesto! De hecho, entender el diseño de un adolescente es una de las herramientas más potentes para suavizar esa etapa, entender sus procesos de individualización y dejar de proyectar en ellos nuestras propias expectativas.',
        },
    ];

    const valueProps = [
        {
            icon: <Zap size={32} />,
            title: 'Gestión Energética',
            description:
                'Aprende cómo funciona tu batería vital y cómo evitar el agotamiento crónico en la crianza.',
        },
        {
            icon: <Target size={32} />,
            title: 'Estrategia de Decisión',
            description:
                'Descubre tu brújula interna para tomar decisiones sin dudas, basadas en tu propia autoridad.',
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Validación de Tu Naturaleza',
            description:
                'Deja de intentar ser quien no eres. El Diseño Humano te da permiso para ser tú misma.',
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Dinamica Familiar',
            description:
                'Comprende por qué chocas con ciertos miembros y cómo armonizar las energías de tu hogar.',
        },
    ];

    const plans = [
        {
            title: 'Sesión Individual',
            price: '€90',
            offer: 'Primera sesión €30',
            description: 'Un viaje profundo a tu naturaleza única: tu Tipo, Autoridad y Perfil.',
            features: [
                'Comprende cómo procesas energía y cómo evitar el burnout.',
                'Identifica tu Estrategia de vida definitiva.',
                'Aprende a confiar en tu propio sistema de toma de decisiones.',
                'Identifica los miedos y presiones que no te pertenecen.',
                'Sugerencias prácticas para tu día a día como mamá.',
            ],
            highlight: false,
        },
        {
            title: 'Lectura de Vínculos',
            price: '€270',
            description: 'Análisis de la dinámica energética entre tú y tus hijos o pareja.',
            features: [
                'Entiende el "manual" de tus hijos: cómo guiarlos sin forzarlos.',
                'Identifica de dónde surgen los roces constantes en casa.',
                'Crea puentes de comunicación que realmente funcionen.',
                'Libera a tus hijos de etiquetas y expectativas erróneas.',
                'Guía familiar completa para un hogar más armonioso.',
            ],
            highlight: true,
        },
    ];

    return (
        <div className="hd-sesion-page">
            <main>
                {/* HERO SECTION */}
                <section className="sales-hero">
                    <div className="container sales-hero-grid">
                        <div className="sales-hero-content">
                            <div className="sales-badge">
                                <UserCheck size={16} />
                                <span>Diseño Humano</span>
                            </div>
                            <h1 className="heading-lg main-title">
                                Conoce tu manual <br /> <span className="text-accent">de usuario único</span>
                            </h1>
                            <p className="sales-description">
                                Descubre cómo estás diseñado para procesar energía, tomar decisiones y navegar el mundo.
                                Una guía práctica y profunda para simplificar tu vida, validar tu naturaleza y encontrar paz en tu maternidad.
                            </p>
                            <div className="sales-hero-actions">
                                <a href="#servicios" className="btn btn-primary btn-large">
                                    Explorar Sesiones
                                </a>
                            </div>
                        </div>
                        <div className="sales-hero-image">
                            <div className="image-frame">
                                <img src="/assets/hero-human-design.png" alt="Conoce tu manual de usuario único - Diseño Humano" />
                            </div>
                            <div className="sales-orb blur-1"></div>
                            <div className="sales-orb blur-2"></div>
                        </div>
                    </div>
                </section>

                {/* VALUE PROPS SECTION */}
                <AnimatedSection>
                    <section className="section-small bg-white">
                        <div className="container">
                            <div className="props-grid">
                                {valueProps.map((prop, index) => (
                                    <div key={index} className="prop-card">
                                        <div className="prop-icon">{prop.icon}</div>
                                        <h3 className="prop-title">{prop.title}</h3>
                                        <p className="prop-description">{prop.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* PRICING SECTION */}
                <div id="servicios">
                    <AnimatedSection>
                        <section className="section container">
                            <div className="pricing-header">
                                <h2 className="heading-md">Tu mapa de navegación personal</h2>
                                <p className="text-muted">Elige la lectura que mejor se adapte a tu necesidad actual de claridad y orden.</p>
                            </div>

                            <div className="pricing-grid">
                                {plans.map((plan, index) => (
                                    <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                                        {plan.highlight && <div className="badge">Recomendado</div>}
                                        <h3 className="plan-title">{plan.title}</h3>
                                        <div className="price-container">
                                            <span className="price">{plan.price}</span>
                                            {plan.offer && <span className="offer">{plan.offer}</span>}
                                        </div>
                                        <p className="plan-description">{plan.description}</p>
                                        <ul className="feature-list">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="feature-item">
                                                    <Check size={18} className="icon-check" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="pricing-actions">
                                <button onClick={openBooking} className="btn btn-primary btn-large">
                                    Reservar mi Sesión
                                </button>
                            </div>
                        </section>
                    </AnimatedSection>
                </div>

                {/* ABOUT SECTION */}
                <AnimatedSection>
                    <section id="sobre-mi" className="section bg-cream">
                        <div className="container about-grid">
                            <div className="about-content">
                                <div className="icon-wrapper">
                                    <Compass size={40} color="var(--primary-color)" />
                                </div>
                                <h2 className="heading-md">¿Qué es el Diseño Humano?</h2>
                                <p className="about-text">
                                    El Diseño Humano es un sistema de autoconocimiento lógico y práctico que combina la astrología, el I Ching, la Cábala y la física cuántica.
                                    Es, literalmente, el &quot;manual de usuario&quot; de tu cuerpo y tu energía.
                                </p>
                                <p className="about-text">
                                    No requiere que creas en nada. Solo que experimentes con tu Estrategia y Autoridad para ver cómo tu vida se simplifica cuando dejas de forzar las cosas.
                                    Es la herramienta definitiva para una crianza sin culpas y con mucha claridad.
                                </p>
                            </div>
                            <div className="about-image-placeholder">
                                <div className="decorative-box">
                                    <img
                                        className="about-image"
                                        src="/assets/hero-human-design.png"
                                        alt="Sobre Diseño Humano"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* CTA DIVIDER */}
                <AnimatedSection className="cta-divider">
                    <div className="container cta-content">
                        <h2 className="heading-md text-white">
                            ¿Lista para vivir bajo tus propias reglas?
                        </h2>
                        <p className="cta-description">
                            Tu diseño es la clave para una vida con menos resistencia y más paz.
                        </p>
                        <button onClick={openBooking} className="btn btn-accent btn-large">
                            Reservar mi Sesión HD
                        </button>
                    </div>
                </AnimatedSection>

                {/* FAQ SECTION */}
                <AnimatedSection>
                    <GenericFAQ
                        questions={faqHD}
                        title="Preguntas sobre Diseño Humano"
                        subtitle="Todo lo que necesitas saber antes de sumergirte en tu manual de usuario."
                    />
                </AnimatedSection>
            </main>

            <style>{`
        .hd-sesion-page {
          background-color: var(--bg-color);
          min-height: 100vh;
        }

        .bg-white { background-color: white; }
        .bg-cream { background-color: var(--cream-pink); }
        .text-white { color: white; }

        /* HERO STYLES */
        .sales-hero {
          padding: var(--space-xl) 0 var(--space-lg);
          background: linear-gradient(180deg, var(--bg-color) 0%, #fffbf2 100%);
          position: relative;
          overflow: hidden;
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
          }
          .sales-hero-content { order: 2; }
          .sales-hero-image { order: 1; margin-bottom: var(--space-sm); }
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
        }

        .sales-description {
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: var(--space-lg);
          opacity: 0.9;
        }

        @media (max-width: 992px) {
          .sales-description { margin-left: auto; margin-right: auto; }
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
          margin: 0 auto;
        }

        .image-frame img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-frame:hover img { transform: scale(1.05); }

        .sales-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 1;
          opacity: 0.3;
        }
        .blur-1 { width: 300px; height: 300px; background: var(--primary-color); top: -50px; right: -50px; }
        .blur-2 { width: 250px; height: 250px; background: var(--accent-color); bottom: -30px; left: -30px; }

        /* VALUE PROPS STYLES */
        .section-small { padding: var(--space-lg) 0; }
        .props-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-md);
        }
        .prop-card { text-align: center; padding: var(--space-md); border-radius: 20px; transition: var(--transition-smooth); }
        .prop-card:hover { transform: translateY(-5px); }
        .prop-icon {
          color: var(--primary-color);
          background: var(--cream-pink);
          width: 70px; height: 70px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-sm);
        }
        .prop-title { font-size: 1.4rem; margin-bottom: 12px; }
        .prop-description { opacity: 0.8; font-size: 1rem; line-height: 1.5; }

        /* PRICING STYLES */
        .pricing-header { text-align: center; margin-bottom: var(--space-lg); max-width: 800px; margin-left: auto; margin-right: auto; }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-md);
          align-items: stretch;
          margin-bottom: var(--space-lg);
        }
        .pricing-card {
          background: var(--white);
          padding: var(--space-md);
          border-radius: 24px;
          border: 1px solid rgba(128, 43, 72, 0.1);
          transition: var(--transition-smooth);
          display: flex; flex-direction: column; position: relative;
        }
        .pricing-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(76, 43, 8, 0.05); }
        .pricing-card.highlight { border: 2px solid var(--primary-color); background-color: var(--cream-pink); }
        .pricing-card .badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--primary-color); color: var(--white); padding: 4px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase;
        }
        .plan-title { font-size: 1.8rem; color: var(--primary-color); margin-bottom: var(--space-sm); }
        .price { font-size: 3rem; font-weight: 700; }
        .offer {
          color: var(--primary-color); font-weight: 600; background: rgba(128, 43, 72, 0.1);
          padding: 4px 12px; border-radius: 8px; display: inline-block; width: fit-content; margin-top: 4px;
        }
        .plan-description { margin-bottom: var(--space-md); font-weight: 500; min-height: 3em; }
        .feature-list { list-style: none; margin-bottom: var(--space-md); flex-grow: 1; padding: 0; }
        .feature-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 0.95rem; line-height: 1.4; text-align: left; }
        .icon-check { color: var(--accent-color); flex-shrink: 0; margin-top: 2px; }
        .pricing-actions { display: flex; justify-content: center; margin-top: var(--space-md); }

        /* ABOUT STYLES */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); align-items: center; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; text-align: center; } }
        .icon-wrapper {
          background: var(--white); width: 80px; height: 80px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-sm);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        @media (max-width: 768px) { .icon-wrapper { margin-left: auto; margin-right: auto; } }
        .about-text { font-size: 1.2rem; margin-bottom: var(--space-sm); }
        .decorative-box {
          height: 400px; width: 400px; max-width: 100%;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
          border-radius: 30px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: rotate(2deg); margin: 0 auto;
        }
        .about-image { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.9; transition: var(--transition-smooth); }
        .decorative-box:hover .about-image { transform: scale(1.05); opacity: 1; }

        /* CTA DIVIDER STYLES */
        .cta-divider {
          background: var(--primary-color); padding: var(--space-xl) 0; text-align: center; position: relative; overflow: hidden;
        }
        .cta-divider::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .cta-content { position: relative; z-index: 2; }
        .cta-description { color: white; opacity: 0.9; margin-bottom: var(--space-md); fontSize: 1.2rem; }

        /* FOOTER STYLES */
        .hd-footer { padding: var(--space-md) 0; text-align: center; background: #3a1320; color: white; opacity: 0.8; font-size: 0.9rem; }

        .btn-large { padding: 1.2rem 3rem; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        html { scroll-behavior: smooth; }
      `}</style>
        </div>
    );
};

export default HumanDesignSesionPage;
