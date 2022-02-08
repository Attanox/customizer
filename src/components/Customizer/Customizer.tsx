import React from 'react';
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Customizer = (props: { url: string }) => {
  const { scene } = useGLTF(props.url);

  console.log({ scene });

  return (
    <Suspense fallback="loading">
      <Canvas>
        <primitive object={scene} />
      </Canvas>
    </Suspense>
  );
};
