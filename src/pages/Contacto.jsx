import React, { useState } from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    proyecto: '',
    presupuesto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el email usando mailto (simple y funciona siempre)
    const subject = `Nuevo contacto REDFORD - ${formData.nombre}`;
    const body = `
NUEVO CONTACTO DESDE WEB:

Nombre: ${formData.nombre}
Email: ${formData.email}
Empresa: ${formData.empresa}
Tipo de proyecto: ${formData.proyecto}
Presupuesto orientativo: ${formData.presupuesto}

MENSAJE:
${formData.mensaje}

---
Enviado desde redford-website
    `;

    const mailtoLink = `mailto:elisademiguel777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de email
    window.location.href = mailtoLink;
    
    // Simular envío y mostrar confirmación
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          proyecto: '',
          presupuesto: '',
          mensaje: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            ¿Hablamos<span style={styles.highlight}>?</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Tu próximo caso de éxito comienza con una conversación
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.contactGrid}>
            
            {/* Formulario */}
            <div style={styles.formContainer}>
              <h2 style={styles.formTitle}>Cuéntanos tu proyecto</h2>
              <p style={styles.formSubtitle}>
                Cada proyecto es único. Cuéntanos qué necesitas y te haremos una propuesta personalizada.
              </p>

              {submitted ? (
                <div style={styles.successMessage}>
                  <div style={styles.successIcon}>✓</div>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Te responderemos en menos de 48 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Nombre *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Empresa/Marca</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Nombre de tu marca o empresa"
                    />
                  </div>

                  <div style={styles.formRow}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Tipo de proyecto</label>
                      <select
                        name="proyecto"
                        value={formData.proyecto}
                        onChange={handleChange}
                        style={styles.select}
                      >
                        <option value="">Selecciona...</option>
                        <option value="redes-sociales">Gestión de redes sociales</option>
                        <option value="estrategia">Estrategia de contenido</option>
                        <option value="crecimiento">Crecimiento orgánico</option>
                        <option value="consultoria">Consultoría digital</option>
                        <option value="todo">Necesito todo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Presupuesto orientativo</label>
                      <select
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        style={styles.select}
                      >
                        <option value="">Selecciona...</option>
                        <option value="<500">Menos de 500€</option>
                        <option value="500-1000">500€ - 1.000€</option>
                        <option value="1000-2500">1.000€ - 2.500€</option>
                        <option value=">2500">Más de 2.500€</option>
                        <option value="hablamos">Prefiero hablar</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Cuéntanos tu proyecto *</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={styles.textarea}
                      placeholder="Describe tu proyecto, objetivos, situación actual... Cuanto más nos cuentes, mejor podremos ayudarte."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                      ...styles.submitButton,
                      ...(isSubmitting ? styles.submitButtonDisabled : {})
                    }}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar proyecto
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info de contacto */}
            <div style={styles.contactInfo}>
              <h2 style={styles.contactTitle}>Otras formas de contactar</h2>
              
              <div style={styles.contactMethods}>
                
                <a 
                  href="https://wa.me/34644489930" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.contactMethod}
                >
                  <Phone size={24} color="#25D366" />
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+34 644 48 99 30</p>
                    <span>Respuesta inmediata</span>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/redford_creativ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.contactMethod}
                >
                  <Instagram size={24} color="#E4405F" />
                  <div>
                    <h4>Instagram</h4>
                    <p>@redford_creativ</p>
                    <span>DM siempre abierto</span>
                  </div>
                </a>

                <a 
                  href="mailto:elisademiguel777@gmail.com"
                  style={styles.contactMethod}
                >
                  <Mail size={24} color="#8B0000" />
                  <div>
                    <h4>Email directo</h4>
                    <p>elisademiguel777@gmail.com</p>
                    <span>Para proyectos formales</span>
                  </div>
                </a>

              </div>

              <div style={styles.infoCards}>
                <div style={styles.infoCard}>
                  <Clock size={20} color="#8B0000" />
                  <div>
                    <h4>Tiempo de respuesta</h4>
                    <p>Menos de 48 horas</p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <MapPin size={20} color="#8B0000" />
                  <div>
                    <h4>Ubicación</h4>
                    <p>España (remoto)</p>
                  </div>
                </div>
              </div>

              <div style={styles.note}>
                <h4>Antes de contactar:</h4>
                <ul>
                  <li>Ten claro qué quieres conseguir</li>
                  <li>Prepara info sobre tu marca actual</li>
                  <li>Define tu presupuesto aproximado</li>
                  <li>Piensa en tus objetivos a 3-6 meses</li>
                </ul>
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
    maxWidth: '1400px',
    margin: '0 auto'
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '80px'
  },

  // Formulario
  formContainer: {
    background: 'rgba(17, 24, 39, 0.3)',
    padding: '48px',
    borderRadius: '16px',
    border: '1px solid rgba(139, 0, 0, 0.3)'
  },

  formTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#8B0000'
  },

  formSubtitle: {
    fontSize: '16px',
    color: '#D1D5DB',
    marginBottom: '32px',
    lineHeight: '1.6'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },

  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },

  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#8B0000'
  },

  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #374151',
    background: '#111827',
    color: 'white',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  },

  select: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #374151',
    background: '#111827',
    color: 'white',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  },

  textarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #374151',
    background: '#111827',
    color: 'white',
    fontSize: '16px',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease'
  },

  submitButton: {
    background: 'linear-gradient(135deg, #8B0000, #A00000)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    marginTop: '8px'
  },

  submitButtonDisabled: {
    background: '#374151',
    cursor: 'not-allowed'
  },

  successMessage: {
    textAlign: 'center',
    padding: '48px',
    color: '#8B0000'
  },

  successIcon: {
    fontSize: '48px',
    marginBottom: '16px'
  },

  // Contact Info
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },

  contactTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: '8px'
  },

  contactMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },

  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    background: 'rgba(17, 24, 39, 0.3)',
    borderRadius: '12px',
    border: '1px solid #374151',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.3s ease'
  },

  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },

  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'rgba(139, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 0, 0, 0.3)'
  },

  note: {
    background: 'rgba(139, 0, 0, 0.05)',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid rgba(139, 0, 0, 0.2)'
  },

  // Responsive
  '@media (max-width: 768px)': {
    contactGrid: {
      gridTemplateColumns: '1fr',
      gap: '40px'
    },
    
    formContainer: {
      padding: '32px 24px'
    },
    
    formRow: {
      gridTemplateColumns: '1fr',
      gap: '16px'
    }
  }
};

export default Contacto;