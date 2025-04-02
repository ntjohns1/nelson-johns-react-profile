import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function NameModel({ isMobile }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/NameModel.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Log available animations
    console.log('Available animations:', animations);
    console.log('Available actions:', actions);

    // Try to play the first animation if it exists
    const animationNames = Object.keys(actions);
    if (animationNames.length > 0) {
      const firstAnimation = actions[animationNames[0]];
      console.log('Playing animation:', animationNames[0]);
      if (firstAnimation) {
        firstAnimation.reset().play();
        firstAnimation.clampWhenFinished = true;
        firstAnimation.repetitions = 1;
      }
    } else {
      console.log('No animations found in the model');
    }
  }, [actions, animations]);

  // Adjust model position and scale based on mobile
  useEffect(() => {
    if (group.current) {
      if (isMobile) {
        group.current.scale.set(0.8, 0.8, 0.8);
        group.current.position.y = -0.2;
      } else {
        group.current.scale.set(1, 1, 1);
        group.current.position.y = 0;
      }
    }
  }, [isMobile]);

  return (
    <group ref={group}>
      <primitive object={nodes.Scene} />
    </group>
  );
}

useGLTF.preload('./models/NameModel.glb');
