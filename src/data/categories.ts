// Базовые типы для категорий
type BaseCategory = {
  id: string;
  title: string;
};

type CategoryWithEn = BaseCategory & {
  name: string;
  en: string;
};

type Subcategory = BaseCategory;

type CategoryWithSubcategories = BaseCategory & {
  subcategories: {
    [key: string]: Subcategory;
  };
};

// Типы для основных категорий
type Categories = {
  'выпечка': CategoryWithEn;
  'хворост': CategoryWithEn;
  'на кефире': CategoryWithEn;
  'жареное тесто': CategoryWithEn;
  'сладкое к чаю': CategoryWithEn;
  'русская кухня': CategoryWithEn;
  'десерт': CategoryWithEn;
  'быстрый рецепт': CategoryWithEn;
  'домашняя выпечка': CategoryWithEn;
  'дешево и вкусно': CategoryWithEn;
  'просто': CategoryWithEn;
  'торт': CategoryWithEn;
  'кофейный десерт': CategoryWithEn;
  'маскарпоне': CategoryWithEn;
  'капучино': CategoryWithEn;
  'праздничный торт': CategoryWithEn;
  'сладкое': CategoryWithEn;
  'к чаю': CategoryWithEn;
  'впечатляющий десерт': CategoryWithEn;
  'выпечка на праздник': CategoryWithEn;
  'голубцы': CategoryWithEn;
  'блюда из кролика': CategoryWithEn;
  'второе блюдо': CategoryWithEn;
  'домашняя кухня': CategoryWithEn;
  'интернациональная кухня': CategoryWithEn;
  'мясные блюда': CategoryWithEn;
  'тушёные блюда': CategoryWithEn;
  'праздничное блюдо': CategoryWithEn;
  'обед': CategoryWithEn;
  'ужин': CategoryWithEn;
  'низкокалорийное': CategoryWithEn;
  'диетическое': CategoryWithEn;
  'салат': CategoryWithEn;
  'лобио': CategoryWithEn;
  'грузинская кухня': CategoryWithEn;
  'вегетарианское блюдо': CategoryWithEn;
  'постное блюдо': CategoryWithEn;
  'закуска': CategoryWithEn;
  'фасоль': CategoryWithEn;
  'грецкие орехи': CategoryWithEn;
  'острое блюдо': CategoryWithEn;
  'на обед': CategoryWithEn;
  'на ужин': CategoryWithEn;
  'оладьи': CategoryWithEn;
  'кабачки': CategoryWithEn;
  'на сковороде': CategoryWithEn;
  'овощные блюда': CategoryWithEn;
  'летние рецепты': CategoryWithEn;
  'завтрак': CategoryWithEn;
  'простые рецепты': CategoryWithEn;
};

// Типы для категорий блюд
type DishCategories = {
  breakfasts: CategoryWithSubcategories;
  appetizers: CategoryWithSubcategories;
  'main-dishes': CategoryWithSubcategories;
  pasta: CategoryWithSubcategories;
  pizza: CategoryWithSubcategories;
  risotto: CategoryWithSubcategories;
  salads: CategoryWithSubcategories;
  sauces: CategoryWithSubcategories;
  marinades: CategoryWithSubcategories;
  'baking-desserts': CategoryWithSubcategories;
  preparations: CategoryWithSubcategories;
  soups: CategoryWithSubcategories;
  drinks: CategoryWithSubcategories;
  'fast-slow-cooking': CategoryWithSubcategories;
  'season-mood-holiday': CategoryWithSubcategories;
  'meals-time': CategoryWithSubcategories;
};

