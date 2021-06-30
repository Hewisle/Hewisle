import { TYPES, TYPE, COLORS, COLOR } from 'src/constants/spaceship';

const random = (arr: COLOR[] | TYPE[]) => arr[Math.floor(Math.random() * arr.length)]

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
    color: random(COLORS),
    type: random(TYPES),
    token: '',
    itsi: null
  }
};

export default state;
export type { StoreModel } from '../index';