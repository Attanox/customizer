import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import shoe from '../../static/models/shoe/shoe-draco.glb';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config = { url: shoe };

export const ColorSustomizer: ComponentStory<FC> = () => (
  <div style={{ width: '500px', height: '500px' }}>
    <Customizer url={config.url} />
  </div>
);
