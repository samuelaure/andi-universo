import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Tengo que creer en la astrología para que me sirva una lectura?',
      answer:
        'No. La astrología evolutiva es una herramienta para el autoconocimiento; puedes tomarla como un espejo, guía o mapa, sin necesidad de creencias previas.',
    },
    {
      question: '¿La lectura me va a decir el futuro de mis hijos o de mi familia?',
      answer:
        'No hago predicciones. Mi enfoque es explicarte, aliviar y darte orientación para que comprendas mejor a tu familia y a ti misma en el presente.',
    },
    {
      question: '¿Necesito saber la hora exacta de nacimiento?',
      answer:
        'Lo ideal es sí, especialmente para ver detalles importantes. Si no la tienes, podemos trabajar igualmente y adapto la sesión para que siga siendo valiosa.',
    },
    {
      question: '¿Qué pasa si mi pareja no cree en esto o no quiere participar?',
      answer:
        'No es necesario que todos participen activamente. Leer las cartas de quienes estén dispuestos ya aporta muchísima comprensión y herramientas prácticas.',
    },
    {
      question: '¿La información de la carta astral puede limitarme o etiquetarme?',
      answer:
        'Jamás. La astrología evolutiva muestra potencialidades y procesos, no etiquetas. Todo se interpreta como camino de desarrollo, no como sentencia.',
    },
    {
      question: '¿Puedo hacer una sesión si tengo dudas o miedos sobre lo que voy a descubrir?',
      answer:
        'Claro. La sesión es un espacio seguro; validaremos juntos lo que surja desde la compasión y la esperanza. Nada de la carta es para asustar, sino para comprender y aliviar.',
    },
  ];

  return (
    <section id="faq" className="section container">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
        <h2 className="heading-md">Preguntas Frecuentes</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>

      <style>{`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsOpen(!isOpen);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
      <style>{`
        .faq-item {
          background: var(--white);
          margin-bottom: var(--space-sm);
          border-radius: 16px;
          cursor: pointer;
          overflow: hidden;
          transition: var(--transition-smooth);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .faq-question {
          padding: var(--space-sm) var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-family: var(--font-header);
          color: var(--primary-color);
        }

        .faq-answer {
          max-height: 0;
          padding: 0 var(--space-md);
          transition: all 0.3s ease-out;
          opacity: 0;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 0 var(--space-md) var(--space-sm) var(--space-md);
          opacity: 1;
        }

        .faq-item:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        @media (max-width: 480px) {
          .faq-item {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
          .faq-question {
            padding: var(--space-sm);
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
