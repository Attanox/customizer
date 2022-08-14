import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import type { Group, Mesh, MeshStandardMaterial } from 'three';

import { useColorCursor } from '../../hooks';
import { TGlobalState, TModelConfig } from 'src/types';

interface LocalProps {
  url: string;
  setCurrent: (c: string) => void;
  state: TGlobalState;
  config: TModelConfig;
}

export const Model = (props: LocalProps) => {
  const { state, config } = props;

  const modelRef = useRef<Group>();
  const { setHovered } = useColorCursor(state);

  // @ts-ignore
  const { nodes } = useGLTF(props.url);
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
      scale={config.scale || 1}
      position={config.position || [0, 0, 0]}
    >
      {Object.keys(meshNodes).map((key) => {
        const partName = (meshNodes[key].material as MeshStandardMaterial).name;

        return <mesh key={meshNodes[key].uuid} material={meshNodes[key].material} geometry={meshNodes[key].geometry} material-color={state.items[partName]} />;
      })}
    </group>
  );
};
