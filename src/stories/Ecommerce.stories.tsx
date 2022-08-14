import React, { FC } from 'react';

import { Customizer } from '../index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import shoe from '../../static/models/shoe/shoe-draco.glb';

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

export const EcommerceCustomizer: ComponentStory<FC> = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div style={{ width: '100%', height: '500px' }}>
      <Customizer url={config.url} initialItemColors={config.items} modelConfig={config.model} />
    </div>
    <div style={{ width: '2rem' }} />
    <div style={{ width: '100%', height: '500px' }}>
      <h2>Product detail</h2>
      <div style={{ height: '2rem' }} />
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ipsum tellus. Aenean quis viverra mauris, id dapibus arcu. Nulla facilisi. Donec non elit non erat congue tincidunt.
        Maecenas sollicitudin justo id nibh auctor pharetra. Nullam vitae ipsum vitae neque tristique molestie ut in tortor. Donec eu condimentum nunc. Fusce pharetra varius urna sed euismod.
        Pellentesque imperdiet ac nisi a facilisis.
      </p>
      <div style={{ height: '0.75rem' }} />
      <p style={{ textAlign: 'justify' }}>
        Ut luctus laoreet sem. Ut a ante nisl. Cras quis cursus felis. Quisque et magna posuere turpis tristique dictum. Etiam vel quam vulputate, ullamcorper magna suscipit, malesuada diam.
        Pellentesque rutrum, nisi quis ornare iaculis, enim sapien volutpat eros, sit amet finibus sem urna sit amet odio. Duis sapien mi, faucibus id ornare et, ultricies ac orci. Mauris vitae
        pellentesque urna, id mattis nisl. Maecenas dictum at metus vel semper. Proin quis arcu diam. Ut porta lacinia velit quis finibus.
      </p>
    </div>
  </div>
);
