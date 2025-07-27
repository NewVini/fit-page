import { motion } from 'framer-motion'
import { ChevronDown, Play, Zap, Target, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="hero-section section" id="home">
      {/* Background com gradiente animado */}
      <div className="hero-background">
        <motion.div 
          className="gradient-orb"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div 
          className="gradient-orb-2"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30 }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badges flutuantes */}
          <motion.div className="floating-badges">
            <motion.div 
              className="badge"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '0s' }}
            >
              <Zap size={16} />
              <span>Resultados Rápidos</span>
            </motion.div>
            <motion.div 
              className="badge"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            >
              <Target size={16} />
              <span>Treino Personalizado</span>
            </motion.div>
            <motion.div 
              className="badge"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
            >
              <Trophy size={16} />
              <span>+1000 Transformações</span>
            </motion.div>
          </motion.div>

          {/* Título principal */}
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Transforme seu
            <span className="gradient-text"> Corpo</span>
            <br />
            com Tecnologia
            <span className="gradient-text"> 3D</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Descubra o futuro do fitness com nossa academia premium. 
            Treinos personalizados, análise corporal 3D e resultados 
            comprovados cientificamente.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="hero-ctas"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Agora
            </motion.button>
            
            <motion.button
              className="btn-play"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              <span>Ver Demo 3D</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                1000+
              </motion.span>
              <span className="stat-label">Alunos Transformados</span>
            </div>
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                95%
              </motion.span>
              <span className="stat-label">Taxa de Sucesso</span>
            </div>
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
              >
                24/7
              </motion.span>
              <span className="stat-label">Suporte Disponível</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Seta para scroll */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          top: -200px;
          right: -200px;
          filter: blur(100px);
        }

        .gradient-orb-2 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -100px;
          left: -100px;
          filter: blur(80px);
        }

        .hero-content {
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .floating-badges {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 107, 53, 0.3);
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--text-gray);
          max-width: 600px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .btn-play {
          background: transparent;
          border: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          padding: 1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-play:hover {
          color: var(--primary);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-gray);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .floating-badges {
            gap: 1.5rem;
          }

          .hero-stats {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 0;
          }

          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            max-width: 500px;
          }
          
          .floating-badges {
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .badge {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
          
          .hero-ctas {
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 3rem;
          }
          
          .hero-stats {
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 1rem 0;
          }

          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            max-width: 400px;
          }
          
          .floating-badges {
            gap: 0.8rem;
            margin-bottom: 1.5rem;
          }

          .badge {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
          }
          
          .hero-ctas {
            gap: 0.8rem;
            margin-bottom: 2rem;
          }
          
          .hero-stats {
            gap: 1.5rem;
          }
          
          .stat-number {
            font-size: 1.8rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }

          .scroll-indicator {
            bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero 