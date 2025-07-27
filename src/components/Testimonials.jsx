import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Marina Silva",
      role: "Empresária",
      image: "https://images.unsplash.com/photo-1494790108755-2616b75aead4?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A FitMotion transformou completamente minha vida! Em 6 meses perdi 15kg e ganhei uma confiança que nunca tive. A tecnologia 3D me ajudou a acompanhar cada evolução do meu corpo.",
      results: "15kg perdidos em 6 meses",
      transformation: {
        before: "Sedentária, 78kg",
        after: "Ativa, 63kg, 18% gordura corporal"
      }
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Engenheiro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Sempre lutei para ganhar massa muscular. O personal trainer dedicado e a análise 3D me mostraram exatamente onde focar. Resultado: 8kg de massa magra em 4 meses!",
      results: "8kg de massa magra em 4 meses",
      transformation: {
        before: "Magro, 65kg",
        after: "Definido, 73kg, músculos visíveis"
      }
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Médica",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Como médica, sou muito exigente com qualidade. A FitMotion superou todas minhas expectativas. A tecnologia é impressionante e os resultados são cientificamente comprovados.",
      results: "Melhor condicionamento físico da vida",
      transformation: {
        before: "Estressada, sem tempo para exercícios",
        after: "Energizada, rotina fitness estabelecida"
      }
    },
    {
      id: 4,
      name: "Roberto Santos",
      role: "Aposentado",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Aos 58 anos pensei que era tarde demais. A equipe me provou o contrário! Hoje me sinto mais jovem e forte do que aos 40. O acompanhamento médico é excepcional.",
      results: "Recuperou mobilidade e força",
      transformation: {
        before: "Sedentário, dores nas costas",
        after: "Ativo, sem dores, flexível"
      }
    },
    {
      id: 5,
      name: "Juliana Oliveira",
      role: "Influencer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A FitMotion não é só uma academia, é um estilo de vida! O ambiente é inspirador, a tecnologia é incrível e a comunidade é acolhedora. Melhor investimento que já fiz!",
      results: "Corpo dos sonhos alcançado",
      transformation: {
        before: "Insatisfeita com o corpo",
        after: "Confiante, forte, inspiradora"
      }
    }
  ]

  const stats = [
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "89%", label: "Alcançam seus Objetivos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "2.5k+", label: "Depoimentos Positivos" }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
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

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="testimonials-section section" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="testimonials-content"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              O que nossos <span className="gradient-text">alunos dizem</span>
            </h2>
            <p className="section-subtitle">
              Histórias reais de transformação que inspiram e motivam. 
              Cada depoimento representa uma jornada única de sucesso.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="stats-row"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial */}
          <motion.div 
            className="testimonial-main"
            variants={itemVariants}
          >
            <div className="testimonial-card">
              <div className="quote-icon">
                <Quote size={32} />
              </div>
              
              <motion.div 
                className="testimonial-content"
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>
                
                <p className="testimonial-text">"{currentTestimonial.text}"</p>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={currentTestimonial.image} alt={currentTestimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{currentTestimonial.name}</h4>
                    <p>{currentTestimonial.role}</p>
                    <div className="result-badge">{currentTestimonial.results}</div>
                  </div>
                </div>

                <div className="transformation-info">
                  <div className="before-after">
                    <div className="before">
                      <span className="label">Antes:</span>
                      <span className="value">{currentTestimonial.transformation.before}</span>
                    </div>
                    <div className="arrow">→</div>
                    <div className="after">
                      <span className="label">Depois:</span>
                      <span className="value">{currentTestimonial.transformation.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="testimonial-nav">
                <button onClick={prevTestimonial} className="nav-btn">
                  <ChevronLeft size={24} />
                </button>
                
                <div className="nav-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
                
                <button onClick={nextTestimonial} className="nav-btn">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="testimonials-cta"
            variants={itemVariants}
          >
            <h3>Pronto para ser nossa próxima <span className="gradient-text">história de sucesso</span>?</h3>
            <div className="cta-buttons">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Começar Minha Transformação
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Mais Depoimentos
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .testimonials-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-content {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 107, 53, 0.2);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 107, 53, 0.5);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-gray);
          font-weight: 500;
        }

        .testimonial-main {
          margin-bottom: 4rem;
        }

        .testimonial-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: var(--primary);
          opacity: 0.3;
        }

        .rating {
          display: flex;
          justify-content: center;
          gap: 0.2rem;
          margin-bottom: 2rem;
        }

        .testimonial-text {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--text-light);
          text-align: center;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .author-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--primary);
        }

        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-info {
          text-align: left;
        }

        .author-info h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.3rem;
        }

        .author-info p {
          color: var(--text-gray);
          margin-bottom: 0.5rem;
        }

        .result-badge {
          background: var(--gradient-primary);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .transformation-info {
          background: rgba(255, 107, 53, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .before-after {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .before, .after {
          text-align: center;
        }

        .label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-gray);
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .value {
          display: block;
          color: var(--text-light);
          font-weight: 500;
        }

        .arrow {
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 900;
        }

        .testimonial-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .nav-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--text-light);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: var(--primary);
          transform: scale(1.1);
        }

        .nav-dots {
          display: flex;
          gap: 0.8rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        .testimonials-cta {
          text-align: center;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .testimonials-cta h3 {
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
          .testimonials-content {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .testimonial-card {
            padding: 2.5rem 2rem;
          }

          .testimonial-text {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-content {
            padding: 1.5rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .testimonial-card {
            padding: 2rem 1.5rem;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .author-info {
            text-align: center;
          }

          .author-info h4 {
            font-size: 1.1rem;
          }

          .author-info p {
            font-size: 0.9rem;
          }

          .before-after {
            flex-direction: column;
            gap: 1rem;
          }

          .arrow {
            transform: rotate(90deg);
          }

          .testimonials-cta {
            padding: 2rem 1.5rem;
          }

          .testimonials-cta h3 {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-content {
            padding: 1rem 0;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .testimonial-card {
            padding: 1.5rem 1rem;
          }

          .testimonial-text {
            font-size: 1rem;
          }

          .author-info h4 {
            font-size: 1rem;
          }

          .author-info p {
            font-size: 0.8rem;
          }

          .testimonials-cta {
            padding: 1.5rem 1rem;
          }

          .testimonials-cta h3 {
            font-size: 1.3rem;
          }

          .nav-btn {
            width: 35px;
            height: 35px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials 