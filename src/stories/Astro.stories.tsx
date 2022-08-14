import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

// @ts-ignore
import astronaut from '../../static/models/astronaut/scene.glb';

import type { TGenericObject, TModelConfig } from 'src/types';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config: { url: string; items: TGenericObject; model: TModelConfig; onChange: (current: string, color: string) => void } = {
  url: astronaut,
  items: {
    Suit_Base: '#ffffff',
    Suit_Details: '#ffffff',
  },
  model: {
    scale: 1.75,
    position: [0, -2, 0],
  },
  onChange: (current, color) => console.log({ current, color }),
};

export const AstroCustomizer: ComponentStory<FC> = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Customizer url={config.url} initialItemColors={config.items} modelConfig={config.model} onChange={config.onChange} />
  </div>
);
