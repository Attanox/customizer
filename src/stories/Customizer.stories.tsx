import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import shoe from '../../static/models/shoe/shoe-draco.glb';

import type { TGenericObject, TOnEachFrame } from 'src/types';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config: { url: string; onEachFrame: TOnEachFrame; items: TGenericObject } = {
  url: shoe,
  onEachFrame: (state, modelRef) => {
    const t = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      modelRef.current.rotation.x = Math.cos(t / 4) / 8;
      modelRef.current.rotation.y = Math.sin(t / 4) / 8;
      modelRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  },
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

export const ColorCustomizer: ComponentStory<FC> = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Customizer url={config.url} initialItemColors={config.items} />
  </div>
);
