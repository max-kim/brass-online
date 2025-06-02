import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const coal: Record<keyof typeof tablet['coal'], Industry> = {
  1: {
    type: 'coal',
    era: 1,
    develop: true,
    cost: { coin: 5, coal: 0, iron: 0 },
    resource: {
      1: { coal: 2, iron: 0, beer: 0 },
    },
    sell: null,
    points: { victory: 1, income: 4, link: 2 },
  },
  2: {
    type: 'coal',
    era: null,
    develop: true,
    cost: { coin: 7, coal: 0, iron: 0 },
    resource: {
      1: { coal: 3, iron: 0, beer: 0 },
      2: { coal: 3, iron: 0, beer: 0 },
    },
    sell: null,
    points: { victory: 2, income: 7, link: 1 },
  },
  3: {
    type: 'coal',
    era: null,
    develop: true,
    cost: { coin: 8, coal: 0, iron: 1 },
    resource: {
      1: { coal: 4, iron: 0, beer: 0 },
      2: { coal: 4, iron: 0, beer: 0 },
    },
    sell: null,
    points: { victory: 3, income: 6, link: 1 },
  },
  4: {
    type: 'coal',
    era: null,
    develop: true,
    cost: { coin: 10, coal: 0, iron: 1 },
    resource: {
      1: { coal: 5, iron: 0, beer: 0 },
      2: { coal: 5, iron: 0, beer: 0 },
    },
    sell: null,
    points: { victory: 4, income: 5, link: 1 },
  },
}
