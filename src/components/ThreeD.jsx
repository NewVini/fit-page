import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Float, Environment, useGLTF, Sphere, Box } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

// Componente 3D do haltere
function Dumbbell({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Barra central */}
      <Box args={[2, 0.1, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Pesos laterais */}
      <Sphere args={[0.4]} position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Sphere>
      <Sphere args={[0.4]} position={[1.2, 0, 0]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Sphere>
    </group>
  )
}

// Componente de texto 3D flutuante
function FloatingText({ text, position, color = "#ffffff" }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
    </Float>
  )
}

// Componente de partículas
function Particles() {
  const particlesRef = useRef()
  const particleCount = 100
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ff6b35" size={0.02} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

// Componente principal da cena 3D
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      
      <Particles />
      
      <Dumbbell position={[0, 0, 0]} />
      
      <FloatingText text="FORÇA" position={[-3, 2, 0]} color="#ff6b35" />
      <FloatingText text="RESISTÊNCIA" position={[3, 1, 0]} color="#00d4ff" />
      <FloatingText text="POTÊNCIA" position={[0, -2, 0]} color="#ffd700" />
      
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

const ThreeD = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [selectedFeature, setSelectedFeature] = useState(0)

  const features = [
    {
      title: "Análise Corporal 3D",
      description: "Escaneamento completo do seu corpo em alta resolução para acompanhar cada mudança.",
      stats: "Precisão de 99.5%"
    },
    {
      title: "Movimento Inteligente", 
      description: "IA que analisa seus movimentos em tempo real e corrige posturas automaticamente.",
      stats: "50+ exercícios monitorados"
    },
    {
      title: "Realidade Aumentada",
      description: "Visualize seus músculos trabalhando e acompanhe o progresso em tempo real.",
      stats: "Tecnologia AR exclusiva"
    },
    {
      title: "Simulação de Resultados",
      description: "Veja como ficará seu corpo com nossos algoritmos de projeção futura.",
      stats: "Projeção até 12 meses"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="threed-section section" id="technology" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="threed-content"
        >
          <div className="content-grid">
            {/* Lado esquerdo - Informações */}
            <div className="info-side">
              <motion.div variants={itemVariants}>
                <h2 className="section-title">
                  Tecnologia <span className="gradient-text">3D</span> Revolucionária
                </h2>
                <p className="section-subtitle">
                  Experimente o futuro do fitness com nossa tecnologia de ponta que 
                  transforma completamente a forma como você treina e acompanha seus resultados.
                </p>
              </motion.div>

              <motion.div className="features-list" variants={containerVariants}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`feature-item ${selectedFeature === index ? 'active' : ''}`}
                    variants={itemVariants}
                    onClick={() => setSelectedFeature(index)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <div className="feature-stats">{feature.stats}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="threed-cta">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Experimentar Tecnologia 3D
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Demonstração
                </motion.button>
              </motion.div>
            </div>

            {/* Lado direito - Canvas 3D */}
            <motion.div 
              className="canvas-side"
              variants={itemVariants}
            >
              <div className="canvas-container">
                <Canvas
                  camera={{ position: [5, 0, 5], fov: 60 }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <Suspense fallback={null}>
                    <Scene />
                  </Suspense>
                </Canvas>
                
                <div className="canvas-overlay">
                  <div className="tech-badge">
                    <div className="pulse-dot"></div>
                    <span>Tecnologia Ativa</span>
                  </div>
                </div>
              </div>

              <div className="tech-stats">
                <div className="stat">
                  <div className="stat-value">4K</div>
                  <div className="stat-label">Resolução de Scan</div>
                </div>
                <div className="stat">
                  <div className="stat-value">0.1s</div>
                  <div className="stat-label">Tempo de Resposta</div>
                </div>
                <div className="stat">
                  <div className="stat-value">360°</div>
                  <div className="stat-label">Análise Completa</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .threed-section {
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 50%, #000000 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .threed-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .threed-content {
          padding: 4rem 0;
          position: relative;
          z-index: 1;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 80vh;
        }

        .info-side {
          padding: 2rem 0;
        }

        .section-title {
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .section-subtitle {
          text-align: left;
          margin-bottom: 3rem;
          font-size: 1.2rem;
        }

        .features-list {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.02);
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
          width: 100%;
        }

        .feature-item:hover,
        .feature-item.active {
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateX(10px);
        }

        .feature-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary);
          min-width: 3rem;
          flex-shrink: 0;
        }

        .feature-content {
          flex: 1;
          min-width: 0;
        }

        .feature-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-light);
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .feature-content p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 0.5rem;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .feature-stats {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .threed-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .canvas-side {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .canvas-container {
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .canvas-overlay {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
        }

        .tech-badge {
          background: rgba(255, 107, 53, 0.9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .tech-stats {
          display: flex;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .canvas-container {
            height: 400px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .feature-item {
            padding: 1.2rem;
          }

          .feature-content h3 {
            font-size: 1.1rem;
          }

          .feature-content p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .threed-content {
            padding: 2rem 0;
          }

          .content-grid {
            gap: 2rem;
            min-height: auto;
          }

          .info-side {
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 2rem;
            text-align: center;
          }

          .section-subtitle {
            font-size: 1rem;
            text-align: center;
            margin-bottom: 2rem;
            max-width: 90%;
          }

          .features-list {
            width: 100%;
            max-width: 500px;
            align-items: center;
          }

          .feature-item {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            margin-bottom: 0.8rem;
            max-width: 100%;
            width: 100%;
            text-align: center;
          }

          .feature-number {
            font-size: 1.3rem;
            min-width: 2.5rem;
          }

          .feature-content {
            width: 100%;
            max-width: 100%;
          }

          .feature-content h3 {
            font-size: 1.1rem;
            text-align: center;
          }

          .feature-content p {
            font-size: 0.9rem;
            text-align: center;
            max-width: 100%;
          }

          .feature-stats {
            font-size: 0.8rem;
            text-align: center;
          }

          .threed-cta {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            width: 100%;
            max-width: 500px;
          }

          .tech-stats {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            max-width: 500px;
            width: 100%;
          }

          .canvas-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .threed-content {
            padding: 1rem 0;
          }

          .info-side {
            padding: 0.5rem 0;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
            max-width: 95%;
          }

          .features-list {
            max-width: 400px;
            width: 100%;
          }

          .feature-item {
            padding: 0.8rem;
            margin-bottom: 0.6rem;
            max-width: 100%;
            width: 100%;
          }

          .feature-number {
            font-size: 1.2rem;
            min-width: 2rem;
          }

          .feature-content {
            width: 100%;
            max-width: 100%;
          }

          .feature-content h3 {
            font-size: 1rem;
          }

          .feature-content p {
            font-size: 0.8rem;
            max-width: 100%;
          }

          .feature-stats {
            font-size: 0.75rem;
          }

          .threed-cta {
            max-width: 400px;
            width: 100%;
          }

          .tech-stats {
            padding: 0.8rem;
            max-width: 400px;
            width: 100%;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }

          .canvas-container {
            height: 250px;
          }
        }

        @media (max-width: 360px) {
          .threed-content {
            padding: 0.8rem 0;
          }

          .info-side {
            padding: 0.3rem 0;
          }

          .section-title {
            font-size: 1.6rem;
          }

          .section-subtitle {
            font-size: 0.8rem;
            max-width: 98%;
          }

          .features-list {
            max-width: 350px;
            width: 100%;
          }

          .feature-item {
            padding: 0.6rem;
            margin-bottom: 0.5rem;
            max-width: 100%;
            width: 100%;
          }

          .feature-number {
            font-size: 1.1rem;
            min-width: 1.8rem;
          }

          .feature-content {
            width: 100%;
            max-width: 100%;
          }

          .feature-content h3 {
            font-size: 0.9rem;
          }

          .feature-content p {
            font-size: 0.75rem;
            max-width: 100%;
          }

          .feature-stats {
            font-size: 0.7rem;
          }

          .threed-cta {
            max-width: 350px;
            width: 100%;
          }

          .tech-stats {
            padding: 0.6rem;
            max-width: 350px;
            width: 100%;
          }

          .stat-value {
            font-size: 1.3rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }

          .canvas-container {
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}

export default ThreeD 