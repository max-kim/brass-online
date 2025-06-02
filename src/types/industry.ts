import type { Eras, Industries, Points, Resources } from './general.ts';

type ResourcesToBuy = Extract<Resources, 'coin' | 'coal' | 'iron'>;
type ResourcesToSell = Extract<Resources, 'beer'>;
type ResourcesToBuild = Extract<Resources, 'coal' | 'iron' | 'beer'>;

export type Industry = {
  type: Industries;
  meta: { develop: boolean };
  cost: { [key in ResourcesToBuy]: number };
  sell: { [key in ResourcesToSell]: number } | null;
  points: { [key in Points]: number };
} & ({
  era: null; resource: { [key in Eras]: { [key in ResourcesToBuild]: number } | null };
} | {
  era: 1; resource: { 1: { [key in ResourcesToBuild]: number } | null };
} | {
  era: 2; resource: { 2: { [key in ResourcesToBuild]: number } | null };
});
