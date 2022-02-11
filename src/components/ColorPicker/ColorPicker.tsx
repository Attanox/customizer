import React from 'react';
import { HexColorPicker } from 'react-colorful';

import './ColorPicker.css';

type LocalProps = { current: string | null; changeColor: (c: string) => void; currentColor: string };

export const ColorPicker = (props: LocalProps) => {
  const { changeColor, currentColor, current } = props;

  return (
    <div className="color-picker-wrapper">
      <HexColorPicker className="color-picker" color={currentColor} onChange={changeColor} />
      <h1>{current}</h1>
    </div>
  );
};
