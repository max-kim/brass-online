import type { Eras, Links, Resources } from './general.ts';

export type Link = {
  type: Links;
  era: Eras;
  cost: { [key in Resources]: number };
  extraBuild: { allowed: boolean; cost: { [key in Resources]: number }};
}
