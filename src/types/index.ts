import type { RootState } from '@react-three/fiber';
import type { Group } from 'three';

export type TGenericObject = { [key: string]: string };

export type TGlobalState = {
  current: string;
  items: TGenericObject;
};

type TModelRef = React.MutableRefObject<Group | undefined>;

export type TModelConfig = {
  scale?: number;
  position?: [number, number, number];
};

export type TOnEachFrame = (state: RootState, modelRef: TModelRef) => void;
