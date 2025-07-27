import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  ChevronUp,
  Heart,
  Dumbbell
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: {
      title: "FitMotion",
      links: [
        { label: "Sobre Nós", href: "#about" },
        { label: "Nossa História", href: "#" },
        { label: "Equipe", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Imprensa", href: "#" }
      ]
    },
    services: {
      title: "Serviços",
      links: [
        { label: "Planos de Treino", href: "#services" },
        { label: "Personal Trainer", href: "#" },
        { label: "Análise 3D", href: "#technology" },
        { label: "Nutrição", href: "#" },
        { label: "Fisioterapia", href: "#" }
      ]
    },
    support: {
      title: "Suporte",
      links: [
        { label: "Central de Ajuda", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Contato", href: "#contact" },
        { label: "WhatsApp", href: "#" },
        { label: "Suporte Técnico", href: "#" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Privacidade", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "LGPD", href: "#" },
        { label: "Cancelamento", href: "#" }
      ]
    }
  }

  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://instagram.com/fitmotion", 
      color: "#E4405F",
      label: "@fitmotion" 
    },
    { 
      icon: Facebook, 
      url: "https://facebook.com/fitmotion", 
      color: "#1877F2",
      label: "FitMotion Academia" 
    },
    { 
      icon: Youtube, 
      url: "https://youtube.com/fitmotion", 
      color: "#FF0000",
      label: "FitMotion TV" 
    },
    { 
      icon: Twitter, 
      url: "https://twitter.com/fitmotion", 
      color: "#1DA1F2",
      label: "@fitmotion" 
    },
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/company/fitmotion", 
      color: "#0A66C2",
      label: "FitMotion Company" 
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: "Av. Paulista, 1000 - São Paulo/SP"
    },
    {
      icon: Phone,
      text: "(11) 9999-9999"
    },
    {
      icon: Mail,
      text: "contato@fitmotion.com.br"
    },
    {
      icon: Clock,
      text: "Seg-Sex: 5h-23h | Sáb-Dom: 6h-20h"
    }
  ]

  const awards = [
    "Melhor Academia 2023",
    "Inovação em Fitness",
    "Top 10 Gyms Brasil",
    "Certificação ISO 9001"
  ]

  return (
    <footer className="footer">
      {/* Scroll to top button */}
      <motion.button
        className="scroll-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="brand-logo">
                <Dumbbell size={32} />
                <span>FitMotion</span>
              </div>
              <p className="brand-description">
                Transformando vidas através da tecnologia 3D e metodologias 
                científicas. Mais que uma academia, uma revolução no fitness.
              </p>
              
              <div className="contact-quick">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <item.icon size={16} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="awards-section">
                <h4>Reconhecimentos</h4>
                <div className="awards-list">
                  {awards.map((award, index) => (
                    <span key={index} className="award-badge">
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([key, section], index) => (
              <motion.div 
                key={key}
                className="footer-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a 
                        href={link.href}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Media & Newsletter */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="social-content">
              <h3>Conecte-se Conosco</h3>
              <p>Siga nossas redes sociais para dicas, transformações e novidades</p>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: social.color,
                      borderColor: social.color
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Receba dicas exclusivas e ofertas especiais</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  required
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscrever
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © 2024 FitMotion. Todos os direitos reservados. 
                Feito com <Heart size={16} className="heart" /> para transformar vidas.
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#">Termos de Uso</a>
              <span>•</span>
              <a href="#">Privacidade</a>
              <span>•</span>
              <a href="#">Cookies</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>

          <div className="tech-badge">
            <span>Powered by React + Vite + Three.js</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%);
        }

        .scroll-top {
          position: absolute;
          top: -25px;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
          z-index: 10;
        }

        .footer-main {
          padding: 4rem 0 2rem 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          padding-right: 2rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .brand-logo span {
          font-size: 1.8rem;
          font-weight: 900;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-description {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-quick {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        .contact-item svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        .awards-section h4 {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .awards-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .award-badge {
          background: rgba(255, 107, 53, 0.1);
          color: var(--primary);
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .footer-section h3 {
          color: var(--text-light);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          margin-bottom: 0.8rem;
        }

        .footer-section a {
          color: var(--text-gray);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-section a:hover {
          color: var(--primary);
        }

        .footer-social {
          grid-column: 1 / -1;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .social-content h3 {
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .social-content p {
          color: var(--text-gray);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
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

        .newsletter h4 {
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .newsletter p {
          color: var(--text-gray);
          margin-bottom: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-form input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.8rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .newsletter-form input::placeholder {
          color: var(--text-gray);
        }

        .newsletter-form button {
          background: var(--gradient-primary);
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .copyright {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        .copyright .heart {
          color: #ff0000;
          display: inline;
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
        }

        .footer-bottom-links a {
          color: var(--text-gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--primary);
        }

        .footer-bottom-links span {
          color: var(--text-gray);
        }

        .tech-badge {
          text-align: center;
          color: var(--text-gray);
          font-size: 0.8rem;
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .footer-content {
            padding: 3rem 0;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
            padding-right: 0;
            margin-bottom: 2rem;
          }

          .footer-brand h3 {
            font-size: 1.8rem;
          }

          .footer-brand p {
            font-size: 0.9rem;
          }

          .footer-social {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links h4 {
            font-size: 1.1rem;
          }

          .footer-links a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 2rem 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand h3 {
            font-size: 1.6rem;
          }

          .footer-brand p {
            font-size: 0.8rem;
          }

          .footer-links h4 {
            font-size: 1rem;
          }

          .footer-links a {
            font-size: 0.8rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 1rem;
          }

          .newsletter-form input {
            width: 100%;
          }

          .social-links {
            justify-content: center;
            gap: 1rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .scroll-top {
            right: 1rem;
            bottom: 1rem;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 1.5rem 0;
          }

          .footer-brand h3 {
            font-size: 1.4rem;
          }

          .footer-brand p {
            font-size: 0.75rem;
          }

          .footer-links h4 {
            font-size: 0.9rem;
          }

          .footer-links a {
            font-size: 0.75rem;
          }

          .newsletter-form {
            gap: 0.8rem;
          }

          .newsletter-form input {
            padding: 0.8rem;
            font-size: 0.9rem;
          }

          .social-links {
            gap: 0.8rem;
          }

          .social-link {
            width: 35px;
            height: 35px;
          }

          .copyright {
            font-size: 0.8rem;
          }

          .footer-bottom-links {
            font-size: 0.8rem;
            gap: 0.8rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer 