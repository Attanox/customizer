import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import type { Group, Mesh } from 'three';

import { useColorCursor } from '../../hooks';

type LocalProps = { url: string; setCurrent: (c: string) => void };

export const Model = (props: LocalProps) => {
  const modelRef = useRef<Group>();
  const { setHovered } = useColorCursor();

  const { nodes, materials, scene } = useGLTF(props.url);

  // Animate model
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   if (modelRef.current) {
  //     modelRef.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //     modelRef.current.rotation.x = Math.cos(t / 4) / 8;
  //     modelRef.current.rotation.y = Math.sin(t / 4) / 8;
  //     modelRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  //   }
  // });

  const meshNodes: { [key: string]: Mesh } = {};

  Object.keys(nodes).forEach((key) => {
    if (nodes[key].type === 'Mesh') {
      meshNodes[key] = nodes[key] as Mesh;
    }
  });

  console.log({ nodes, materials, scene });
  console.log({ meshNodes });

  return (
    <group
      ref={modelRef}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered((e.object as any).material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null);
      }}
      onPointerMissed={() => {
        props.setCurrent('');
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.setCurrent((e.object as any).material.name);
      }}
    >
      {Object.keys(meshNodes).map((key) => {
        return <mesh material={meshNodes[key].material} geometry={meshNodes[key].geometry} />;
      })}
    </group>
  );
};
