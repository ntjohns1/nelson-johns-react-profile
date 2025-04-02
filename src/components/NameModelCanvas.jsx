import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { NameModel } from './NameModel';
import { Suspense, useEffect, useState } from 'react';

export function NameModelCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '250px' : '300px', 
      marginBottom: '2px' 
    }}>
      <Canvas camera={{ 
        position: isMobile ? [0, 0, 5] : [0, 0, 4], 
        fov: isMobile ? 25 : 18 
      }}>
        <Suspense fallback={null}>
          <Stage 
            environment="city" 
            intensity={0.6} 
            adjustCamera={false}
            scale={isMobile ? 0.8 : 1}
          >
            <NameModel isMobile={isMobile} />
          </Stage>
          <OrbitControls
            enableZoom={!isMobile}
            autoRotate={false}
            enablePan={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
