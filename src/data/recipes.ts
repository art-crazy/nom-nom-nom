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
      calories: {value: 364.04, unit: Unit.ml},
      protein: {value: 7.49, unit: Unit.g},
      fat: {value: 13.81, unit: Unit.g},
      carbs: {value: 50.47, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      {name: 'Кефир', amount: 200, unit: Unit.ml},
      {name: 'Яйцо куриное', amount: 1, unit: Unit.pcs},
      {name: 'Сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 1, unit: Unit.to_taste},
      {name: 'Разрыхлитель', amount: 1, unit: Unit.tsp},
      {name: 'Мука', amount: 400, unit: Unit.g},
      {name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml},
      {name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 364.04, unit: Unit.ml},
      protein: {value: 7.49, unit: Unit.g},
      fat: {value: 13.81, unit: Unit.g},
      carbs: {value: 50.47, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      {name: 'Кефир', amount: 200, unit: Unit.ml},
      {name: 'Яйцо куриное', amount: 1, unit: Unit.pcs},
      {name: 'Сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 1, unit: Unit.to_taste},
      {name: 'Разрыхлитель', amount: 1, unit: Unit.tsp},
      {name: 'Мука', amount: 400, unit: Unit.g},
      {name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml},
      {name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 364.04, unit: Unit.ml},
      protein: {value: 7.49, unit: Unit.g},
      fat: {value: 13.81, unit: Unit.g},
      carbs: {value: 50.47, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      {name: 'Кефир', amount: 200, unit: Unit.ml},
      {name: 'Яйцо куриное', amount: 1, unit: Unit.pcs},
      {name: 'Сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 1, unit: Unit.to_taste},
      {name: 'Разрыхлитель', amount: 1, unit: Unit.tsp},
      {name: 'Мука', amount: 400, unit: Unit.g},
      {name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml},
      {name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 320, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Сметана 20%', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Зелень (укроп, петрушка)', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 450, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Масло сливочное', amount: 100, unit: Unit.g},
      {name: 'Яйцо', amount: 2, unit: Unit.pcs},
      {name: 'Мука', amount: 100, unit: Unit.g},
      {name: 'Сухари панировочные', amount: 200, unit: Unit.g},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Масло растительное', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 380, unit: Unit.g},
      protein: {value: 30, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g},
    },
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Йогурт натуральный', amount: 200, unit: Unit.g},
      {name: 'Томаты в собственном соку', amount: 400, unit: Unit.g},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Специи (куркума, кумин, кориандр)', amount: 0, unit: Unit.to_taste},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 350, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 8, unit: Unit.g},
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Чеснок', amount: 6, unit: Unit.pcs},
      {name: 'Яйцо', amount: 1, unit: Unit.pcs},
      {name: 'Оливковое масло', amount: 100, unit: Unit.ml},
      {name: 'Лимонный сок', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Петрушка', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 320, unit: Unit.g},
      protein: {value: 26, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g},
    },
    cuisine: 'Японская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Соус терияки', amount: 100, unit: Unit.ml},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Зеленый лук', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 14, unit: Unit.g},
    },
    cuisine: 'Венгерская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp},
      {name: 'Сметана 20%', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 360, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 16, unit: Unit.g},
    },
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 400, unit: Unit.ml},
      {name: 'Паста карри', amount: 2, unit: Unit.tbsp},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Кинза', amount: 0, unit: Unit.to_taste},
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 27, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g},
    },
    cuisine: 'Китайская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Ананас', amount: 200, unit: Unit.g},
      {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
      {name: 'Уксус', amount: 1, unit: Unit.tbsp},
      {name: 'Сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Крахмал', amount: 1, unit: Unit.tbsp},
      {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
      {name: 'Рис', amount: 200, unit: Unit.g}
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
      calories: {value: 360, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 16, unit: Unit.g},
    },
    cuisine: 'Тайская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 400, unit: Unit.ml},
      {name: 'Паста карри', amount: 2, unit: Unit.tbsp},
      {name: 'Бамбуковые ростки', amount: 100, unit: Unit.g},
      {name: 'Баклажан', amount: 1, unit: Unit.pcs},
      {name: 'Лимонная трава', amount: 2, unit: Unit.pcs},
      {name: 'Листья лайма', amount: 4, unit: Unit.pcs},
      {name: 'Рыбный соус', amount: 1, unit: Unit.tbsp},
      {name: 'Пальмовый сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Рис', amount: 200, unit: Unit.g}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 20, unit: Unit.g},
    },
    cuisine: 'Корейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Паста гочуджан', amount: 2, unit: Unit.tbsp},
      {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Кунжутное масло', amount: 1, unit: Unit.tbsp},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Кунжут', amount: 1, unit: Unit.tbsp},
      {name: 'Зеленый лук', amount: 2, unit: Unit.pcs},
      {name: 'Рис', amount: 200, unit: Unit.g}
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
      calories: {value: 320, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Клубника', amount: 300, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Тимьян', amount: 2, unit: Unit.tbsp},
      {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Крахмал', amount: 1, unit: Unit.tsp}
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
      calories: {value: 450, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 35, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g},
    },
    cuisine: 'Грузинская',
    servings: 6,
    // Общий вес блюда: 1800 г
    ingredients: [
      {name: 'Курица (целая)', amount: 1500, unit: Unit.g},
      {name: 'Грецкие орехи', amount: 500, unit: Unit.g},
      {name: 'Лук репчатый', amount: 3, unit: Unit.pcs},
      {name: 'Чеснок', amount: 6, unit: Unit.pcs},
      {name: 'Хмели-сунели', amount: 2, unit: Unit.tbsp},
      {name: 'Шафран', amount: 1, unit: Unit.tsp},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Гвоздика', amount: 4, unit: Unit.pcs},
      {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
      {name: 'Уксус винный', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 380, unit: Unit.g},
      protein: {value: 30, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g},
    },
    cuisine: 'Балканская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Баклажаны', amount: 2, unit: Unit.pcs},
      {name: 'Перец болгарский', amount: 3, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Томаты', amount: 3, unit: Unit.pcs},
      {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
      {name: 'Уксус бальзамический', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Зелень (петрушка, базилик)', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g},
    },
    cuisine: 'Азиатская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Манго', amount: 2, unit: Unit.pcs},
      {name: 'Имбирь', amount: 30, unit: Unit.g},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Перец чили', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Лимонный сок', amount: 2, unit: Unit.tbsp},
      {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
      {name: 'Крахмал', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 350, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g},
    },
    cuisine: 'Кавказская',
    servings: 4,
    // Общий вес блюда: 1350 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Гранатовый сок', amount: 300, unit: Unit.ml},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Кориандр', amount: 1, unit: Unit.tbsp},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Гвоздика', amount: 3, unit: Unit.pcs},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
      {name: 'Крахмал', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Гранатовые зерна', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 380, unit: Unit.g},
      protein: {value: 30, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 20, unit: Unit.g},
    },
    cuisine: 'Карибская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Ром', amount: 100, unit: Unit.ml},
      {name: 'Ананас', amount: 300, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Гвоздика', amount: 3, unit: Unit.pcs},
      {name: 'Коричневый сахар', amount: 2, unit: Unit.tbsp},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 320, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Шампиньоны', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Тимьян', amount: 1, unit: Unit.tsp},
      {name: 'Розмарин', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 8, unit: Unit.g},
    },
    cuisine: 'Мексиканская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Авокадо', amount: 2, unit: Unit.pcs},
      {name: 'Лайм', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Кинза', amount: 1, unit: Unit.bunch},
      {name: 'Сливки 20%', amount: 100, unit: Unit.ml},
      {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
      {name: 'Кумин', amount: 1, unit: Unit.tsp},
      {name: 'Чили порошок', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 310, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 15, unit: Unit.g},
    },
    cuisine: 'Итальянская',
    servings: 4,
    // Общий вес блюда: 1250 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Томаты в собственном соку', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Орегано', amount: 1, unit: Unit.tsp},
      {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 10, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Шпинат замороженный', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Мускатный орех', amount: 0.5, unit: Unit.tsp},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 19, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g},
    },
    cuisine: 'Азиатская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Тыква', amount: 500, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Карри', amount: 1, unit: Unit.tbsp},
      {name: 'Кокосовое молоко', amount: 200, unit: Unit.ml},
      {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 350, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g},
    },
    cuisine: 'Венгерская',
    servings: 4,
    // Общий вес блюда: 1350 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Сливы', amount: 500, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Гвоздика', amount: 3, unit: Unit.pcs},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Бальзамический уксус', amount: 1, unit: Unit.tbsp},
      {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 20, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Яблоки', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.tsp},
      {name: 'Розмарин', amount: 1, unit: Unit.tsp},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Сливки 20%', amount: 100, unit: Unit.ml},
      {name: 'Масло сливочное', amount: 50, unit: Unit.g},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 21, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g},
    },
    cuisine: 'Русская',
    servings: 4,
    // Общий вес блюда: 1400 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Грибы лесные', amount: 500, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.tsp},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 320, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 8, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Сливки 20%', amount: 300, unit: Unit.ml},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Зелень петрушки', amount: 1, unit: Unit.bunch},
      {name: 'Зелень укропа', amount: 1, unit: Unit.bunch},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 310, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 15, unit: Unit.g},
    },
    cuisine: 'Итальянская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Томаты в собственном соку', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Орегано', amount: 1, unit: Unit.tsp},
      {name: 'Оливковое масло', amount: 2, unit: Unit.tbsp},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 10, unit: Unit.g},
    },
    cuisine: 'Французская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Шпинат замороженный', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Сливочное масло', amount: 50, unit: Unit.g},
      {name: 'Мускатный орех', amount: 0.5, unit: Unit.tsp},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 19, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g}
    },
    cuisine: 'Азиатская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Тыква', amount: 500, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Карри', amount: 1, unit: Unit.tbsp},
      {name: 'Кокосовое молоко', amount: 200, unit: Unit.ml},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 350, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Тайская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Манго', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Чили', amount: 1, unit: Unit.pcs},
      {name: 'Кокосовое молоко', amount: 200, unit: Unit.ml},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 28, unit: Unit.g}
    },
    cuisine: 'Китайская',
    servings: 4,
    // Общий вес блюда: 1300 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Ананас консервированный', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 360, unit: Unit.g},
      protein: {value: 29, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 20, unit: Unit.g}
    },
    cuisine: 'Кавказская',
    servings: 4,
    // Общий вес блюда: 1250 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Гранат', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Грецкие орехи', amount: 100, unit: Unit.g},
      {name: 'Кинза', amount: 1, unit: Unit.bunch},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Европейская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Клюква замороженная', amount: 200, unit: Unit.g},
      {name: 'Апельсин', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Розмарин', amount: 1, unit: Unit.bunch},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 23, unit: Unit.g}
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Облепиха замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Брусника замороженная', amount: 200, unit: Unit.g},
      {name: 'Яблоко', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Корица', amount: 0.5, unit: Unit.tsp},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 26, unit: Unit.g}
    },
    cuisine: 'Итальянская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Черника замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 26, unit: Unit.g}
    },
    cuisine: 'Французская',
    servings: 4,
    // Общий вес блюда: 1200 г
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Малина замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Мята', amount: 1, unit: Unit.bunch},
      {name: 'Лимон', amount: 1, unit: Unit.pcs},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Сливочное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Смородина черная замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Розмарин', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Крыжовник замороженный', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Ежевика замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Розмарин', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Голубика замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Лимон', amount: 0.5, unit: Unit.pcs},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Клюква замороженная', amount: 200, unit: Unit.g},
      {name: 'Апельсин', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Розмарин', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Брусника замороженная', amount: 200, unit: Unit.g},
      {name: 'Яблоко', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Корица', amount: 0.5, unit: Unit.tsp},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 23, unit: Unit.g}
    },
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Облепиха замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
      calories: {value: 340, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 17, unit: Unit.g},
      carbs: {value: 25, unit: Unit.g}
    },
    cuisine: 'Скандинавская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Брусника замороженная', amount: 200, unit: Unit.g},
      {name: 'Яблоко', amount: 1, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Корица', amount: 0.5, unit: Unit.tsp},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
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
  52: {
    id: 52,
    name: 'kurica-v-souse-iz-cherniki',
    title: 'Курица в соусе из черники',
    description: 'Нежная курица в кисло-сладком соусе из черники с розмарином и медом. Современная интерпретация классического блюда.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 335, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Черника замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Розмарин', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Розмарин нарежь. Чернику разморозь.'
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
        text: 'Подавай курицу в соусе из черники с отварным рисом или картофельным пюре. Укрась свежим розмарином и ягодами черники.'
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
  53: {
    id: 53,
    name: 'kurica-v-souse-iz-maliny',
    title: 'Курица в соусе из малины',
    description: 'Нежная курица в кисло-сладком соусе из малины с базиликом и медом. Современная интерпретация классического блюда.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 330, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 23, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Малина замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Базилик нарежь. Малину разморозь.'
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
        text: 'Добавь чеснок и базилик. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь половину малины, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
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
        text: 'Подавай курицу в соусе из малины с отварным рисом или картофельным пюре. Укрась свежим базиликом и ягодами малины.'
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
  54: {
    id: 54,
    name: 'kurica-v-souse-iz-klyukvy',
    title: 'Курица в соусе из клюквы',
    description: 'Нежная курица в кисло-сладком соусе из клюквы с тимьяном и медом. Современная интерпретация классического блюда.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 325, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Клюква замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь. Клюкву разморозь.'
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
        text: 'Добавь половину клюквы, бальзамический уксус и мед, перемешай и готовь 2 минуты.'
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
        text: 'Подавай курицу в соусе из клюквы с отварным рисом или картофельным пюре. Укрась свежим тимьяном и ягодами клюквы.'
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
  55: {
    id: 55,
    name: 'kurica-v-souse-iz-smorodiny',
    title: 'Курица в соусе из смородины',
    description: 'Нежная курица в кисло-сладком соусе из смородины с шалфеем и медом. Современная интерпретация классического блюда.',
    cookTime: '50 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 328, unit: Unit.g},
      protein: {value: 28, unit: Unit.g},
      fat: {value: 16, unit: Unit.g},
      carbs: {value: 23, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Смородина замороженная', amount: 200, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Шалфей', amount: 1, unit: Unit.bunch},
      {name: 'Бальзамический уксус', amount: 2, unit: Unit.tbsp},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей и ягод',
        text: 'Лук нарежь кубиками, чеснок измельчи. Шалфей нарежь. Смородину разморозь.'
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
        text: 'Добавь чеснок и шалфей. Обжаривай 1 минуту до аромата.'
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
        text: 'Подавай курицу в соусе из смородины с отварным рисом или картофельным пюре. Укрась свежим шалфеем и ягодами смородины.'
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
  56: {
    id: 56,
    name: 'kurica-v-gribnom-souse',
    title: 'Курица в грибном соусе',
    description: 'Нежная курица в ароматном грибном соусе с тимьяном и сливками. Классическое блюдо русской кухни.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Русская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Шампиньоны', amount: 300, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Тимьян', amount: 1, unit: Unit.bunch},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Сливочное масло', amount: 30, unit: Unit.g},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка грибов и овощей',
        text: 'Шампиньоны нарежь пластинами. Лук нарежь кубиками, чеснок измельчи. Тимьян нарежь.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей растительное масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде добавь сливочное масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка грибов',
        text: 'Добавь шампиньоны и обжаривай 5-7 минут до золотистого цвета.'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь чеснок и тимьян. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Влей сливки, перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в грибном соусе с отварным рисом или картофельным пюре. Укрась свежим тимьяном.'
      }
    ],
    categories: ['курица', 'русская кухня', 'соус', 'основное блюдо'],
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
      russian: {
        id: 'russian',
        title: 'Русская кухня'
      }
    },
    dietCategoriesList: {}
  },
  57: {
    id: 57,
    name: 'kurica-v-tomatnom-souse',
    title: 'Курица в томатном соусе',
    description: 'Нежная курица в ароматном томатном соусе с базиликом и чесноком. Итальянская классика.',
    cookTime: '45 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 320, unit: Unit.g},
      protein: {value: 30, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 15, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Итальянская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Томаты в собственном соку', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Орегано', amount: 1, unit: Unit.tsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Сахар', amount: 1, unit: Unit.tsp}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок измельчи. Базилик нарежь. Томаты разомни вилкой.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей растительное масло. Обжарь курицу до золотистой корочки со всех сторон (по 4-5 минут с каждой стороны). Переложи в тарелку.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'В той же сковороде обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 5: Обжарка чеснока',
        text: 'Добавь чеснок и орегано. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь томаты, сахар, перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Верни курицу в сковороду, перемешай и туши на медленном огне 15-20 минут под крышкой.'
      },
      {
        title: 'Шаг 8: Добавление базилика',
        text: 'За 5 минут до готовности добавь базилик.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в томатном соусе с пастой или рисом. Укрась свежим базиликом.'
      }
    ],
    categories: ['курица', 'итальянская кухня', 'соус', 'основное блюдо'],
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
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      }
    },
    dietCategoriesList: {}
  },
  58: {
    id: 58,
    name: 'zapechennaya-kurica-s-limonom',
    title: 'Запеченная курица с лимоном',
    description: 'Сочная курица, запеченная с лимоном, чесноком и травами. Классическое блюдо средиземноморской кухни.',
    cookTime: '1 час 30 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 350, unit: Unit.g},
      protein: {value: 35, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 5, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      {name: 'Курица целая', amount: 1200, unit: Unit.g},
      {name: 'Лимон', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 8, unit: Unit.pcs},
      {name: 'Розмарин', amount: 2, unit: Unit.bunch},
      {name: 'Тимьян', amount: 2, unit: Unit.bunch},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Картофель', amount: 800, unit: Unit.g},
      {name: 'Морковь', amount: 300, unit: Unit.g}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Курицу промой, обсуши. Натри солью и перцем внутри и снаружи.'
      },
      {
        title: 'Шаг 2: Подготовка начинки',
        text: 'Один лимон нарежь дольками. Чеснок очисти и разрежь зубчики пополам. Розмарин и тимьян нарежь.'
      },
      {
        title: 'Шаг 3: Начинка курицы',
        text: 'Внутрь курицы положи половину лимона, чеснока и трав.'
      },
      {
        title: 'Шаг 4: Подготовка овощей',
        text: 'Картофель и морковь очисти, нарежь крупными кусками. Посоли и поперчи.'
      },
      {
        title: 'Шаг 5: Подготовка формы',
        text: 'Форму для запекания смажь оливковым маслом. Выложи овощи.'
      },
      {
        title: 'Шаг 6: Подготовка курицы к запеканию',
        text: 'Курицу смажь оливковым маслом, положи на овощи. Вокруг разложи оставшиеся лимон, чеснок и травы.'
      },
      {
        title: 'Шаг 7: Запекание',
        text: 'Разогрей духовку до 200°C. Запекай курицу 1 час 15 минут, периодически поливая выделившимся соком.'
      },
      {
        title: 'Шаг 8: Проверка готовности',
        text: 'Проверь готовность курицы, проткнув ножом в самом толстом месте - должен вытекать прозрачный сок.'
      },
      {
        title: 'Шаг 9: Отдых',
        text: 'Достань курицу из духовки и дай отдохнуть 10-15 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Раздели курицу на порции, подавай с запеченными овощами. Укрась свежим розмарином и ягодами черники.'
      }
    ],
    categories: ['курица', 'средиземноморская кухня', 'запеченное', 'основное блюдо'],
    rating: 4.9,
    reviews: 105,
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
  59: {
    id: 59,
    name: 'kurica-gril',
    title: 'Курица-гриль',
    description: 'Ароматная курица-гриль с пряными травами и чесноком. Идеальное блюдо для летнего пикника.',
    cookTime: '1 час',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 340, unit: Unit.g},
      protein: {value: 38, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 3, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Американская',
    servings: 4,
    ingredients: [
      {name: 'Курица целая', amount: 1200, unit: Unit.g},
      {name: 'Чеснок', amount: 8, unit: Unit.pcs},
      {name: 'Орегано', amount: 2, unit: Unit.tbsp},
      {name: 'Паприка', amount: 1, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 4, unit: Unit.tbsp},
      {name: 'Лимонный сок', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Горчица', amount: 1, unit: Unit.tbsp}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка маринада',
        text: 'В миске смешай оливковое масло, лимонный сок, измельченный чеснок, орегано, паприку, горчицу, сахар, соль и перец.'
      },
      {
        title: 'Шаг 2: Подготовка курицы',
        text: 'Курицу промой, обсуши. Сделай несколько надрезов на коже для лучшего проникновения маринада.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Натри курицу маринадом внутри и снаружи. Накрой пищевой пленкой и оставь в холодильнике на 4-6 часов.'
      },
      {
        title: 'Шаг 4: Подготовка гриля',
        text: 'Разожги гриль и дождись, пока угли покроются белым пеплом.'
      },
      {
        title: 'Шаг 5: Подготовка к жарке',
        text: 'Достань курицу из маринада, дай стечь лишнему маринаду.'
      },
      {
        title: 'Шаг 6: Жарка на гриле',
        text: 'Положи курицу на решетку гриля и жарь 45-50 минут, периодически переворачивая и смазывая оставшимся маринадом.'
      },
      {
        title: 'Шаг 7: Проверка готовности',
        text: 'Проверь готовность курицы, проткнув ножом в самом толстом месте - должен вытекать прозрачный сок.'
      },
      {
        title: 'Шаг 8: Отдых',
        text: 'Сними курицу с гриля и дай отдохнуть 10-15 минут.'
      },
      {
        title: 'Шаг 9: Нарезка',
        text: 'Раздели курицу на порции.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу-гриль с овощным салатом и соусом барбекю. Укрась свежими травами.'
      }
    ],
    categories: ['курица', 'американская кухня', 'гриль', 'основное блюдо'],
    rating: 4.8,
    reviews: 98,
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
      american: {
        id: 'american',
        title: 'Американская кухня'
      }
    },
    dietCategoriesList: {}
  },
  60: {
    id: 60,
    name: 'kurica-v-klyare',
    title: 'Курица в кляре',
    description: 'Хрустящая курица в пивном кляре с пряными травами. Классическое блюдо пабной кухни.',
    cookTime: '30 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 30, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1000 г
    cuisine: 'Британская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Пиво светлое', amount: 200, unit: Unit.ml},
      {name: 'Мука пшеничная', amount: 150, unit: Unit.g},
      {name: 'Яйцо', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Паприка', amount: 1, unit: Unit.tsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste},
      {name: 'Растительное масло', amount: 200, unit: Unit.ml},
      {name: 'Лимон', amount: 1, unit: Unit.pcs}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски. Посоли и поперчи.'
      },
      {
        title: 'Шаг 2: Приготовление кляра',
        text: 'В миске смешай муку, яйцо, измельченный чеснок, паприку, соль и перец. Постепенно влей пиво, помешивая до получения однородной массы.'
      },
      {
        title: 'Шаг 3: Подготовка к жарке',
        text: 'В глубокой сковороде или фритюрнице разогрей растительное масло до 180°C.'
      },
      {
        title: 'Шаг 4: Обмакивание в кляр',
        text: 'Каждый кусок курицы обмакни в кляр, дай стечь лишнему кляру.'
      },
      {
        title: 'Шаг 5: Жарка',
        text: 'Обжарь курицу в горячем масле до золотистой корочки (3-4 минуты с каждой стороны).'
      },
      {
        title: 'Шаг 6: Удаление лишнего масла',
        text: 'Выложи готовую курицу на бумажные полотенца, чтобы удалить лишнее масло.'
      },
      {
        title: 'Шаг 7: Подготовка соуса',
        text: 'Приготовь соус по вкусу (например, чесночный или горчичный).'
      },
      {
        title: 'Шаг 8: Нарезка лимона',
        text: 'Лимон нарежь дольками.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу в кляре с соусом и дольками лимона. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'британская кухня', 'жареное', 'основное блюдо'],
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
      british: {
        id: 'british',
        title: 'Британская кухня'
      }
    },
    dietCategoriesList: {}
  },
  61: {
    id: 61,
    name: 'kurica-po-kitayski',
    title: 'Курица по-китайски',
    description: 'Острая курица в кисло-сладком соусе с имбирем и кунжутом. Классическое блюдо китайской кухни.',
    cookTime: '40 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Китайская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
      {name: 'Крахмал кукурузный', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 3, unit: Unit.tbsp},
      {name: 'Перец чили', amount: 1, unit: Unit.pcs},
      {name: 'Зеленый лук', amount: 2, unit: Unit.bunch}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на небольшие кусочки.'
      },
      {
        title: 'Шаг 2: Приготовление маринада',
        text: 'В миске смешай 2 ст.л. соевого соуса, мед, измельченный имбирь и чеснок.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Замаринуй курицу в приготовленной смеси на 20-30 минут.'
      },
      {
        title: 'Шаг 4: Подготовка соуса',
        text: 'В отдельной миске смешай оставшийся соевый соус, крахмал и 100 мл воды.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В воке или глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки (5-7 минут).'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь нарезанный перец чили и обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Влей приготовленный соус, перемешай и туши 2-3 минуты до загустения.'
      },
      {
        title: 'Шаг 8: Добавление кунжута',
        text: 'Добавь кунжут и перемешай.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и остроту, при необходимости добавь соевый соус или перец.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу по-китайски с рисом. Укрась нарезанным зеленым луком и кунжутом.'
      }
    ],
    categories: ['курица', 'китайская кухня', 'основное блюдо'],
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
      chinese: {
        id: 'chinese',
        title: 'Китайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  62: {
    id: 62,
    name: 'kurica-karri',
    title: 'Курица карри',
    description: 'Ароматная курица в пряном соусе карри с кокосовым молоком. Классическое блюдо индийской кухни.',
    cookTime: '45 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 390, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 26, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 400, unit: Unit.ml},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Порошок карри', amount: 2, unit: Unit.tbsp},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на небольшие кусочки.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь кубиками, чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 3: Обжарка лука',
        text: 'В глубокой сковороде разогрей масло и обжарь лук до золотистого цвета.'
      },
      {
        title: 'Шаг 4: Добавление специй',
        text: 'Добавь чеснок, имбирь, порошок карри и куркуму. Обжаривай 1-2 минуты до аромата.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'Добавь курицу и обжаривай 5-7 минут до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Влей кокосовое молоко, перемешай и доведи до кипения.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Уменьши огонь и туши 20-25 минут под крышкой, периодически помешивая.'
      },
      {
        title: 'Шаг 8: Проверка готовности',
        text: 'Проверь готовность курицы - она должна быть мягкой и сочной.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и перец, при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу карри с рисом басмати и лепешками наан. Укрась свежей кинзой.'
      }
    ],
    categories: ['курица', 'индийская кухня', 'соус', 'основное блюдо'],
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
      indian: {
        id: 'indian',
        title: 'Индийская кухня'
      }
    },
    dietCategoriesList: {}
  },
  63: {
    id: 63,
    name: 'kurica-po-tayski',
    title: 'Курица по-тайски',
    description: 'Острая курица с арахисом и базиликом в сладком соусе. Классическое блюдо тайской кухни.',
    cookTime: '35 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 360, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 16, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1000 г
    cuisine: 'Тайская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Арахис', amount: 100, unit: Unit.g},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Перец чили', amount: 2, unit: Unit.pcs},
      {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
      {name: 'Устричный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Лимонный сок', amount: 1, unit: Unit.tbsp}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на небольшие кусочки.'
      },
      {
        title: 'Шаг 2: Подготовка ингредиентов',
        text: 'Чеснок и перец чили измельчи. Базилик нарежь. Арахис обжарь на сухой сковороде до золотистого цвета.'
      },
      {
        title: 'Шаг 3: Приготовление соуса',
        text: 'В миске смешай соевый соус, устричный соус, сахар и лимонный сок.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В воке или глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки (5-7 минут).'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь чеснок и перец чили. Обжаривай 1 минуту до аромата.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Влей приготовленный соус, перемешай и туши 2-3 минуты.'
      },
      {
        title: 'Шаг 7: Добавление арахиса',
        text: 'Добавь обжаренный арахис и перемешай.'
      },
      {
        title: 'Шаг 8: Добавление базилика',
        text: 'Добавь базилик и быстро перемешай.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и остроту, при необходимости добавь соевый соус или перец.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу по-тайски с рисом. Укрась свежим базиликом и арахисом.'
      }
    ],
    categories: ['курица', 'тайская кухня', 'основное блюдо'],
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
      thai: {
        id: 'thai',
        title: 'Тайская кухня'
      }
    },
    dietCategoriesList: {}
  },
  64: {
    id: 64,
    name: 'kurica-v-panirovke',
    title: 'Курица в панировке',
    description: 'Хрустящая курица в панировке из сухарей с травами. Классическое блюдо европейской кухни.',
    cookTime: '30 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 16, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~900 г
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Панировочные сухари', amount: 150, unit: Unit.g},
      {name: 'Яйцо', amount: 2, unit: Unit.pcs},
      {name: 'Молоко', amount: 100, unit: Unit.ml},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Сушеные травы', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 200, unit: Unit.ml},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на небольшие кусочки.'
      },
      {
        title: 'Шаг 2: Приготовление панировки',
        text: 'В миске смешай панировочные сухари, измельченный чеснок и сушеные травы.'
      },
      {
        title: 'Шаг 3: Приготовление кляра',
        text: 'В другой миске взбей яйца с молоком, солью и перцем.'
      },
      {
        title: 'Шаг 4: Панировка курицы',
        text: 'Обмакни каждый кусочек курицы сначала в кляр, затем в панировку.'
      },
      {
        title: 'Шаг 5: Обжарка',
        text: 'В глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки (5-7 минут с каждой стороны).'
      },
      {
        title: 'Шаг 6: Проверка готовности',
        text: 'Проверь готовность курицы - она должна быть мягкой внутри и хрустящей снаружи.'
      },
      {
        title: 'Шаг 7: Удаление лишнего масла',
        text: 'Выложи готовую курицу на бумажные полотенца, чтобы удалить лишнее масло.'
      },
      {
        title: 'Шаг 8: Финальный штрих',
        text: 'Посоли и поперчи по вкусу.'
      },
      {
        title: 'Шаг 9: Подача',
        text: 'Подавай курицу в панировке с картофельным пюре и свежими овощами.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'жареное', 'основное блюдо'],
    rating: 4.6,
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
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  65: {
    id: 65,
    name: 'kurica-po-koreyski',
    title: 'Курица по-корейски',
    description: 'Острая курица в корейском стиле с кунжутом и зеленым луком. Классическое блюдо корейской кухни.',
    cookTime: '40 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 350, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 14, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1000 г
    cuisine: 'Корейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
      {name: 'Кунжутное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
      {name: 'Зеленый лук', amount: 1, unit: Unit.bunch},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Перец чили', amount: 2, unit: Unit.pcs},
      {name: 'Мед', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на небольшие кусочки.'
      },
      {
        title: 'Шаг 2: Приготовление маринада',
        text: 'В миске смешай соевый соус, кунжутное масло, мед, измельченный чеснок, имбирь и перец чили.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Замаринуй курицу в приготовленном соусе на 20-30 минут.'
      },
      {
        title: 'Шаг 4: Подготовка зелени',
        text: 'Зеленый лук нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В воке или глубокой сковороде разогрей масло. Обжарь курицу до золотистой корочки (5-7 минут).'
      },
      {
        title: 'Шаг 6: Добавление маринада',
        text: 'Влей оставшийся маринад и туши 5-7 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 7: Добавление кунжута',
        text: 'Добавь кунжут и перемешай.'
      },
      {
        title: 'Шаг 8: Добавление зелени',
        text: 'Добавь зеленый лук и быстро перемешай.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и остроту, при необходимости добавь соевый соус или перец.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу по-корейски с рисом. Укрась кунжутом и зеленым луком.'
      }
    ],
    categories: ['курица', 'корейская кухня', 'основное блюдо'],
    rating: 4.7,
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
      korean: {
        id: 'korean',
        title: 'Корейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  66: {
    id: 66,
    name: 'kurica-v-duhovke',
    title: 'Курица в духовке',
    description: 'Сочная курица, запеченная в духовке с картофелем и овощами. Классическое блюдо европейской кухни.',
    cookTime: '1 час 30 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 35, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Картофель', amount: 600, unit: Unit.g},
      {name: 'Морковь', amount: 300, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Растительное масло', amount: 3, unit: Unit.tbsp},
      {name: 'Сушеные травы', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Картофель и морковь очисти и нарежь крупными кусками. Лук нарежь кольцами.'
      },
      {
        title: 'Шаг 3: Приготовление маринада',
        text: 'В миске смешай растительное масло, измельченный чеснок, сушеные травы, соль и перец.'
      },
      {
        title: 'Шаг 4: Маринование',
        text: 'Замаринуй курицу в приготовленном соусе на 20-30 минут.'
      },
      {
        title: 'Шаг 5: Подготовка формы',
        text: 'В форму для запекания выложи овощи, посоли и поперчи.'
      },
      {
        title: 'Шаг 6: Выкладка курицы',
        text: 'Сверху выложи замаринованную курицу.'
      },
      {
        title: 'Шаг 7: Запекание',
        text: 'Разогрей духовку до 180°C. Запекай 1 час, периодически поливая выделившимся соком.'
      },
      {
        title: 'Шаг 8: Проверка готовности',
        text: 'Проверь готовность курицы и овощей - они должны быть мягкими и сочными.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Дай блюду постоять 10 минут перед подачей.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу с запеченными овощами. Укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'запеченное', 'основное блюдо'],
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
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  67: {
    id: 67,
    name: 'kurica-na-grile',
    title: 'Курица на гриле',
    description: 'Ароматная курица на гриле с травами и лимоном. Идеальное блюдо для летнего пикника.',
    cookTime: '1 час',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 38, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 4, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Лимон', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Оливковое масло', amount: 4, unit: Unit.tbsp},
      {name: 'Сушеные травы', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Приготовление маринада',
        text: 'В миске смешай оливковое масло, сок лимона, измельченный чеснок, сушеные травы, соль и перец.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Замаринуй курицу в приготовленном соусе на 30-40 минут.'
      },
      {
        title: 'Шаг 4: Подготовка гриля',
        text: 'Разогрей гриль до средней температуры.'
      },
      {
        title: 'Шаг 5: Обжарка',
        text: 'Выложи курицу на решетку гриля и жарь 6-8 минут с каждой стороны.'
      },
      {
        title: 'Шаг 6: Проверка готовности',
        text: 'Проверь готовность курицы - она должна быть мягкой внутри и иметь аппетитную корочку снаружи.'
      },
      {
        title: 'Шаг 7: Отдых',
        text: 'Сними курицу с гриля и дай ей отдохнуть 5-10 минут.'
      },
      {
        title: 'Шаг 8: Финальный штрих',
        text: 'Посоли и поперчи по вкусу.'
      },
      {
        title: 'Шаг 9: Подача',
        text: 'Подавай курицу с запеченными овощами и свежим салатом.'
      }
    ],
    categories: ['курица', 'европейская кухня', 'гриль', 'основное блюдо'],
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
      european: {
        id: 'european',
        title: 'Европейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  68: {
    id: 68,
    name: 'kurica-po-marokkanski',
    title: 'Курица по-мароккански',
    description: 'Ароматная курица в пряном марокканском соусе с кускусом и сухофруктами. Классическое блюдо марокканской кухни.',
    cookTime: '1 час 20 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 35, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 28, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Марокканская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Кускус', amount: 200, unit: Unit.g},
      {name: 'Изюм', amount: 50, unit: Unit.g},
      {name: 'Курага', amount: 50, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Кумин', amount: 1, unit: Unit.tsp},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка специй',
        text: 'В ступке измельчи чеснок, имбирь и специи до пастообразного состояния.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Смешай специи с оливковым маслом и натри курицу. Оставь мариноваться на 30 минут.'
      },
      {
        title: 'Шаг 4: Подготовка сухофруктов',
        text: 'Изюм и курагу замочи в теплой воде на 15 минут.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'Лук нарежь полукольцами и обжарь до золотистого цвета.'
      },
      {
        title: 'Шаг 6: Обжарка курицы',
        text: 'Добавь курицу к луку и обжарь до золотистой корочки.'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Добавь специи, сухофрукты и немного воды. Доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Уменьши огонь и туши под крышкой 30-40 минут.'
      },
      {
        title: 'Шаг 9: Приготовление кускуса',
        text: 'Залей кускус кипятком, добавь соль и оставь на 5 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу с кускусом, укрась свежей зеленью и орехами.'
      }
    ],
    categories: ['курица', 'марокканская кухня', 'основное блюдо'],
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
      moroccan: {
        id: 'moroccan',
        title: 'Марокканская кухня'
      }
    },
    dietCategoriesList: {}
  },
  69: {
    id: 69,
    name: 'kurica-po-vetnamski',
    title: 'Курица по-вьетнамски',
    description: 'Острая курица с рисовой лапшой и овощами в кисло-сладком соусе. Классическое блюдо вьетнамской кухни.',
    cookTime: '45 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 30, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Вьетнамская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Рисовая лапша', amount: 200, unit: Unit.g},
      {name: 'Морковь', amount: 2, unit: Unit.pcs},
      {name: 'Стручковая фасоль', amount: 200, unit: Unit.g},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Перец чили', amount: 2, unit: Unit.pcs},
      {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
      {name: 'Устричный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Лимонный сок', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Коричневый сахар', amount: 1, unit: Unit.tbsp}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь тонкими полосками.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Морковь нарежь соломкой, фасоль нарежь на кусочки по 3-4 см.'
      },
      {
        title: 'Шаг 3: Приготовление соуса',
        text: 'Смешай соевый соус, устричный соус, лимонный сок и сахар.'
      },
      {
        title: 'Шаг 4: Подготовка лапши',
        text: 'Залей лапшу кипятком и оставь на 5 минут, затем промой холодной водой.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В воке разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь измельченный чеснок, имбирь и перец чили. Обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 7: Обжарка овощей',
        text: 'Добавь морковь и фасоль, обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 8: Добавление соуса',
        text: 'Влей приготовленный соус и перемешай.'
      },
      {
        title: 'Шаг 9: Добавление лапши',
        text: 'Добавь лапшу и прогрей все вместе 2-3 минуты.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим, укрась свежей зеленью и кунжутом.'
      }
    ],
    categories: ['курица', 'вьетнамская кухня', 'основное блюдо'],
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
      vietnamese: {
        id: 'vietnamese',
        title: 'Вьетнамская кухня'
      }
    },
    dietCategoriesList: {}
  },
  70: {
    id: 70,
    name: 'kurica-po-grecheski',
    title: 'Курица по-гречески',
    description: 'Ароматная курица с лимоном, орегано и оливками, запеченная с овощами. Классическое блюдо греческой кухни.',
    cookTime: '1 час 15 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 350, unit: Unit.g},
      protein: {value: 38, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 12, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Греческая',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Картофель', amount: 600, unit: Unit.g},
      {name: 'Помидоры', amount: 4, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Лимон', amount: 1, unit: Unit.pcs},
      {name: 'Оливки', amount: 100, unit: Unit.g},
      {name: 'Орегано', amount: 2, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 4, unit: Unit.tbsp},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'Смешай оливковое масло, сок лимона, измельченный чеснок, орегано, соль и перец.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Натри курицу маринадом и оставь на 30 минут.'
      },
      {
        title: 'Шаг 4: Подготовка овощей',
        text: 'Картофель нарежь крупными дольками, помидоры и лук - крупными кусками.'
      },
      {
        title: 'Шаг 5: Формирование блюда',
        text: 'В форму для запекания выложи овощи, сверху - курицу, добавь оливки.'
      },
      {
        title: 'Шаг 6: Добавление жидкости',
        text: 'Влей белое вино и оставшийся маринад.'
      },
      {
        title: 'Шаг 7: Запекание',
        text: 'Накрой фольгой и запекай при 180°C 40 минут.'
      },
      {
        title: 'Шаг 8: Финальное запекание',
        text: 'Сними фольгу и запекай еще 15-20 минут до румяной корочки.'
      },
      {
        title: 'Шаг 9: Проверка готовности',
        text: 'Проверь готовность курицы и картофеля.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим, укрась свежей зеленью и дольками лимона.'
      }
    ],
    categories: ['курица', 'греческая кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 102,
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
      greek: {
        id: 'greek',
        title: 'Греческая кухня'
      }
    },
    dietCategoriesList: {}
  },
  71: {
    id: 71,
    name: 'kurica-po-meksikanski',
    title: 'Курица по-мексикански',
    description: 'Острая курица в томатном соусе с перцем чили и специями, подается с рисом и лепешками. Классическое блюдо мексиканской кухни.',
    cookTime: '50 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1300 г
    cuisine: 'Мексиканская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 700, unit: Unit.g},
      {name: 'Рис', amount: 200, unit: Unit.g},
      {name: 'Томаты в собственном соку', amount: 400, unit: Unit.g},
      {name: 'Перец чили', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Кукурузная мука', amount: 2, unit: Unit.tbsp},
      {name: 'Кумин', amount: 1, unit: Unit.tsp},
      {name: 'Паприка', amount: 1, unit: Unit.tsp},
      {name: 'Растительное масло', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Лук нарежь полукольцами, чеснок измельчи, перец чили нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 4: Обжарка овощей',
        text: 'Добавь лук, чеснок и перец чили. Обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь кумин и паприку, перемешай.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь томаты, разомни их вилкой и доведи до кипения.'
      },
      {
        title: 'Шаг 7: Загущение соуса',
        text: 'Разведи кукурузную муку в небольшом количестве воды и влей в соус.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Уменьши огонь и туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 9: Приготовление риса',
        text: 'Отвари рис до готовности.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу с рисом и лепешками, укрась свежей зеленью и ломтиками лайма.'
      }
    ],
    categories: ['курица', 'мексиканская кухня', 'основное блюдо'],
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
      mexican: {
        id: 'mexican',
        title: 'Мексиканская кухня'
      }
    },
    dietCategoriesList: {}
  },
  72: {
    id: 72,
    name: 'kurica-po-yaponski',
    title: 'Курица по-японски',
    description: 'Нежная курица в соусе терияки с кунжутом и зеленым луком. Классическое блюдо японской кухни.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 360, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1100 г
    cuisine: 'Японская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 600, unit: Unit.g},
      {name: 'Рис', amount: 200, unit: Unit.g},
      {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
      {name: 'Мед', amount: 2, unit: Unit.tbsp},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Чеснок', amount: 2, unit: Unit.pcs},
      {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
      {name: 'Зеленый лук', amount: 4, unit: Unit.pcs},
      {name: 'Кукурузный крахмал', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь тонкими полосками.'
      },
      {
        title: 'Шаг 2: Приготовление соуса',
        text: 'Смешай соевый соус, мед, измельченный имбирь и чеснок.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Замаринуй курицу в половине соуса на 15 минут.'
      },
      {
        title: 'Шаг 4: Подготовка риса',
        text: 'Отвари рис до готовности.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В воке разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Добавление соуса',
        text: 'Влей оставшийся соус и туши 5-7 минут.'
      },
      {
        title: 'Шаг 7: Загущение соуса',
        text: 'Разведи крахмал в воде и влей в соус, помешивая.'
      },
      {
        title: 'Шаг 8: Добавление кунжута',
        text: 'Добавь кунжут и перемешай.'
      },
      {
        title: 'Шаг 9: Подготовка зеленого лука',
        text: 'Зеленый лук нарежь тонкими кольцами.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу с рисом, укрась зеленым луком и дополнительным кунжутом.'
      }
    ],
    categories: ['курица', 'японская кухня', 'основное блюдо'],
    rating: 4.8,
    reviews: 96,
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
  73: {
    id: 73,
    name: 'kurica-po-indijski',
    title: 'Курица по-индийски',
    description: 'Ароматная курица в сливочном соусе с карри и специями. Классическое блюдо индийской кухни.',
    cookTime: '55 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 450, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 26, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Индийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 700, unit: Unit.g},
      {name: 'Рис басмати', amount: 200, unit: Unit.g},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Порошок карри', amount: 2, unit: Unit.tbsp},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Гарам масала', amount: 1, unit: Unit.tsp},
      {name: 'Растительное масло', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка специй',
        text: 'Измельчи чеснок и имбирь до пастообразного состояния.'
      },
      {
        title: 'Шаг 3: Обжарка лука',
        text: 'Лук нарежь полукольцами и обжарь до золотистого цвета.'
      },
      {
        title: 'Шаг 4: Добавление специй',
        text: 'Добавь чесночно-имбирную пасту, карри, куркуму и гарам масала. Обжаривай 1-2 минуты.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'Добавь курицу и обжаривай до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Приготовление соуса',
        text: 'Добавь томатную пасту и сливки, перемешай.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Доведи до кипения, уменьши огонь и туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 8: Приготовление риса',
        text: 'Отвари рис басмати до готовности.'
      },
      {
        title: 'Шаг 9: Проверка готовности',
        text: 'Проверь готовность курицы и консистенцию соуса.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай курицу с рисом, укрась свежей зеленью и лепешками наан.'
      }
    ],
    categories: ['курица', 'индийская кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 108,
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
  74: {
    id: 74,
    name: 'kurica-po-francuzski',
    title: 'Курица по-французски',
    description: 'Нежная курица в сливочном соусе с грибами и белым вином. Классическое блюдо французской кухни.',
    cookTime: '1 час 10 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 26, unit: Unit.g},
      carbs: {value: 14, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1300 г
    cuisine: 'Французская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Шампиньоны', amount: 300, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Сливки 20%', amount: 200, unit: Unit.ml},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Тимьян', amount: 2, unit: Unit.tbsp},
      {name: 'Масло сливочное', amount: 50, unit: Unit.g},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка грибов',
        text: 'Шампиньоны промой, обсуши и нарежь пластинками.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей смесь сливочного и растительного масла. Обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 4: Обжарка овощей',
        text: 'Добавь нарезанный лук и чеснок. Обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 5: Добавление грибов',
        text: 'Добавь шампиньоны и обжаривай 5-7 минут.'
      },
      {
        title: 'Шаг 6: Добавление вина',
        text: 'Влей белое вино и туши 5 минут.'
      },
      {
        title: 'Шаг 7: Приготовление соуса',
        text: 'Добавь сливки, тимьян, соль и перец. Доведи до кипения.'
      },
      {
        title: 'Шаг 8: Загущение соуса',
        text: 'Добавь муку, перемешанную с небольшим количеством воды. Вари 2-3 минуты.'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Уменьши огонь и туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с отварным рисом или картофельным пюре, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'французская кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 112,
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
  75: {
    id: 75,
    name: 'kurica-po-italyanski',
    title: 'Курица по-итальянски',
    description: 'Ароматная курица с томатами, базиликом и моцареллой. Классическое блюдо итальянской кухни.',
    cookTime: '1 час',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Итальянская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 700, unit: Unit.g},
      {name: 'Томаты', amount: 4, unit: Unit.pcs},
      {name: 'Моцарелла', amount: 200, unit: Unit.g},
      {name: 'Базилик', amount: 1, unit: Unit.bunch},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Орегано', amount: 1, unit: Unit.tbsp},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Бальзамический уксус', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'Смешай оливковое масло, измельченный чеснок, орегано, соль и перец.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Натри курицу маринадом и оставь на 20 минут.'
      },
      {
        title: 'Шаг 4: Подготовка томатов',
        text: 'Томаты нарежь крупными дольками.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В сковороде разогрей оливковое масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Добавление томатов',
        text: 'Добавь томаты и обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 7: Добавление моцареллы',
        text: 'Нарежь моцареллу ломтиками и выложи поверх курицы.'
      },
      {
        title: 'Шаг 8: Запекание',
        text: 'Накрой крышкой и запекай в духовке при 180°C 15-20 минут.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Добавь бальзамический уксус и нарезанный базилик.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с пастой или отварным рисом, укрась свежим базиликом.'
      }
    ],
    categories: ['курица', 'итальянская кухня', 'основное блюдо'],
    rating: 4.8,
    reviews: 98,
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
  76: {
    id: 76,
    name: 'kurica-po-ispanski',
    title: 'Курица по-испански',
    description: 'Ароматная курица с паприкой, оливками и томатами. Классическое блюдо испанской кухни.',
    cookTime: '1 час 15 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 390, unit: Unit.g},
      protein: {value: 35, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 16, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1300 г
    cuisine: 'Испанская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Томаты', amount: 4, unit: Unit.pcs},
      {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Оливки', amount: 100, unit: Unit.g},
      {name: 'Паприка', amount: 2, unit: Unit.tbsp},
      {name: 'Шафран', amount: 0.25, unit: Unit.tsp},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Белое вино', amount: 100, unit: Unit.ml},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Маринад',
        text: 'Смешай оливковое масло, паприку, измельченный чеснок, соль и перец.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Натри курицу маринадом и оставь на 20 минут.'
      },
      {
        title: 'Шаг 4: Подготовка овощей',
        text: 'Томаты и перец нарежь крупными кусками, лук - полукольцами.'
      },
      {
        title: 'Шаг 5: Обжарка курицы',
        text: 'В глубокой сковороде разогрей оливковое масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Обжарка овощей',
        text: 'Добавь лук и перец, обжаривай 5 минут.'
      },
      {
        title: 'Шаг 7: Добавление томатов',
        text: 'Добавь томаты и обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Влей вино, добавь шафран и оливки. Туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 9: Проверка готовности',
        text: 'Проверь готовность курицы и консистенцию соуса.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с отварным рисом или картофелем, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'испанская кухня', 'основное блюдо'],
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
      spanish: {
        id: 'spanish',
        title: 'Испанская кухня'
      }
    },
    dietCategoriesList: {}
  },
  77: {
    id: 77,
    name: 'kurica-po-nemetski',
    title: 'Курица по-немецки',
    description: 'Сытная курица с картофелем и капустой в пивном соусе. Классическое блюдо немецкой кухни.',
    cookTime: '1 час 30 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 450, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1600 г
    cuisine: 'Немецкая',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Картофель', amount: 600, unit: Unit.g},
      {name: 'Капуста белокочанная', amount: 400, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Тмин', amount: 1, unit: Unit.tsp},
      {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
      {name: 'Светлое пиво', amount: 200, unit: Unit.ml},
      {name: 'Растительное масло', amount: 3, unit: Unit.tbsp},
      {name: 'Мука', amount: 1, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Картофель нарежь крупными дольками, капусту - крупными кусками, лук - полукольцами.'
      },
      {
        title: 'Шаг 3: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 4: Обжарка лука',
        text: 'Добавь лук и обжаривай до прозрачности.'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь измельченный чеснок, тмин и лавровый лист.'
      },
      {
        title: 'Шаг 6: Добавление овощей',
        text: 'Добавь картофель и капусту, перемешай.'
      },
      {
        title: 'Шаг 7: Добавление пива',
        text: 'Влей пиво и доведи до кипения.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Уменьши огонь и туши под крышкой 40-45 минут.'
      },
      {
        title: 'Шаг 9: Загущение соуса',
        text: 'Добавь муку, перемешанную с небольшим количеством воды. Вари 2-3 минуты.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'немецкая кухня', 'основное блюдо'],
    rating: 4.7,
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
      german: {
        id: 'german',
        title: 'Немецкая кухня'
      }
    },
    dietCategoriesList: {}
  },
  78: {
    id: 78,
    name: 'kurica-po-turetski',
    title: 'Курица по-турецки',
    description: 'Ароматная курица с нутом и овощами в томатном соусе. Классическое блюдо турецкой кухни.',
    cookTime: '1 час 20 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 22, unit: Unit.g},
      carbs: {value: 28, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Турецкая',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Нут', amount: 200, unit: Unit.g},
      {name: 'Томаты', amount: 4, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Перец чили', amount: 1, unit: Unit.pcs},
      {name: 'Кумин', amount: 1, unit: Unit.tsp},
      {name: 'Кориандр', amount: 1, unit: Unit.tsp},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste},
      {name: 'Перец черный', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка нута',
        text: 'Нут замочи на ночь, затем отвари до полуготовности.'
      },
      {
        title: 'Шаг 2: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 3: Подготовка овощей',
        text: 'Томаты нарежь кубиками, лук - полукольцами, чеснок и перец чили измельчи.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В глубокой сковороде разогрей оливковое масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Обжарка овощей',
        text: 'Добавь лук и обжаривай до прозрачности.'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь чеснок, перец чили, кумин и кориандр. Обжаривай 1-2 минуты.'
      },
      {
        title: 'Шаг 7: Добавление томатов',
        text: 'Добавь томаты и томатную пасту, перемешай.'
      },
      {
        title: 'Шаг 8: Добавление нута',
        text: 'Добавь отваренный нут и немного воды. Доведи до кипения.'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Уменьши огонь и туши под крышкой 30-35 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом или лепешками, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'турецкая кухня', 'основное блюдо'],
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
      turkish: {
        id: 'turkish',
        title: 'Турецкая кухня'
      }
    },
    dietCategoriesList: {}
  },
  79: {
    id: 79,
    name: 'kurica-po-arabski',
    title: 'Курица по-арабски',
    description: 'Ароматная курица с рисом, орехами и сухофруктами. Классическое блюдо арабской кухни.',
    cookTime: '1 час 30 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 480, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 26, unit: Unit.g},
      carbs: {value: 32, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1600 г
    cuisine: 'Арабская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Рис басмати', amount: 300, unit: Unit.g},
      {name: 'Изюм', amount: 50, unit: Unit.g},
      {name: 'Финики', amount: 50, unit: Unit.g},
      {name: 'Миндаль', amount: 50, unit: Unit.g},
      {name: 'Фисташки', amount: 50, unit: Unit.g},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Корица', amount: 1, unit: Unit.tsp},
      {name: 'Кардамон', amount: 0.5, unit: Unit.tsp},
      {name: 'Оливковое масло', amount: 3, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка сухофруктов',
        text: 'Изюм и финики замочи в теплой воде на 15 минут.'
      },
      {
        title: 'Шаг 3: Подготовка орехов',
        text: 'Миндаль и фисташки обжарь на сухой сковороде до золотистого цвета.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В глубокой сковороде разогрей оливковое масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'Добавь нарезанный лук и обжаривай до прозрачности.'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь измельченный чеснок, корицу и кардамон.'
      },
      {
        title: 'Шаг 7: Приготовление риса',
        text: 'Добавь рис и обжаривай 2-3 минуты.'
      },
      {
        title: 'Шаг 8: Добавление сухофруктов',
        text: 'Добавь изюм и финики, залей водой и доведи до кипения.'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Уменьши огонь и туши под крышкой 20-25 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим, укрась обжаренными орехами и свежей зеленью.'
      }
    ],
    categories: ['курица', 'арабская кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 106,
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
      arabic: {
        id: 'arabic',
        title: 'Арабская кухня'
      }
    },
    dietCategoriesList: {}
  },
  80: {
    id: 80,
    name: 'kurica-po-kitaiski',
    title: 'Курица по-китайски',
    description: 'Острая курица с овощами в кисло-сладком соусе. Классическое блюдо китайской кухни.',
    cookTime: '45 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 380, unit: Unit.g},
      protein: {value: 32, unit: Unit.g},
      fat: {value: 18, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1200 г
    cuisine: 'Китайская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Болгарский перец', amount: 2, unit: Unit.pcs},
      {name: 'Морковь', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
      {name: 'Устричный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp},
      {name: 'Кунжутное масло', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь тонкими полосками.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Болгарский перец и морковь нарежь соломкой, лук - полукольцами.'
      },
      {
        title: 'Шаг 3: Подготовка соуса',
        text: 'Смешай соевый соус, устричный соус и крахмал с небольшим количеством воды.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В воке разогрей растительное масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Обжарка овощей',
        text: 'Добавь лук, морковь и болгарский перец. Обжаривай 3-4 минуты.'
      },
      {
        title: 'Шаг 6: Добавление специй',
        text: 'Добавь измельченный чеснок и имбирь, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 7: Добавление соуса',
        text: 'Влей подготовленный соус и перемешай.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Туши на среднем огне 5-7 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Добавь кунжутное масло и перемешай.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась кунжутом и зеленым луком.'
      }
    ],
    categories: ['курица', 'китайская кухня', 'основное блюдо'],
    rating: 4.8,
    reviews: 98,
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
  81: {
    id: 81,
    name: 'kurica-po-vetnamski',
    title: 'Курица по-вьетнамски',
    description: 'Ароматная курица с рисовой лапшой и овощами в рыбном соусе. Классическое блюдо вьетнамской кухни.',
    cookTime: '50 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 420, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 20, unit: Unit.g},
      carbs: {value: 28, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Вьетнамская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Рисовая лапша', amount: 200, unit: Unit.g},
      {name: 'Морковь', amount: 2, unit: Unit.pcs},
      {name: 'Огурцы', amount: 2, unit: Unit.pcs},
      {name: 'Ростки бобов', amount: 100, unit: Unit.g},
      {name: 'Чеснок', amount: 3, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Рыбный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Лайм', amount: 1, unit: Unit.pcs},
      {name: 'Кинза', amount: 1, unit: Unit.bunch},
      {name: 'Мята', amount: 1, unit: Unit.bunch},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь тонкими полосками.'
      },
      {
        title: 'Шаг 2: Подготовка лапши',
        text: 'Рисовую лапшу замочи в горячей воде на 10 минут, затем откинь на дуршлаг.'
      },
      {
        title: 'Шаг 3: Подготовка овощей',
        text: 'Морковь и огурцы нарежь тонкой соломкой, чеснок и имбирь измельчи.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В воке разогрей растительное масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь чеснок и имбирь, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 6: Добавление овощей',
        text: 'Добавь морковь и обжаривай 2-3 минуты.'
      },
      {
        title: 'Шаг 7: Добавление лапши',
        text: 'Добавь рисовую лапшу и перемешай.'
      },
      {
        title: 'Шаг 8: Добавление соуса',
        text: 'Влей рыбный соус и сок лайма, перемешай.'
      },
      {
        title: 'Шаг 9: Добавление зелени',
        text: 'Добавь нарезанную кинзу, мяту и ростки бобов.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим, укрась дольками лайма и свежей зеленью.'
      }
    ],
    categories: ['курица', 'вьетнамская кухня', 'основное блюдо'],
    rating: 4.7,
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
      vietnamese: {
        id: 'vietnamese',
        title: 'Вьетнамская кухня'
      }
    },
    dietCategoriesList: {}
  },
  82: {
    id: 82,
    name: 'kurica-po-indoneziiski',
    title: 'Курица по-индонезийски',
    description: 'Ароматная курица в соусе сате с арахисом и специями. Классическое блюдо индонезийской кухни.',
    cookTime: '55 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 450, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1300 г
    cuisine: 'Индонезийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Арахис', amount: 100, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 200, unit: Unit.ml},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Кориандр', amount: 1, unit: Unit.tsp},
      {name: 'Тмин', amount: 0.5, unit: Unit.tsp},
      {name: 'Коричневый сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка соуса',
        text: 'Арахис обжарь и измельчи в блендере до пастообразного состояния.'
      },
      {
        title: 'Шаг 3: Подготовка специй',
        text: 'Лук, чеснок и имбирь измельчи в блендере до пасты.'
      },
      {
        title: 'Шаг 4: Обжарка специй',
        text: 'В глубокой сковороде разогрей масло и обжарь пасту из специй до аромата.'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь куркуму, кориандр и тмин, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 6: Добавление курицы',
        text: 'Добавь курицу и обжаривай до золотистой корочки.'
      },
      {
        title: 'Шаг 7: Добавление соуса',
        text: 'Добавь арахисовую пасту, кокосовое молоко и сахар.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Туши на среднем огне 20-25 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась измельченным арахисом и свежей зеленью.'
      }
    ],
    categories: ['курица', 'индонезийская кухня', 'основное блюдо'],
    rating: 4.8,
    reviews: 96,
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
      indonesian: {
        id: 'indonesian',
        title: 'Индонезийская кухня'
      }
    },
    dietCategoriesList: {}
  },
  83: {
    id: 83,
    name: 'kurica-po-malaiiski',
    title: 'Курица по-малайзийски',
    description: 'Ароматная курица в карри с кокосовым молоком и специями. Классическое блюдо малайзийской кухни.',
    cookTime: '1 час',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 470, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 32, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Малайзийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 400, unit: Unit.ml},
      {name: 'Картофель', amount: 4, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Карри паста', amount: 2, unit: Unit.tbsp},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Кориандр', amount: 1, unit: Unit.tsp},
      {name: 'Листья карри', amount: 10, unit: Unit.pcs},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка овощей',
        text: 'Картофель очисти и нарежь кубиками, лук - полукольцами.'
      },
      {
        title: 'Шаг 3: Подготовка специй',
        text: 'Чеснок и имбирь измельчи в блендере до пасты.'
      },
      {
        title: 'Шаг 4: Обжарка специй',
        text: 'В глубокой сковороде разогрей масло и обжарь пасту из специй до аромата.'
      },
      {
        title: 'Шаг 5: Добавление карри',
        text: 'Добавь карри пасту, куркуму и кориандр, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 6: Добавление курицы',
        text: 'Добавь курицу и обжаривай до золотистой корочки.'
      },
      {
        title: 'Шаг 7: Добавление овощей',
        text: 'Добавь картофель и лук, перемешай.'
      },
      {
        title: 'Шаг 8: Добавление кокосового молока',
        text: 'Влей кокосовое молоко и добавь листья карри.'
      },
      {
        title: 'Шаг 9: Тушение',
        text: 'Туши на среднем огне 30-35 минут, пока картофель не станет мягким.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'малайзийская кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 104,
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
      malaysian: {
        id: 'malaysian',
        title: 'Малайзийская кухня'
      }
    },
    dietCategoriesList: {}
  },
  84: {
    id: 84,
    name: 'kurica-po-filippinski',
    title: 'Курица по-филиппински',
    description: 'Ароматная курица в соусе адобо с соевым соусом и уксусом. Классическое блюдо филиппинской кухни.',
    cookTime: '1 час 10 минут',
    difficulty: '2/5',
    nutrition: {
      calories: {value: 390, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 24, unit: Unit.g},
      carbs: {value: 18, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Филиппинская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
      {name: 'Яблочный уксус', amount: 3, unit: Unit.tbsp},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 6, unit: Unit.pcs},
      {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
      {name: 'Перец горошком', amount: 1, unit: Unit.tsp},
      {name: 'Сахар', amount: 1, unit: Unit.tsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка маринада',
        text: 'Смешай соевый соус, уксус, измельченный чеснок и перец горошком.'
      },
      {
        title: 'Шаг 3: Маринование',
        text: 'Замаринуй курицу в подготовленной смеси на 30 минут.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В глубокой сковороде разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Обжарка лука',
        text: 'Добавь нарезанный лук и обжаривай до прозрачности.'
      },
      {
        title: 'Шаг 6: Добавление маринада',
        text: 'Влей маринад и добавь лавровый лист.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Доведи до кипения, затем убавь огонь и туши 30-35 минут.'
      },
      {
        title: 'Шаг 8: Добавление сахара',
        text: 'Добавь сахар и перемешай.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'филиппинская кухня', 'основное блюдо'],
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
      filipino: {
        id: 'filipino',
        title: 'Филиппинская кухня'
      }
    },
    dietCategoriesList: {}
  },
  85: {
    id: 85,
    name: 'kurica-po-singapurski',
    title: 'Курица по-сингапурски',
    description: 'Ароматная курица в соусе чили с имбирем и чесноком. Классическое блюдо сингапурской кухни.',
    cookTime: '45 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 410, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 26, unit: Unit.g},
      carbs: {value: 20, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1300 г
    cuisine: 'Сингапурская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Перец чили', amount: 2, unit: Unit.pcs},
      {name: 'Имбирь', amount: 30, unit: Unit.g},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
      {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
      {name: 'Устричный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Коричневый сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь тонкими полосками.'
      },
      {
        title: 'Шаг 2: Подготовка соуса',
        text: 'Смешай соевый соус, устричный соус, сахар и крахмал с небольшим количеством воды.'
      },
      {
        title: 'Шаг 3: Подготовка специй',
        text: 'Перец чили, имбирь, чеснок и лук измельчи.'
      },
      {
        title: 'Шаг 4: Обжарка курицы',
        text: 'В воке разогрей масло и обжарь курицу до золотистой корочки.'
      },
      {
        title: 'Шаг 5: Обжарка специй',
        text: 'Добавь измельченные специи и обжаривай 1-2 минуты.'
      },
      {
        title: 'Шаг 6: Добавление соуса',
        text: 'Влей подготовленный соус и перемешай.'
      },
      {
        title: 'Шаг 7: Тушение',
        text: 'Туши на среднем огне 5-7 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 8: Финальный штрих',
        text: 'Попробуй на соль и при необходимости добавь.'
      },
      {
        title: 'Шаг 9: Охлаждение',
        text: 'Дай блюду настояться 5 минут.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась свежей зеленью и дольками перца чили.'
      }
    ],
    categories: ['курица', 'сингапурская кухня', 'основное блюдо'],
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
      singaporean: {
        id: 'singaporean',
        title: 'Сингапурская кухня'
      }
    },
    dietCategoriesList: {}
  },
  86: {
    id: 86,
    name: 'kurica-po-bruneiski',
    title: 'Курица по-брунейски',
    description: 'Ароматная курица в соусе амбуят с тамариндом и специями. Классическое блюдо брунейской кухни.',
    cookTime: '1 час 15 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 430, unit: Unit.g},
      protein: {value: 34, unit: Unit.g},
      fat: {value: 28, unit: Unit.g},
      carbs: {value: 22, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1400 г
    cuisine: 'Брунейская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Тамаринд', amount: 50, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 200, unit: Unit.ml},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Кориандр', amount: 1, unit: Unit.tsp},
      {name: 'Коричневый сахар', amount: 1, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка тамаринда',
        text: 'Тамаринд замочи в теплой воде на 15 минут, затем процеди.'
      },
      {
        title: 'Шаг 3: Подготовка специй',
        text: 'Лук, чеснок и имбирь измельчи в блендере до пасты.'
      },
      {
        title: 'Шаг 4: Обжарка специй',
        text: 'В глубокой сковороде разогрей масло и обжарь пасту из специй до аромата.'
      },
      {
        title: 'Шаг 5: Добавление специй',
        text: 'Добавь куркуму и кориандр, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 6: Добавление курицы',
        text: 'Добавь курицу и обжаривай до золотистой корочки.'
      },
      {
        title: 'Шаг 7: Добавление соуса',
        text: 'Добавь тамаринд, кокосовое молоко и сахар.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Туши на среднем огне 30-35 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась свежей зеленью.'
      }
    ],
    categories: ['курица', 'брунейская кухня', 'основное блюдо'],
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
      bruneian: {
        id: 'bruneian',
        title: 'Брунейская кухня'
      }
    },
    dietCategoriesList: {}
  },
  87: {
    id: 87,
    name: 'kurica-po-kambodzhiiski',
    title: 'Курица по-камбоджийски',
    description: 'Ароматная курица в соусе амок с кокосовым молоком и специями. Классическое блюдо камбоджийской кухни.',
    cookTime: '1 час 20 минут',
    difficulty: '3/5',
    nutrition: {
      calories: {value: 440, unit: Unit.g},
      protein: {value: 36, unit: Unit.g},
      fat: {value: 30, unit: Unit.g},
      carbs: {value: 24, unit: Unit.g}
    },
    // Общая грамовка готового блюда: ~1500 г
    cuisine: 'Камбоджийская',
    servings: 4,
    ingredients: [
      {name: 'Куриное филе', amount: 800, unit: Unit.g},
      {name: 'Кокосовое молоко', amount: 400, unit: Unit.ml},
      {name: 'Лимонная трава', amount: 2, unit: Unit.pcs},
      {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
      {name: 'Чеснок', amount: 4, unit: Unit.pcs},
      {name: 'Имбирь', amount: 20, unit: Unit.g},
      {name: 'Куркума', amount: 1, unit: Unit.tsp},
      {name: 'Кориандр', amount: 1, unit: Unit.tsp},
      {name: 'Рыбный соус', amount: 2, unit: Unit.tbsp},
      {name: 'Растительное масло', amount: 2, unit: Unit.tbsp},
      {name: 'Соль', amount: 0, unit: Unit.to_taste}
    ],
    steps: [
      {
        title: 'Шаг 1: Подготовка курицы',
        text: 'Куриное филе промой, обсуши и нарежь на порционные куски.'
      },
      {
        title: 'Шаг 2: Подготовка специй',
        text: 'Лимонную траву нарежь, лук, чеснок и имбирь измельчи в блендере до пасты.'
      },
      {
        title: 'Шаг 3: Обжарка специй',
        text: 'В глубокой сковороде разогрей масло и обжарь пасту из специй до аромата.'
      },
      {
        title: 'Шаг 4: Добавление специй',
        text: 'Добавь куркуму и кориандр, обжаривай 1 минуту.'
      },
      {
        title: 'Шаг 5: Добавление курицы',
        text: 'Добавь курицу и обжаривай до золотистой корочки.'
      },
      {
        title: 'Шаг 6: Добавление кокосового молока',
        text: 'Влей кокосовое молоко и добавь лимонную траву.'
      },
      {
        title: 'Шаг 7: Добавление рыбного соуса',
        text: 'Добавь рыбный соус и перемешай.'
      },
      {
        title: 'Шаг 8: Тушение',
        text: 'Туши на среднем огне 35-40 минут, пока соус не загустеет.'
      },
      {
        title: 'Шаг 9: Финальный штрих',
        text: 'Попробуй на соль и при необходимости добавь.'
      },
      {
        title: 'Шаг 10: Подача',
        text: 'Подавай горячим с рисом, укрась свежей зеленью и дольками лайма.'
      }
    ],
    categories: ['курица', 'камбоджийская кухня', 'основное блюдо'],
    rating: 4.9,
    reviews: 98,
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
      cambodian: {
        id: 'cambodian',
        title: 'Камбоджийская кухня'
      }
    },
    dietCategoriesList: {}
  }
};
