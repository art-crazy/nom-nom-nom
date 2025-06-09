export interface Recipe {
  id: number;
  name: string;
  description: string;
  dishCategoryId: number;
  subcategoryId: number;
  cuisineCategoryId: number;
  dietCategoryId: number;
}

export interface RecipeResponse {
  items: Recipe[];
  total: number;
  page: number;
  limit: number;
  fallbackTriggered: boolean;
}

export interface RecipeFilters {
  page?: number;
  limit?: number;
  search?: string;
  dish_categories?: string;
  subcategories?: string;
  cuisine_categories?: string;
  diet_categories?: string;
} 