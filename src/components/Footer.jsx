import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre sus servicios.";
    const whatsappUrl = `https://wa.me/34644489930?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const styles = {
    footer: {
      width: '100%',
      background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
      borderTop: '1px solid rgba(185, 28, 28, 0.15)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    
    mainSection: {
      padding: '40px 5%'
    },
    
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '30px'
    },
    
    brandLogo: {
      fontSize: '28px',
      fontWeight: '900',
      textDecoration: 'none',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '2px',
      lineHeight: '1'
    },
    
    logoRed: {
      color: '#B91C1C',
      textShadow: '0 0 20px rgba(185, 28, 28, 0.4)'
    },
    
    logoFord: {
      color: '#FFFFFF',
      textShadow: '0 0 25px rgba(255, 255, 255, 0.3)'
    },
    
    philosophy: {
      color: 'rgba(156, 163, 175, 0.8)',
      fontSize: '16px',
      fontStyle: 'italic',
      textAlign: 'center'
    },
    
    contactIcons: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    
    iconBtn: {
      background: 'transparent',
      border: '1px solid rgba(75, 85, 99, 0.3)',
      borderRadius: '50%',
      color: 'rgba(209, 213, 219, 0.8)',
      padding: '12px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      width: '48px',
      height: '48px'
    },
    
    bottomSection: {
      borderTop: '1px solid rgba(75, 85, 99, 0.2)',
      padding: '20px 5%',
      textAlign: 'center'
    },
    
    copyrightText: {
      color: 'rgba(156, 163, 175, 0.6)',
      fontSize: '13px',
      margin: '0'
    },
    
    // Mobile styles
    containerMobile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '25px',
      textAlign: 'center'
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <footer style={styles.footer}>
      <div style={styles.mainSection}>
        <div style={isMobile ? styles.containerMobile : styles.container}>
          
          <Link to="/" style={styles.brandLogo}>
            <span style={styles.logoRed}>RED</span>
            <span style={styles.logoFord}>FORD</span>
          </Link>
          
          <p style={styles.philosophy}>
            La fuerza que impulsa tu marca… no hacemos ruido 🤫
          </p>
          
          <div style={styles.contactIcons}>
            <button 
              onClick={handleWhatsApp} 
              style={styles.iconBtn}
              title="WhatsApp"
              onMouseEnter={e => {
                e.target.style.borderColor = '#22C55E';
                e.target.style.color = '#22C55E';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.color = 'rgba(209, 213, 219, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={20} />
            </button>
            
            <a 
              href="mailto:elisademiguel777@gmail.com" 
              style={styles.iconBtn}
              title="Email"
              onMouseEnter={e => {
                e.target.style.borderColor = '#B91C1C';
                e.target.style.color = '#B91C1C';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.color = 'rgba(209, 213, 219, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="https://instagram.com/redford_creativ" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.iconBtn}
              title="Instagram"
              onMouseEnter={e => {
                e.target.style.borderColor = '#EC4899';
                e.target.style.color = '#EC4899';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.color = 'rgba(209, 213, 219, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div style={styles.bottomSection}>
        <p style={styles.copyrightText}>
          © 2025 REDFORD. Todos los derechos reservados. Especialistas en crecimiento digital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;