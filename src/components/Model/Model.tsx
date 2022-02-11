import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import type { Group, Mesh, MeshStandardMaterial } from 'three';

import { useColorCursor } from '../../hooks';
import { GlobalState } from 'src/types';

type LocalProps = { url: string; setCurrent: (c: string) => void; state: GlobalState };

export const Model = (props: LocalProps) => {
  const { state } = props;

  const modelRef = useRef<Group>();
  const { setHovered } = useColorCursor(state);

  const { nodes } = useGLTF(props.url);

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      modelRef.current.rotation.x = Math.cos(t / 4) / 8;
      modelRef.current.rotation.y = Math.sin(t / 4) / 8;
      modelRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  useThree(({ camera }) => {
    camera.position.setZ(2);
  });

  const meshNodes: { [key: string]: Mesh } = {};

  Object.keys(nodes).forEach((key) => {
    if (nodes[key].type === 'Mesh') {
      meshNodes[key] = nodes[key] as Mesh;
    }
  });

  return (
    <group
      ref={modelRef}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(((e.object as Mesh).material as MeshStandardMaterial).name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null);
      }}
      onPointerMissed={() => {
        props.setCurrent('');
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.setCurrent(((e.object as Mesh).material as MeshStandardMaterial).name);
      }}
    >
      {Object.keys(meshNodes).map((key) => {
        const partName = (meshNodes[key].material as MeshStandardMaterial).name;

        return <mesh key={meshNodes[key].uuid} material={meshNodes[key].material} geometry={meshNodes[key].geometry} material-color={state.items[partName]} />;
      })}
    </group>
  );
};
