/**
 * Категория рецепта.
 * @property en Англоязычное название для url (только латиница, без пробелов и спецсимволов,
 * нижний регистр, через дефис)
 */
export const categories = {
  'выпечка': { id: 'выпечка', name: 'выпечка', title: 'Выпечка', en: 'pastry' },
  'хворост': { id: 'хворост', name: 'хворост', title: 'Хворост', en: 'khvorost' },
  'на кефире': { id: 'на кефире', name: 'на кефире', title: 'На кефире', en: 'with-kefir' },
  'жареное тесто': { id: 'жареное тесто', name: 'жареное тесто', title: 'Жареное тесто', en: 'fried-dough' },
  'сладкое к чаю': { id: 'сладкое к чаю', name: 'сладкое к чаю', title: 'Сладкое к чаю', en: 'sweet-for-tea' },
  'русская кухня': { id: 'русская кухня', name: 'русская кухня', title: 'Русская кухня', en: 'russian-cuisine' },
  'десерт': { id: 'десерт', name: 'десерт', title: 'Десерт', en: 'dessert' },
  'быстрый рецепт': { id: 'быстрый рецепт', name: 'быстрый рецепт', title: 'Быстрый рецепт', en: 'quick-recipe' },
  'домашняя выпечка': { id: 'домашняя выпечка', name: 'домашняя выпечка', title: 'Домашняя выпечка', en: 'homemade-pastry' },
  'дешево и вкусно': { id: 'дешево и вкусно', name: 'дешево и вкусно', title: 'Дешево и вкусно', en: 'cheap-and-tasty' },
  'просто': { id: 'просто', name: 'просто', title: 'Просто', en: 'simple' },
  'торт': { id: 'торт', name: 'торт', title: 'Торт', en: 'cake' },
  'кофейный десерт': { id: 'кофейный десерт', name: 'кофейный десерт', title: 'Кофейный десерт', en: 'coffee-dessert' },
  'маскарпоне': { id: 'маскарпоне', name: 'маскарпоне', title: 'Маскарпоне', en: 'mascarpone' },
  'капучино': { id: 'капучино', name: 'капучино', title: 'Капучино', en: 'cappuccino' },
  'праздничный торт': { id: 'праздничный торт', name: 'праздничный торт', title: 'Праздничный торт', en: 'festive-cake' },
  'сладкое': { id: 'сладкое', name: 'сладкое', title: 'Сладкое', en: 'sweet' },
  'к чаю': { id: 'к чаю', name: 'к чаю', title: 'К чаю', en: 'for-tea' },
  'впечатляющий десерт': { id: 'впечатляющий десерт', name: 'впечатляющий десерт', title: 'Впечатляющий десерт', en: 'impressive-dessert' },
  'выпечка на праздник': { id: 'выпечка на праздник', name: 'выпечка на праздник', title: 'Выпечка на праздник', en: 'holiday-pastry' },
  'голубцы': {id: 'голубцы', name: 'голубцы', title: 'Голубцы', en: 'cabbage-rolls'},
  'блюда из кролика': {
    id: 'блюда из кролика',
    name: 'блюда из кролика',
    title: 'Блюда из кролика',
    en: 'rabbit-dishes'
  },
  'второе блюдо': {id: 'второе блюдо', name: 'второе блюдо', title: 'Второе блюдо', en: 'main-course'},
  'домашняя кухня': {id: 'домашняя кухня', name: 'домашняя кухня', title: 'Домашняя кухня', en: 'home-cooking'},
  'интернациональная кухня': {
    id: 'интернациональная кухня',
    name: 'интернациональная кухня',
    title: 'Интернациональная кухня',
    en: 'international-cuisine'
  },
  'мясные блюда': {id: 'мясные блюда', name: 'мясные блюда', title: 'Мясные блюда', en: 'meat-dishes'},
  'тушёные блюда': {id: 'тушёные блюда', name: 'тушёные блюда', title: 'Тушёные блюда', en: 'stewed-dishes'},
  'праздничное блюдо': {
    id: 'праздничное блюдо',
    name: 'праздничное блюдо',
    title: 'Праздничное блюдо',
    en: 'festive-dish'
  },
  'обед': {id: 'обед', name: 'обед', title: 'Обед', en: 'lunch'},
  'ужин': {id: 'ужин', name: 'ужин', title: 'Ужин', en: 'dinner'},
  'низкокалорийное': {id: 'низкокалорийное', name: 'низкокалорийное', title: 'Низкокалорийное', en: 'low-calorie'},
  'диетическое': {id: 'диетическое', name: 'диетическое', title: 'Диетическое', en: 'diet'},
  'салат': {id: 'салат', name: 'салат', title: 'Салат', en: 'salad'},
  'лобио': {id: 'лобио', name: 'лобио', title: 'Лобио', en: 'lobio'},
  'грузинская кухня': {
    id: 'грузинская кухня',
    name: 'грузинская кухня',
    title: 'Грузинская кухня',
    en: 'georgian-cuisine'
  },
  'вегетарианское блюдо': {
    id: 'вегетарианское блюдо',
    name: 'вегетарианское блюдо',
    title: 'Вегетарианское блюдо',
    en: 'vegetarian-dish'
  },
  'постное блюдо': {id: 'постное блюдо', name: 'постное блюдо', title: 'Постное блюдо', en: 'lean-dish'},
  'закуска': {id: 'закуска', name: 'закуска', title: 'Закуска', en: 'appetizer'},
  'фасоль': {id: 'фасоль', name: 'фасоль', title: 'Фасоль', en: 'beans'},
  'грецкие орехи': {id: 'грецкие орехи', name: 'грецкие орехи', title: 'Грецкие орехи', en: 'walnuts'},
  'острое блюдо': {id: 'острое блюдо', name: 'острое блюдо', title: 'Острое блюдо', en: 'spicy-dish'},
  'на обед': {id: 'на обед', name: 'на обед', title: 'На обед', en: 'for-lunch'},
  'на ужин': {id: 'на ужин', name: 'на ужин', title: 'На ужин', en: 'for-dinner'},
  'оладьи': { id: 'оладьи', name: 'оладьи', title: 'Оладьи', en: 'pancakes' },
  'кабачки': { id: 'кабачки', name: 'кабачки', title: 'Кабачки', en: 'zucchini' },
  'на сковороде': { id: 'на сковороде', name: 'на сковороде', title: 'На сковороде', en: 'pan-fried' },
  'овощные блюда': { id: 'овощные блюда', name: 'овощные блюда', title: 'Овощные блюда', en: 'vegetable-dishes' },
  'летние рецепты': { id: 'летние рецепты', name: 'летние рецепты', title: 'Летние рецепты', en: 'summer-recipes' },
  'завтрак': { id: 'завтрак', name: 'завтрак', title: 'Завтрак', en: 'breakfast' },
  'простые рецепты': { id: 'простые рецепты', name: 'простые рецепты', title: 'Простые рецепты', en: 'easy-recipes' },

} as const;

