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
  mainDishes: CategoryWithSubcategories;
  pasta: CategoryWithSubcategories;
  pizza: CategoryWithSubcategories;
  risotto: CategoryWithSubcategories;
  salads: CategoryWithSubcategories;
  sauces: CategoryWithSubcategories;
  marinades: CategoryWithSubcategories;
  bakingDesserts: CategoryWithSubcategories;
  preparations: CategoryWithSubcategories;
  soups: CategoryWithSubcategories;
  drinks: CategoryWithSubcategories;
  fastSlowCooking: CategoryWithSubcategories;
  seasonMoodHoliday: CategoryWithSubcategories;
  mealsTime: CategoryWithSubcategories;
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
  mediterranean: BaseCategory;
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
  glutenFree: BaseCategory;
  dairyFree: BaseCategory;
  kidsMenu: BaseCategory;
  lowCalorie: BaseCategory;
  lean: BaseCategory;
  diabetic: BaseCategory;
  lowCarb: BaseCategory;
  mediterranean: BaseCategory;
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
      muesliGranola: {
        id: 'muesliGranola',
        title: 'Мюсли и гранола'
      },
      syrnikiCasseroles: {
        id: 'syrnikiCasseroles',
        title: 'Сырники и запеканки'
      },
      vegetableDishes: {
        id: 'vegetableDishes',
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
      drinksSnacks: {
        id: 'drinksSnacks',
        title: 'Закуски к напиткам'
      },
      fastFood: {
        id: 'fastFood',
        title: 'Фастфуд'
      },
      festive: {
        id: 'festive',
        title: 'Праздничные закуски'
      }
    }
  },

  mainDishes: {
    id: 'mainDishes',
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
      mixedMeatPoultry: {
        id: 'mixedMeatPoultry',
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
      grillBarbecue: {
        id: 'grillBarbecue',
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
      veganFasting: {
        id: 'veganFasting',
        title: 'Веганские и постные салаты'
      },
      classic: {
        id: 'classic',
        title: 'Классические салаты'
      },
      meatFish: {
        id: 'meatFish',
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
      fruitVeggie: {
        id: 'fruitVeggie',
        title: 'Салаты с овощами и фруктами'
      },
      layeredFestive: {
        id: 'layeredFestive',
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
      soySauce: {
        id: 'soySauce',
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

  bakingDesserts: {
    id: 'bakingDesserts',
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
      noBake: {
        id: 'noBake',
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
      bakingWithCurd: {
        id: 'bakingWithCurd',
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
      veganDesserts: {
        id: 'veganDesserts',
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
      vegetablesForWinter: {
        id: 'vegetablesForWinter',
        title: 'Овощи на зиму'
      },
      picklesCucumbers: {
        id: 'picklesCucumbers',
        title: 'Огурцы'
      },
      mushrooms: {
        id: 'mushrooms',
        title: 'Грибы'
      },
      saladsEtc: {
        id: 'saladsEtc',
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
      creamPuree: {
        id: 'creamPuree',
        title: 'Крема и пюре'
      },
      meatVegetable: {
        id: 'meatVegetable',
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
      coffeeTea: {
        id: 'coffeeTea',
        title: 'Кофе и чай'
      }
    }
  },

  fastSlowCooking: {
    id: 'fastSlowCooking',
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

  seasonMoodHoliday: {
    id: 'seasonMoodHoliday',
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
      newYear: {
        id: 'newYear',
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
      moodHappy: {
        id: 'moodHappy',
        title: 'Праздничное настроение'
      },
      moodComfort: {
        id: 'moodComfort',
        title: 'Комфортное настроение'
      },
      moodEnergetic: {
        id: 'moodEnergetic',
        title: 'Энергичное настроение'
      }
    }
  },

  mealsTime: {
    id: 'mealsTime',
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
};

// Диеты (уровень 3)
export const dietCategories: DietCategories = {
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
    id: 'glutenFree',
    title: 'Безглютеновая диета'
  },
  dairyFree: {
    id: 'dairyFree',
    title: 'Безлактозная диета'
  },
  kidsMenu: {
    id: 'kidsMenu',
    title: 'Детское меню'
  },
  lowCalorie: {
    id: 'lowCalorie',
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
    id: 'lowCarb',
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
};