// Типы для категорий кухонь
type CuisineCategories = {
  italian: BaseCategory;
  chinese: BaseCategory;
  japanese: BaseCategory;
  russian: BaseCategory;
  georgian: BaseCategory;
  indian: BaseCategory;
  mexican: BaseCategory;
  french: BaseCategory;
  turkish: BaseCategory;
  korean: BaseCategory;
  armenian: BaseCategory;
  azerbaijani: BaseCategory;
  spanish: BaseCategory;
  thai: BaseCategory;
  'mediterranean-cuisine': BaseCategory;
  greek: BaseCategory;
  ukrainian: BaseCategory;
  polish: BaseCategory;
  british: BaseCategory;
  german: BaseCategory;
  lebanese: BaseCategory;
  brazilian: BaseCategory;
  vietnamese: BaseCategory;
  swiss: BaseCategory;
  finnish: BaseCategory;
  scandinavian: BaseCategory;
  dutch: BaseCategory;
  czech: BaseCategory;
  norwegian: BaseCategory;
  swedish: BaseCategory;
  austrian: BaseCategory;
  hungarian: BaseCategory;
  serbian: BaseCategory;
  belarusian: BaseCategory;
  moldovan: BaseCategory;
  kazakh: BaseCategory;
  uzbek: BaseCategory;
  kyrgyz: BaseCategory;
  turkmen: BaseCategory;
  tajik: BaseCategory;
  abkhazian: BaseCategory;
  ossetian: BaseCategory;
  bashkirian: BaseCategory;
  cossack: BaseCategory;
  kalmyk: BaseCategory;
  chukchi: BaseCategory;
  yakut: BaseCategory;
  mari: BaseCategory;
  udmurt: BaseCategory;
  komi: BaseCategory;
  sakha: BaseCategory;
  slovak: BaseCategory;
  croatian: BaseCategory;
  montenegrin: BaseCategory;
  bosnian: BaseCategory;
  macedonian: BaseCategory;
  albanian: BaseCategory;
  maltese: BaseCategory;
  cypriot: BaseCategory;
  romanian: BaseCategory;
  bulgarian: BaseCategory;
  algerian: BaseCategory;
  egyptian: BaseCategory;
  syrian: BaseCategory;
  israeli: BaseCategory;
  palestinian: BaseCategory;
  jordanian: BaseCategory;
  tunisian: BaseCategory;
  libyan: BaseCategory;
  moroccan: BaseCategory;
  ethiopian: BaseCategory;
  somali: BaseCategory;
  kenyan: BaseCategory;
  nigerian: BaseCategory;
  ghanaian: BaseCategory;
  senegalese: BaseCategory;
  southafrican: BaseCategory;
  zimbabwean: BaseCategory;
  malawian: BaseCategory;
  iraqi: BaseCategory;
  iranian: BaseCategory;
  saudi: BaseCategory;
  qatar: BaseCategory;
  emirates: BaseCategory;
  australian: BaseCategory;
  newzealand: BaseCategory;
  fiji: BaseCategory;
  argentinian: BaseCategory;
  peruvian: BaseCategory;
  colombian: BaseCategory;
  venezuelan: BaseCategory;
  cuban: BaseCategory;
  elven: BaseCategory;
  dwarven: BaseCategory;
  hobbit: BaseCategory;
  wizard: BaseCategory;
};

// Типы для категорий диет
type DietCategories = {
  vegan: BaseCategory;
  keto: BaseCategory;
  paleo: BaseCategory;
  vegetarian: BaseCategory;
  'gluten-free': BaseCategory;
  'dairy-free': BaseCategory;
  'kids-menu': BaseCategory;
  'low-calorie': BaseCategory;
  lean: BaseCategory;
  diabetic: BaseCategory;
  'low-carb': BaseCategory;
  'mediterranean-diet': BaseCategory;
  detox: BaseCategory;
};

/**
 * Категория рецепта.
 * @property en Англоязычное название для url (только латиница, без пробелов и спецсимволов,
 * нижний регистр, через дефис)
 */
export const categories: Categories = {
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
};

// Категории блюд (уровень 1)
export const dishCategories: DishCategories = {
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
      },
      'picnic-snacks': {
        id: 'picnic-snacks',
        title: 'Лёгкие закуски для пикника'
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
      },
      'homemade-ice-cream': {
        id: 'homemade-ice-cream',
        title: 'Домашнее мороженое и сорбеты'
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
      },
      lemonade: {
        id: 'lemonade',
        title: 'Освежающие напитки и лимонады'
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
};

// Кухни (уровень 2)
export const cuisineCategories: CuisineCategories = {
  italian: {
    id: 'italyanskaya-kuhnya',
    title: 'Итальянская кухня'
  },
  chinese: {
    id: 'kitayskaya-kuhnya',
    title: 'Китайская кухня'
  },
  japanese: {
    id: 'yaponskaya-kuhnya',
    title: 'Японская кухня'
  },
  russian: {
    id: 'russkaya-kuhnya',
    title: 'Русская кухня'
  },
  georgian: {
    id: 'gruzinskaya-kuhnya',
    title: 'Грузинская кухня'
  },
  indian: {
    id: 'indiyskaya-kuhnya',
    title: 'Индийская кухня'
  },
  mexican: {
    id: 'meksikanskaya-kuhnya',
    title: 'Мексиканская кухня'
  },
  french: {
    id: 'frantsuzskaya-kuhnya',
    title: 'Французская кухня'
  },
  turkish: {
    id: 'turetskaya-kuhnya',
    title: 'Турецкая кухня'
  },
  korean: {
    id: 'koreyskaya-kuhnya',
    title: 'Корейская кухня'
  },
  armenian: {
    id: 'armyanskaya-kuhnya',
    title: 'Армянская кухня'
  },
  azerbaijani: {
    id: 'azerbaydzhanskaya-kuhnya',
    title: 'Азербайджанская кухня'
  },
  spanish: {
    id: 'ispanskaya-kuhnya',
    title: 'Испанская кухня'
  },
  thai: {
    id: 'tayskaya-kuhnya',
    title: 'Тайская кухня'
  },
  'mediterranean-cuisine': {
    id: 'sredizemnomorskaya-kuhnya',
    title: 'Средиземноморская кухня'
  },
  greek: {
    id: 'grecheskaya-kuhnya',
    title: 'Греческая кухня'
  },
  ukrainian: {
    id: 'ukrainskaya-kuhnya',
    title: 'Украинская кухня'
  },
  polish: {
    id: 'polysskaya-kuhnya',
    title: 'Польская кухня'
  },
  british: {
    id: 'britanskaya-kuhnya',
    title: 'Британская кухня'
  },
  german: {
    id: 'nemetskaya-kuhnya',
    title: 'Немецкая кухня'
  },
  lebanese: {
    id: 'livanskaya-kuhnya',
    title: 'Ливанская кухня'
  },
  brazilian: {
    id: 'braziliyskaya-kuhnya',
    title: 'Бразильская кухня'
  },
  vietnamese: {
    id: 'vetnamskaya-kuhnya',
    title: 'Вьетнамская кухня'
  },
  swiss: {
    id: 'shveytsarskaya-kuhnya',
    title: 'Швейцарская кухня'
  },
  finnish: {
    id: 'finskaya-kuhnya',
    title: 'Финская кухня'
  },
  scandinavian: {
    id: 'skandinavskaya-kuhnya',
    title: 'Скандинавская кухня'
  },
  dutch: {
    id: 'gollandskaya-kuhnya',
    title: 'Голландская кухня'
  },
  czech: {
    id: 'cheshskaya-kuhnya',
    title: 'Чешская кухня'
  },
  norwegian: {
    id: 'norvezhskaya-kuhnya',
    title: 'Норвежская кухня'
  },
  swedish: {
    id: 'shvedskaya-kuhnya',
    title: 'Шведская кухня'
  },
  austrian: {
    id: 'avstriyskaya-kuhnya',
    title: 'Австрийская кухня'
  },
  hungarian: {
    id: 'vengerskaya-kuhnya',
    title: 'Венгерская кухня'
  },
  serbian: {
    id: 'serbskaya-kuhnya',
    title: 'Сербская кухня'
  },
  belarusian: {
    id: 'belorusskaya-kuhnya',
    title: 'Белорусская кухня'
  },
  moldovan: {
    id: 'moldavskaya-kuhnya',
    title: 'Молдавская кухня'
  },
  kazakh: {
    id: 'kazakhskaya-kuhnya',
    title: 'Казахская кухня'
  },
  uzbek: {
    id: 'uzbekskaya-kuhnya',
    title: 'Узбекская кухня'
  },
  kyrgyz: {
    id: 'kirgizskaya-kuhnya',
    title: 'Киргизская кухня'
  },
  turkmen: {
    id: 'turkmenskaya-kuhnya',
    title: 'Туркменская кухня'
  },
  tajik: {
    id: 'tadzhikskaya-kuhnya',
    title: 'Таджикская кухня'
  },
  abkhazian: {
    id: 'abkhazskaya-kuhnya',
    title: 'Абхазская кухня'
  },
  ossetian: {
    id: 'osetinskaya-kuhnya',
    title: 'Осетинская кухня'
  },
  bashkirian: {
    id: 'bashkirskaya-kuhnya',
    title: 'Башкирская кухня'
  },
  cossack: {
    id: 'kazachya-kuhnya',
    title: 'Казачья кухня'
  },
  kalmyk: {
    id: 'kalmytskaya-kuhnya',
    title: 'Калмыцкая кухня'
  },
  chukchi: {
    id: 'chukotskaya-kuhnya',
    title: 'Чукотская кухня'
  },
  yakut: {
    id: 'yakutskaya-kuhnya',
    title: 'Якутская кухня'
  },
  mari: {
    id: 'mariyskaya-kuhnya',
    title: 'Марийская кухня'
  },
  udmurt: {
    id: 'udmurtskaya-kuhnya',
    title: 'Удмуртская кухня'
  },
  komi: {
    id: 'komi-kuhnya',
    title: 'Коми кухня'
  },
  sakha: {
    id: 'sakha-kuhnya',
    title: 'Саха кухня'
  },
  slovak: {
    id: 'slovatskaya-kuhnya',
    title: 'Словацкая кухня'
  },
  croatian: {
    id: 'khorvatskaya-kuhnya',
    title: 'Хорватская кухня'
  },
  montenegrin: {
    id: 'chernogorskaya-kuhnya',
    title: 'Черногорская кухня'
  },
  bosnian: {
    id: 'bosniyskaya-kuhnya',
    title: 'Боснийская кухня'
  },
  macedonian: {
    id: 'makedonskaya-kuhnya',
    title: 'Македонская кухня'
  },
  albanian: {
    id: 'albanskaya-kuhnya',
    title: 'Албанская кухня'
  },
  maltese: {
    id: 'maltiyskaya-kuhnya',
    title: 'Мальтийская кухня'
  },
  cypriot: {
    id: 'kiprskaya-kuhnya',
    title: 'Кипрская кухня'
  },
  romanian: {
    id: 'rumynskaya-kuhnya',
    title: 'Румынская кухня'
  },
  bulgarian: {
    id: 'bolgarskaya-kuhnya',
    title: 'Болгарская кухня'
  },
  algerian: {
    id: 'alzhirskaya-kuhnya',
    title: 'Алжирская кухня'
  },
  egyptian: {
    id: 'egipetskaya-kuhnya',
    title: 'Египетская кухня'
  },
  syrian: {
    id: 'siriyskaya-kuhnya',
    title: 'Сирийская кухня'
  },
  israeli: {
    id: 'izrailskaya-kuhnya',
    title: 'Израильская кухня'
  },
  palestinian: {
    id: 'palestinskaya-kuhnya',
    title: 'Палестинская кухня'
  },
  jordanian: {
    id: 'iordanskaya-kuhnya',
    title: 'Иорданская кухня'
  },
  tunisian: {
    id: 'tunisskaya-kuhnya',
    title: 'Тунисская кухня'
  },
  libyan: {
    id: 'liviyskaya-kuhnya',
    title: 'Ливийская кухня'
  },
  moroccan: {
    id: 'marokkanskaya-kuhnya',
    title: 'Марокканская кухня'
  },
  ethiopian: {
    id: 'efiopskaya-kuhnya',
    title: 'Эфиопская кухня'
  },
  somali: {
    id: 'somaliyskaya-kuhnya',
    title: 'Сомалийская кухня'
  },
  kenyan: {
    id: 'keniyskaya-kuhnya',
    title: 'Кенийская кухня'
  },
  nigerian: {
    id: 'nigeriyskaya-kuhnya',
    title: 'Нигерийская кухня'
  },
  ghanaian: {
    id: 'ganskaya-kuhnya',
    title: 'Ганская кухня'
  },
  senegalese: {
    id: 'senegalskaya-kuhnya',
    title: 'Сенегальская кухня'
  },
  southafrican: {
    id: 'yuzhnoafrikanskaya-kuhnya',
    title: 'Южноафриканская кухня'
  },
  zimbabwean: {
    id: 'zimbabviyskaya-kuhnya',
    title: 'Зимбабвийская кухня'
  },
  malawian: {
    id: 'malaviyskaya-kuhnya',
    title: 'Малавийская кухня'
  },


  // Ближний Восток (частично добавлены, для полноты)
  iraqi: {
    id: 'irakskaya-kuhnya',
    title: 'Иракская кухня'
  },
  iranian: {
    id: 'iranskaya-kuhnya',
    title: 'Иранская кухня'
  },
  saudi: {
    id: 'saudovskaya-kuhnya',
    title: 'Саудовская кухня'
  },
  qatar: {
    id: 'katarskaya-kuhnya',
    title: 'Катарская кухня'
  },
  emirates: {
    id: 'kuhnya-oae',
    title: 'Кухня ОАЭ'
  },

// Океания
  australian: {
    id: 'avstraliyskaya-kuhnya',
    title: 'Австралийская кухня'
  },
  newzealand: {
    id: 'novaya-zelandiya-kuhnya',
    title: 'Новая Зеландия кухня'
  },
  fiji: {
    id: 'fidzhi-kuhnya',
    title: 'Фиджи кухня'
  },

// Латинская Америка (продолжение)
  argentinian: {
    id: 'argentinskaya-kuhnya',
    title: 'Аргентинская кухня'
  },
  peruvian: {
    id: 'peruanskaya-kuhnya',
    title: 'Перуанская кухня'
  },
  colombian: {
    id: 'kolumbiyskaya-kuhnya',
    title: 'Колумбийская кухня'
  },
  venezuelan: {
    id: 'venesuelska-kuhnya',
    title: 'Венесуэльская кухня'
  },
  cuban: {
    id: 'kubinskaya-kuhnya',
    title: 'Кубинская кухня'
  },

// Фантазийные (мифические) кухни — в самый конец
  elven: {
    id: 'elfiyskaya-kuhnya',
    title: 'Эльфийская кухня'
  },
  dwarven: {
    id: 'gnomya-kuhnya',
    title: 'Гномья кухня'
  },
  hobbit: {
    id: 'hobbitskaya-kuhnya',
    title: 'Хоббитская кухня'
  },
  wizard: {
    id: 'volshebnaya-kuhnya',
    title: 'Волшебная кухня'
  }
};

