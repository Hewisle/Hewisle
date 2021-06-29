import { TYPES, TYPE, COLORS, COLOR } from 'src/constants/spaceship';

export interface StateModel {
  name: string,
  color: COLOR,
  type: TYPE,
  token: string
  itsi: ((position: Record<string, unknown>) => void) | null
}

function state(): StateModel {
  return {
    name: '',
    color: COLORS[0],
    type: TYPES[0],
    token: '',
    itsi: null
  }
};

export default state;
export type { StoreModel } from '../index';