// Enum для единиц измерения

export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
}


// Интерфейс для питательной ценности
interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}

// Интерфейс для рецепта
export interface Recipe {
  id: number;
  name: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: string;
  nutrition: Nutrition;
  cuisine: string;
  servings: number;
  ingredients: { name: string; amount: number; unit: Unit }[];
  steps: { title: string; text: string, image?: string }[];
  imageMain?: string;
  categories: string[];
  rating: number;
  reviews: number;
  comments?: { user: string; date: string; text: string; likes: number; replies: number }[];
}

// Рецепты
export const recipes: Record<number, Recipe> = {
  1: {
    id: 1,
    name: 'ovsyanka-s-kornishinami',
    title: 'Хворост на кефире',
    description: 'Хрустящий, румяный хворост на кефире — классическая выпечка для чаепития. Быстрое и простое угощение с минимальным набором ингредиентов.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 364.04, unit: Unit.ml },
      protein: { value: 7.49, unit: Unit.g },
      fat: { value: 13.81, unit: Unit.g },
      carbs: { value: 50.47, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      { name: 'Кефир', amount: 200, unit: Unit.ml },
      { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
      { name: 'Сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Разрыхлитель', amount: 1, unit: Unit.tsp },
      { name: 'Мука', amount: 400, unit: Unit.g },
      { name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml },
      { name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        image: '/hvorost/hvorost-na-kefire-1.webp',
        title: 'Шаг 1: Замешиваем тесто',
        text: 'В глубокой миске взбей яйцо с сахаром и щепоткой соли. Влей кефир, хорошо перемешай. Добавь разрыхлитель и частями просеянную муку, замешивая тесто. Вымеси плотное, но мягкое тесто, которое не липнет к рукам. Оставь его под плёнкой на 10–15 минут отдохнуть.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-2.webp',
        title: 'Шаг 2: Формируем хворост',
        text: 'Раздели тесто на 2–3 части. Раскатай каждую часть в тонкий пласт (примерно 2 мм). Нарежь на полоски шириной 2–3 см и длиной 8–10 см. В центре каждой полоски сделай надрез и выверни один край через надрез.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-5.webp',
        title: 'Шаг 3: Обжариваем',
        text: 'Разогрей масло до температуры около 180 °C (если бросить кусочек теста, он должен сразу всплыть с пузырьками). Партиями обжаривай хворост до золотистой корочки с обеих сторон. Выложи на бумажные полотенца, чтобы убрать лишнее масло.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-6.webp',
        title: 'Шаг 4: Подача',
        text: 'Переложи хворост на блюдо и щедро посыпь сахарной пудрой. Подавай тёплым или полностью остывшим.'
      },
    ],
    imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
    categories: [
      'выпечка', 'хворост', 'на кефире', 'жареное тесто', 'сладкое к чаю', 'русская кухня', 'десерт', 'быстрый рецепт', 'домашняя выпечка', 'дешево и вкусно', 'просто'
    ],
    rating: 4.5,
    reviews: 128,
  },
};