// Диеты (уровень 3)
export const dietCategories: DietCategories = {
  vegan: {
    id: 'veganskaya-dieta',
    title: 'Веганская диета'
  },
  keto: {
    id: 'keto-dieta',
    title: 'Кето-диета'
  },
  paleo: {
    id: 'paleo-dieta',
    title: 'Палео-диета'
  },
  vegetarian: {
    id: 'vegetarianskaya-dieta',
    title: 'Вегетарианская диета'
  },
  'gluten-free': {
    id: 'bezglyutenovaya-dieta',
    title: 'Безглютеновая диета'
  },
  'dairy-free': {
    id: 'bezlaktoznaya-dieta',
    title: 'Безлактозная диета'
  },
  'kids-menu': {
    id: 'detskoe-menyu',
    title: 'Детское меню'
  },
  'low-calorie': {
    id: 'nizkokaloriynaya-dieta',
    title: 'Низкокалорийная диета'
  },
  lean: {
    id: 'postnaya-eda',
    title: 'Постная еда'
  },
  diabetic: {
    id: 'menyu-pri-diabete',
    title: 'Меню при диабете'
  },
  'low-carb': {
    id: 'nizkouglevodnaya-dieta',
    title: 'Низкоуглеводная диета'
  },
  'mediterranean-diet': {
    id: 'sredizemnomorskaya-dieta',
    title: 'Средиземноморская диета'
  },
  detox: {
    id: 'detoks-dieta',
    title: 'Детокс-диета'
  }
};
