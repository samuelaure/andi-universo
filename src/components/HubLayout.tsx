import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color?: string;
}

interface HubLayoutProps {
  title: string;
  subtitle: string;
  links: LinkItem[];
  profileImage?: string;
}

const HubLayout: React.FC<HubLayoutProps> = ({
  title,
  subtitle,
  links,
  profileImage = '/assets/andi-perfil.png', // Fallback path if found
}) => {
  return (
    <div className="hub-container">
      <main className="hub-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hub-header"
        >
          <div className="profile-wrapper">
            <div className="profile-image-frame">
              {/* Profile image placeholder or provided image */}
              <img
                src={profileImage}
                alt={title}
                className="profile-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Andi+Universo&background=802b48&color=fff';
                }}
              />
            </div>
            <div className="profile-ring"></div>
          </div>
          <h1 className="hub-title">{title}</h1>
          <p className="hub-subtitle">{subtitle}</p>
        </motion.div>

        <motion.div
          className="links-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link to={link.url} className="link-button-card glass">
                <div className="link-icon-wrapper" style={{ backgroundColor: link.color || 'var(--primary-color)' }}>
                  <link.icon className="link-icon" size={24} />
                </div>
                <div className="link-text-content">
                  <h3 className="link-button-title">{link.title}</h3>
                  <p className="link-button-description">{link.description}</p>
                </div>
                <div className="link-arrow">
                  <ChevronRight size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <div className="hub-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <style>{`
        .hub-container {
          min-height: 100vh;
          background-color: var(--bg-color);
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          padding: var(--space-md) var(--space-sm);
        }

        .hub-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hub-header {
          text-align: center;
          margin-bottom: var(--space-md);
        }

        .profile-wrapper {
          position: relative;
          width: 96px;
          height: 96px;
          margin: 0 auto var(--space-sm);
        }

        .profile-image-frame {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid white;
          box-shadow: 0 10px 20px rgba(128, 43, 72, 0.15);
          z-index: 2;
          position: relative;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid var(--primary-color);
          opacity: 0.3;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        .hub-title {
          font-family: var(--font-header);
          font-size: 1.8rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .hub-subtitle {
          font-size: 1rem;
          opacity: 0.8;
          max-width: 320px;
          margin: 0 auto;
        }

        .links-grid {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .link-button-card {
          display: flex;
          align-items: center;
          padding: 1.25rem;
          border-radius: 20px;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid rgba(255, 255, 255, 0.6);
          position: relative;
          overflow: hidden;
        }

        .link-button-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 12px 25px rgba(128, 43, 72, 0.1);
          background: rgba(255, 255, 255, 0.7);
          border-color: var(--primary-color);
        }

        .link-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-right: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        }

        .link-text-content {
          flex-grow: 1;
          text-align: left;
        }

        .link-button-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 2px;
        }

        .link-button-description {
          font-size: 0.85rem;
          opacity: 0.8;
          line-height: 1.3;
        }

        .link-arrow {
          color: var(--primary-color);
          opacity: 0.5;
          margin-left: 0.5rem;
        }

        .hub-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: var(--cream-pink);
          top: -100px;
          right: -50px;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: #e1a23933;
          bottom: -50px;
          left: -50px;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: var(--primary-color);
          opacity: 0.1;
          top: 40%;
          left: 10%;
        }

        @media (max-width: 480px) {
          .hub-container {
            padding: var(--space-sm) var(--space-xs);
          }
          .link-button-card {
            padding: 1rem;
          }
          .link-icon-wrapper {
            width: 42px;
            height: 42px;
          }
          .link-button-title {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HubLayout;
