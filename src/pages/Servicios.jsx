import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Calendar, Lightbulb } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Presencia Digital',
    subtitle: 'Cuando menos es más',
    description: 'No gritamos. Creamos. Cada publicación es una conversación estratégica con quienes realmente importan. Tu marca no necesita estar en todas partes, solo donde cuenta.',
    features: [
      'Contenido que habla sin ruido',
      'Presencia calculada y efectiva', 
      'Comunidad real, no números vacíos'
    ],
    icon: <TrendingUp size={24} />
  },
  {
    id: 2,
    title: 'Estrategia Silenciosa',
    subtitle: 'La arquitectura del crecimiento',
    description: 'Mientras otros planifican contenido, nosotros diseñamos experiencias. Cada pieza encaja perfectamente en un puzzle más grande que solo tú y nosotros conocemos.',
    features: [
      'Movimientos calculados', 
      'Timing perfecto',
      'Impacto medido, no accidental'
    ],
    icon: <Calendar size={24} />
  },
  {
    id: 3,
    title: 'Crecimiento Auténtico',
    subtitle: 'Sin atajos, solo resultados',
    description: 'No compramos seguidores. Los cultivamos. No hacemos viral forzado. Creamos relevancia duradera. Tu audiencia crecerá porque tu valor es innegable.',
    features: [
      'Audiencia que realmente importa',
      'Engagement genuino',
      'Crecimiento que perdura'
    ],
    icon: <Users size={24} />
  },
  {
    id: 4,
    title: 'Consultoría Invisible',
    subtitle: 'Vemos lo que otros no ven',
    description: 'Una mirada externa que revela oportunidades ocultas. Te mostramos exactamente dónde está el potencial no explotado de tu marca y cómo activarlo.',
    features: [
      'Análisis sin filtros',
      'Oportunidades reales',
      'Roadmap hacia el crecimiento'
    ],
    icon: <Lightbulb size={24} />
  }
];

