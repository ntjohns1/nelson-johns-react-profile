import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const particles = useRef([]);
  
  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      scale: Math.random() * 0.2 + 0.05,
      speed: Math.random() * 0.05 + 0.02
    }));
  }, [count]);

  // Animate particles
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={mesh}>
      {particles.current.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 6, 6]} />
          <meshBasicMaterial color="#00c9a7" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

export default Particles;
