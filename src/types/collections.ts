import {Recipe} from "@/data/recipes";

export const COLLECTION_TYPES = {
  DEFAULT: 'default',
  FEATURED: 'featured'
} as const;

export type CollectionType = typeof COLLECTION_TYPES[keyof typeof COLLECTION_TYPES];

export interface Collection {
  title: string;
  link: string;
  type: CollectionType;
  recipes: Recipe[];
}
