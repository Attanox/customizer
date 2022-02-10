import React from 'react';

export const ColorPicker = (props: { current: string | null }) => {
  return (
    <div className="color-picker">
      {/* <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} /> */}
      <h1>{props.current}</h1>
    </div>
  );
};
