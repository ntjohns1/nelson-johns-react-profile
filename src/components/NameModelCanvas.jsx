import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, Float } from '@react-three/drei';
import { NameModel } from './NameModel';
import { Suspense, useEffect, useState, useRef } from 'react';

export function NameModelCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      style={{ 
        width: '600px', 
        height: isMobile ? '300px' : '400px', 
        marginBottom: '2px',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease-in',
        position: 'relative',
      }}
    >
      {/* Camera settings */}
      <Canvas 
        camera={{ 
          position: isMobile ? [0, 0, 7] : [0, 0, 6.5], 
          fov: isMobile ? 30 : 25, 
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true, 
          premultipliedAlpha: false, 
        }}
      >
        <Suspense fallback={null}>
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={0.8} 
            castShadow 
          />
          <directionalLight 
            position={[-5, 5, 5]} 
            intensity={0.5} 
            color="#ffffff" 
          />
          
          {/* Animation */}
          <Float 
            speed={1.5} 
            rotationIntensity={0.1} 
            floatIntensity={0.3} 
            floatingRange={[-0.05, 0.05]} 
          >
            <group position={[0, -0.5, 0]}> 
              <Stage 
                environment="city" 
                intensity={0.4} 
                adjustCamera={false}
                scale={isMobile ? 0.85 : 1.2} 
                shadows={false} 
                preset="soft"
                contactShadow={false}
              >
                <NameModel isMobile={isMobile} />
              </Stage>
            </group>
          </Float>
          
          <Environment preset="city" />
          
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.2} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 8} 
            maxAzimuthAngle={Math.PI / 8} 
            rotateSpeed={0.4} 
          />
          

        </Suspense>
      </Canvas>
    </div>
  );
}
