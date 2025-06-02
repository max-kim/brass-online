import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const cotton: Record<keyof typeof tablet['cotton'], Industry> = {
  1: {
    type: 'cotton',
    era: 1,
    meta: { develop: true },
    cost: { coin: 12, coal: 0, iron: 0 },
    resource: { 1: null },
    sell: { beer: 1 },
    points: { victory: 5, income: 5, link: 1 },
  },
  2: {
    type: 'cotton',
    era: null,
    meta: { develop: true },
    cost: { coin: 14, coal: 1, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 5, income: 4, link: 2 },
  },
  3: {
    type: 'cotton',
    era: null,
    meta: { develop: true },
    cost: { coin: 16, coal: 1, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 9, income: 3, link: 1 },
  },
  4: {
    type: 'cotton',
    era: null,
    meta: { develop: true },
    cost: { coin: 18, coal: 1, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 12, income: 2, link: 1 },
  },
}
