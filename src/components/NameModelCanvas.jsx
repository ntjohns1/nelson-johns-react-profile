import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { NameModel } from './NameModel';
import { Suspense } from 'react';

export function NameModelCanvas() {
  return (
    <div style={{ width: '100%', height: '300px', marginBottom: '2px' }}>
      <Canvas  camera={{ position: [0, 0, 4], fov: 18 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <NameModel />
          </Stage>
          <OrbitControls enableRotate={true} enableZoom={false} autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
