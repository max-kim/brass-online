import type { Industries } from './general.ts';

export type Tablet = {
  [key in Industries]: Record<number, { amount: number }>
} & { link: number }
