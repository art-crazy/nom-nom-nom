import {Recipe} from "@/data/recipes";

export type CollectionType = 'default' | 'featured';

export interface Collection {
  title: string;
  link: string;
  type: CollectionType;
  recipes: Recipe[];
}
