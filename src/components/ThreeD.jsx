import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Float, Environment, Sphere, Box, Cylinder } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

// Componente 3D do haltere
function Dumbbell({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + rotation[1]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
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

// Componente 3D do supino
function BenchPress({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + rotation[1]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Banco */}
      <Box args={[3, 0.2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
      </Box>
      
      {/* Suporte da barra */}
      <Cylinder args={[0.05, 0.05, 1.5]} position={[-1.2, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 1.5]} position={[1.2, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Barra olímpica */}
      <Cylinder args={[0.03, 0.03, 2.5]} position={[0, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#444444" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Pesos na barra */}
      <Cylinder args={[0.3, 0.3, 0.1]} position={[-0.8, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.1]} position={[0.8, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Cylinder>
    </group>
  )
}

// Componente 3D da esteira
function Treadmill({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2 + rotation[1]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Base da esteira */}
      <Box args={[2.5, 0.3, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.6} />
      </Box>
      
      {/* Esteira */}
      <Box args={[2, 0.05, 0.8]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#333333" metalness={0.2} roughness={0.8} />
      </Box>
      
      {/* Painel de controle */}
      <Box args={[0.8, 0.6, 0.1]} position={[0, 0.5, 0.4]}>
        <meshStandardMaterial color="#000000" metalness={0.1} roughness={0.9} />
      </Box>
      
      {/* Botões do painel */}
      <Sphere args={[0.05]} position={[-0.2, 0.5, 0.46]}>
        <meshStandardMaterial color="#00d4ff" metalness={0.3} roughness={0.7} />
      </Sphere>
      <Sphere args={[0.05]} position={[0.2, 0.5, 0.46]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.3} roughness={0.7} />
      </Sphere>
    </group>
  )
}

// Componente 3D da bicicleta ergométrica
function ExerciseBike({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.25 + rotation[1]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.12
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Base da bicicleta */}
      <Box args={[1.5, 0.2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
      </Box>
      
      {/* Assento */}
      <Box args={[0.4, 0.1, 0.3]} position={[0, 0.3, -0.2]}>
        <meshStandardMaterial color="#444444" metalness={0.2} roughness={0.8} />
      </Box>
      
      {/* Guidão */}
      <Cylinder args={[0.02, 0.02, 0.6]} position={[0, 0.6, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Pedais */}
      <Cylinder args={[0.05, 0.05, 0.3]} position={[0, 0.1, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Roda de inércia */}
      <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 0.2, 0.4]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Cylinder>
    </group>
  )
}

// Componente 3D da barra olímpica
function OlympicBar({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4 + rotation[1]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9) * 0.25
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Barra principal */}
      <Cylinder args={[0.02, 0.02, 2.2]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#444444" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Pesos olímpicos */}
      <Cylinder args={[0.4, 0.4, 0.15]} position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.4, 0.4, 0.15]} position={[0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.6} roughness={0.3} />
      </Cylinder>
      
      {/* Travessas de segurança */}
      <Cylinder args={[0.01, 0.01, 0.3]} position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.01, 0.01, 0.3]} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
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
      >
        {text}
      </Text>
    </Float>
  )
}

// Componente de partículas
function Particles() {
  const particlesRef = useRef()
  const particleCount = 50
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15
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
function Scene({ currentEquipment = 0 }) {
  const equipmentModels = [
    { component: Dumbbell, position: [0, 0, 0], rotation: [0, 0, 0] },
    { component: BenchPress, position: [0, 0, 0], rotation: [0, 0, 0] },
    { component: Treadmill, position: [0, 0, 0], rotation: [0, 0, 0] },
    { component: ExerciseBike, position: [0, 0, 0], rotation: [0, 0, 0] },
    { component: OlympicBar, position: [0, 0, 0], rotation: [0, 0, 0] }
  ]

  const CurrentModel = equipmentModels[currentEquipment].component
  const { position, rotation } = equipmentModels[currentEquipment]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00d4ff" />
      
      <Particles />
      
      <CurrentModel position={position} rotation={rotation} />
      
      <FloatingText text="FORÇA" position={[-3, 2, 0]} color="#ff6b35" />
      <FloatingText text="MÚSCULO" position={[3, -2, 0]} color="#00d4ff" />
      <FloatingText text="RESISTÊNCIA" position={[0, 3, 0]} color="#ffffff" />
      
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

const ThreeD = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [selectedEquipment, setSelectedEquipment] = useState(0)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const equipment = [
    {
      title: "Halteres Profissionais",
      description: "Equipamentos de alta qualidade para treinos de força e hipertrofia muscular.",
      stats: "Pesos de 1kg a 50kg",
      model: "dumbbell"
    },
    {
      title: "Supino Reto", 
      description: "Banco de supino com barra olímpica para exercícios de peito e tríceps.",
      stats: "Suporte até 300kg",
      model: "bench"
    },
    {
      title: "Esteiras Premium",
      description: "Esteiras de alta performance para treinos cardiovasculares intensos.",
      stats: "Velocidade até 20km/h",
      model: "treadmill"
    },
    {
      title: "Bicicletas Ergométricas",
      description: "Bicicletas ergométricas para treinos de resistência e perda de peso.",
      stats: "20 níveis de resistência",
      model: "bike"
    },
    {
      title: "Barras Olímpicas",
      description: "Barras de levantamento de peso para exercícios compostos e força máxima.",
      stats: "Suporte até 500kg",
      model: "bar"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const handleEquipmentClick = (index) => {
    setSelectedEquipment(index)
    setCurrentCarouselIndex(index)
  }

  const nextEquipment = () => {
    const next = (currentCarouselIndex + 1) % equipment.length
    setCurrentCarouselIndex(next)
    setSelectedEquipment(next)
  }

  const prevEquipment = () => {
    const prev = currentCarouselIndex === 0 ? equipment.length - 1 : currentCarouselIndex - 1
    setCurrentCarouselIndex(prev)
    setSelectedEquipment(prev)
  }

  return (
    <section className="equipment-section section" id="equipment" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="equipment-content"
        >
          {/* Header da seção */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Equipamentos <span className="gradient-text">3D</span> de Alta Performance
            </h2>
            <p className="section-subtitle">
              Descubra nossa coleção completa de equipamentos de academia de última geração, 
              projetados para maximizar seus resultados e transformar seu corpo.
            </p>
          </motion.div>

          {/* Cards dos equipamentos em linha horizontal */}
          <motion.div className="equipment-cards-row" variants={containerVariants}>
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className={`equipment-card ${selectedEquipment === index ? 'active' : ''}`}
                variants={itemVariants}
                onClick={() => handleEquipmentClick(index)}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-stats">{item.stats}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel 3D com fundo branco */}
          <motion.div className="carousel-section" variants={itemVariants}>
            <div className="carousel-container">
              <div className="canvas-container">
                <Canvas
                  camera={{ position: [5, 0, 5], fov: 60 }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ background: 'transparent' }}
                >
                  <Suspense fallback={null}>
                    <Scene currentEquipment={currentCarouselIndex} />
                  </Suspense>
                </Canvas>
                
                {/* Controles do Carousel */}
                <div className="carousel-controls">
                  <motion.button
                    className="carousel-btn prev"
                    onClick={prevEquipment}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ‹
                  </motion.button>
                  <motion.button
                    className="carousel-btn next"
                    onClick={nextEquipment}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ›
                  </motion.button>
                </div>

                {/* Indicadores do Carousel */}
                <div className="carousel-indicators">
                  {equipment.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`indicator ${currentCarouselIndex === index ? 'active' : ''}`}
                      onClick={() => handleEquipmentClick(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
                
                <div className="canvas-overlay">
                  <div className="equipment-badge">
                    <div className="pulse-dot"></div>
                    <span>Equipamentos 3D</span>
                  </div>
                </div>
              </div>

              <div className="carousel-stats">
                <div className="stat">
                  <div className="stat-value">100+</div>
                  <div className="stat-label">Equipamentos</div>
                </div>
                <div className="stat">
                  <div className="stat-value">24h</div>
                  <div className="stat-label">Disponibilidade</div>
                </div>
                <div className="stat">
                  <div className="stat-value">Premium</div>
                  <div className="stat-label">Qualidade</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Botões de ação */}
          <motion.div variants={itemVariants} className="equipment-cta">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conhecer Equipamentos
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Visita
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .equipment-section {
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 50%, #000000 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .equipment-section::before {
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

        .equipment-content {
          padding: 2rem 0;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff6b35 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: clamp(1rem, 3vw, 1.2rem);
          color: #cccccc;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .equipment-cards-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding: 1rem 0;
        }

        .equipment-card {
          flex: 1;
          min-width: 250px;
          max-width: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .equipment-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .equipment-card:hover::before {
          opacity: 1;
        }

        .equipment-card:hover {
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-10px);
        }

        .equipment-card.active {
          background: rgba(255, 107, 53, 0.15);
          border-color: rgba(255, 107, 53, 0.5);
        }

        .equipment-card.active::before {
          opacity: 1;
        }

        .card-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 1rem;
        }

        .card-content h3 {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.8rem;
        }

        .card-content p {
          font-size: clamp(0.9rem, 2vw, 0.95rem);
          color: #cccccc;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .card-stats {
          font-size: 0.85rem;
          color: #ff6b35;
          font-weight: 600;
        }

        .carousel-section {
          background: #ffffff;
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .carousel-container {
          position: relative;
        }

        .canvas-container {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .carousel-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 20;
        }

        .carousel-btn {
          background: rgba(255, 107, 53, 0.9);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .carousel-btn:hover {
          background: rgba(255, 107, 53, 1);
          transform: scale(1.1);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #ff6b35;
          transform: scale(1.2);
        }

        .canvas-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }

        .equipment-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 107, 53, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 107, 53, 0.3);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        .carousel-stats {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          gap: 1rem;
        }

        .stat {
          text-align: center;
          flex: 1;
        }

        .stat-value {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          color: #666666;
          font-weight: 500;
        }

        .equipment-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 200px;
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 200px;
        }

        .btn-secondary:hover {
          border-color: #ff6b35;
          color: #ff6b35;
        }

        @media (max-width: 1024px) {
          .equipment-cards-row {
            flex-wrap: wrap;
            justify-content: center;
          }

          .equipment-card {
            min-width: 200px;
            max-width: 250px;
          }

          .canvas-container {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .equipment-section {
            padding: 1rem 0;
          }

          .equipment-content {
            padding: 1rem 0;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .equipment-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .equipment-card {
            width: 100%;
            max-width: 400px;
          }

          .carousel-section {
            padding: 1rem;
          }

          .canvas-container {
            height: 300px;
          }

          .carousel-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .equipment-cta {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .equipment-section {
            padding: 0.5rem 0;
          }

          .canvas-container {
            height: 250px;
          }

          .carousel-controls {
            padding: 0 10px;
          }

          .carousel-btn {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .equipment-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ThreeD 