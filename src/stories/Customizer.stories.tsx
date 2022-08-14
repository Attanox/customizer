import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import shoe from '../../public/models/shoe/shoe-draco.glb';

import type { TGenericObject, TModelConfig } from 'src/types';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config: { url: string; items: TGenericObject; model: TModelConfig } = {
  url: shoe,
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
  model: {
    scale: 3,
    position: [0, 1, 0],
  },
};

export const ColorCustomizer: ComponentStory<FC> = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Customizer url={config.url} initialItemColors={config.items} modelConfig={config.model} />
  </div>
);
