import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import rocket from '../../static/models/astronaut/scene.glb';

import type { TGenericObject, TModelConfig } from 'src/types';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config: { url: string; items: TGenericObject; model: TModelConfig } = {
  url: rocket,
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
    scale: 1.75,
    position: [0, -2, 0],
  },
};

export const AstroCustomizer: ComponentStory<FC> = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Customizer url={config.url} initialItemColors={config.items} modelConfig={config.model} />
  </div>
);