export type CategoryId = keyof typeof categories;

// Категории блюд (уровень 1)
export const dishCategories = {
  breakfasts: {
    id: 'breakfasts',
    title: 'Завтраки',
    subcategories: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
      eggs: {
        id: 'eggs',
        title: 'Из яиц'
      },
      'muesli-granola': {
        id: 'muesli-granola',
        title: 'Мюсли и гранола'
      },
      'syrniki-casseroles': {
        id: 'syrniki-casseroles',
        title: 'Сырники и запеканки'
      },
      'vegetable-dishes': {
        id: 'vegetable-dishes',
        title: 'Овощные блюда'
      }
    }
  },

  appetizers: {
    id: 'appetizers',
    title: 'Закуски',
    subcategories: {
      hot: {
        id: 'hot',
        title: 'Горячие закуски'
      },
      cold: {
        id: 'cold',
        title: 'Холодные закуски'
      },
      'drinks-snacks': {
        id: 'drinks-snacks',
        title: 'Закуски к напиткам'
      },
      'fast-food': {
        id: 'fast-food',
        title: 'Фастфуд'
      },
      festive: {
        id: 'festive',
        title: 'Праздничные закуски'
      }
    }
  },

  'main-dishes': {
    id: 'main-dishes',
    title: 'Основные блюда',
    subcategories: {
      lamb: {
        id: 'lamb',
        title: 'Блюда из баранины'
      },
      beef: {
        id: 'beef',
        title: 'Блюда из говядины'
      },
      chicken: {
        id: 'chicken',
        title: 'Блюда из курицы'
      },
      'mixed-meat-poultry': {
        id: 'mixed-meat-poultry',
        title: 'Блюда из мяса и птицы'
      },
      seafood: {
        id: 'seafood',
        title: 'Блюда из морепродуктов'
      },
      vegetable: {
        id: 'vegetable',
        title: 'Блюда из овощей'
      },
      fish: {
        id: 'fish',
        title: 'Блюда из рыбы'
      },
      liver: {
        id: 'liver',
        title: 'Блюда с печенью'
      },
      rice: {
        id: 'rice',
        title: 'Блюда с рисом'
      },
      mince: {
        id: 'mince',
        title: 'Блюда с фаршем'
      },
      garnishes: {
        id: 'garnishes',
        title: 'Гарниры и дополнительные блюда'
      },
      shashlik: {
        id: 'shashlik',
        title: 'Шашлыки'
      },
      'grill-barbecue': {
        id: 'grill-barbecue',
        title: 'Гриль/барбекю'
      }
    }
  },

  pasta: {
    id: 'pasta',
    title: 'Паста',
    subcategories: {
      pasta: {
        id: 'pasta',
        title: 'Паста'
      },
      macaroni: {
        id: 'macaroni',
        title: 'Макароны'
      }
    }
  },

  pizza: {
    id: 'pizza',
    title: 'Пицца',
    subcategories: {
      pizza: {
        id: 'pizza',
        title: 'Пицца'
      },
      dough: {
        id: 'dough',
        title: 'Тесто для пиццы'
      }
    }
  },

  risotto: {
    id: 'risotto',
    title: 'Ризотто',
    subcategories: {
      risotto: {
        id: 'risotto',
        title: 'Ризотто'
      }
    }
  },

  salads: {
    id: 'salads',
    title: 'Салаты',
    subcategories: {
      vegetarian: {
        id: 'vegetarian',
        title: 'Вегетарианские салаты'
      },
      'vegan-fasting': {
        id: 'vegan-fasting',
        title: 'Веганские и постные салаты'
      },
      classic: {
        id: 'classic',
        title: 'Классические салаты'
      },
      'meat-fish': {
        id: 'meat-fish',
        title: 'Мясные и рыбные салаты'
      },
      chicken: {
        id: 'chicken',
        title: 'Салаты с курицей'
      },
      seafood: {
        id: 'seafood',
        title: 'Салаты с морепродуктами и рыбой'
      },
      mayo: {
        id: 'mayo',
        title: 'Салаты с майонезом'
      },
      'fruit-veggie': {
        id: 'fruit-veggie',
        title: 'Салаты с овощами и фруктами'
      },
      'layered-festive': {
        id: 'layered-festive',
        title: 'Слоеные и праздничные салаты'
      },
      korean: {
        id: 'korean',
        title: 'Корейские салаты'
      },
      spicy: {
        id: 'spicy',
        title: 'Острые салаты'
      }
    }
  },

  sauces: {
    id: 'sauces',
    title: 'Соусы',
    subcategories: {
      fish: {
        id: 'fish',
        title: 'Соусы к рыбе'
      },
      meat: {
        id: 'meat',
        title: 'Соусы к мясу'
      },
      poultry: {
        id: 'poultry',
        title: 'Соусы к птице'
      },
      salad: {
        id: 'salad',
        title: 'К салату'
      },
      sweet: {
        id: 'sweet',
        title: 'Сладкие соусы'
      }
    }
  },

  marinades: {
    id: 'marinades',
    title: 'Маринады',
    subcategories: {
      pork: {
        id: 'pork',
        title: 'Маринад для свинины'
      },
      chicken: {
        id: 'chicken',
        title: 'Маринад для курицы'
      },
      fish: {
        id: 'fish',
        title: 'Маринад для рыбы'
      },
      'soy-sauce': {
        id: 'soy-sauce',
        title: 'Маринад с соевым соусом'
      },
      beef: {
        id: 'beef',
        title: 'Маринад для говядины'
      },
      kefir: {
        id: 'kefir',
        title: 'Маринад на кефире'
      }
    }
  },

  'baking-desserts': {
    id: 'baking-desserts',
    title: 'Выпечка и десерты',
    subcategories: {
      pies: {
        id: 'pies',
        title: 'Пироги'
      },
      cakes: {
        id: 'cakes',
        title: 'Торты'
      },
      cookies: {
        id: 'cookies',
        title: 'Печенье'
      },
      gingerbread: {
        id: 'gingerbread',
        title: 'Пряники'
      },
      marmalade: {
        id: 'marmalade',
        title: 'Мармелад'
      },
      'no-bake': {
        id: 'no-bake',
        title: 'Десерты без выпечки'
      },
      curd: {
        id: 'curd',
        title: 'Творожные десерты'
      },
      pancakes: {
        id: 'pancakes',
        title: 'Блины'
      },
      fritters: {
        id: 'fritters',
        title: 'Оладьи'
      },
      muffins: {
        id: 'muffins',
        title: 'Кексы'
      },
      cupcakes: {
        id: 'cupcakes',
        title: 'Маффины'
      },
      'baking-with-curd': {
        id: 'baking-with-curd',
        title: 'Выпечка с творогом'
      },
      buns: {
        id: 'buns',
        title: 'Булочки'
      },
      bread: {
        id: 'bread',
        title: 'Хлеб'
      },
      'vegan-desserts': {
        id: 'vegan-desserts',
        title: 'Веганские десерты'
      }
    }
  },

  preparations: {
    id: 'preparations',
    title: 'Заготовки',
    subcategories: {
      jams: {
        id: 'jams',
        title: 'Варенье и джемы'
      },
      'vegetables-for-winter': {
        id: 'vegetables-for-winter',
        title: 'Овощи на зиму'
      },
      'pickles-cucumbers': {
        id: 'pickles-cucumbers',
        title: 'Огурцы'
      },
      mushrooms: {
        id: 'mushrooms',
        title: 'Грибы'
      },
      'salads-etc': {
        id: 'salads-etc',
        title: 'Салаты и прочее'
      }
    }
  },

  soups: {
    id: 'soups',
    title: 'Супы',
    subcategories: {
      borscht: {
        id: 'borscht',
        title: 'Борщи и похожие супы'
      },
      okroshka: {
        id: 'okroshka',
        title: 'Окрошки'
      },
      solyanka: {
        id: 'solyanka',
        title: 'Солянки'
      },
      'cream-puree': {
        id: 'cream-puree',
        title: 'Крема и пюре'
      },
      'meat-vegetable': {
        id: 'meat-vegetable',
        title: 'Мясные и овощные'
      },
      fish: {
        id: 'fish',
        title: 'Рыбные супы'
      }
    }
  },

  drinks: {
    id: 'drinks',
    title: 'Напитки',
    subcategories: {
      juices: {
        id: 'juices',
        title: 'Соки'
      },
      compotes: {
        id: 'compotes',
        title: 'Компоты'
      },
      smoothies: {
        id: 'smoothies',
        title: 'Смузи'
      },
      cocktails: {
        id: 'cocktails',
        title: 'Коктейли'
      },
      'coffee-tea': {
        id: 'coffee-tea',
        title: 'Кофе и чай'
      }
    }
  },

  'fast-slow-cooking': {
    id: 'fast-slow-cooking',
    title: 'Время приготовления',
    subcategories: {
      fast: {
        id: 'fast',
        title: 'Быстрые блюда (<30 минут)'
      },
      slow: {
        id: 'slow',
        title: 'Медленное приготовление (тушение, томление)'
      }
    }
  },

  'season-mood-holiday': {
    id: 'season-mood-holiday',
    title: 'Сезон, настроение, праздник',
    subcategories: {
      winter: {
        id: 'winter',
        title: 'Зима'
      },
      spring: {
        id: 'spring',
        title: 'Весна'
      },
      summer: {
        id: 'summer',
        title: 'Лето'
      },
      autumn: {
        id: 'autumn',
        title: 'Осень'
      },
      christmas: {
        id: 'christmas',
        title: 'Рождество'
      },
      'new-year': {
        id: 'new-year',
        title: 'Новый год'
      },
      valentines: {
        id: 'valentines',
        title: 'День всех влюблённых'
      },
      easter: {
        id: 'easter',
        title: 'Пасха'
      },
      'mood-happy': {
        id: 'mood-happy',
        title: 'Праздничное настроение'
      },
      'mood-comfort': {
        id: 'mood-comfort',
        title: 'Комфортное настроение'
      },
      'mood-energetic': {
        id: 'mood-energetic',
        title: 'Энергичное настроение'
      }
    }
  },

  'meals-time': {
    id: 'meals-time',
    title: 'Время приёма пищи',
    subcategories: {
      breakfast: {
        id: 'breakfast',
        title: 'Завтрак'
      },
      lunch: {
        id: 'lunch',
        title: 'Обед'
      },
      dinner: {
        id: 'dinner',
        title: 'Ужин'
      },
      snack: {
        id: 'snack',
        title: 'Перекус'
      }
    }
  }
} as const;

