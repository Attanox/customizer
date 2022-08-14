import React, { useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import defaultEnvironment from '../../../static/environments/royal_esplanade_1k.hdr';

import { Model } from '../Model/Model';
import { ColorPicker } from '../ColorPicker/ColorPicker';

import './Customizer.css';

import type { TGenericObject, TGlobalState, TModelConfig } from 'src/types';

interface LocalProps {
  url: string;
  environment?: string;
  initialItemColors: TGenericObject;
  modelConfig?: TModelConfig;
}

const createInitialState = (initItemColors: TGenericObject = {}) => {
  const INITIAL_STATE: TGlobalState = {
    current: '',
    items: {},
  };

  return {
    ...INITIAL_STATE,
    items: {
      ...initItemColors,
    },
  };
};

export const Customizer = (props: LocalProps) => {
  const [state, setState] = useState(createInitialState(props.initialItemColors));

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
          <Model url={props.url} setCurrent={setCurrent} state={state} config={props.modelConfig || {}} />
          <Environment files={props.environment || defaultEnvironment} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableRotate={true} enableZoom={true} enablePan={false} />
      </Canvas>
    </>
  );
};
