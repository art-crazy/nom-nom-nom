export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  bunch = 'пучок',
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
  steps: { title: string; text: string; image?: string }[];
  imageMain?: string;
  categories: string[];
  rating: number;
  reviews: number;
  comments?: { user: string; date: string; text: string; likes: number; replies: number }[];
  dishCategoriesList: { [key: string]: { id: string; title: string } };
  dishCategoriesSubList: { [key: string]: { id: string; title: string } };
  cuisineCategoriesList: { [key: string]: { id: string; title: string } };
  dietCategoriesList: { [key: string]: { id: string; title: string } };
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
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
  2: {
    id: 2,
    name: 'ovsyanka-s-kornishinami',
    title: 'Соль',
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
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
  3: {
    id: 3,
    name: 'ovsyanka-s-kornishinami',
    title: 'Сахар',
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
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
  4: {
    id: 4,
    name: 'kurica-v-smetannom-souse',
    title: 'Курица в сметанном соусе',
    description: 'Нежное куриное филе в сливочном сметанном соусе с ароматными травами. Простое и вкусное блюдо, которое понравится всей семье.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 320, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 12, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Сметана 20%', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Зелень (укроп, петрушка)', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка ингредиентов',
        text: 'Куриное филе нарежь на средние кусочки. Лук нарежь полукольцами, чеснок измельчи. Зелень мелко поруби.'
      },
      {
        title: 'Шаг 2: Обжарка курицы',
        text: 'В сковороде разогрей масло. Обжарь курицу до золотистой корочки со всех сторон. Посоли и поперчи.'
      },
      {
        title: 'Шаг 3: Приготовление соуса',
        text: 'Добавь лук и чеснок к курице, обжарь до мягкости лука. Влей сметану, перемешай и туши под крышкой 15-20 минут на среднем огне.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Перед подачей посыпь блюдо свежей зеленью. Подавай с рисом или картофельным пюре.'
      }
    ],
    categories: ['курица', 'сметанный соус', 'основное блюдо', 'русская кухня', 'семейный ужин'],
    rating: 4.8,
    reviews: 156,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  5: {
    id: 5,
    name: 'kurica-po-kievski',
    title: 'Котлета по-киевски',
    description: 'Классическое блюдо русской кухни - нежная куриная котлета с масляной начинкой в хрустящей панировке.',
    cookTime: '60 минут',
    difficulty: '4/5',
    nutrition: {
      calories: { value: 450, unit: Unit.g },
      protein: { value: 32, unit: Unit.g },
      fat: { value: 28, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 800, unit: Unit.g },
      { name: 'Масло сливочное', amount: 100, unit: Unit.g },
      { name: 'Яйцо', amount: 2, unit: Unit.pcs },
      { name: 'Мука', amount: 100, unit: Unit.g },
      { name: 'Сухари панировочные', amount: 200, unit: Unit.g },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Масло растительное', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка масляной начинки',
        text: 'Смешай размягченное сливочное масло с солью и перцем. Сформируй из масла небольшие шарики и заморозь их.'
      },
      {
        title: 'Шаг 2: Подготовка котлет',
        text: 'Куриное филе отбей в тонкий пласт. В центр каждого пласта положи замороженный шарик масла. Заверни филе, формируя котлету.'
      },
      {
        title: 'Шаг 3: Панировка',
        text: 'Обваляй котлеты в муке, затем в взбитом яйце и в панировочных сухарях. Повтори панировку еще раз для надежности.'
      },
      {
        title: 'Шаг 4: Жарка',
        text: 'Обжарь котлеты в большом количестве масла до золотистой корочки. Затем доведи до готовности в духовке при 180°C 15-20 минут.'
      }
    ],
    categories: ['курица', 'котлета по-киевски', 'основное блюдо', 'русская кухня', 'праздничное блюдо'],
    rating: 4.9,
    reviews: 203,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  6: {
    id: 6,
    name: 'kurica-tikka-masala',
    title: 'Курица Тикка Масала',
    description: 'Ароматное индийское блюдо с нежной курицей в пряном томатном соусе. Идеальное сочетание специй и сливочного вкуса.',
    cookTime: '50 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 380, unit: Unit.g },
      protein: { value: 30, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 18, unit: Unit.g },
    },
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Йогурт натуральный', amount: 200, unit: Unit.g },
      { name: 'Томаты в собственном соку', amount: 400, unit: Unit.g },
      { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Специи (куркума, кумин, кориандр)', amount: 0, unit: Unit.to_taste },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Маринад',
        text: 'Нарежь курицу кубиками. Смешай йогурт с половиной специй, чесноком и имбирем. Замаринуй курицу на 30 минут.'
      },
      {
        title: 'Шаг 2: Обжарка',
        text: 'Обжарь курицу до золотистой корочки. Отложи в сторону. В той же сковороде обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 3: Соус',
        text: 'Добавь оставшиеся специи, томаты и туши 10 минут. Влей сливки и добавь курицу. Туши еще 15 минут.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с рисом басмати и свежей кинзой.'
      }
    ],
    categories: ['курица', 'индийская кухня', 'карри', 'основное блюдо', 'пряное блюдо'],
    rating: 4.7,
    reviews: 189,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      indian: {
        id: 'indian',
        title: 'Индийская кухня'
      }
    },
    dietCategoriesList: {}
  },
  7: {
    id: 7,
    name: 'kurica-v-ajoli',
    title: 'Курица в соусе Айоли',
    description: 'Сочная курица в чесночном соусе айоли с хрустящей корочкой. Средиземноморский рецепт, который покорит любого гурмана.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 350, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 24, unit: Unit.g },
      carbs: { value: 8, unit: Unit.g },
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Чеснок', amount: 6, unit: Unit.pcs },
      { name: 'Яйцо', amount: 1, unit: Unit.pcs },
      { name: 'Оливковое масло', amount: 100, unit: Unit.ml },
      { name: 'Лимонный сок', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Петрушка', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Приготовление соуса',
        text: 'Измельчи чеснок в блендере. Добавь яйцо, лимонный сок и взбивай, постепенно вливая оливковое масло до получения густого соуса.'
      },
      {
        title: 'Шаг 2: Подготовка курицы',
        text: 'Нарежь курицу на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 3: Обжарка',
        text: 'Обжарь курицу до золотистой корочки. Добавь соус айоли и туши под крышкой 15 минут.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с отварным рисом или картофелем, украсив свежей петрушкой.'
      }
    ],
    categories: ['курица', 'средиземноморская кухня', 'чесночный соус', 'основное блюдо'],
    rating: 4.6,
    reviews: 145,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      mediterranean: {
        id: 'mediterranean',
        title: 'Средиземноморская кухня'
      }
    },
    dietCategoriesList: {}
  },
  8: {
    id: 8,
    name: 'kurica-teriyaki',
    title: 'Курица Терияки',
    description: 'Классическое японское блюдо - курица в сладком соусе терияки с кунжутом. Идеальное сочетание сладкого и соленого вкусов.',
    cookTime: '35 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 320, unit: Unit.g },
      protein: { value: 26, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 22, unit: Unit.g },
    },
    cuisine: 'Японская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Соус терияки', amount: 100, unit: Unit.ml },
      { name: 'Мед', amount: 2, unit: Unit.tbsp },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Зеленый лук', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Маринад',
        text: 'Нарежь курицу на кусочки. Смешай соус терияки с медом, измельченным чесноком и имбирем. Замаринуй курицу на 15 минут.'
      },
      {
        title: 'Шаг 2: Обжарка',
        text: 'Обжарь курицу до золотистой корочки. Добавь маринад и туши под крышкой 10-15 минут.'
      },
      {
        title: 'Шаг 3: Финальный штрих',
        text: 'Посыпь кунжутом и мелко нарезанным зеленым луком.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с рисом и овощами.'
      }
    ],
    categories: ['курица', 'японская кухня', 'терияки', 'основное блюдо', 'азиатская кухня'],
    rating: 4.8,
    reviews: 167,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      japanese: {
        id: 'japanese',
        title: 'Японская кухня'
      }
    },
    dietCategoriesList: {}
  },
  9: {
    id: 9,
    name: 'kurica-v-paprike',
    title: 'Курица в паприке',
    description: 'Венгерское блюдо - нежная курица в густом соусе с паприкой и сметаной. Ароматное и сытное блюдо для всей семьи.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 20, unit: Unit.g },
      carbs: { value: 14, unit: Unit.g },
    },
    cuisine: 'Венгерская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp },
      { name: 'Сметана 20%', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка',
        text: 'Нарежь курицу на кусочки. Лук нарежь полукольцами, чеснок измельчи.'
      },
      {
        title: 'Шаг 2: Обжарка',
        text: 'Обжарь лук до прозрачности. Добавь паприку и быстро перемешай. Добавь курицу и обжарь до золотистой корочки.'
      },
      {
        title: 'Шаг 3: Тушение',
        text: 'Добавь сметану, чеснок, соль и перец. Туши под крышкой 20-25 минут на среднем огне.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с отварным рисом или картофельным пюре.'
      }
    ],
    categories: ['курица', 'венгерская кухня', 'паприка', 'основное блюдо', 'семейный ужин'],
    rating: 4.7,
    reviews: 156,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      hungarian: {
        id: 'hungarian',
        title: 'Венгерская кухня'
      }
    },
    dietCategoriesList: {}
  },
  10: {
    id: 10,
    name: 'kurica-karri',
    title: 'Курица Карри',
    description: 'Ароматное блюдо индийской кухни - курица в пряном соусе карри с кокосовым молоком. Идеальное сочетание специй и нежного мяса.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 360, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 24, unit: Unit.g },
      carbs: { value: 16, unit: Unit.g },
    },
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Кокосовое молоко', amount: 400, unit: Unit.ml },
      { name: 'Паста карри', amount: 2, unit: Unit.tbsp },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Кинза', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка',
        text: 'Нарежь курицу на кусочки. Лук нарежь полукольцами, чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 2: Обжарка',
        text: 'Обжарь лук до прозрачности. Добавь чеснок и имбирь, обжарь 1 минуту. Добавь пасту карри и обжарь еще 1 минуту.'
      },
      {
        title: 'Шаг 3: Тушение',
        text: 'Добавь курицу и обжарь до золотистой корочки. Влей кокосовое молоко, посоли и туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с рисом басмати, украсив свежей кинзой.'
      }
    ],
    categories: ['курица', 'индийская кухня', 'карри', 'основное блюдо', 'пряное блюдо'],
    rating: 4.7,
    reviews: 178,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      indian: {
        id: 'indian',
        title: 'Индийская кухня'
      }
    },
    dietCategoriesList: {}
  },
  11: {
    id: 11,
    name: 'kurica-po-kitajski',
    title: 'Курица по-китайски',
    description: 'Классическое китайское блюдо с курицей в кисло-сладком соусе с ананасами и перцем. Идеальное сочетание сладкого и кислого вкуса.',
    cookTime: '40 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 27, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g },
    },
    cuisine: 'Китайская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Ананас', amount: 200, unit: Unit.g },
      { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
      { name: 'Уксус', amount: 1, unit: Unit.tbsp },
      { name: 'Сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Крахмал', amount: 1, unit: Unit.tbsp },
      { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
      { name: 'Рис', amount: 200, unit: Unit.g }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка',
        text: 'Нарежь курицу кубиками. Ананас нарежь кубиками. Перец и лук нарежь соломкой. Чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 2: Соус',
        text: 'Смешай соевый соус, уксус, сахар и крахмал.'
      },
      {
        title: 'Шаг 3: Обжарка',
        text: 'Обжарь курицу до золотистой корочки. Добавь овощи и обжарь 2-3 минуты.'
      },
      {
        title: 'Шаг 4: Финальный штрих',
        text: 'Добавь соус и ананас, туши 5 минут.'
      }
    ],
    categories: ['курица', 'китайская кухня', 'кисло-сладкое блюдо', 'основное блюдо', 'азиатская кухня'],
    rating: 4.8,
    reviews: 167,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      chinese: {
        id: 'chinese',
        title: 'Китайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  12: {
    id: 12,
    name: 'kurica-po-tajski',
    title: 'Курица по-тайски',
    description: 'Ароматное тайское блюдо с курицей в кокосовом карри. Идеальное сочетание пряностей и кокосового вкуса.',
    cookTime: '45 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 360, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 24, unit: Unit.g },
      carbs: { value: 16, unit: Unit.g },
    },
    cuisine: 'Тайская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Кокосовое молоко', amount: 400, unit: Unit.ml },
      { name: 'Паста карри', amount: 2, unit: Unit.tbsp },
      { name: 'Бамбуковые ростки', amount: 100, unit: Unit.g },
      { name: 'Баклажан', amount: 1, unit: Unit.pcs },
      { name: 'Лимонная трава', amount: 2, unit: Unit.pcs },
      { name: 'Листья лайма', amount: 4, unit: Unit.pcs },
      { name: 'Рыбный соус', amount: 1, unit: Unit.tbsp },
      { name: 'Пальмовый сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Рис', amount: 200, unit: Unit.g }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка',
        text: 'Нарежь курицу кубиками. Баклажан нарежь кубиками. Лимонную траву нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 2: Обжарка пряностей',
        text: 'Обжарь пасту карри до появления аромата. Добавь лимонную траву и листья лайма.'
      },
      {
        title: 'Шаг 3: Тушение',
        text: 'Добавь курицу и обжарь до золотистой корочки. Влей кокосовое молоко, добавь овощи и туши 20-25 минут.'
      },
      {
        title: 'Шаг 4: Финальный штрих',
        text: 'Добавь рыбный соус и пальмовый сахар, туши еще 5 минут.'
      }
    ],
    categories: ['курица', 'тайская кухня', 'карри', 'основное блюдо', 'азиатская кухня'],
    rating: 4.9,
    reviews: 189,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      thai: {
        id: 'thai',
        title: 'Тайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  13: {
    id: 13,
    name: 'kurica-po-korejski',
    title: 'Курица по-корейски',
    description: 'Острое корейское блюдо с курицей в соусе гочуджан. Идеальное сочетание остроты и сладости.',
    cookTime: '35 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 20, unit: Unit.g },
    },
    cuisine: 'Корейская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Паста гочуджан', amount: 2, unit: Unit.tbsp },
      { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Кунжутное масло', amount: 1, unit: Unit.tbsp },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Кунжут', amount: 1, unit: Unit.tbsp },
      { name: 'Зеленый лук', amount: 2, unit: Unit.pcs },
      { name: 'Рис', amount: 200, unit: Unit.g }
    ],
    steps: [
      {
        title: 'Шаг 1: Маринад',
        text: 'Смешай пасту гочуджан, соевый соус, мед, кунжутное масло, чеснок и имбирь. Замаринуй курицу на 15 минут.'
      },
      {
        title: 'Шаг 2: Обжарка',
        text: 'Обжарь курицу до золотистой корочки, периодически помешивая.'
      },
      {
        title: 'Шаг 3: Финальный штрих',
        text: 'Добавь нарезанный зеленый лук и кунжут, обжарь еще 2-3 минуты.'
      },
      {
        title: 'Шаг 4: Подача',
        text: 'Подавай с отварным рисом, украсив кунжутом и зеленым луком.'
      }
    ],
    categories: ['курица', 'корейская кухня', 'острое блюдо', 'основное блюдо', 'азиатская кухня'],
    rating: 4.8,
    reviews: 156,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      korean: {
        id: 'korean',
        title: 'Корейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  14: {
    id: 14,
    name: 'kurica-v-klubnichnom-souse',
    title: 'Курица в клубничном соусе',
    description: 'Необычное сочетание нежной курицы и сладкого клубничного соуса с пряными нотками. Изысканное блюдо для особых случаев.',
    cookTime: '60 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 320, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 22, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Клубника', amount: 300, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Тимьян', amount: 2, unit: Unit.tbsp },
      { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Сахар', amount: 1, unit: Unit.tsp },
      { name: 'Крахмал', amount: 1, unit: Unit.tsp }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой под холодной водой и обсуши бумажным полотенцем. Нарежь на порционные куски толщиной 2-3 см.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'В глубокой миске смешай оливковое масло, измельченный чеснок, тимьян, соль и перец. Обмажь курицу маринадом и оставь на 20 минут при комнатной температуре.'
      },
      {
        title: 'Шаг 3: Подготовка клубники',
        text: 'Клубнику промой, удали плодоножки и нарежь на четвертинки. 1/3 клубники отложи для украшения.'
      },
      {
        title: 'Шаг 4: Приготовление соуса',
        text: 'В блендере измельчи 2/3 клубники до состояния пюре. Процеди через сито, чтобы удалить семена.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'Лук нарежь тонкими полукольцами. В сотейнике разогрей 1 ст.л. оливкового масла и обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь клубничное пюре в сотейник с луком. Влей бальзамический уксус, добавь мед и сахар. Туши на среднем огне 10 минут.'
      },
      {
        title: 'Шаг 7: Загущение соуса',
        text: 'Разведи крахмал в 2 ст.л. холодной воды. Влей в соус, постоянно помешивая. Доведи до загустения.'
      },
      {
        title: 'Шаг 8: Обжарка курицы',
        text: 'В сковороде разогрей оставшееся масло. Обжарь курицу до золотистой корочки с обеих сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Переложи курицу в сотейник с соусом. Туши под крышкой на медленном огне 15-20 минут, пока курица не станет мягкой.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Добавь оставшиеся кусочки клубники в соус, аккуратно перемешай и прогрей 2-3 минуты.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в клубничном соусе с отварным рисом или картофельным пюре. Укрась свежими листиками тимьяна.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо', 'праздничное блюдо'],
    rating: 4.7,
    reviews: 89,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  15: {
    id: 15,
    name: 'kurica-v-orehovom-souse',
    title: 'Курица в ореховом соусе',
    description: 'Нежная курица в густом ореховом соусе с ароматом чеснока и специй. Традиционное грузинское блюдо сациви.',
    cookTime: '90 минут',
    difficulty: '4/5',
    nutrition: {
      calories: { value: 450, unit: Unit.g },
      protein: { value: 32, unit: Unit.g },
      fat: { value: 35, unit: Unit.g },
      carbs: { value: 12, unit: Unit.g },
    },
    cuisine: 'Грузинская',
    servings: 6,
    // Общий вес блюда: 1800 г
    ingredients: [
      { name: 'Курица (целая)', amount: 1500, unit: Unit.g },
      { name: 'Грецкие орехи', amount: 500, unit: Unit.g },
      { name: 'Лук репчатый', amount: 3, unit: Unit.pcs },
      { name: 'Чеснок', amount: 6, unit: Unit.pcs },
      { name: 'Хмели-сунели', amount: 2, unit: Unit.tbsp },
      { name: 'Шафран', amount: 1, unit: Unit.tsp },
      { name: 'Корица', amount: 1, unit: Unit.tsp },
      { name: 'Гвоздика', amount: 4, unit: Unit.pcs },
      { name: 'Лавровый лист', amount: 2, unit: Unit.pcs },
      { name: 'Уксус винный', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Курицу промой, обсуши и разрежь на порционные куски. Удали лишний жир.'
      },
      {
        title: 'Шаг 2: Варка курицы',
        text: 'В большой кастрюле вскипяти воду. Добавь соль, перец, лавровый лист и гвоздику. Опусти курицу и вари на медленном огне 40-45 минут.'
      },
      {
        title: 'Шаг 3: Подготовка орехов',
        text: 'Грецкие орехи очисти от перегородок и обжарь на сухой сковороде до появления аромата (5-7 минут).'
      },
      {
        title: 'Шаг 4: Измельчение орехов',
        text: 'Остывшие орехи измельчи в блендере до состояния мелкой крошки. Не допускай образования ореховой пасты.'
      },
      {
        title: 'Шаг 5: Подготовка лука',
        text: 'Лук нарежь тонкими полукольцами. Чеснок очисти и измельчи.'
      },
      {
        title: 'Шаг 6: Обжарка лука',
        text: 'В глубокой сковороде обжарь лук до золотистого цвета. Добавь чеснок и обжарь еще 2-3 минуты.'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Добавь к луку измельченные орехи, хмели-сунели, корицу и шафран. Перемешай и прогрей 2-3 минуты.'
      },
      {
        title: 'Шаг 8: Соединение ингредиентов',
        text: 'Влей 2 стакана бульона от варки курицы в соус. Добавь винный уксус. Перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Уменьши огонь до минимума. Добавь курицу в соус и туши под крышкой 20-25 минут, периодически помешивая.'
      },
      {
        title: 'Шаг 10: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 30 минут для настаивания.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай сациви в теплом виде, украсив свежей зеленью и гранатовыми зернами.'
      }
    ],
    categories: ['курица', 'грузинская кухня', 'ореховый соус', 'основное блюдо', 'праздничное блюдо'],
    rating: 4.9,
    reviews: 156,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      georgian: {
        id: 'georgian',
        title: 'Грузинская кухня'
      }
    },
    dietCategoriesList: {}
  },
  16: {
    id: 16,
    name: 'kurica-v-ajvarskom-souse',
    title: 'Курица в соусе Айвар',
    description: 'Нежная курица в густом соусе из запеченных баклажанов и перца по-балкански. Ароматное и сытное блюдо с характерным вкусом.',
    cookTime: '75 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 380, unit: Unit.g },
      protein: { value: 30, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 18, unit: Unit.g },
    },
    cuisine: 'Балканская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Баклажаны', amount: 2, unit: Unit.pcs },
      { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Томаты', amount: 3, unit: Unit.pcs },
      { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
      { name: 'Уксус бальзамический', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Сахар', amount: 1, unit: Unit.tsp },
      { name: 'Зелень (петрушка, базилик)', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка овощей',
        text: 'Баклажаны нарежь вдоль на пластины толщиной 1 см. Перец разрежь пополам и удали семена. Томаты нарежь дольками.'
      },
      {
        title: 'Шаг 2: Запекание овощей',
        text: 'Выложи баклажаны и перец на противень, смазанный маслом. Запекай в разогретой до 200°C духовке 20-25 минут до мягкости.'
      },
      {
        title: 'Шаг 3: Приготовление айвара',
        text: 'Запеченные овощи очисти от кожицы. Измельчи в блендере до состояния пюре. Добавь измельченный чеснок, соль, перец и сахар.'
      },
      {
        title: 'Шаг 4: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'Лук нарежь полукольцами. В глубокой сковороде разогрей 2 ст.л. масла и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 6: Обжарка курицы',
        text: 'Добавь курицу к луку и обжарь до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Добавь айвар в сковороду, перемешай с курицей. Влей бальзамический уксус и 100 мл воды.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Добавь томаты, накрой крышкой и туши на медленном огне 20-25 минут, периодически помешивая.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Добавь мелко нарезанную зелень, перемешай и прогрей еще 2-3 минуты.'
      },
      {
        title: 'Шаг 10: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 10-15 минут для настаивания.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе айвар с отварным рисом или картофельным пюре. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'балканская кухня', 'соус', 'основное блюдо', 'семейный ужин'],
    rating: 4.6,
    reviews: 78,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      balkan: {
        id: 'balkan',
        title: 'Балканская кухня'
      }
    },
    dietCategoriesList: {}
  },
  17: {
    id: 17,
    name: 'kurica-v-mango-souse',
    title: 'Курица в соусе из манго',
    description: 'Экзотическое блюдо с курицей в сладком соусе из манго с нотками имбиря и чили. Изысканное сочетание вкусов.',
    cookTime: '50 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g },
    },
    cuisine: 'Азиатская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Манго', amount: 2, unit: Unit.pcs },
      { name: 'Имбирь', amount: 30, unit: Unit.g },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Перец чили', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Лимонный сок', amount: 2, unit: Unit.tbsp },
      { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
      { name: 'Крахмал', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка манго',
        text: 'Манго очисти от кожуры и нарежь кубиками. 1/3 манго отложи для украшения.'
      },
      {
        title: 'Шаг 2: Приготовление соуса',
        text: '2/3 манго измельчи в блендере до состояния пюре. Добавь лимонный сок и мед, перемешай.'
      },
      {
        title: 'Шаг 3: Подготовка специй',
        text: 'Имбирь очисти и натри на мелкой терке. Чеснок измельчи. Чили нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 4: Маринад',
        text: 'Смешай соевый соус, кунжутное масло, половину имбиря и чеснока. Замаринуй курицу на 15 минут.'
      },
      {
        title: 'Шаг 5: Подготовка курицы',
        text: 'Куриное филе нарежь на тонкие полоски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 6: Обжарка лука',
        text: 'Лук нарежь тонкими полукольцами. В воке или глубокой сковороде разогрей масло и обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 7: Обжарка курицы',
        text: 'Добавь курицу к луку и обжарь на сильном огне 5-7 минут, постоянно помешивая.'
      },
      {
        title: 'Шаг 8: Приготовление соуса',
        text: 'Добавь пюре из манго, оставшийся имбирь, чеснок и чили. Перемешай и прогрей 2-3 минуты.'
      },
      {
        title: 'Шаг 9: Загущение',
        text: 'Разведи крахмал в 2 ст.л. холодной воды. Влей в соус, постоянно помешивая. Доведи до загустения.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Добавь оставшиеся кусочки манго, аккуратно перемешай и прогрей еще 1-2 минуты.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из манго с отварным рисом. Укрась свежей кинзой и кунжутом.'
      }
    ],
    categories: ['курица', 'азиатская кухня', 'соус', 'основное блюдо', 'экзотическое блюдо'],
    rating: 4.8,
    reviews: 92,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      asian: {
        id: 'asian',
        title: 'Азиатская кухня'
      }
    },
    dietCategoriesList: {}
  },
  18: {
    id: 18,
    name: 'kurica-v-granatovom-souse',
    title: 'Курица в гранатовом соусе',
    description: 'Нежная курица в кисло-сладком соусе из гранатового сока с ароматом специй. Традиционное кавказское блюдо.',
    cookTime: '65 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 350, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 20, unit: Unit.g },
      carbs: { value: 18, unit: Unit.g },
    },
    cuisine: 'Кавказская',
    servings: 4,
    // Общий вес блюда: 1350 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Гранатовый сок', amount: 300, unit: Unit.ml },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Кориандр', amount: 1, unit: Unit.tbsp },
      { name: 'Корица', amount: 1, unit: Unit.tsp },
      { name: 'Гвоздика', amount: 3, unit: Unit.pcs },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
      { name: 'Крахмал', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste },
      { name: 'Гранатовые зерна', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'Смешай гранатовый сок с половиной измельченного чеснока, кориандром и корицей. Замаринуй курицу на 20 минут.'
      },
      {
        title: 'Шаг 3: Подготовка лука',
        text: 'Лук нарежь тонкими полукольцами. Оставшийся чеснок измельчи.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В глубокой сковороде разогрей масло. Обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'Добавь курицу к луку и обжарь до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Влей маринад в сковороду, добавь гвоздику и мед. Перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Уменьши огонь до минимума. Накрой крышкой и туши 20-25 минут, периодически помешивая.'
      },
      {
        title: 'Шаг 8: Загущение',
        text: 'Разведи крахмал в 2 ст.л. холодной воды. Влей в соус, постоянно помешивая. Доведи до загустения.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 10-15 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Добавь гранатовые зерна и аккуратно перемешай.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в гранатовом соусе с отварным рисом или картофельным пюре. Укрась свежими гранатовыми зернами.'
      }
    ],
    categories: ['курица', 'кавказская кухня', 'соус', 'основное блюдо', 'праздничное блюдо'],
    rating: 4.7,
    reviews: 85,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      caucasian: {
        id: 'caucasian',
        title: 'Кавказская кухня'
      }
    },
    dietCategoriesList: {}
  },
  19: {
    id: 19,
    name: 'kurica-v-romovom-souse',
    title: 'Курица в ромовом соусе',
    description: 'Изысканное блюдо с курицей в сладком соусе из рома с ананасами и специями. Карибская кухня в лучших традициях.',
    cookTime: '70 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 380, unit: Unit.g },
      protein: { value: 30, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 20, unit: Unit.g },
    },
    cuisine: 'Карибская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Ром', amount: 100, unit: Unit.ml },
      { name: 'Ананас', amount: 300, unit: Unit.g },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Корица', amount: 1, unit: Unit.tsp },
      { name: 'Гвоздика', amount: 3, unit: Unit.pcs },
      { name: 'Коричневый сахар', amount: 2, unit: Unit.tbsp },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'Смешай ром с половиной коричневого сахара, измельченным чесноком и имбирем. Замаринуй курицу на 30 минут.'
      },
      {
        title: 'Шаг 3: Подготовка ананаса',
        text: 'Ананас очисти и нарежь кубиками. 1/3 ананаса отложи для украшения.'
      },
      {
        title: 'Шаг 4: Подготовка лука',
        text: 'Лук нарежь тонкими полукольцами. Чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'В глубокой сковороде разогрей смесь оливкового и сливочного масла. Обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 6: Обжарка курицы',
        text: 'Добавь курицу к луку и обжарь до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Влей маринад в сковороду, добавь корицу, гвоздику и оставшийся сахар. Перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Добавь 2/3 ананаса, накрой крышкой и туши на медленном огне 20-25 минут, периодически помешивая.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Добавь оставшиеся кусочки ананаса, аккуратно перемешай и прогрей еще 2-3 минуты.'
      },
      {
        title: 'Шаг 10: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 10-15 минут для настаивания.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в ромовом соусе с отварным рисом. Укрась свежими кусочками ананаса и листиками мяты.'
      }
    ],
    categories: ['курица', 'карибская кухня', 'соус', 'основное блюдо', 'праздничное блюдо'],
    rating: 4.8,
    reviews: 94,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      caribbean: {
        id: 'caribbean',
        title: 'Карибская кухня'
      }
    },
    dietCategoriesList: {}
  },
  20: {
    id: 20,
    name: 'kurica-v-souse-iz-shampinonov',
    title: 'Курица в соусе из шампиньонов',
    description: 'Нежная курица в сливочном соусе с шампиньонами и ароматными травами. Классическое французское блюдо.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 320, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 12, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Шампиньоны', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
      { name: 'Белое вино', amount: 100, unit: Unit.ml },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Мука', amount: 1, unit: Unit.tbsp },
      { name: 'Тимьян', amount: 1, unit: Unit.tsp },
      { name: 'Розмарин', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка грибов',
        text: 'Шампиньоны очисти, промой и нарежь пластинками. Лук нарежь кубиками, чеснок измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 5: Обжарка грибов',
        text: 'Добавь шампиньоны и обжаривай 5-7 минут, пока не испарится жидкость.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь чеснок, тимьян и розмарин. Обжаривай 1 минуту, затем влей вино и готовь, пока не испарится половина жидкости.'
      },
      {
        title: 'Шаг 7: Загущение соуса',
        text: 'Добавь муку, перемешай и готовь 1 минуту. Постепенно влей сливки, постоянно помешивая.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в грибном соусе с отварным рисом или картофельным пюре. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.6,
    reviews: 78,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  21: {
    id: 21,
    name: 'kurica-v-souse-iz-avokado',
    title: 'Курица в соусе из авокадо',
    description: 'Нежная курица в сливочном соусе из авокадо с лаймом и кинзой. Мексиканская кухня в современном исполнении.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 24, unit: Unit.g },
      carbs: { value: 8, unit: Unit.g },
    },
    cuisine: 'Мексиканская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Авокадо', amount: 2, unit: Unit.pcs },
      { name: 'Лайм', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Кинза', amount: 1, unit: Unit.bunch },
      { name: 'Сливки 20%', amount: 100, unit: Unit.ml },
      { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
      { name: 'Кумин', amount: 1, unit: Unit.tsp },
      { name: 'Чили порошок', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли, поперчи и посыпь кумином.'
      },
      {
        title: 'Шаг 2: Подготовка авокадо',
        text: 'Авокадо очисти, удали косточку и нарежь кубиками. Сбрызни соком лайма, чтобы не потемнело.'
      },
      {
        title: 'Шаг 3: Подготовка зелени',
        text: 'Кинзу промой, обсуши и мелко нарежь. Чеснок измельчи.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 5: Приготовление соуса',
        text: 'В блендере измельчи авокадо, чеснок, половину кинзы, сок лайма и сливки до однородной массы.'
      },
      {
        title: 'Шаг 6: Соединение ингредиентов',
        text: 'Добавь соус из авокадо к курице, перемешай и прогрей на медленном огне 5-7 минут.'
      },
      {
        title: 'Шаг 7: Добавление специй',
        text: 'Добавь чили порошок и оставшуюся кинзу, перемешай.'
      },
      {
        title: 'Шаг 8: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из авокадо с отварным рисом или лепешками. Укрась дольками лайма и листиками кинзы.'
      }
    ],
    categories: ['курица', 'мексиканская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 82,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      mexican: {
        id: 'mexican',
        title: 'Мексиканская кухня'
      }
    },
    dietCategoriesList: {}
  },
  22: {
    id: 22,
    name: 'kurica-v-souse-iz-tomatov',
    title: 'Курица в соусе из томатов',
    description: 'Нежная курица в ароматном томатном соусе с базиликом и чесноком. Итальянская кухня в лучших традициях.',
    cookTime: '60 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 310, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 15, unit: Unit.g },
    },
    cuisine: 'Итальянская',
    servings: 4,
    // Общий вес блюда: 1250 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Томаты в собственном соку', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Базилик', amount: 1, unit: Unit.bunch },
      { name: 'Орегано', amount: 1, unit: Unit.tsp },
      { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
      { name: 'Сахар', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи. Базилик промой, обсуши и мелко нарежь.'
      },
      {
        title: 'Шаг 3: Обжарка лука',
        text: 'В глубокой сковороде разогрей масло. Обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 4: Обжарка чеснока',
        text: 'Добавь чеснок и обжаривай 1 минуту, пока не появится аромат.'
      },
      {
        title: 'Шаг 5: Добавление томатов',
        text: 'Добавь томаты в собственном соку, разомни их ложкой. Добавь сахар, орегано и половину базилика.'
      },
      {
        title: 'Шаг 6: Тушение соуса',
        text: 'Доведи соус до кипения, уменьши огонь и туши 15-20 минут, периодически помешивая.'
      },
      {
        title: 'Шаг 7: Обжарка курицы',
        text: 'В отдельной сковороде обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны).'
      },
      {
        title: 'Шаг 8: Соединение ингредиентов',
        text: 'Переложи курицу в соус, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Добавь оставшийся базилик, перемешай и попробуй на соль и перец.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в томатном соусе с пастой или отварным рисом. Укрась свежими листиками базилика.'
      }
    ],
    categories: ['курица', 'итальянская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 95,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      }
    },
    dietCategoriesList: {}
  },
  23: {
    id: 23,
    name: 'kurica-v-souse-iz-shpinata',
    title: 'Курица в соусе из шпината',
    description: 'Нежная курица в сливочном соусе из шпината с чесноком и мускатным орехом. Французская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 20, unit: Unit.g },
      carbs: { value: 10, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Шпинат замороженный', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Мускатный орех', amount: 0.5, unit: Unit.tsp },
      { name: 'Мука', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи. Шпинат разморозь и отожми лишнюю жидкость.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Добавление сливок',
        text: 'Постепенно влей сливки, постоянно помешивая, чтобы не было комочков.'
      },
      {
        title: 'Шаг 7: Добавление шпината',
        text: 'Добавь шпинат, мускатный орех, соль и перец. Перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из шпината с отварным рисом или картофельным пюре. Укрась свежим шпинатом.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 88,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  24: {
    id: 24,
    name: 'kurica-v-souse-iz-tykvy',
    title: 'Курица в соусе из тыквы',
    description: 'Нежная курица в сливочном соусе из тыквы с имбирем и карри. Азиатская кухня в современном исполнении.',
    cookTime: '65 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 19, unit: Unit.g },
      carbs: { value: 22, unit: Unit.g },
    },
    cuisine: 'Азиатская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Тыква', amount: 500, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Карри', amount: 1, unit: Unit.tbsp },
      { name: 'Кокосовое молоко', amount: 200, unit: Unit.ml },
      { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка тыквы',
        text: 'Тыкву очисти от кожуры и семян, нарежь кубиками. Лук нарежь кубиками, чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде обжарь лук до прозрачности.'
      },
      {
        title: 'Шаг 5: Обжарка специй',
        text: 'Добавь чеснок, имбирь и карри. Обжаривай 1 минуту, пока не появится аромат.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь тыкву, перемешай и обжаривай 5 минут. Влей кокосовое молоко, доведи до кипения.'
      },
      {
        title: 'Шаг 7: Тушение тыквы',
        text: 'Уменьши огонь и туши тыкву 15-20 минут под крышкой, пока она не станет мягкой.'
      },
      {
        title: 'Шаг 8: Измельчение соуса',
        text: 'Измельчи соус блендером до однородной массы.'
      },
      {
        title: 'Шаг 9: Тушение курицы',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 10: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из тыквы с отварным рисом. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'азиатская кухня', 'соус', 'основное блюдо'],
    rating: 4.6,
    reviews: 76,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      asian: {
        id: 'asian',
        title: 'Азиатская кухня'
      }
    },
    dietCategoriesList: {}
  },
  25: {
    id: 25,
    name: 'kurica-v-souse-iz-sliv',
    title: 'Курица в соусе из слив',
    description: 'Нежная курица в кисло-сладком соусе из слив с корицей и гвоздикой. Венгерская кухня в лучших традициях.',
    cookTime: '70 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 350, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g },
    },
    cuisine: 'Венгерская',
    servings: 4,
    // Общий вес блюда: 1350 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Сливы', amount: 500, unit: Unit.g },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Корица', amount: 1, unit: Unit.tsp },
      { name: 'Гвоздика', amount: 3, unit: Unit.pcs },
      { name: 'Мед', amount: 2, unit: Unit.tbsp },
      { name: 'Бальзамический уксус', amount: 1, unit: Unit.tbsp },
      { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка слив',
        text: 'Сливы промой, удали косточки и нарежь дольками. Лук нарежь тонкими полукольцами, чеснок измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Приготовление соуса',
        text: 'Добавь чеснок, корицу и гвоздику. Обжаривай 1 минуту, пока не появится аромат.'
      },
      {
        title: 'Шаг 6: Добавление слив',
        text: 'Добавь сливы, мед и бальзамический уксус. Перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 7: Тушение соуса',
        text: 'Уменьши огонь и туши сливы 15-20 минут, пока они не размягчатся и не начнут распадаться.'
      },
      {
        title: 'Шаг 8: Соединение ингредиентов',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 10-15 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из слив с отварным рисом или картофельным пюре. Укрась свежими сливами и листиками мяты.'
      }
    ],
    categories: ['курица', 'венгерская кухня', 'соус', 'основное блюдо', 'праздничное блюдо'],
    rating: 4.8,
    reviews: 92,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      hungarian: {
        id: 'hungarian',
        title: 'Венгерская кухня'
      }
    },
    dietCategoriesList: {}
  },
  26: {
    id: 26,
    name: 'kurica-v-souse-iz-ablok',
    title: 'Курица в соусе из яблок',
    description: 'Нежная курица в кисло-сладком соусе из яблок с тимьяном и розмарином. Французская кухня в лучших традициях.',
    cookTime: '60 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 20, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Яблоки', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.tsp },
      { name: 'Розмарин', amount: 1, unit: Unit.tsp },
      { name: 'Белое вино', amount: 100, unit: Unit.ml },
      { name: 'Сливки 20%', amount: 100, unit: Unit.ml },
      { name: 'Масло сливочное', amount: 50, unit: Unit.g },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка яблок',
        text: 'Яблоки очисти от кожуры и сердцевины, нарежь дольками. Лук нарежь тонкими полукольцами, чеснок измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка яблок',
        text: 'Добавь яблоки и обжаривай 5 минут, пока они не начнут размягчаться.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь чеснок, тимьян и розмарин. Обжаривай 1 минуту, затем влей вино и готовь, пока не испарится половина жидкости.'
      },
      {
        title: 'Шаг 7: Добавление сливок',
        text: 'Влей сливки, перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из яблок с отварным рисом или картофельным пюре. Укрась свежими дольками яблок и веточками тимьяна.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 85,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  27: {
    id: 27,
    name: 'kurica-v-souse-iz-gribov',
    title: 'Курица в соусе из грибов',
    description: 'Нежная курица в сливочном соусе из лесных грибов с чесноком и тимьяном. Русская кухня в лучших традициях.',
    cookTime: '75 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 21, unit: Unit.g },
      carbs: { value: 12, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Грибы лесные', amount: 500, unit: Unit.g },
      { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.tsp },
      { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
      { name: 'Белое вино', amount: 100, unit: Unit.ml },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Мука', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка грибов',
        text: 'Грибы очисти, промой и нарежь пластинками. Лук нарежь кубиками, чеснок измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка грибов',
        text: 'Добавь грибы и обжаривай 10-15 минут, пока не испарится жидкость и грибы не подрумянятся.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту, затем влей вино и готовь, пока не испарится половина жидкости.'
      },
      {
        title: 'Шаг 7: Загущение соуса',
        text: 'Добавь муку, перемешай и готовь 1 минуту. Постепенно влей сливки, постоянно помешивая.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 20-25 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 10-15 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в грибном соусе с отварным рисом или картофельным пюре. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'русская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 94,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  28: {
    id: 28,
    name: 'kurica-v-souse-iz-slivok',
    title: 'Курица в сливочном соусе',
    description: 'Нежная курица в сливочном соусе с чесноком и зеленью. Классическое французское блюдо.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 320, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 8, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Сливки 20%', amount: 300, unit: Unit.ml },
      { name: 'Чеснок', amount: 4, unit: Unit.pcs },
      { name: 'Зелень петрушки', amount: 1, unit: Unit.bunch },
      { name: 'Зелень укропа', amount: 1, unit: Unit.bunch },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Мука', amount: 1, unit: Unit.tbsp },
      { name: 'Белое вино', amount: 100, unit: Unit.ml },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка зелени',
        text: 'Чеснок измельчи, зелень мелко нарежь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей сливочное масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Приготовление соуса',
        text: 'В той же сковороде обжарь чеснок до аромата (1-2 минуты).'
      },
      {
        title: 'Шаг 5: Добавление вина',
        text: 'Влей вино и готовь, пока не испарится половина жидкости.'
      },
      {
        title: 'Шаг 6: Загущение соуса',
        text: 'Добавь муку, перемешай и готовь 1 минуту. Постепенно влей сливки, постоянно помешивая.'
      },
      {
        title: 'Шаг 7: Добавление зелени',
        text: 'Добавь половину нарезанной зелени, перемешай.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в сливочном соусе с отварным рисом или картофельным пюре. Укрась оставшейся зеленью.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.6,
    reviews: 78,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  29: {
    id: 29,
    name: 'kurica-v-souse-iz-pomidorov',
    title: 'Курица в томатном соусе',
    description: 'Нежная курица в ароматном томатном соусе с базиликом и орегано. Итальянская кухня в лучших традициях.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 310, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 15, unit: Unit.g },
    },
    cuisine: 'Итальянская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Томаты в собственном соку', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Базилик', amount: 1, unit: Unit.bunch },
      { name: 'Орегано', amount: 1, unit: Unit.tsp },
      { name: 'Оливковое масло', amount: 2, unit: Unit.tbsp },
      { name: 'Сахар', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи, базилик нарежь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей оливковое масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь томаты в собственном соку, разомни их ложкой. Добавь орегано и сахар.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 20-25 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Добавление базилика',
        text: 'За 5 минут до готовности добавь половину нарезанного базилика.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в томатном соусе с пастой или рисом. Укрась оставшимся базиликом.'
      }
    ],
    categories: ['курица', 'итальянская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 82,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      }
    },
    dietCategoriesList: {}
  },
  30: {
    id: 30,
    name: 'kurica-v-souse-iz-shpinata',
    title: 'Курица в соусе из шпината',
    description: 'Нежная курица в сливочном соусе из шпината с чесноком и мускатным орехом. Французская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 20, unit: Unit.g },
      carbs: { value: 10, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Шпинат замороженный', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Мускатный орех', amount: 0.5, unit: Unit.tsp },
      { name: 'Мука', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи. Шпинат разморозь и отожми лишнюю жидкость.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь муку, перемешай и готовь 1 минуту. Постепенно влей сливки, постоянно помешивая.'
      },
      {
        title: 'Шаг 7: Добавление шпината',
        text: 'Добавь шпинат и мускатный орех, перемешай и готовь 5 минут.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Настаивание',
        text: 'Выключи огонь и оставь блюдо под крышкой на 5-10 минут для настаивания.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из шпината с отварным рисом или картофельным пюре. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 86,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  31: {
    id: 31,
    name: 'kurica-v-souse-iz-tykvy',
    title: 'Курица в соусе из тыквы',
    description: 'Нежная курица в сливочном соусе из тыквы с имбирем и карри. Азиатская кухня в современном исполнении.',
    cookTime: '65 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 19, unit: Unit.g },
      carbs: { value: 22, unit: Unit.g }
    },
    cuisine: 'Азиатская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Тыква', amount: 500, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Карри', amount: 1, unit: Unit.tbsp },
      { name: 'Кокосовое молоко', amount: 200, unit: Unit.ml },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Тыкву очисти от кожуры и семян, нарежь кубиками. Лук нарежь кубиками, чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка специй',
        text: 'Добавь чеснок, имбирь и карри. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь тыкву и обжаривай 5 минут, помешивая.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Влей кокосовое молоко, перемешай и доведи до кипения. Уменьши огонь и туши 20-25 минут под крышкой, пока тыква не станет мягкой.'
      },
      {
        title: 'Шаг 8: Пюрирование',
        text: 'Извлеки курицу из соуса. Пюрируй соус с тыквой блендером до однородной консистенции.'
      },
      {
        title: 'Шаг 9: Финальное тушение',
        text: 'Верни курицу в соус, перемешай и туши еще 5-10 минут.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из тыквы с отварным рисом или картофельным пюре. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'азиатская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 92,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      asian: {
        id: 'asian',
        title: 'Азиатская кухня'
      }
    },
    dietCategoriesList: {}
  },
  32: {
    id: 32,
    name: 'kurica-v-souse-iz-mango',
    title: 'Курица в соусе из манго',
    description: 'Нежная курица в сладком соусе из манго с имбирем и чили. Тайская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 350, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Тайская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Манго', amount: 2, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Чили', amount: 1, unit: Unit.pcs },
      { name: 'Кокосовое молоко', amount: 200, unit: Unit.ml },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка фруктов и овощей',
        text: 'Манго очисти от кожуры и нарежь кубиками. Лук нарежь кубиками, чеснок и имбирь измельчи, чили нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка специй',
        text: 'Добавь чеснок, имбирь и чили. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину нарезанного манго и обжаривай 5 минут, помешивая.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Влей кокосовое молоко, перемешай и доведи до кипения. Уменьши огонь и туши 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Пюрирование',
        text: 'Извлеки курицу из соуса. Пюрируй соус с манго блендером до однородной консистенции.'
      },
      {
        title: 'Шаг 9: Финальное тушение',
        text: 'Верни курицу в соус, добавь оставшееся манго, перемешай и туши еще 5-10 минут.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из манго с отварным рисом. Укрась свежей зеленью и дольками манго.'
      }
    ],
    categories: ['курица', 'тайская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 94,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      thai: {
        id: 'thai',
        title: 'Тайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  33: {
    id: 33,
    name: 'kurica-v-souse-iz-ananasa',
    title: 'Курица в соусе из ананаса',
    description: 'Нежная курица в кисло-сладком соусе из ананаса с соевым соусом и медом. Китайская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 28, unit: Unit.g }
    },
    cuisine: 'Китайская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Ананас консервированный', amount: 400, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Имбирь', amount: 20, unit: Unit.g },
      { name: 'Соевый соус', amount: 3, unit: Unit.tbsp },
      { name: 'Мед', amount: 2, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок и имбирь измельчи. Ананас нарежь кубиками.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка специй',
        text: 'Добавь чеснок и имбирь. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь соевый соус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Добавление ананаса',
        text: 'Добавь половину нарезанного ананаса и его сок, перемешай.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Финальное добавление ананаса',
        text: 'За 5 минут до готовности добавь оставшийся ананас.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из ананаса с отварным рисом. Укрась свежей зеленью и дольками ананаса.'
      }
    ],
    categories: ['курица', 'китайская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 88,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      chinese: {
        id: 'chinese',
        title: 'Китайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  34: {
    id: 34,
    name: 'kurica-v-souse-iz-granata',
    title: 'Курица в соусе из граната',
    description: 'Нежная курица в кисло-сладком соусе из граната с грецкими орехами и кинзой. Кавказская кухня в современном исполнении.',
    cookTime: '60 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 360, unit: Unit.g },
      protein: { value: 29, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 20, unit: Unit.g }
    },
    cuisine: 'Кавказская',
    servings: 4,
    // Общий вес блюда: 1250 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Гранат', amount: 2, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Грецкие орехи', amount: 100, unit: Unit.g },
      { name: 'Кинза', amount: 1, unit: Unit.bunch },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и фруктов',
        text: 'Лук нарежь кубиками, чеснок измельчи. Гранат очисти, отдели зерна. Грецкие орехи измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину зерен граната и их сок, перемешай.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 20-25 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Добавление орехов',
        text: 'За 10 минут до готовности добавь измельченные грецкие орехи.'
      },
      {
        title: 'Шаг 9: Финальное добавление граната',
        text: 'За 5 минут до готовности добавь оставшиеся зерна граната.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из граната с отварным рисом. Укрась свежей кинзой и зернами граната.'
      }
    ],
    categories: ['курица', 'кавказская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 92,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      caucasian: {
        id: 'caucasian',
        title: 'Кавказская кухня'
      }
    },
    dietCategoriesList: {}
  },
  35: {
    id: 35,
    name: 'kurica-v-souse-iz-klyukvy',
    title: 'Курица в соусе из клюквы',
    description: 'Нежная курица в кисло-сладком соусе из клюквы с апельсином и розмарином. Европейская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Европейская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Клюква замороженная', amount: 200, unit: Unit.g },
      { name: 'Апельсин', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Розмарин', amount: 1, unit: Unit.bunch },
      { name: 'Мед', amount: 2, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка фруктов и овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи. Апельсин очисти, нарежь дольками. Клюкву разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и розмарин. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину клюквы и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Добавление апельсина',
        text: 'Добавь дольки апельсина и их сок, перемешай.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Финальное добавление клюквы',
        text: 'За 5 минут до готовности добавь оставшуюся клюкву.'
      },
      {
        title: 'Шаг 10: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 11: Подача',
        text: 'Подавай курицу в соусе из клюквы с отварным рисом или картофельным пюре. Укрась свежим розмарином и дольками апельсина.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 86,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  36: {
    id: 36,
    name: 'kurica-v-souse-iz-oblepihi',
    title: 'Курица в соусе из облепихи',
    description: 'Нежная курица в кисло-сладком соусе из облепихи с медом и тимьяном. Русская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 23, unit: Unit.g }
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Облепиха замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь. Облепиху разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину облепихи, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление облепихи',
        text: 'За 5 минут до готовности добавь оставшуюся облепиху.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из облепихи с отварным рисом или картофельным пюре. Укрась свежим тимьяном и ягодами облепихи.'
      }
    ],
    categories: ['курица', 'русская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 82,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  37: {
    id: 37,
    name: 'kurica-v-souse-iz-brusniki',
    title: 'Курица в соусе из брусники',
    description: 'Нежная курица в кисло-сладком соусе из брусники с яблоком и корицей. Скандинавская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Брусника замороженная', amount: 200, unit: Unit.g },
      { name: 'Яблоко', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Корица', amount: 0.5, unit: Unit.tsp },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Яблоко очисти от кожуры и нарежь кубиками. Бруснику разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока и яблока',
        text: 'Добавь чеснок и яблоко. Обжаривай 2-3 минуты до мягкости яблока.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину брусники, бальзамический уксус, мед и корицу, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление брусники',
        text: 'За 5 минут до готовности добавь оставшуюся бруснику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из брусники с отварным рисом или картофельным пюре. Укрась свежими ягодами брусники и дольками яблока.'
      }
    ],
    categories: ['курица', 'скандинавская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 86,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      scandinavian: {
        id: 'scandinavian',
        title: 'Скандинавская кухня'
      }
    },
    dietCategoriesList: {}
  },
  38: {
    id: 38,
    name: 'kurica-v-souse-iz-cherniki',
    title: 'Курица в соусе из черники',
    description: 'Нежная курица в сладком соусе из черники с базиликом и бальзамическим уксусом. Итальянская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 26, unit: Unit.g }
    },
    cuisine: 'Итальянская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Черника замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Базилик', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Оливковое масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Базилик нарежь. Чернику разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину оливкового масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и базилик. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину черники, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление черники',
        text: 'За 5 минут до готовности добавь оставшуюся чернику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из черники с отварным рисом или картофельным пюре. Укрась свежим базиликом и ягодами черники.'
      }
    ],
    categories: ['курица', 'итальянская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 88,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      }
    },
    dietCategoriesList: {}
  },
  39: {
    id: 39,
    name: 'kurica-v-souse-iz-maliny',
    title: 'Курица в соусе из малины',
    description: 'Нежная курица в сладком соусе из малины с мятой и лимоном. Французская кухня в современном исполнении.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 26, unit: Unit.g }
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Малина замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Мята', amount: 1, unit: Unit.bunch },
      { name: 'Лимон', amount: 1, unit: Unit.pcs },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Сливочное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Мяту нарежь. Лимон нарежь дольками. Малину разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину сливочного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и половину мяты. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину малины, сок лимона и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление малины',
        text: 'За 5 минут до готовности добавь оставшуюся малину.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из малины с отварным рисом или картофельным пюре. Укрась свежей мятой, ягодами малины и дольками лимона.'
      }
    ],
    categories: ['курица', 'французская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 90,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      french: {
        id: 'french',
        title: 'Французская кухня'
      }
    },
    dietCategoriesList: {}
  },
  40: {
    id: 40,
    name: 'kurica-v-souse-iz-smorodiny',
    title: 'Курица в соусе из смородины',
    description: 'Нежная курица в кисло-сладком соусе из смородины с розмарином и чесноком. Средиземноморская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Смородина черная замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Розмарин', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Оливковое масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Розмарин нарежь. Смородину разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину оливкового масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и розмарин. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину смородины, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление смородины',
        text: 'За 5 минут до готовности добавь оставшуюся смородину.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из смородины с отварным рисом или картофельным пюре. Укрась свежим розмарином и ягодами смородины.'
      }
    ],
    categories: ['курица', 'средиземноморская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 88,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      mediterranean: {
        id: 'mediterranean',
        title: 'Средиземноморская кухня'
      }
    },
    dietCategoriesList: {}
  },
  41: {
    id: 41,
    name: 'kurica-v-souse-iz-kryzhovnika',
    title: 'Курица в соусе из крыжовника',
    description: 'Нежная курица в кисло-сладком соусе из крыжовника с тимьяном и чесноком. Европейская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g }
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Крыжовник замороженный', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь. Крыжовник разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину крыжовника, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление крыжовника',
        text: 'За 5 минут до готовности добавь оставшийся крыжовник.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из крыжовника с отварным рисом или картофельным пюре. Укрась свежим тимьяном и ягодами крыжовника.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'соус', 'основное блюдо'],
    rating: 4.6,
    reviews: 84,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  46: {
    id: 46,
    name: 'kurica-v-souse-iz-ezheviki',
    title: 'Курица в соусе из ежевики',
    description: 'Нежная курица в сладком соусе из ежевики с розмарином и чесноком. Средиземноморская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Ежевика замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 3, unit: Unit.pcs },
      { name: 'Розмарин', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Оливковое масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Розмарин нарежь. Ежевику разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину оливкового масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и розмарин. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину ежевики, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление ежевики',
        text: 'За 5 минут до готовности добавь оставшуюся ежевику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из ежевики с отварным рисом или картофельным пюре. Укрась свежим розмарином и ягодами ежевики.'
      }
    ],
    categories: ['курица', 'средиземноморская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 86,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      mediterranean: {
        id: 'mediterranean',
        title: 'Средиземноморская кухня'
      }
    },
    dietCategoriesList: {}
  },
  47: {
    id: 47,
    name: 'kurica-v-souse-iz-golubiki',
    title: 'Курица в соусе из голубики',
    description: 'Нежная курица в сладком соусе из голубики с тимьяном и лимоном. Европейская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g }
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Голубика замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.bunch },
      { name: 'Лимон', amount: 0.5, unit: Unit.pcs },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь. Голубику разморозь. Лимон нарежь тонкими дольками.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину голубики, бальзамический уксус, мед и лимон, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление голубики',
        text: 'За 5 минут до готовности добавь оставшуюся голубику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из голубики с отварным рисом или картофельным пюре. Укрась свежим тимьяном, ягодами голубики и дольками лимона.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'соус', 'основное блюдо'],
    rating: 4.8,
    reviews: 88,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  48: {
    id: 48,
    name: 'kurica-v-souse-iz-klyukvy',
    title: 'Курица в соусе из клюквы',
    description: 'Нежная курица в кисло-сладком соусе из клюквы с апельсином и розмарином. Европейская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Клюква замороженная', amount: 200, unit: Unit.g },
      { name: 'Апельсин', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Розмарин', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и фруктов',
        text: 'Лук нарежь кубиками, чеснок измельчи. Розмарин нарежь. Клюкву разморозь. Апельсин очисти от кожуры и нарежь дольками.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и розмарин. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину клюквы, бальзамический уксус, мед и апельсин, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление клюквы',
        text: 'За 5 минут до готовности добавь оставшуюся клюкву.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из клюквы с отварным рисом или картофельным пюре. Укрась свежим розмарином, ягодами клюквы и дольками апельсина.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 86,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  49: {
    id: 49,
    name: 'kurica-v-souse-iz-brusniki',
    title: 'Курица в соусе из брусники',
    description: 'Нежная курица в кисло-сладком соусе из брусники с яблоком и корицей. Скандинавская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g }
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Брусника замороженная', amount: 200, unit: Unit.g },
      { name: 'Яблоко', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Корица', amount: 0.5, unit: Unit.tsp },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Яблоко очисти от кожуры и нарежь кубиками. Бруснику разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока и яблока',
        text: 'Добавь чеснок и яблоко. Обжаривай 2-3 минуты до мягкости яблока.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину брусники, бальзамический уксус, мед и корицу, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление брусники',
        text: 'За 5 минут до готовности добавь оставшуюся бруснику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из брусники с отварным рисом или картофельным пюре. Укрась свежими ягодами брусники и дольками яблока.'
      }
    ],
    categories: ['курица', 'скандинавская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 84,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      scandinavian: {
        id: 'scandinavian',
        title: 'Скандинавская кухня'
      }
    },
    dietCategoriesList: {}
  },
  50: {
    id: 50,
    name: 'kurica-v-souse-iz-oblepihi',
    title: 'Курица в соусе из облепихи',
    description: 'Нежная курица в кисло-сладком соусе из облепихи с медом и тимьяном. Русская кухня в современном исполнении.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 330, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 23, unit: Unit.g }
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Облепиха замороженная', amount: 200, unit: Unit.g },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Тимьян', amount: 1, unit: Unit.bunch },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь. Облепиху разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину облепихи, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление облепихи',
        text: 'За 5 минут до готовности добавь оставшуюся облепиху.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из облепихи с отварным рисом или картофельным пюре. Укрась свежим тимьяном и ягодами облепихи.'
      }
    ],
    categories: ['курица', 'русская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 82,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  51: {
    id: 51,
    name: 'kurica-v-souse-iz-brusniki',
    title: 'Курица в соусе из брусники',
    description: 'Нежная курица в кисло-сладком соусе из брусники с яблоком и корицей. Скандинавская кухня в современном исполнении.',
    cookTime: '55 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 340, unit: Unit.g },
      protein: { value: 28, unit: Unit.g },
      fat: { value: 17, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g }
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      { name: 'Куриное филе', amount: 600, unit: Unit.g },
      { name: 'Брусника замороженная', amount: 200, unit: Unit.g },
      { name: 'Яблоко', amount: 1, unit: Unit.pcs },
      { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Корица', amount: 0.5, unit: Unit.tsp },
      { name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp },
      { name: 'Мед', amount: 1, unit: Unit.tbsp },
      { name: 'Растительное масло', amount: 2, unit: Unit.tbsp },
      { name: 'Соль', amount: 0, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 0, unit: Unit.to_taste }
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Яблоко очисти от кожуры и нарежь кубиками. Бруснику разморозь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей половину растительного масла. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь оставшееся масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока и яблока',
        text: 'Добавь чеснок и яблоко. Обжаривай 2-3 минуты до мягкости яблока.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину брусники, бальзамический уксус, мед и корицу, перемешай и готовь 2 минуты.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Финальное добавление брусники',
        text: 'За 5 минут до готовности добавь оставшуюся бруснику.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в соусе из брусники с отварным рисом или картофельным пюре. Укрась свежими ягодами брусники и дольками яблока.'
      }
    ],
    categories: ['курица', 'скандинавская кухня', 'соус', 'основное блюдо'],
    rating: 4.7,
    reviews: 84,
    dishCategoriesList: {
      'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда'
      }
    },
    dishCategoriesSubList: {
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      }
    },
    cuisineCategoriesList: {
      scandinavian: {
        id: 'scandinavian',
        title: 'Скандинавская кухня'
      }
    },
    dietCategoriesList: {}
  }
};
