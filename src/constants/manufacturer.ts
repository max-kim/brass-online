import type { Industry } from '../types/industry.ts';
import type { tablet } from './tablet.ts';

export const manufacturer: Record<keyof typeof tablet['manufacturer'], Industry> = {
  1: {
    type: 'manufacturer',
    era: 1,
    develop: true,
    cost: { coin: 8, coal: 1, iron: 0 },
    resource: { 1: null },
    sell: { beer: 1 },
    points: { victory: 3, income: 5, link: 2 },
  },
  2: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 10, coal: 0, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 5, income: 1, link: 1 },
  },
  3: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 12, coal: 2, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 0 },
    points: { victory: 4, income: 4, link: 0 },
  },
  4: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 8, coal: 0, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 3, income: 6, link: 1 },
  },
  5: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 16, coal: 1, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 2 },
    points: { victory: 8, income: 2, link: 2 },
  },
  6: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 20, coal: 0, iron: 0 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 7, income: 6, link: 1 },
  },
  7: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 16, coal: 1, iron: 1 },
    resource: { 1: null, 2: null },
    sell: { beer: 0 },
    points: { victory: 9, income: 4, link: 0 },
  },
  8: {
    type: 'manufacturer',
    era: null,
    develop: true,
    cost: { coin: 20, coal: 0, iron: 2 },
    resource: { 1: null, 2: null },
    sell: { beer: 1 },
    points: { victory: 11, income: 1, link: 1 },
  },
}