// Кухни (уровень 2)
export const cuisineCategories = {
  italian: {
    id: 'italian',
    title: 'Итальянская кухня'
  },
  chinese: {
    id: 'chinese',
    title: 'Китайская кухня'
  },
  japanese: {
    id: 'japanese',
    title: 'Японская кухня'
  },
  russian: {
    id: 'russian',
    title: 'Русская кухня'
  },
  georgian: {
    id: 'georgian',
    title: 'Грузинская кухня'
  },
  indian: {
    id: 'indian',
    title: 'Индийская кухня'
  },
  mexican: {
    id: 'mexican',
    title: 'Мексиканская кухня'
  },
  french: {
    id: 'french',
    title: 'Французская кухня'
  },
  turkish: {
    id: 'turkish',
    title: 'Турецкая кухня'
  },
  korean: {
    id: 'korean',
    title: 'Корейская кухня'
  },
  armenian: {
    id: 'armenian',
    title: 'Армянская кухня'
  },
  azerbaijani: {
    id: 'azerbaijani',
    title: 'Азербайджанская кухня'
  },
  spanish: {
    id: 'spanish',
    title: 'Испанская кухня'
  },
  thai: {
    id: 'thai',
    title: 'Тайская кухня'
  },
  mediterranean: {
    id: 'mediterranean',
    title: 'Средиземноморская кухня'
  },
  greek: {
    id: 'greek',
    title: 'Греческая кухня'
  },
  ukrainian: {
    id: 'ukrainian',
    title: 'Украинская кухня'
  },
  polish: {
    id: 'polish',
    title: 'Польская кухня'
  },
  british: {
    id: 'british',
    title: 'Британская кухня'
  },
  german: {
    id: 'german',
    title: 'Немецкая кухня'
  },
  lebanese: {
    id: 'lebanese',
    title: 'Ливанская кухня'
  },
  brazilian: {
    id: 'brazilian',
    title: 'Бразильская кухня'
  },
  vietnamese: {
    id: 'vietnamese',
    title: 'Вьетнамская кухня'
  },
  swiss: {
    id: 'swiss',
    title: 'Швейцарская кухня'
  },
  finnish: {
    id: 'finnish',
    title: 'Финская кухня'
  },
  scandinavian: {
    id: 'scandinavian',
    title: 'Скандинавская кухня'
  },
  dutch: {
    id: 'dutch',
    title: 'Голландская кухня'
  },
  czech: {
    id: 'czech',
    title: 'Чешская кухня'
  },
  norwegian: {
    id: 'norwegian',
    title: 'Норвежская кухня'
  },
  swedish: {
    id: 'swedish',
    title: 'Шведская кухня'
  },
  austrian: {
    id: 'austrian',
    title: 'Австрийская кухня'
  },
  hungarian: {
    id: 'hungarian',
    title: 'Венгерская кухня'
  },
  serbian: {
    id: 'serbian',
    title: 'Сербская кухня'
  },
  belarusian: {
    id: 'belarusian',
    title: 'Белорусская кухня'
  },
  moldovan: {
    id: 'moldovan',
    title: 'Молдавская кухня'
  },
  kazakh: {
    id: 'kazakh',
    title: 'Казахская кухня'
  },
  uzbek: {
    id: 'uzbek',
    title: 'Узбекская кухня'
  },
  kyrgyz: {
    id: 'kyrgyz',
    title: 'Киргизская кухня'
  },
  turkmen: {
    id: 'turkmen',
    title: 'Туркменская кухня'
  },
  tajik: {
    id: 'tajik',
    title: 'Таджикская кухня'
  },
  abkhazian: {
    id: 'abkhazian',
    title: 'Абхазская кухня'
  },
  ossetian: {
    id: 'ossetian',
    title: 'Осетинская кухня'
  },
  bashkirian: {
    id: 'bashkirian',
    title: 'Башкирская кухня'
  },
  cossack: {
    id: 'cossack',
    title: 'Казачья кухня'
  },
  kalmyk: {
    id: 'kalmyk',
    title: 'Калмыцкая кухня'
  },
  chukchi: {
    id: 'chukchi',
    title: 'Чукотская кухня'
  },
  yakut: {
    id: 'yakut',
    title: 'Якутская кухня'
  },
  mari: {
    id: 'mari',
    title: 'Марийская кухня'
  },
  udmurt: {
    id: 'udmurt',
    title: 'Удмуртская кухня'
  },
  komi: {
    id: 'komi',
    title: 'Коми кухня'
  },
  sakha: {
    id: 'sakha',
    title: 'Саха кухня'
  },
  slovak: {
    id: 'slovak',
    title: 'Словацкая кухня'
  },
  croatian: {
    id: 'croatian',
    title: 'Хорватская кухня'
  },
  montenegrin: {
    id: 'montenegrin',
    title: 'Черногорская кухня'
  },
  bosnian: {
    id: 'bosnian',
    title: 'Боснийская кухня'
  },
  macedonian: {
    id: 'macedonian',
    title: 'Македонская кухня'
  },
  albanian: {
    id: 'albanian',
    title: 'Албанская кухня'
  },
  maltese: {
    id: 'maltese',
    title: 'Мальтийская кухня'
  },
  cypriot: {
    id: 'cypriot',
    title: 'Кипрская кухня'
  },
  romanian: {
    id: 'romanian',
    title: 'Румынская кухня'
  },
  bulgarian: {
    id: 'bulgarian',
    title: 'Болгарская кухня'
  },
  algerian: {
    id: 'algerian',
    title: 'Алжирская кухня'
  },
  egyptian: {
    id: 'egyptian',
    title: 'Египетская кухня'
  },
  syrian: {
    id: 'syrian',
    title: 'Сирийская кухня'
  },
  israeli: {
    id: 'israeli',
    title: 'Израильская кухня'
  },
  palestinian: {
    id: 'palestinian',
    title: 'Палестинская кухня'
  },
  jordanian: {
    id: 'jordanian',
    title: 'Иорданская кухня'
  },
  tunisian: {
    id: 'tunisian',
    title: 'Тунисская кухня'
  },
  libyan: {
    id: 'libyan',
    title: 'Ливийская кухня'
  },
  moroccan: {
    id: 'moroccan',
    title: 'Марокканская кухня'
  },
  ethiopian: {
    id: 'ethiopian',
    title: 'Эфиопская кухня'
  },
  somali: {
    id: 'somali',
    title: 'Сомалийская кухня'
  },
  kenyan: {
    id: 'kenyan',
    title: 'Кенийская кухня'
  },
  nigerian: {
    id: 'nigerian',
    title: 'Нигерийская кухня'
  },
  ghanaian: {
    id: 'ghanaian',
    title: 'Ганская кухня'
  },
  senegalese: {
    id: 'senegalese',
    title: 'Сенегальская кухня'
  },
  southafrican: {
    id: 'southafrican',
    title: 'Южноафриканская кухня'
  },
  zimbabwean: {
    id: 'zimbabwean',
    title: 'Зимбабвийская кухня'
  },
  malawian: {
    id: 'malawian',
    title: 'Малавийская кухня'
  },

  // Ближний Восток (частично добавлены, для полноты)
  iraqi: {
    id: 'iraqi',
    title: 'Иракская кухня'
  },
  iranian: {
    id: 'iranian',
    title: 'Иранская кухня'
  },
  saudi: {
    id: 'saudi',
    title: 'Саудовская кухня'
  },
  qatar: {
    id: 'qatar',
    title: 'Катарская кухня'
  },
  emirates: {
    id: 'emirates',
    title: 'Кухня ОАЭ'
  },

  // Океания
  australian: {
    id: 'australian',
    title: 'Австралийская кухня'
  },
  newzealand: {
    id: 'newzealand',
    title: 'Новая Зеландия кухня'
  },
  fiji: {
    id: 'fiji',
    title: 'Фиджи кухня'
  },

  // Латинская Америка (продолжение)
  argentinian: {
    id: 'argentinian',
    title: 'Аргентинская кухня'
  },
  peruvian: {
    id: 'peruvian',
    title: 'Перуанская кухня'
  },
  colombian: {
    id: 'colombian',
    title: 'Колумбийская кухня'
  },
  venezuelan: {
    id: 'venezuelan',
    title: 'Венесуэльская кухня'
  },
  cuban: {
    id: 'cuban',
    title: 'Кубинская кухня'
  },

  // Фантазийные (мифические) кухни — в самый конец
  elven: {
    id: 'elven',
    title: 'Эльфийская кухня'
  },
  dwarven: {
    id: 'dwarven',
    title: 'Гномья кухня'
  },
  hobbit: {
    id: 'hobbit',
    title: 'Хоббитская кухня'
  },
  wizard: {
    id: 'wizard',
    title: 'Волшебная кухня'
  }
} as const;

