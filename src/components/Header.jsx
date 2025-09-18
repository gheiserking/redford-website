import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Servicios', path: '/servicios' },
    { name: 'Procesos', path: '/procesos' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  const styles = {
    header: {
      position: 'relative',
      zIndex: 10,
      padding: '20px 0',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box'
    },
    
    headerContent: {
      width: '100%',
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    
    logo: {
      fontSize: '36px',
      fontWeight: '900',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      fontFamily: '"Orbitron", "Exo 2", "Rajdhani", sans-serif',
      letterSpacing: '1px',
      textShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
    },
    
    logoRed: {
      color: '#B91C1C',
      textShadow: '0 0 15px rgba(185, 28, 28, 0.4)'
    },
    
    logoFord: {
      color: '#FFFFFF',
      textShadow: '0 0 25px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3)',
      filter: 'drop-shadow(0 2px 8px rgba(0, 212, 255, 0.2))'
    },
    
    tagline: {
      color: 'rgba(156, 163, 175, 0.85)',
      fontSize: '13px',
      fontWeight: '400',
      letterSpacing: '0.5px',
      fontStyle: 'italic',
      marginLeft: '12px',
      opacity: '0.8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    
    nav: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    },
    
    navLink: {
      color: 'rgba(209, 213, 219, 0.8)',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      padding: '8px 16px',
      position: 'relative',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '8px',
      background: 'transparent',
      overflow: 'hidden'
    },
    
    navLinkActive: {
      color: '#00D4FF',
      background: 'rgba(0, 212, 255, 0.08)',
      fontWeight: '600'
    },
    
    // Mobile menu button
    menuButton: {
      backgroundColor: 'transparent',
      border: '2px solid rgba(0, 212, 255, 0.3)',
      borderRadius: '8px',
      color: '#00D4FF',
      cursor: 'pointer',
      padding: '8px',
      transition: 'all 0.3s ease',
      display: 'none'
    },
    
    // Mobile menu
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.98)',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      borderTop: 'none',
      zIndex: 20,
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    mobileMenuContent: {
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    
    mobileNavLink: {
      color: '#D1D5DB',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: '600',
      padding: '16px 20px',
      borderRadius: '8px',
      borderLeft: '3px solid transparent',
      transition: 'all 0.3s ease',
      background: 'rgba(17, 24, 39, 0.3)'
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <Link to="/" style={styles.logoContainer}>
            <div 
              style={styles.logo}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.03)';
                const redSpan = e.target.querySelector('.logo-red');
                const fordSpan = e.target.querySelector('.logo-ford');
                if (redSpan) redSpan.style.textShadow = '0 0 25px rgba(185, 28, 28, 0.6)';
                if (fordSpan) fordSpan.style.textShadow = '0 0 35px rgba(0, 212, 255, 0.8), 0 0 50px rgba(0, 212, 255, 0.4)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                const redSpan = e.target.querySelector('.logo-red');
                const fordSpan = e.target.querySelector('.logo-ford');
                if (redSpan) redSpan.style.textShadow = '0 0 15px rgba(185, 28, 28, 0.4)';
                if (fordSpan) fordSpan.style.textShadow = '0 0 25px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3)';
              }}
            >
              <span className="logo-red" style={styles.logoRed}>RED</span>
              <span className="logo-ford" style={styles.logoFord}>FORD</span>
            </div>
            <div style={styles.tagline}>especialistas en crecimiento digital</div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            style={styles.nav}
            className="redford-header-nav"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(isActive(item.path) ? styles.navLinkActive : {})
                }}
                onMouseEnter={e => {
                  if (!isActive(item.path)) {
                    e.target.style.color = '#00D4FF';
                    e.target.style.background = 'rgba(0, 212, 255, 0.06)';
                    e.target.style.transform = 'translateY(-1px) scale(1.02)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(item.path)) {
                    e.target.style.color = 'rgba(209, 213, 219, 0.8)';
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0) scale(1)';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={styles.menuButton}
            className="redford-header-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={e => {
              e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)';
              e.target.style.background = 'rgba(0, 212, 255, 0.1)';
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)';
              e.target.style.background = 'transparent';
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.mobileNavLink,
                  ...(isActive(item.path) ? { 
                    color: '#00D4FF', 
                    borderLeftColor: '#00D4FF',
                    background: 'rgba(0, 212, 255, 0.1)'
                  } : {})
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={e => {
                  e.target.style.color = '#00D4FF';
                  e.target.style.borderLeftColor = '#00D4FF';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={e => {
                  if (!isActive(item.path)) {
                    e.target.style.color = '#D1D5DB';
                    e.target.style.borderLeftColor = 'transparent';
                    e.target.style.background = 'rgba(17, 24, 39, 0.3)';
                  }
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* CSS embebido sin dangerouslySetInnerHTML */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');
        
        @keyframes blue-glow {
          0%, 100% { 
            text-shadow: 0 0 25px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3);
          }
          50% { 
            text-shadow: 0 0 35px rgba(0, 212, 255, 0.8), 0 0 50px rgba(0, 212, 255, 0.5);
          }
        }
        
        .logo-ford {
          animation: blue-glow 2s ease-in-out infinite;
        }
        
        /* Eliminar cualquier subrayado de Link */
        a, a:hover, a:focus, a:visited, a:active {
          text-decoration: none !important;
        }
        
        @media (max-width: 768px) {
          .redford-header-nav {
            display: none !important;
          }
          .redford-header-menu-button {
            display: block !important;
          }
          .redford-header-logo {
            font-size: 28px !important;
          }
          .redford-header-tagline {
            font-size: 11px !important;
          }
          .redford-header-content {
            padding: 0 20px !important;
          }
        }
        
        @media (min-width: 769px) {
          .redford-header-nav {
            display: flex !important;
          }
          .redford-header-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;