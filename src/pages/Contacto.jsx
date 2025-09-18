import React, { useState } from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, Send, ArrowLeft, CheckCircle } from 'lucide-react';

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

    // Web3Forms - Envío directo sin mailto
    const formDataToSend = new FormData();
    
    // CAMBIA ESTE ACCESS KEY por el tuyo de web3forms.com
    formDataToSend.append("access_key", "1d66f10c-e1b4-4129-8537-5eb4bcbe96f2");
    formDataToSend.append("name", formData.nombre);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", `Nuevo contacto REDFORD - ${formData.nombre}`);
    formDataToSend.append("message", `
NUEVO CONTACTO DESDE WEB:

Nombre: ${formData.nombre}
Email: ${formData.email}
Empresa: ${formData.empresa || 'No especificada'}
Tipo de proyecto: ${formData.proyecto || 'No especificado'}
Presupuesto orientativo: ${formData.presupuesto || 'No especificado'}

MENSAJE:
${formData.mensaje}

---
Enviado desde redford-website
    `);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          proyecto: '',
          presupuesto: '',
          mensaje: ''
        });
      } else {
        console.log("Error", data);
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Revisa tu conexión a internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      proyecto: '',
      presupuesto: '',
      mensaje: ''
    });
    setSubmitted(false);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={isMobile ? styles.heroMobile : styles.hero}>
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
      <section style={isMobile ? styles.sectionMobile : styles.section}>
        <div style={styles.sectionContainer}>
          <div style={isMobile ? styles.contactGridMobile : styles.contactGrid}>
            
            {/* Formulario */}
            <div style={isMobile ? styles.formContainerMobile : styles.formContainer}>
              <h2 style={styles.formTitle}>Cuéntanos tu proyecto</h2>
              <p style={styles.formSubtitle}>
                Cada proyecto es único. Cuéntanos qué necesitas y te haremos una propuesta personalizada.
              </p>

              {submitted ? (
                <div style={styles.successMessage}>
                  <CheckCircle size={64} color="#8B0000" style={styles.successIcon} />
                  <h3 style={styles.successTitle}>¡Gracias por contactarnos!</h3>
                  <p style={styles.successText}>
                    Tu mensaje se ha enviado correctamente. Te responderemos en menos de 72 horas.
                  </p>
                  <div style={styles.successButtons}>
                    <button 
                      onClick={resetForm}
                      style={styles.backButton}
                    >
                      <ArrowLeft size={20} />
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <div style={styles.form}>
                  <div style={isMobile ? styles.formRowMobile : styles.formRow}>
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

                  <div style={isMobile ? styles.formRowMobile : styles.formRow}>
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
                    onClick={handleSubmit}
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
                </div>
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
                    <h4 style={styles.contactMethodTitle}>WhatsApp</h4>
                    <p style={styles.contactMethodText}>+34 644 48 99 30</p>
                    <span style={styles.contactMethodSubtext}>Respuesta inmediata</span>
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
                    <h4 style={styles.contactMethodTitle}>Instagram</h4>
                    <p style={styles.contactMethodText}>@redford_creativ</p>
                    <span style={styles.contactMethodSubtext}>DM siempre abierto</span>
                  </div>
                </a>

                <a 
                  href="mailto:elisademiguel777@gmail.com"
                  style={styles.contactMethod}
                >
                  <Mail size={24} color="#8B0000" />
                  <div>
                    <h4 style={styles.contactMethodTitle}>Email directo</h4>
                    <p style={styles.contactMethodText}>elisademiguel777@gmail.com</p>
                    <span style={styles.contactMethodSubtext}>Para proyectos formales</span>
                  </div>
                </a>

              </div>

              <div style={styles.infoCards}>
                <div style={styles.infoCard}>
                  <Clock size={20} color="#8B0000" />
                  <div>
                    <h4 style={styles.infoCardTitle}>Tiempo de respuesta</h4>
                    <p style={styles.infoCardText}>Menos de 72 horas</p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <MapPin size={20} color="#8B0000" />
                  <div>
                    <h4 style={styles.infoCardTitle}>Ubicación</h4>
                    <p style={styles.infoCardText}>España (remoto)</p>
                  </div>
                </div>
              </div>

              <div style={styles.note}>
                <h4 style={styles.noteTitle}>Antes de contactar:</h4>
                <ul style={styles.noteList}>
                  <li style={styles.noteItem}>Ten claro qué quieres conseguir</li>
                  <li style={styles.noteItem}>Prepara info sobre tu marca actual</li>
                  <li style={styles.noteItem}>Define tu presupuesto aproximado</li>
                  <li style={styles.noteItem}>Piensa en tus objetivos a 3-6 meses</li>
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

  // Hero Desktop
  hero: {
    padding: '120px 24px 80px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #000000, #1a0000)'
  },

  // Hero Mobile
  heroMobile: {
    padding: '80px 24px 60px',
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

  // Section Desktop
  section: {
    padding: '80px 24px'
  },

  // Section Mobile
  sectionMobile: {
    padding: '60px 24px'
  },

  sectionContainer: {
    maxWidth: '1400px',
    margin: '0 auto'
  },

  // Grid Desktop
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '80px'
  },

  // Grid Mobile
  contactGridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px'
  },

  // Formulario Desktop
  formContainer: {
    background: 'rgba(17, 24, 39, 0.3)',
    padding: '48px',
    borderRadius: '16px',
    border: '1px solid rgba(139, 0, 0, 0.3)'
  },

  // Formulario Mobile
  formContainerMobile: {
    background: 'rgba(17, 24, 39, 0.3)',
    padding: '32px 24px',
    borderRadius: '16px',
    border: '1px solid rgba(139, 0, 0, 0.3)'
  },

  formTitle: {
    fontSize: window.innerWidth <= 768 ? '24px' : '28px',
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

  // Form Row Desktop
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },

  // Form Row Mobile
  formRowMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
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

  // Success Message
  successMessage: {
    textAlign: 'center',
    padding: '48px 24px',
    background: 'rgba(139, 0, 0, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(139, 0, 0, 0.2)'
  },

  successIcon: {
    marginBottom: '24px'
  },

  successTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: '16px'
  },

  successText: {
    fontSize: '16px',
    color: '#D1D5DB',
    marginBottom: '32px',
    lineHeight: '1.6'
  },

  successButtons: {
    display: 'flex',
    justifyContent: 'center'
  },

  backButton: {
    background: 'transparent',
    color: '#8B0000',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid #8B0000',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  },

  // Contact Info
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },

  contactTitle: {
    fontSize: window.innerWidth <= 768 ? '20px' : '24px',
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

  contactMethodTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: 'white'
  },

  contactMethodText: {
    fontSize: '14px',
    margin: '0 0 4px 0',
    color: '#D1D5DB'
  },

  contactMethodSubtext: {
    fontSize: '12px',
    color: '#9CA3AF'
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

  infoCardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: 'white'
  },

  infoCardText: {
    fontSize: '14px',
    margin: '0',
    color: '#D1D5DB'
  },

  note: {
    background: 'rgba(139, 0, 0, 0.05)',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid rgba(139, 0, 0, 0.2)'
  },

  noteTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#8B0000'
  },

  noteList: {
    margin: '0',
    paddingLeft: '20px'
  },

  noteItem: {
    marginBottom: '8px',
    color: '#D1D5DB',
    fontSize: '14px'
  }
};

export default Contacto;