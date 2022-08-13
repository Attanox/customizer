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

export const EcommerceCustomizer: ComponentStory<FC> = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div style={{ width: '100%', height: '500px' }}>
      <Customizer url={config.url} initialItemColors={config.items} />
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
