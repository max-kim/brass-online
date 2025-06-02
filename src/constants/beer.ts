import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const beer: Record<keyof typeof tablet['beer'], Industry> = {
  1: {
    type: 'beer',
    era: 1,
    develop: true,
    cost: { coin: 5, coal: 0, iron: 1 },
    resource: {
      1: { coal: 0, iron: 4, beer: 0 },
    },
    sell: null,
    points: { victory: 4, income: 4, link: 2 },
  },
  2: {
    type: 'beer',
    era: null,
    develop: true,
    cost: { coin: 7, coal: 0, iron: 1 },
    resource: {
      1: { coal: 0, iron: 0, beer: 1 },
      2: { coal: 0, iron: 0, beer: 2 },
    },
    sell: null,
    points: { victory: 5, income: 5, link: 2 },
  },
  3: {
    type: 'beer',
    era: null,
    develop: true,
    cost: { coin: 9, coal: 0, iron: 1 },
    resource: {
      1: { coal: 0, iron: 0, beer: 1 },
      2: { coal: 0, iron: 0, beer: 2 },
    },
    sell: null,
    points: { victory: 7, income: 5, link: 2 },
  },
  4: {
    type: 'beer',
    era: 2,
    develop: true,
    cost: { coin: 9, coal: 0, iron: 1 },
    resource: {
      2: { coal: 0, iron: 0, beer: 2 },
    },
    sell: null,
    points: { victory: 10, income: 5, link: 2 },
  },
}
