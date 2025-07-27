import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Calendar,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      info: "Av. Paulista, 1000",
      subInfo: "São Paulo - SP, 01310-100",
      color: "#ff6b35"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      subInfo: "WhatsApp disponível 24h",
      color: "#10b981"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@fitmotion.com.br",
      subInfo: "Resposta em até 2h",
      color: "#06b6d4"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 5h às 23h",
      subInfo: "Sábado e Domingo: 6h às 20h",
      color: "#7c3aed"
    }
  ]

  const socialLinks = [
    { icon: Instagram, url: "#", color: "#E4405F" },
    { icon: Facebook, url: "#", color: "#1877F2" },
    { icon: Youtube, url: "#", color: "#FF0000" },
    { icon: Twitter, url: "#", color: "#1DA1F2" }
  ]

  const goals = [
    "Perder peso",
    "Ganhar massa muscular", 
    "Melhorar condicionamento",
    "Reabilitação",
    "Bem-estar geral",
    "Competição esportiva"
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      goal: '',
      message: '',
      preferredTime: ''
    })
    setIsSubmitting(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="contact-content"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="section-subtitle">
              Pronto para começar sua transformação? Fale conosco e descubra 
              como podemos ajudar você a alcançar seus objetivos.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Formulário */}
            <motion.div 
              className="form-section"
              variants={cardVariants}
            >
              <div className="form-container">
                <h3>Agende sua Avaliação Gratuita</h3>
                <p>Preencha o formulário e nossa equipe entrará em contato</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Qual seu objetivo?</option>
                        {goals.map((goal, index) => (
                          <option key={index} value={goal}>{goal}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Horário preferido?</option>
                        <option value="manha">Manhã (6h-12h)</option>
                        <option value="tarde">Tarde (12h-18h)</option>
                        <option value="noite">Noite (18h-23h)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Agendar Avaliação Gratuita</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="form-footer">
                  <p>Ou agende diretamente:</p>
                  <div className="quick-actions">
                    <motion.button
                      className="quick-btn whatsapp"
                      whileHover={{ scale: 1.05 }}
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </motion.button>
                    <motion.button
                      className="quick-btn calendar"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={18} />
                      <span>Agenda Online</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div 
              className="info-section"
              variants={containerVariants}
            >
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    style={{ '--accent-color': item.color }}
                  >
                    <div className="info-icon">
                      <item.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p className="info-main">{item.info}</p>
                      <p className="info-sub">{item.subInfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mapa */}
              <motion.div 
                className="map-container"
                variants={cardVariants}
              >
                <div className="map-placeholder">
                  <MapPin size={48} />
                  <h4>Nossa Localização</h4>
                  <p>No coração da Paulista</p>
                  <button className="map-btn">Ver no Google Maps</button>
                </div>
              </motion.div>

              {/* Redes Sociais */}
              <motion.div 
                className="social-section"
                variants={cardVariants}
              >
                <h4>Siga-nos</h4>
                <p>Acompanhe dicas, transformações e novidades</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: social.color
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-content {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
        }

        .form-container h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .form-container > p {
          color: var(--text-gray);
          margin-bottom: 2rem;
        }

        .contact-form {
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          color: var(--text-light);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-gray);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          padding: 1.2rem;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-footer {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-footer p {
          color: var(--text-gray);
          margin-bottom: 1rem;
        }

        .quick-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .quick-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-light);
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .quick-btn.whatsapp:hover {
          background: #25D366;
          border-color: #25D366;
        }

        .quick-btn.calendar:hover {
          background: var(--primary);
          border-color: var(--primary);
        }

        .contact-info {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--accent-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .info-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 0.3rem;
        }

        .info-main {
          color: var(--text-light);
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        .info-sub {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        .map-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .map-placeholder {
          color: var(--text-gray);
        }

        .map-placeholder h4 {
          color: var(--text-light);
          margin: 1rem 0 0.5rem 0;
        }

        .map-placeholder p {
          margin-bottom: 1.5rem;
        }

        .map-btn {
          background: var(--gradient-primary);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }

        .social-section {
          text-align: center;
        }

        .social-section h4 {
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .social-section p {
          color: var(--text-gray);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .contact-content {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .contact-info {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            padding: 1.5rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .contact-info {
            padding: 1.5rem;
          }

          .quick-actions {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .contact-grid {
            gap: 2rem;
          }

          .social-links {
            gap: 0.8rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .contact-content {
            padding: 1rem 0;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .contact-form {
            padding: 1rem;
          }

          .contact-info {
            padding: 1rem;
          }

          .form-row {
            gap: 0.8rem;
          }

          .form-group input,
          .form-group textarea {
            padding: 0.8rem;
            font-size: 0.9rem;
          }

          .social-links {
            gap: 0.6rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact 