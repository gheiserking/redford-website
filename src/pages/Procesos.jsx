import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Procesos = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Análisis Profundo',
      description: 'Entendemos tu marca desde la raíz. Analizamos tu audiencia actual, competencia, puntos de dolor y oportunidades ocultas. No suposiciones, solo datos reales.',
      details: [
        '• Auditoría completa de redes',
        '• Análisis de competencia',
        '• Identificación de audiencia objetivo',
        '• Mapeo de oportunidades'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      alt: 'Análisis de datos y estrategia'
    },
    {
      number: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos tu hoja de ruta específica. Cada marca es única, cada solución también. Creamos un plan a medida que conecte con tu audiencia real.',
      details: [
        '• Estrategia de contenido',
        '• Calendario editorial',
        '• Definición de KPIs',
        '• Plan de crecimiento'
      ],
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Estrategia y planificación'
    },
    {
      number: '03',
      title: 'Ejecución Silenciosa',
      description: 'Trabajamos en las sombras mientras tu marca brilla. Implementamos cada estrategia con precisión, sin ruido, sin spam, solo resultados.',
      details: [
        '• Gestión diaria de contenido',
        '• Community management',
        '• Optimización continua',
        '• Growth hacking orgánico'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Ejecución y trabajo en equipo'
    },
    {
      number: '04',
      title: 'Resultados Medibles',
      description: 'Los números hablan por nosotros. Reportes claros, métricas reales, crecimiento tangible. Sin vanity metrics, solo KPIs que impactan tu negocio.',
      details: [
        '• Reportes semanales',
        '• Análisis de rendimiento',
        '• Optimización basada en datos',
        '• Escalado de estrategias exitosas'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Métricas y resultados'
    }
  ];

  // Función para obtener estilos responsivos
  const getResponsiveStyles = (baseStyles, mobileStyles = {}) => {
    return isMobile ? { ...baseStyles, ...mobileStyles } : baseStyles;
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={getResponsiveStyles(styles.hero, styles.heroMobile)}>
        <div style={styles.heroContent}>
          <h1 style={getResponsiveStyles(styles.heroTitle, styles.heroTitleMobile)}>
            Nuestro <span style={styles.highlight}>Proceso</span>
          </h1>
          <p style={getResponsiveStyles(styles.heroSubtitle, styles.heroSubtitleMobile)}>
            Metodología probada para impulsar tu marca sin hacer ruido
          </p>
        </div>
      </section>

      {/* Proceso Steps Slider */}
      <section style={getResponsiveStyles(styles.section, styles.sectionMobile)}>
        <div style={styles.sectionContainer}>
          
          {/* Step Indicators */}
          <div style={getResponsiveStyles(styles.indicators, styles.indicatorsMobile)}>
            {steps.map((_, index) => (
              <div
                key={index}
                style={{
                  ...getResponsiveStyles(styles.indicator, styles.indicatorMobile),
                  ...(index === currentStep ? getResponsiveStyles(styles.indicatorActive, styles.indicatorActiveMobile) : {})
                }}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>

          {/* Current Step */}
          <div style={styles.stepContainer}>
            <div style={getResponsiveStyles(styles.step, styles.stepMobile)}>
              <div style={getResponsiveStyles(styles.stepContent, styles.stepContentMobile)}>
                <div style={getResponsiveStyles(styles.stepNumber, styles.stepNumberMobile)}>
                  {steps[currentStep].number}
                </div>
                <div style={styles.stepInfo}>
                  <h2 style={getResponsiveStyles(styles.stepTitle, styles.stepTitleMobile)}>
                    {steps[currentStep].title}
                  </h2>
                  <p style={getResponsiveStyles(styles.stepDescription, styles.stepDescriptionMobile)}>
                    <strong>{steps[currentStep].description.split('.')[0]}.</strong>
                    {steps[currentStep].description.substring(steps[currentStep].description.indexOf('.') + 1)}
                  </p>
                  <div style={styles.stepDetails}>
                    {steps[currentStep].details.map((detail, index) => (
                      <span key={index} style={getResponsiveStyles(styles.detail, styles.detailMobile)}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={getResponsiveStyles(styles.stepImage, styles.stepImageMobile)}>
                <img 
                  src={steps[currentStep].image}
                  alt={steps[currentStep].alt}
                  style={getResponsiveStyles(styles.image, styles.imageMobile)}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div style={getResponsiveStyles(styles.navigation, styles.navigationMobile)}>
              <button onClick={prevStep} style={getResponsiveStyles(styles.navButton, styles.navButtonMobile)}>
                <ChevronLeft size={isMobile ? 20 : 24} style={styles.arrow} />
              </button>
              <button onClick={nextStep} style={getResponsiveStyles(styles.navButton, styles.navButtonMobile)}>
                <ChevronRight size={isMobile ? 20 : 24} style={styles.arrow} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={getResponsiveStyles(styles.ctaSection, styles.ctaSectionMobile)}>
        <div style={styles.ctaContent}>
          <h2 style={getResponsiveStyles(styles.ctaTitle, styles.ctaTitleMobile)}>
            ¿Listo para ver tu marca crecer?
          </h2>
          <p style={getResponsiveStyles(styles.ctaSubtitle, styles.ctaSubtitleMobile)}>
            Aplicamos este proceso probado a tu proyecto específico
          </p>
          <a href="/contacto" style={getResponsiveStyles(styles.ctaButton, styles.ctaButtonMobile)}>
            Hablemos de tu proyecto
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#000000',
    color: 'white',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },

  // Hero
  hero: {
    padding: '120px 24px 80px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #000000, #1a0000)'
  },
  heroMobile: {
    padding: '80px 16px 60px'
  },

  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },

  heroTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: '1.2'
  },
  heroTitleMobile: {
    fontSize: '2.5rem',
    marginBottom: '16px'
  },

  heroSubtitle: {
    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
    color: '#D1D5DB',
    fontWeight: '300'
  },
  heroSubtitleMobile: {
    fontSize: '1.25rem'
  },

  highlight: {
    color: '#8B0000'
  },

  // Section
  section: {
    padding: '80px 24px'
  },
  sectionMobile: {
    padding: '60px 16px'
  },

  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },

  // Indicators
  indicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '64px'
  },
  indicatorsMobile: {
    gap: '12px',
    marginBottom: '40px'
  },

  indicator: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'rgba(139, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  indicatorMobile: {
    width: '12px',
    height: '12px'
  },

  indicatorActive: {
    backgroundColor: '#8B0000',
    transform: 'scale(1.2)'
  },
  indicatorActiveMobile: {
    transform: 'scale(1.3)'
  },

  // Step Container
  stepContainer: {
    position: 'relative'
  },

  // Steps
  step: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
    minHeight: '500px'
  },
  stepMobile: {
    display: 'block',
    minHeight: 'auto'
  },

  stepContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '32px'
  },
  stepContentMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    marginBottom: '32px'
  },

  stepNumber: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#8B0000',
    lineHeight: '1',
    minWidth: '120px',
    textShadow: '0 0 30px rgba(139, 0, 0, 0.5)'
  },
  stepNumberMobile: {
    fontSize: '4rem',
    minWidth: 'auto'
  },

  stepInfo: {
    flex: 1
  },

  stepTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#FFFFFF'
  },
  stepTitleMobile: {
    fontSize: '2rem',
    marginBottom: '16px'
  },

  stepDescription: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: '#D1D5DB',
    marginBottom: '32px'
  },
  stepDescriptionMobile: {
    fontSize: '1.1rem',
    marginBottom: '24px'
  },

  stepDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  detail: {
    color: '#8B0000',
    fontSize: '1rem',
    fontWeight: '500'
  },
  detailMobile: {
    fontSize: '0.95rem'
  },

  stepImage: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(139, 0, 0, 0.3)'
  },
  stepImageMobile: {
    marginBottom: '32px'
  },

  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    filter: 'contrast(1.2) brightness(0.9)',
    transition: 'all 0.3s ease'
  },
  imageMobile: {
    height: '300px'
  },

  // Navigation
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '-80px',
    right: '-80px',
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  },
  navigationMobile: {
    position: 'static',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '20px',
    transform: 'none'
  },

  navButton: {
    backgroundColor: '#8B0000',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(139, 0, 0, 0.3)',
    pointerEvents: 'all',
    backdropFilter: 'blur(10px)'
  },
  navButtonMobile: {
    width: '50px',
    height: '50px',
    boxShadow: '0 8px 25px rgba(139, 0, 0, 0.4)'
  },

  arrow: {
    color: 'white',
    transition: 'all 0.3s ease'
  },

  // CTA Section
  ctaSection: {
    padding: '100px 24px',
    background: 'linear-gradient(135deg, #1a0000, #000000)',
    textAlign: 'center'
  },
  ctaSectionMobile: {
    padding: '80px 16px'
  },

  ctaContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },

  ctaTitle: {
    fontSize: 'clamp(2rem, 6vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#8B0000'
  },
  ctaTitleMobile: {
    fontSize: '2rem',
    marginBottom: '16px'
  },

  ctaSubtitle: {
    fontSize: '1.25rem',
    color: '#D1D5DB',
    marginBottom: '40px'
  },
  ctaSubtitleMobile: {
    fontSize: '1.1rem',
    marginBottom: '32px'
  },

  ctaButton: {
    backgroundColor: '#8B0000',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    fontSize: '1.125rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(139, 0, 0, 0.3)',
    textDecoration: 'none',
    display: 'inline-block'
  },
  ctaButtonMobile: {
    padding: '14px 32px',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '280px'
  }
};

export default Procesos;