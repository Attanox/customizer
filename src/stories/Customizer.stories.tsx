import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import porsche from '../../static/models/porsche/scene.gltf';

export default {
  title: 'Customizer',
  component: Customizer,
} as ComponentMeta<FC>;

const config = { url: porsche };

export const Scene: ComponentStory<FC> = () => <Customizer url={config.url} />;