const Servicios = () => {
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Función para obtener estilos responsivos
  const getResponsiveStyles = (baseStyles, mobileStyles = {}) => {
    return isMobile ? { ...baseStyles, ...mobileStyles } : baseStyles;
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={getResponsiveStyles(styles.hero, styles.heroMobile)}>
        <div style={styles.heroContent}>
          <h1 style={getResponsiveStyles(styles.heroTitle, styles.heroTitleMobile)}>
            Servicios que <span style={styles.highlight}>funcionan</span>
          </h1>
          <p style={getResponsiveStyles(styles.heroSubtitle, styles.heroSubtitleMobile)}>
            Sin ruido. Sin promesas vacías. Solo resultados que hablan por sí solos.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section style={getResponsiveStyles(styles.section, styles.sectionMobile)}>
        <div style={styles.sectionContainer}>
          {/* Tabs Navigation */}
          <div style={getResponsiveStyles(styles.tabsContainer, styles.tabsContainerMobile)}>
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                style={{
                  ...getResponsiveStyles(styles.tab, styles.tabMobile),
                  ...(activeService === index ? styles.tabActive : {})
                }}
              >
                <span style={styles.tabIcon}>
                  {service.icon}
                </span>
                <span style={getResponsiveStyles({}, styles.tabTextMobile)}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div style={getResponsiveStyles(styles.serviceCard, styles.serviceCardMobile)}>
            <div style={getResponsiveStyles(styles.serviceHeader, styles.serviceHeaderMobile)}>
              <div style={styles.serviceIconContainer}>
                {services[activeService].icon}
              </div>
              <div>
                <h2 style={getResponsiveStyles(styles.serviceTitle, styles.serviceTitleMobile)}>
                  {services[activeService].title}
                </h2>
                <p style={getResponsiveStyles(styles.serviceSubtitle, styles.serviceSubtitleMobile)}>
                  {services[activeService].subtitle}
                </p>
              </div>
            </div>

            <div style={getResponsiveStyles(styles.serviceContent, styles.serviceContentMobile)}>
              <div style={getResponsiveStyles(styles.serviceDescription, styles.serviceDescriptionMobile)}>
                <p style={getResponsiveStyles(styles.descriptionText, styles.descriptionTextMobile)}>
                  {services[activeService].description}
                </p>
                
                <div style={styles.featuresContainer}>
                  <h3 style={styles.featuresTitle}>¿Qué incluye?</h3>
                  <ul style={styles.featuresList}>
                    {services[activeService].features.map((feature, idx) => (
                      <li key={idx} style={getResponsiveStyles(styles.featureItem, styles.featureItemMobile)}>
                        <span style={styles.featureBullet}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/contacto" style={getResponsiveStyles(styles.ctaButton, styles.ctaButtonMobile)}>
                  <span>Empezar conversación</span>
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Visual Element */}
              <div style={getResponsiveStyles(styles.visualContainer, styles.visualContainerMobile)}>
                <div style={getResponsiveStyles(styles.visualCard, styles.visualCardMobile)}>
                  {activeService === 0 && (
                    <div style={styles.mockup}>
                      <div style={styles.mockupHeader}>
                        <div style={styles.mockupDots}>
                          <span style={styles.mockupDot}></span>
                          <span style={styles.mockupDot}></span>
                          <span style={styles.mockupDot}></span>
                        </div>
                      </div>
                      <div style={styles.mockupContent}>
                        <div style={styles.mockupPost}>
                          <div style={styles.postMetrics}>+847% engagement</div>
                          <div style={styles.postContent}>Contenido que conecta</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeService === 1 && (
                    <div style={styles.mockup}>
                      <div style={styles.strategyGrid}>
                        <div style={styles.strategyBlock}>Análisis</div>
                        <div style={styles.strategyBlock}>Planificación</div>
                        <div style={styles.strategyBlock}>Ejecución</div>
                        <div style={styles.strategyBlock}>Optimización</div>
                      </div>
                      <div style={styles.strategyFlow}>
                        <div style={styles.flowLine}></div>
                        <div style={styles.flowDot}></div>
                      </div>
                    </div>
                  )}

                  {activeService === 2 && (
                    <div style={styles.mockup}>
                      <div style={styles.growthChart}>
                        <div style={styles.chartBars}>
                          {[30, 45, 60, 75, 85, 95, 100].map((height, i) => (
                            <div key={i} style={{
                              ...styles.chartBar,
                              height: `${height}%`
                            }}></div>
                          ))}
                        </div>
                        <div style={styles.growthMetric}>+340% crecimiento orgánico</div>
                      </div>
                    </div>
                  )}

                  {activeService === 3 && (
                    <div style={styles.mockup}>
                      <div style={styles.auditReport}>
                        <div style={styles.reportScore}>
                          <div style={styles.scoreCircle}>
                            <span>A+</span>
                          </div>
                          <div style={styles.scoreText}>Potencial detectado</div>
                        </div>
                        <div style={styles.reportMetrics}>
                          <div style={styles.metric}>
                            <span style={styles.metricLabel}>SEO Social</span>
                            <div style={styles.metricBar}>
                              <div style={{...styles.metricFill, width: '85%'}}></div>
                            </div>
                          </div>
                          <div style={styles.metric}>
                            <span style={styles.metricLabel}>Engagement</span>
                            <div style={styles.metricBar}>
                              <div style={{...styles.metricFill, width: '60%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={getResponsiveStyles(styles.bottomCTA, styles.bottomCTAMobile)}>
            <h3 style={getResponsiveStyles(styles.ctaTitle, styles.ctaTitleMobile)}>
              Cada proyecto es único
            </h3>
            <p style={getResponsiveStyles(styles.ctaDescription, styles.ctaDescriptionMobile)}>
              No hay soluciones genéricas. Solo estrategias diseñadas específicamente para tu realidad.
            </p>
            <a href="/contacto" style={getResponsiveStyles(styles.finalCTA, styles.finalCTAMobile)}>
              <span>Hablemos de tu proyecto</span>
              <ArrowRight size={18} />
            </a>
          </div>
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

  // Tabs
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '64px',
    flexWrap: 'wrap'
  },
  tabsContainerMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px'
  },

  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  tabMobile: {
    width: '100%',
    maxWidth: '300px',
    justifyContent: 'flex-start',
    padding: '16px 20px'
  },

  tabActive: {
    background: 'rgba(139, 0, 0, 0.15)',
    borderColor: '#8B0000',
    color: 'white'
  },

  tabIcon: {
    opacity: 0.8
  },

  tabTextMobile: {
    display: 'block'
  },

  // Service Card
  serviceCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '48px',
    marginBottom: '64px',
    backdropFilter: 'blur(10px)'
  },
  serviceCardMobile: {
    padding: '24px',
    marginBottom: '40px'
  },

  serviceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '32px'
  },
  serviceHeaderMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px'
  },

  serviceIconContainer: {
    width: '48px',
    height: '48px',
    background: 'rgba(139, 0, 0, 0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8B0000'
  },

  serviceTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 8px 0'
  },
  serviceTitleMobile: {
    fontSize: '1.5rem'
  },

  serviceSubtitle: {
    fontSize: '1.1rem',
    color: '#8B0000',
    margin: 0,
    fontStyle: 'italic'
  },
  serviceSubtitleMobile: {
    fontSize: '1rem'
  },

  serviceContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '48px',
    alignItems: 'start'
  },
  serviceContentMobile: {
    display: 'block'
  },

  serviceDescription: {
    paddingRight: '32px'
  },
  serviceDescriptionMobile: {
    paddingRight: '0',
    marginBottom: '32px'
  },

  descriptionText: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#D1D5DB',
    marginBottom: '32px'
  },
  descriptionTextMobile: {
    fontSize: '16px',
    marginBottom: '24px'
  },

  featuresContainer: {
    marginBottom: '32px'
  },

  featuresTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: 'white'
  },

  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },

  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '12px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  featureItemMobile: {
    fontSize: '15px'
  },

  featureBullet: {
    width: '6px',
    height: '6px',
    background: '#8B0000',
    borderRadius: '50%',
    marginTop: '8px',
    flexShrink: 0
  },

  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#8B0000',
    color: 'white',
    textDecoration: 'none',
    padding: '14px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  ctaButtonMobile: {
    width: '100%',
    justifyContent: 'center'
  },

  // Visual Container
  visualContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  visualContainerMobile: {
    marginTop: '0'
  },

  visualCard: {
    width: '100%',
    maxWidth: '300px'
  },
  visualCardMobile: {
    maxWidth: '100%'
  },

  mockup: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)'
  },

  // Mockup: Presencia Digital
  mockupHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },

  mockupDots: {
    display: 'flex',
    gap: '6px'
  },

  mockupDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.3)',
    display: 'block'
  },

  mockupContent: {
    textAlign: 'center'
  },

  mockupPost: {
    background: 'rgba(139, 0, 0, 0.1)',
    border: '1px solid rgba(139, 0, 0, 0.2)',
    borderRadius: '8px',
    padding: '16px'
  },

  postMetrics: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: '8px'
  },

  postContent: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)'
  },

  // Mockup: Estrategia
  strategyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '16px'
  },

  strategyBlock: {
    background: 'rgba(139, 0, 0, 0.1)',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '12px',
    textAlign: 'center',
    border: '1px solid rgba(139, 0, 0, 0.2)'
  },

  strategyFlow: {
    position: 'relative',
    height: '20px'
  },

  flowLine: {
    width: '100%',
    height: '2px',
    background: 'rgba(139, 0, 0, 0.3)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },

  flowDot: {
    width: '8px',
    height: '8px',
    background: '#8B0000',
    borderRadius: '50%',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  },

  // Mockup: Crecimiento
  growthChart: {
    textAlign: 'center'
  },

  chartBars: {
    display: 'flex',
    alignItems: 'end',
    gap: '4px',
    height: '100px',
    marginBottom: '16px'
  },

  chartBar: {
    flex: 1,
    background: 'linear-gradient(to top, #8B0000, rgba(139, 0, 0, 0.3))',
    borderRadius: '2px 2px 0 0',
    minHeight: '20px'
  },

  growthMetric: {
    fontSize: '14px',
    color: '#8B0000',
    fontWeight: '600'
  },

  // Mockup: Consultoría
  auditReport: {
    textAlign: 'center'
  },

  reportScore: {
    marginBottom: '20px'
  },

  scoreCircle: {
    width: '60px',
    height: '60px',
    border: '3px solid #8B0000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 8px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#8B0000'
  },

  scoreText: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.7)'
  },

  reportMetrics: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  metric: {
    textAlign: 'left'
  },

  metricLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.8)',
    display: 'block',
    marginBottom: '4px'
  },

  metricBar: {
    height: '6px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden'
  },

  metricFill: {
    height: '100%',
    background: '#8B0000',
    borderRadius: '3px',
    transition: 'width 1s ease'
  },

  // Bottom CTA
  bottomCTA: {
    textAlign: 'center',
    padding: '48px 32px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)'
  },
  bottomCTAMobile: {
    padding: '32px 20px'
  },

  ctaTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  ctaTitleMobile: {
    fontSize: '1.5rem'
  },

  ctaDescription: {
    fontSize: '16px',
    color: '#D1D5DB',
    marginBottom: '24px',
    maxWidth: '500px',
    margin: '0 auto 24px auto',
    lineHeight: '1.6'
  },
  ctaDescriptionMobile: {
    fontSize: '15px',
    margin: '0 0 24px 0'
  },

  finalCTA: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#8B0000',
    color: 'white',
    textDecoration: 'none',
    padding: '14px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  finalCTAMobile: {
    width: '100%',
    justifyContent: 'center'
  }
};

export default Servicios;