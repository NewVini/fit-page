import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Zap, Award, Users, Clock, BarChart3 } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const benefits = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Algoritmos avançados analisam seu perfil e criam treinos únicos para seus objetivos.",
      color: "#ff6b35"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Metodologia comprovada que acelera seus resultados em até 3x comparado aos métodos tradicionais.",
      color: "#ffd700"
    },
    {
      icon: Award,
      title: "Certificação Elite",
      description: "Treinadores certificados internacionalmente com especialização em alta performance.",
      color: "#00d4ff"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com milhares de pessoas que compartilham os mesmos objetivos.",
      color: "#7c3aed"
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Treine quando quiser, onde quiser. Acesso 24/7 aos nossos equipamentos premium.",
      color: "#10b981"
    },
    {
      icon: BarChart3,
      title: "Análise Avançada",
      description: "Acompanhe seu progresso com métricas detalhadas e relatórios inteligentes.",
      color: "#f59e0b"
    }
  ]

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="about-section section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="about-content"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="section-header">
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              Por que escolher a 
              <span className="gradient-text"> FitMotion</span>?
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              variants={itemVariants}
            >
              Revolucionamos o conceito de academia com tecnologia de ponta, 
              metodologias científicas e um ambiente que inspira transformação.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="stats-grid"
            variants={itemVariants}
          >
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <div className="stat-icon">
                <div className="pulse-ring"></div>
                <span className="stat-number">98%</span>
              </div>
              <h4>Taxa de Satisfação</h4>
              <p>Dos nossos alunos alcançam seus objetivos</p>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <div className="stat-icon">
                <div className="pulse-ring"></div>
                <span className="stat-number">3X</span>
              </div>
              <h4>Resultados Mais Rápidos</h4>
              <p>Comparado aos métodos tradicionais</p>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <div className="stat-icon">
                <div className="pulse-ring"></div>
                <span className="stat-number">15+</span>
              </div>
              <h4>Anos de Experiência</h4>
              <p>Em transformação corporal e wellness</p>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                variants={cardVariants}
                whileHover="hover"
                style={{ '--accent-color': benefit.color }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="benefit-shine"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="about-cta"
            variants={itemVariants}
          >
            <motion.h3
              variants={itemVariants}
            >
              Pronto para começar sua <span className="gradient-text">transformação</span>?
            </motion.h3>
            <motion.div 
              className="cta-buttons"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Avaliação Gratuita
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer Planos
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%);
        }

        .about-content {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.5s;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-icon {
          position: relative;
          margin-bottom: 1rem;
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border: 2px solid var(--primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary);
          position: relative;
          z-index: 1;
        }

        .stat-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .stat-card p {
          color: var(--text-gray);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: var(--accent-color);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .benefit-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .benefit-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .benefit-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          transform: rotate(45deg);
          transition: all 0.6s;
          opacity: 0;
        }

        .benefit-card:hover .benefit-shine {
          animation: shine 0.6s ease-out;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
        }

        .about-cta {
          text-align: center;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .about-cta h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .benefit-card {
            padding: 1.5rem;
          }

          .benefit-card h3 {
            font-size: 1.2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .about-cta {
            padding: 2rem 1rem;
          }

          .about-cta h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            padding: 1rem 0;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .stat-card {
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .benefit-card {
            padding: 1rem;
          }

          .benefit-card h3 {
            font-size: 1.1rem;
          }

          .benefit-card p {
            font-size: 0.9rem;
          }

          .about-cta {
            padding: 1.5rem 1rem;
          }

          .about-cta h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About 