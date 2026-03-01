import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="global-footer">
            <div className="container text-center">
                <p>© 2026 Andi Universo | Guía y contención para mamás</p>
            </div>
            <style>{`
        .global-footer {
          padding: var(--space-md) 0;
          background: #3a1320;
          color: white;
          opacity: 0.85;
          font-size: 0.95rem;
          text-align: center;
        }
        
        .global-footer p {
          margin: 0;
        }

        @media (max-width: 480px) {
          .global-footer {
            padding: var(--space-sm) 0;
            font-size: 0.85rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
