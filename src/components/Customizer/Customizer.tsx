import React, { useRef } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import type { Mesh } from 'three';

import './Customizer.css';

type LocalProps = { url: string };

const Model = (props: LocalProps) => {
  const modelRef = useRef();

  const { nodes, materials, scene } = useGLTF(props.url);

  console.log({ nodes, materials, scene });

  const meshNodes: { [key: string]: Mesh } = {};

  Object.keys(nodes).forEach((key) => {
    if (nodes[key].type === 'Mesh') {
      meshNodes[key] = nodes[key] as Mesh;
    }
  });

  console.log({ meshNodes });

  return (
    <group ref={modelRef} dispose={null}>
      {Object.keys(meshNodes).map((key) => {
        return <mesh material={meshNodes[key].material} geometry={meshNodes[key].geometry} />;
      })}
    </group>
  );
};

export const Customizer = (props: LocalProps) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        <Model url={props.url} />
      </Suspense>
    </Canvas>
  );
};
