export interface Category {
  id: string;
  name: string;
  title: string;
}

export const categories: Record<string, Category> = {
  breakfast: { id: 'breakfast', name: 'breakfast', title: 'Завтрак' },
  lunch: { id: 'lunch', name: 'lunch', title: 'Обед' },
  dinner: { id: 'dinner', name: 'dinner', title: 'Ужин' },
  snack: { id: 'snack', name: 'snack', title: 'Перекус' },
  // Можно добавить другие категории
}; 