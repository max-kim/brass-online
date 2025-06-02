import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const iron: Record<keyof typeof tablet['iron'], Industry> = {
  1: {
    type: 'iron',
    era: 1,
    develop: true,
    cost: { coin: 5, coal: 0, iron: 0 },
    resource: {
      1: { coal: 0, iron: 4, beer: 0 },
    },
    sell: null,
    points: { victory: 3, income: 3, link: 1 },
  },
  2: {
    type: 'iron',
    era: null,
    develop: true,
    cost: { coin: 7, coal: 0, iron: 0 },
    resource: {
      1: { coal: 0, iron: 4, beer: 0 },
      2: { coal: 0, iron: 4, beer: 0 },
    },
    sell: null,
    points: { victory: 5, income: 3, link: 1 },
  },
  3: {
    type: 'iron',
    era: null,
    develop: true,
    cost: { coin: 8, coal: 0, iron: 1 },
    resource: {
      1: { coal: 0, iron: 5, beer: 0 },
      2: { coal: 0, iron: 5, beer: 0 },
    },
    sell: null,
    points: { victory: 7, income: 2, link: 1 },
  },
  4: {
    type: 'iron',
    era: null,
    develop: true,
    cost: { coin: 10, coal: 0, iron: 1 },
    resource: {
      1: { coal: 0, iron: 6, beer: 0 },
      2: { coal: 0, iron: 6, beer: 0 },
    },
    sell: null,
    points: { victory: 9, income: 1, link: 1 },
  },
}
