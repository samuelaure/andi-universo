import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsOpen(!isOpen);
        }
      }}
    >
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

interface FAQProps {
  questions: FAQItemProps[];
  title?: string;
  subtitle?: string;
}

const GenericFAQ = ({ questions, title = 'Preguntas Frecuentes', subtitle }: FAQProps) => {
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="heading-md">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </div>

        <div className="faq-list">
          {questions.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: transparent;
        }

        .faq-header {
          text-align: center;
          margin-bottom: var(--space-lg);
        }

        .faq-subtitle {
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.8;
          font-size: 1.1rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          margin-bottom: var(--space-sm);
          border-radius: 20px;
          cursor: pointer;
          overflow: hidden;
          transition: var(--transition-smooth);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .faq-item:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transform: translateY(-2px);
          border-color: rgba(128, 43, 72, 0.1);
        }

        .faq-question {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-family: var(--font-header);
          color: var(--primary-color);
          font-size: 1.1rem;
        }

        .faq-answer {
          max-height: 0;
          padding: 0 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          line-height: 1.6;
          color: var(--text-color);
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 2rem 1.5rem 2rem;
          opacity: 1;
        }

        .faq-item.open {
          border-color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 1.2rem 1.5rem;
            font-size: 1rem;
          }
          .faq-answer {
            padding: 0 1.5rem;
          }
          .faq-item.open .faq-answer {
            padding: 0 1.5rem 1.2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GenericFAQ;
