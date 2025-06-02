import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const pottery: Record<keyof typeof tablet['pottery'], Industry> = {
  1: {
    type: 'pottery',
    era: null,
    meta: { develop: false },
    cost: { coin: 17, coal: 0, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 10, income: 5, link: 1 },
  },
  2: {
    type: 'pottery',
    era: null,
    meta: { develop: true },
    cost: { coin: 0, coal: 1, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 1, income: 1, link: 1 },
  },
  3: {
    type: 'pottery',
    era: null,
    meta: { develop: false },
    cost: { coin: 22, coal: 2, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 2 },
    points: { victory: 11, income: 5, link: 1 },
  },
  4: {
    type: 'pottery',
    era: null,
    meta: { develop: true },
    cost: { coin: 0, coal: 1, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 1, income: 1, link: 1 },
  },
  5: {
    type: 'pottery',
    era: 2,
    meta: { develop: true },
    cost: { coin: 24, coal: 2, iron: 0 },
    resource: { 2: null },
    sell: { beer: 2 },
    points: { victory: 20, income: 5, link: 1 },
  },
}
