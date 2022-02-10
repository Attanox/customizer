import React, { useState } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import type { Group, Mesh } from 'three';

import './Customizer.css';
import { Model } from '../Model/Model';
import { ColorPicker } from '../ColorPicker/ColorPicker';

type LocalProps = { url: string };

const INITIAL_STATE = {
  current: '',
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
};

export const Customizer = (props: LocalProps) => {
  const [state, setState] = useState(INITIAL_STATE);

  const setCurrent = (current: string) => {
    setState({ ...state, current });
  };

  return (
    <>
      <ColorPicker current={state.current} />
      <Canvas>
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Model url={props.url} setCurrent={setCurrent} />
        </Suspense>
      </Canvas>
    </>
  );
};