// Диеты (уровень 3)
export const dietCategories = {
  vegan: {
    id: 'vegan',
    title: 'Веганская диета'
  },
  keto: {
    id: 'keto',
    title: 'Кето-диета'
  },
  paleo: {
    id: 'paleo',
    title: 'Палео-диета'
  },
  vegetarian: {
    id: 'vegetarian',
    title: 'Вегетарианская диета'
  },
  glutenFree: {
    id: 'gluten-free',
    title: 'Безглютеновая диета'
  },
  dairyFree: {
    id: 'dairy-free',
    title: 'Безлактозная диета'
  },
  kidsMenu: {
    id: 'kids-menu',
    title: 'Детское меню'
  },
  lowCalorie: {
    id: 'low-calorie',
    title: 'Низкокалорийная диета'
  },
  lean: {
    id: 'lean',
    title: 'Постная еда'
  },
  diabetic: {
    id: 'diabetic',
    title: 'Меню при диабете'
  },
  lowCarb: {
    id: 'low-carb',
    title: 'Низкоуглеводная диета'
  },
  mediterranean: {
    id: 'mediterranean',
    title: 'Средиземноморская диета'
  },
  detox: {
    id: 'detox',
    title: 'Детокс-диета'
  }
} as const;

// Типы для TypeScript
export type DishCategory = typeof dishCategories[keyof typeof dishCategories];
export type CuisineCategory = typeof cuisineCategories[keyof typeof cuisineCategories];
export type DietCategory = typeof dietCategories[keyof typeof dietCategories];

export type CategoryWithSubcategories = {
  id: string;
  title: string;
  subcategories: {
    [key: string]: {
      id: string;
      title: string;
    };
  };
};
