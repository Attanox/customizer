import React, { useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

import defaultEnvironment from '../../../static/environments/royal_esplanade_1k.hdr';

import { Model } from '../Model/Model';
import { ColorPicker } from '../ColorPicker/ColorPicker';

import './Customizer.css';

import type { GlobalState } from 'src/types';

type LocalProps = { url: string; environment?: string };

const INITIAL_STATE: GlobalState = {
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

  const changeColor = (color: string) => {
    setState({ ...state, items: { ...state.items, [state.current]: color } });
  };

  return (
    <>
      <ColorPicker changeColor={changeColor} current={state.current} currentColor={state.items[state.current]} />
      <Canvas>
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Model url={props.url} setCurrent={setCurrent} state={state} />
          <Environment files={props.environment || defaultEnvironment} />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
    </>
  );
};
