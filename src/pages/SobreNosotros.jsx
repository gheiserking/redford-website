import React from 'react';

const SobreNosotros = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Conoce a <span style={styles.highlight}>REDFORD</span>
          </h1>
          <p style={styles.heroSubtitle}>
            La fuerza silenciosa detrás del crecimiento digital
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={window.innerWidth <= 768 ? styles.storyGridMobile : styles.storyGrid}>
            {/* Imagen del equipo */}
            <div style={styles.imageContainer}>
              <div style={window.innerWidth <= 768 ? styles.teamImageMobile : styles.teamImage}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Equipo REDFORD trabajando"
                  style={styles.image}
                />
              </div>
            </div>
            
            {/* Historia */}
            <div style={window.innerWidth <= 768 ? styles.storyContentMobile : styles.storyContent}>
              <h2 style={styles.sectionTitle}>Nuestra historia</h2>
              <div style={styles.storyText}>
                <p style={styles.paragraph}>
                  <strong>Todo comenzó en 2024</strong> cuando un grupo de especialistas digitales se cansó de ver cómo las grandes agencias prometían el mundo y entregaban ruido. Marcas perdidas entre estrategias genéricas, creators frustrados por falta de resultados reales.
                </p>
                
                <p style={styles.paragraph}>
                  <strong>La revelación llegó</strong> trabajando con una marca que había gastado miles en "expertos" sin ver crecimiento. En 30 días, aplicando nuestra filosofía de trabajo silencioso y estrategia personalizada, conseguimos +300% de engagement y conversiones reales.
                </p>
                
                <p style={styles.paragraph}>
                  <strong>Así nació REDFORD.</strong> No como otra agencia más, sino como la respuesta a todo lo que estaba mal en el marketing digital. Un equipo compacto, especializado, efectivo. Sin ruido, con resultados.
                </p>
                
                <p style={styles.paragraphHighlight}>
                  Cada proyecto que tocamos se convierte en un caso de éxito. No porque seamos mágicos, sino porque entendemos que detrás de cada marca hay personas reales con sueños reales.
                </p>
                
                <p style={styles.paragraph}>
                  <strong>Hoy seguimos siendo los mismos:</strong> un grupo de personas apasionadas por hacer crecer marcas auténticas. Trabajamos desde las sombras para que tu luz brille más fuerte que nunca.
                </p>
              </div>
            </div>
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
    padding: window.innerWidth <= 768 ? '80px 24px 60px' : '120px 24px 80px',
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
    padding: window.innerWidth <= 768 ? '60px 24px' : '80px 24px'
  },

  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },

  sectionTitle: {
    fontSize: 'clamp(2rem, 6vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
    color: '#8B0000'
  },

  // Historia Desktop
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '64px',
    alignItems: 'center'
  },

  // Historia Mobile
  storyGridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    textAlign: 'center'
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  teamImage: {
    width: '100%',
    maxWidth: '400px',
    aspectRatio: '4/3',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(139, 0, 0, 0.3)'
  },

  teamImageMobile: {
    width: '100%',
    maxWidth: '300px',
    aspectRatio: '4/3',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(139, 0, 0, 0.3)'
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%) contrast(1.2) brightness(0.8)',
    transition: 'all 0.3s ease'
  },

  storyContent: {
    paddingLeft: '32px'
  },

  storyContentMobile: {
    paddingLeft: '0'
  },

  storyText: {
    fontSize: window.innerWidth <= 768 ? '16px' : '18px',
    lineHeight: '1.8'
  },

  paragraph: {
    marginBottom: window.innerWidth <= 768 ? '24px' : '28px',
    color: '#D1D5DB'
  },

  paragraphHighlight: {
    marginBottom: window.innerWidth <= 768 ? '24px' : '28px',
    color: '#8B0000',
    fontWeight: '600',
    fontSize: window.innerWidth <= 768 ? '18px' : '20px',
    padding: window.innerWidth <= 768 ? '24px 20px' : '32px',
    background: 'rgba(139, 0, 0, 0.1)',
    borderLeft: '4px solid #8B0000',
    borderRadius: '8px',
    fontStyle: 'italic'
  }
};

export default SobreNosotros;