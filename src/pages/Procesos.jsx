import React, { useState } from 'react';

const Procesos = () => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Nuestro <span style={styles.highlight}>Proceso</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Metodología probada para impulsar tu marca sin hacer ruido
          </p>
        </div>
      </section>

      {/* Proceso Steps Slider */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          
          {/* Step Indicators */}
          <div style={styles.indicators}>
            {steps.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.indicator,
                  ...(index === currentStep ? styles.indicatorActive : {})
                }}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>

          {/* Current Step */}
          <div style={styles.stepContainer}>
            <div style={styles.step}>
              <div style={styles.stepContent}>
                <div style={styles.stepNumber}>{steps[currentStep].number}</div>
                <div style={styles.stepInfo}>
                  <h2 style={styles.stepTitle}>{steps[currentStep].title}</h2>
                  <p style={styles.stepDescription}>
                    <strong>{steps[currentStep].description.split('.')[0]}.</strong>
                    {steps[currentStep].description.substring(steps[currentStep].description.indexOf('.') + 1)}
                  </p>
                  <div style={styles.stepDetails}>
                    {steps[currentStep].details.map((detail, index) => (
                      <span key={index} style={styles.detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={styles.stepImage}>
                <img 
                  src={steps[currentStep].image}
                  alt={steps[currentStep].alt}
                  style={styles.image}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div style={styles.navigation}>
              <button onClick={prevStep} style={styles.navButton}>
                <span style={styles.arrow}>‹</span>
              </button>
              <button onClick={nextStep} style={styles.navButton}>
                <span style={styles.arrow}>›</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>¿Listo para ver tu marca crecer?</h2>
          <p style={styles.ctaSubtitle}>
            Aplicamos este proceso probado a tu proyecto específico
          </p>
          <a href="/contacto" style={styles.ctaButton}>
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

  heroSubtitle: {
    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
    color: '#D1D5DB',
    fontWeight: '300'
  },

  highlight: {
    color: '#8B0000'
  },

  // Section
  section: {
    padding: '80px 24px'
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

  indicator: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'rgba(139, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  indicatorActive: {
    backgroundColor: '#8B0000',
    transform: 'scale(1.2)'
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

  stepReverse: {
    direction: 'rtl'
  },

  stepContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '32px'
  },

  stepNumber: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#8B0000',
    lineHeight: '1',
    minWidth: '120px',
    textShadow: '0 0 30px rgba(139, 0, 0, 0.5)'
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

  stepDescription: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: '#D1D5DB',
    marginBottom: '32px'
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

  stepImage: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(139, 0, 0, 0.3)'
  },

  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    filter: 'contrast(1.2) brightness(0.9)',
    transition: 'all 0.3s ease'
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
    pointerEvents: 'all'
  },

  arrow: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold'
  },

  // CTA Section
  ctaSection: {
    padding: '100px 24px',
    background: 'linear-gradient(135deg, #1a0000, #000000)',
    textAlign: 'center'
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

  ctaSubtitle: {
    fontSize: '1.25rem',
    color: '#D1D5DB',
    marginBottom: '40px'
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

  // Responsive
  '@media (max-width: 768px)': {
    step: {
      gridTemplateColumns: '1fr',
      gap: '48px',
      textAlign: 'center'
    },

    stepContent: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },

    stepNumber: {
      fontSize: '4rem',
      minWidth: 'auto'
    },

    stepTitle: {
      fontSize: '2rem'
    },

    image: {
      height: '300px'
    },

    navigation: {
      position: 'static',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '32px',
      transform: 'none'
    }
  }
};

export default Procesos;