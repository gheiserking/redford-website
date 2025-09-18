import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Users, Target, Instagram, Phone, Mail } from 'lucide-react';
import FloatingElements from '../components/FloatingElements';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const heroTexts = [
    "Somos la fuerza que impulsa tu marca",
    {
      red: "En ",
      redText: "RED",
      ford: "FORD",
      white: " creamos magia digital"
    }, 
    "No hacemos ruido 🤫"
  ];

  const renderHeroText = (text) => {
    if (typeof text === 'string') {
      return text;
    }
    
    return (
      <span>
        {text.red}
        <span style={{color: '#B91C1C', textShadow: '0 0 15px rgba(185, 28, 28, 0.4)'}}>{text.redText}</span>
        <span style={{color: '#FFFFFF', textShadow: '0 0 25px rgba(0, 212, 255, 0.6)'}}>{text.ford}</span>
        {text.white}
      </span>
    );
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    page: {
      backgroundColor: '#000000',
      color: 'white',
      minHeight: '100vh',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    
    // Hero Section
    hero: {
      position: 'relative',
      zIndex: 10,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      textAlign: 'center'
    },
    
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease'
    },
    
    heroSubtitle: {
      fontSize: '18px',
      color: 'rgba(185, 28, 28, 0.9)',
      marginBottom: '32px',
      fontWeight: '500',
      letterSpacing: '1px'
    },
    
    heroChangingText: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      marginBottom: '48px',
      lineHeight: '1.2',
      color: '#FFFFFF',
      minHeight: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 1s ease'
    },
    
    heroChangingTextRed: {
      color: '#B91C1C'
    },
    
    heroButtons: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    
    btnPrimary: {
      background: 'linear-gradient(135deg, #B91C1C, #DC2626)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(185, 28, 28, 0.2)'
    },
    
    btnSecondary: {
      background: 'transparent',
      color: '#B91C1C',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      border: '2px solid rgba(185, 28, 28, 0.4)',
      cursor: 'pointer'
    },
    
    // Services Preview Section
    servicesPreview: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 24px',
      background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.5), black)'
    },
    
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '64px',
      color: '#FFFFFF'
    },
    
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '48px'
    },
    
    serviceCard: {
      background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.4))',
      backdropFilter: 'blur(16px)',
      borderRadius: '20px',
      padding: '40px 32px',
      border: '1px solid rgba(75, 85, 99, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    
    serviceCardInner: {
      position: 'relative',
      zIndex: 2
    },
    
    serviceCardGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(145deg, rgba(185, 28, 28, 0.05), rgba(220, 38, 38, 0.02))',
      opacity: 0,
      transition: 'all 0.4s ease',
      borderRadius: '20px',
      zIndex: 1
    },
    
    serviceCardTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    
    serviceCardIcon: {
      color: '#B91C1C',
      backgroundColor: 'rgba(185, 28, 28, 0.1)',
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    },
    
    serviceCardText: {
      color: 'rgba(209, 213, 219, 0.9)',
      lineHeight: '1.6',
      fontSize: '16px'
    },
    
    textCenter: {
      textAlign: 'center'
    },
    
    // CTA Section
    ctaSection: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 24px',
      textAlign: 'center'
    },
    
    ctaTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      color: '#FFFFFF'
    },
    
    ctaText: {
      fontSize: '18px',
      color: '#D1D5DB',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    }
  };

  const services = [
    {
      title: "Gestión de redes sociales",
      text: "Instagram, TikTok y más plataformas que hacen crecer tu audiencia",
      icon: <Users size={24} />
    },
    {
      title: "Estrategia de contenido",
      text: "Qué publicar, cuándo y cómo para maximizar el engagement",
      icon: <Target size={24} />
    },
    {
      title: "Crecimiento orgánico",
      text: "Más seguidores reales, más engagement, más conversiones",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Consultoría digital",
      text: "Auditorías y estrategias personalizadas para tu proyecto",
      icon: <Zap size={24} />
    }
  ];

  return (
    <div style={styles.page}>
      <FloatingElements />
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.heroSubtitle}>Especialistas en crecimiento digital</p>
          <p style={styles.heroChangingText}>{renderHeroText(heroTexts[currentText])}</p>
          
          <div style={styles.heroButtons}>
            <Link 
              to="/contacto" 
              style={styles.btnPrimary}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 32px rgba(185, 28, 28, 0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 20px rgba(185, 28, 28, 0.2)';
              }}
            >
              Impulsa tu marca
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/servicios" 
              style={styles.btnSecondary}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(185, 28, 28, 0.1)';
                e.target.style.borderColor = 'rgba(185, 28, 28, 0.6)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(185, 28, 28, 0.4)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Preview */}
      <section style={styles.servicesPreview}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>¿Qué hacemos?</h2>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={styles.serviceCard}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-12px) scale(1.02)';
                  e.target.style.borderColor = 'rgba(185, 28, 28, 0.4)';
                  e.target.style.boxShadow = '0 20px 40px rgba(185, 28, 28, 0.15)';
                  const glow = e.target.querySelector('.service-glow');
                  const icon = e.target.querySelector('.service-icon');
                  if (glow) glow.style.opacity = '1';
                  if (icon) {
                    icon.style.backgroundColor = 'rgba(185, 28, 28, 0.2)';
                    icon.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                  e.target.style.boxShadow = 'none';
                  const glow = e.target.querySelector('.service-glow');
                  const icon = e.target.querySelector('.service-icon');
                  if (glow) glow.style.opacity = '0';
                  if (icon) {
                    icon.style.backgroundColor = 'rgba(185, 28, 28, 0.1)';
                    icon.style.transform = 'scale(1)';
                  }
                }}
              >
                <div className="service-glow" style={styles.serviceCardGlow}></div>
                <div style={styles.serviceCardInner}>
                  <h3 style={styles.serviceCardTitle}>
                    <div className="service-icon" style={styles.serviceCardIcon}>
                      {service.icon}
                    </div>
                    {service.title}
                  </h3>
                  <p style={styles.serviceCardText}>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.textCenter}>
            <Link 
              to="/servicios" 
              style={styles.btnPrimary}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.25)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Ver todos los servicios
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>¿Listo para hacer crecer tu marca?</h2>
          <p style={styles.ctaText}>
            Cada proyecto es único. Hablamos, analizamos tu situación y te proponemos una solución a medida.
          </p>
          <Link 
            to="/contacto" 
            style={styles.btnPrimary}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.25)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Hablemos
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CSS específico del componente */}
      <style>{`
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;