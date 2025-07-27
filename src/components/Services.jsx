import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Dumbbell, Heart, Brain, Zap } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })


  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 89,
      period: 'mês',
      features: [
        'Acesso à academia 24/7',
        'Plano de treino personalizado',
        'Avaliação física inicial',
        'App mobile FitMotion',
        'Suporte via chat',
        'Aulas em grupo'
      ],
      color: '#10b981'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 149,
      period: 'mês',
      features: [
        'Tudo do plano Básico',
        'Personal trainer dedicado',
        'Análise corporal 3D mensal',
        'Aulas em grupo ilimitadas',
        'Nutricionista disponível',
        'Relatórios de progresso'
      ],
      color: '#ff6b35'
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 249,
      period: 'mês',
      features: [
        'Tudo do plano Premium',
        'Sessões 1-on-1 ilimitadas',
        'Análise corporal 3D semanal',
        'Plano nutricional personalizado',
        'Suplementação incluída',
        'Spa e recovery center'
      ],
      color: '#7c3aed'
    }
  ]

  const services = [
    {
      icon: Dumbbell,
      title: 'Musculação Inteligente',
      description: 'Equipamentos conectados que ajustam automaticamente pesos e repetições baseados no seu progresso.',
      color: '#ff6b35'
    },
    {
      icon: Heart,
      title: 'Cardio Adaptativo',
      description: 'Treinos cardiovasculares que se adaptam à sua frequência cardíaca em tempo real.',
      color: '#e11d48'
    },
    {
      icon: Brain,
      title: 'Treinamento Neural',
      description: 'Exercícios que combinam movimento físico com estímulos cognitivos para máxima eficiência.',
      color: '#7c3aed'
    },
    {
      icon: Zap,
      title: 'Recovery Tech',
      description: 'Tecnologias avançadas de recuperação: crioterapia, compressão pneumática e muito mais.',
      color: '#06b6d4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="services-section section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="services-content"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="section-subtitle">
              Tecnologia de ponta combinada com metodologias comprovadas 
              para acelerar seus resultados.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="services-grid"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{ '--service-color': service.color }}
              >
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-glow"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Plans Section */}
          <motion.div 
            className="plans-section"
            variants={itemVariants}
          >
            <h3 className="plans-title">
              Escolha o plano ideal para sua <span className="gradient-text">jornada</span>
            </h3>
            
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className="plan-cube-container"
                  variants={cardVariants}
                  style={{ 
                    '--plan-color': plan.color,
                    '--card-index': index,
                  }}
                >
                  <motion.div
                    className="plan-cube"
                    animate={{
                      rotateY: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 1
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Face Frontal */}
                    <div className="cube-face front">
                      <div className="plan-header">
                        <h4>{plan.name}</h4>
                        <div className="plan-price">
                          <span className="currency">R$</span>
                          <span className="price">{plan.price}</span>
                          <span className="period">/{plan.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Face Direita */}
                    <div className="cube-face right">
                      <div className="face-content">
                        <h4>Recursos</h4>
                        <div className="features-list">
                          {plan.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="feature">
                              <Check size={14} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Face Traseira */}
                    <div className="cube-face back">
                      <div className="face-content">
                        <h4>Estatísticas</h4>
                        <div className="stats">
                          <div className="stat">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Satisfação</span>
                          </div>
                          <div className="stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Acesso</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Face Esquerda */}
                    <div className="cube-face left">
                      <div className="face-content">
                        <h4>Benefícios</h4>
                        <div className="features-list">
                          {plan.features.slice(3, 6).map((feature, idx) => (
                            <div key={idx} className="feature">
                              <Check size={14} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Face Superior */}
                    <div className="cube-face top">
                      <div className="face-content logo-face">
                        <div className="plan-logo">
                          <Dumbbell size={32} />
                          <span>{plan.name}</span>
                        </div>
                      </div>
                    </div>

                    {/* Face Inferior */}
                    <div className="cube-face bottom">
                      <div className="face-content">
                        <div className="guarantee">
                          <h4>Garantia</h4>
                          <p>30 dias</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="plans-cta"
              variants={itemVariants}
            >
              <p>Todos os planos incluem <strong>7 dias grátis</strong> para testar</p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Começar Período Gratuito
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .services-section {
          background: radial-gradient(ellipse at top, #1a1a1a 0%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .services-content {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .service-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--service-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: var(--service-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          color: white;
          position: relative;
          z-index: 2;
        }

        .service-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .service-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .service-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--service-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover .service-glow {
          opacity: 0.1;
        }

        .plans-section {
          margin-top: 5rem;
        }

        .plans-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
          perspective: 1500px;
          perspective-origin: center center;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .plan-cube-container {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .plan-cube {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          font-size: 0.85rem;
        }

        /* Posicionamento das faces do cubo */
        .cube-face.front {
          transform: translateZ(100px);
        }

        .cube-face.back {
          transform: translateZ(-100px) rotateY(180deg);
        }

        .cube-face.right {
          transform: rotateY(90deg) translateZ(100px);
        }

        .cube-face.left {
          transform: rotateY(-90deg) translateZ(100px);
        }

        .cube-face.top {
          transform: rotateX(90deg) translateZ(100px);
        }

        .cube-face.bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }

        /* Efeitos específicos das faces */
        .cube-face.front {
          border-color: var(--plan-color);
        }

        .cube-face.right {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.1) 100%);
        }

        .cube-face.back {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
        }

        .cube-face.left {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%);
        }

        .cube-face.top {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%);
        }

        .cube-face.bottom {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
        }

        /* Estilos para conteúdo das faces */
        .face-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .face-content h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.8rem;
          text-align: center;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin-top: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--plan-color);
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-gray);
        }

        .plan-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--plan-color);
        }

        .plan-logo span {
          font-size: 1.5rem;
          font-weight: 900;
        }

        .guarantee {
          text-align: center;
          color: var(--text-light);
        }

        .guarantee h4 {
          margin-bottom: 1rem;
        }









        .plan-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .plan-header h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: var(--plan-color);
        }

        .plan-description {
          color: var(--text-gray);
          margin-bottom: 0.8rem;
          font-size: 0.8rem;
        }

        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.2rem;
        }

        .currency {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-gray);
        }

        .price {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--plan-color);
        }

        .period {
          font-size: 0.8rem;
          color: var(--text-gray);
        }

        .features-list {
          margin-top: 1rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
          color: var(--text-light);
          font-size: 0.75rem;
        }

        .feature svg {
          color: var(--plan-color);
          flex-shrink: 0;
        }

        .plan-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.6) 35%,
            rgba(255, 255, 255, 0.2) 50%, 
            rgba(255, 255, 255, 0.6) 65%,
            transparent 70%
          );
          transform: rotate(45deg) translateZ(10px);
          animation: autoShine3d 10s ease-in-out infinite;
          animation-delay: calc(var(--card-index) * 1s);
          opacity: 0;
          filter: blur(1px);
        }

        .plan-card:hover .plan-shine {
          animation: shine3d 0.8s ease-out infinite;
        }

        .plan-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 2;
          border-radius: 24px;
        }

        .plan-card:hover::after {
          opacity: 1;
        }

        .plans-cta {
          text-align: center;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .plans-cta p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .plans-grid {
            gap: 2rem;
          }

          .plan-cube {
            width: 180px;
            height: 180px;
          }

          .cube-face.front {
            transform: translateZ(90px);
          }

          .cube-face.back {
            transform: translateZ(-90px) rotateY(180deg);
          }

          .cube-face.right {
            transform: rotateY(90deg) translateZ(90px);
          }

          .cube-face.left {
            transform: rotateY(-90deg) translateZ(90px);
          }

          .cube-face.top {
            transform: rotateX(90deg) translateZ(90px);
          }

          .cube-face.bottom {
            transform: rotateX(-90deg) translateZ(90px);
          }

          .plans-title {
            font-size: 2.5rem;
          }

          .cube-face {
            padding: 0.8rem;
            font-size: 0.75rem;
          }

          .plan-header h4 {
            font-size: 1rem;
          }

          .price {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .services-content {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-card h3 {
            font-size: 1.2rem;
          }

          .service-card p {
            font-size: 0.9rem;
          }

          .plans-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .plan-cube {
            width: 160px;
            height: 160px;
          }

          .cube-face.front {
            transform: translateZ(80px);
          }

          .cube-face.back {
            transform: translateZ(-80px) rotateY(180deg);
          }

          .cube-face.right {
            transform: rotateY(90deg) translateZ(80px);
          }

          .cube-face.left {
            transform: rotateY(-90deg) translateZ(80px);
          }

          .cube-face.top {
            transform: rotateX(90deg) translateZ(80px);
          }

          .cube-face.bottom {
            transform: rotateX(-90deg) translateZ(80px);
          }

          .plans-title {
            font-size: 2rem;
          }

          .cube-face {
            padding: 0.6rem;
            font-size: 0.7rem;
          }

          .plan-header h4 {
            font-size: 0.9rem;
          }

          .price {
            font-size: 1.3rem;
          }

          .plans-cta {
            padding: 1.5rem;
          }

          .plans-cta p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .services-content {
            padding: 1rem 0;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .service-card {
            padding: 1rem;
          }

          .service-card h3 {
            font-size: 1.1rem;
          }

          .service-card p {
            font-size: 0.8rem;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .plan-cube {
            width: 200px;
            height: 200px;
          }

          .cube-face.front {
            transform: translateZ(100px);
          }

          .cube-face.back {
            transform: translateZ(-100px) rotateY(180deg);
          }

          .cube-face.right {
            transform: rotateY(90deg) translateZ(100px);
          }

          .cube-face.left {
            transform: rotateY(-90deg) translateZ(100px);
          }

          .cube-face.top {
            transform: rotateX(90deg) translateZ(100px);
          }

          .cube-face.bottom {
            transform: rotateX(-90deg) translateZ(100px);
          }

          .plans-title {
            font-size: 1.8rem;
          }

          .cube-face {
            padding: 0.6rem;
            font-size: 0.7rem;
          }

          .plan-header h4 {
            font-size: 0.8rem;
          }

          .price {
            font-size: 1.2rem;
          }

          .plans-cta {
            padding: 1rem;
          }

          .plans-cta p {
            font-size: 0.9rem;
          }
        }




      `}</style>
    </section>
  )
}

export default Services 