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
  'italyanskaya-kuhnya': BaseCategory;
  'kitayskaya-kuhnya': BaseCategory;
  'yaponskaya-kuhnya': BaseCategory;
  'russkaya-kuhnya': BaseCategory;
  'gruzinskaya-kuhnya': BaseCategory;
  'indiyskaya-kuhnya': BaseCategory;
  'meksikanskaya-kuhnya': BaseCategory;
  'frantsuzskaya-kuhnya': BaseCategory;
  'turetskaya-kuhnya': BaseCategory;
  'koreyskaya-kuhnya': BaseCategory;
  'armyanskaya-kuhnya': BaseCategory;
  'azerbaydzhanskaya-kuhnya': BaseCategory;
  'ispanskaya-kuhnya': BaseCategory;
  'tayskaya-kuhnya': BaseCategory;
  'sredizemnomorskaya-kuhnya': BaseCategory;
  'grecheskaya-kuhnya': BaseCategory;
  'ukrainskaya-kuhnya': BaseCategory;
  'polysskaya-kuhnya': BaseCategory;
  'britanskaya-kuhnya': BaseCategory;
  'nemetskaya-kuhnya': BaseCategory;
  'livanskaya-kuhnya': BaseCategory;
  'braziliyskaya-kuhnya': BaseCategory;
  'vetnamskaya-kuhnya': BaseCategory;
  'shveytsarskaya-kuhnya': BaseCategory;
  'finskaya-kuhnya': BaseCategory;
  'skandinavskaya-kuhnya': BaseCategory;
  'gollandskaya-kuhnya': BaseCategory;
  'cheshskaya-kuhnya': BaseCategory;
  'norvezhskaya-kuhnya': BaseCategory;
  'shvedskaya-kuhnya': BaseCategory;
  'avstriyskaya-kuhnya': BaseCategory;
  'vengerskaya-kuhnya': BaseCategory;
  'serbskaya-kuhnya': BaseCategory;
  'belorusskaya-kuhnya': BaseCategory;
  'moldavskaya-kuhnya': BaseCategory;
  'kazakhskaya-kuhnya': BaseCategory;
  'uzbekskaya-kuhnya': BaseCategory;
  'kirgizskaya-kuhnya': BaseCategory;
  'turkmenskaya-kuhnya': BaseCategory;
  'tadzhikskaya-kuhnya': BaseCategory;
  'abkhazskaya-kuhnya': BaseCategory;
  'osetinskaya-kuhnya': BaseCategory;
  'bashkirskaya-kuhnya': BaseCategory;
  'kazachya-kuhnya': BaseCategory;
  'kalmytskaya-kuhnya': BaseCategory;
  'chukotskaya-kuhnya': BaseCategory;
  'yakutskaya-kuhnya': BaseCategory;
  'mariyskaya-kuhnya': BaseCategory;
  'udmurtskaya-kuhnya': BaseCategory;
  'komi-kuhnya': BaseCategory;
  'sakha-kuhnya': BaseCategory;
  'slovatskaya-kuhnya': BaseCategory;
  'khorvatskaya-kuhnya': BaseCategory;
  'chernogorskaya-kuhnya': BaseCategory;
  'bosniyskaya-kuhnya': BaseCategory;
  'makedonskaya-kuhnya': BaseCategory;
  'albanskaya-kuhnya': BaseCategory;
  'maltiyskaya-kuhnya': BaseCategory;
  'kiprskaya-kuhnya': BaseCategory;
  'rumynskaya-kuhnya': BaseCategory;
  'bolgarskaya-kuhnya': BaseCategory;
  'alzhirskaya-kuhnya': BaseCategory;
  'egipetskaya-kuhnya': BaseCategory;
  'siriyskaya-kuhnya': BaseCategory;
  'izrailskaya-kuhnya': BaseCategory;
  'palestinskaya-kuhnya': BaseCategory;
  'iordanskaya-kuhnya': BaseCategory;
  'tunisskaya-kuhnya': BaseCategory;
  'liviyskaya-kuhnya': BaseCategory;
  'marokkanskaya-kuhnya': BaseCategory;
  'efiopskaya-kuhnya': BaseCategory;
  'somaliyskaya-kuhnya': BaseCategory;
  'keniyskaya-kuhnya': BaseCategory;
  'nigeriyskaya-kuhnya': BaseCategory;
  'ganskaya-kuhnya': BaseCategory;
  'senegalskaya-kuhnya': BaseCategory;
  'yuzhnoafrikanskaya-kuhnya': BaseCategory;
  'zimbabviyskaya-kuhnya': BaseCategory;
  'malaviyskaya-kuhnya': BaseCategory;
  'irakskaya-kuhnya': BaseCategory;
  'iranskaya-kuhnya': BaseCategory;
  'saudovskaya-kuhnya': BaseCategory;
  'katarskaya-kuhnya': BaseCategory;
  'kuhnya-oae': BaseCategory;
  'avstraliyskaya-kuhnya': BaseCategory;
  'novaya-zelandiya-kuhnya': BaseCategory;
  'fidzhi-kuhnya': BaseCategory;
  'argentinskaya-kuhnya': BaseCategory;
  'peruanskaya-kuhnya': BaseCategory;
  'kolumbiyskaya-kuhnya': BaseCategory;
  'venesuelska-kuhnya': BaseCategory;
  'kubinskaya-kuhnya': BaseCategory;
  'elfiyskaya-kuhnya': BaseCategory;
  'gnomya-kuhnya': BaseCategory;
  'hobbitskaya-kuhnya': BaseCategory;
  'volshebnaya-kuhnya': BaseCategory;
};

// Типы для категорий диет
type DietCategories = {
  'veganskaya-dieta': BaseCategory;
  'keto-dieta': BaseCategory;
  'paleo-dieta': BaseCategory;
  'vegetarianskaya-dieta': BaseCategory;
  'bezglyutenovaya-dieta': BaseCategory;
  'bezlaktoznaya-dieta': BaseCategory;
  'detskoe-menyu': BaseCategory;
  'nizkokaloriynaya-dieta': BaseCategory;
  'postnaya-eda': BaseCategory;
  'menyu-pri-diabete': BaseCategory;
  'nizkouglevodnaya-dieta': BaseCategory;
  'sredizemnomorskaya-dieta': BaseCategory;
  'detoks-dieta': BaseCategory;
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
  'italyanskaya-kuhnya': {
    id: 'italyanskaya-kuhnya',
    title: 'Итальянская кухня'
  },
  'kitayskaya-kuhnya': {
    id: 'kitayskaya-kuhnya',
    title: 'Китайская кухня'
  },
  'yaponskaya-kuhnya': {
    id: 'yaponskaya-kuhnya',
    title: 'Японская кухня'
  },
  'russkaya-kuhnya': {
    id: 'russkaya-kuhnya',
    title: 'Русская кухня'
  },
  'gruzinskaya-kuhnya': {
    id: 'gruzinskaya-kuhnya',
    title: 'Грузинская кухня'
  },
  'indiyskaya-kuhnya': {
    id: 'indiyskaya-kuhnya',
    title: 'Индийская кухня'
  },
  'meksikanskaya-kuhnya': {
    id: 'meksikanskaya-kuhnya',
    title: 'Мексиканская кухня'
  },
  'frantsuzskaya-kuhnya': {
    id: 'frantsuzskaya-kuhnya',
    title: 'Французская кухня'
  },
  'turetskaya-kuhnya': {
    id: 'turetskaya-kuhnya',
    title: 'Турецкая кухня'
  },
  'koreyskaya-kuhnya': {
    id: 'koreyskaya-kuhnya',
    title: 'Корейская кухня'
  },
  'armyanskaya-kuhnya': {
    id: 'armyanskaya-kuhnya',
    title: 'Армянская кухня'
  },
  'azerbaydzhanskaya-kuhnya': {
    id: 'azerbaydzhanskaya-kuhnya',
    title: 'Азербайджанская кухня'
  },
  'ispanskaya-kuhnya': {
    id: 'ispanskaya-kuhnya',
    title: 'Испанская кухня'
  },
  'tayskaya-kuhnya': {
    id: 'tayskaya-kuhnya',
    title: 'Тайская кухня'
  },
  'sredizemnomorskaya-kuhnya': {
    id: 'sredizemnomorskaya-kuhnya',
    title: 'Средиземноморская кухня'
  },
  'grecheskaya-kuhnya': {
    id: 'grecheskaya-kuhnya',
    title: 'Греческая кухня'
  },
  'ukrainskaya-kuhnya': {
    id: 'ukrainskaya-kuhnya',
    title: 'Украинская кухня'
  },
  'polysskaya-kuhnya': {
    id: 'polysskaya-kuhnya',
    title: 'Польская кухня'
  },
  'britanskaya-kuhnya': {
    id: 'britanskaya-kuhnya',
    title: 'Британская кухня'
  },
  'nemetskaya-kuhnya': {
    id: 'nemetskaya-kuhnya',
    title: 'Немецкая кухня'
  },
  'livanskaya-kuhnya': {
    id: 'livanskaya-kuhnya',
    title: 'Ливанская кухня'
  },
  'braziliyskaya-kuhnya': {
    id: 'braziliyskaya-kuhnya',
    title: 'Бразильская кухня'
  },
  'vetnamskaya-kuhnya': {
    id: 'vetnamskaya-kuhnya',
    title: 'Вьетнамская кухня'
  },
  'shveytsarskaya-kuhnya': {
    id: 'shveytsarskaya-kuhnya',
    title: 'Швейцарская кухня'
  },
  'finskaya-kuhnya': {
    id: 'finskaya-kuhnya',
    title: 'Финская кухня'
  },
  'skandinavskaya-kuhnya': {
    id: 'skandinavskaya-kuhnya',
    title: 'Скандинавская кухня'
  },
  'gollandskaya-kuhnya': {
    id: 'gollandskaya-kuhnya',
    title: 'Голландская кухня'
  },
  'cheshskaya-kuhnya': {
    id: 'cheshskaya-kuhnya',
    title: 'Чешская кухня'
  },
  'norvezhskaya-kuhnya': {
    id: 'norvezhskaya-kuhnya',
    title: 'Норвежская кухня'
  },
  'shvedskaya-kuhnya': {
    id: 'shvedskaya-kuhnya',
    title: 'Шведская кухня'
  },
  'avstriyskaya-kuhnya': {
    id: 'avstriyskaya-kuhnya',
    title: 'Австрийская кухня'
  },
  'vengerskaya-kuhnya': {
    id: 'vengerskaya-kuhnya',
    title: 'Венгерская кухня'
  },
  'serbskaya-kuhnya': {
    id: 'serbskaya-kuhnya',
    title: 'Сербская кухня'
  },
  'belorusskaya-kuhnya': {
    id: 'belorusskaya-kuhnya',
    title: 'Белорусская кухня'
  },
  'moldavskaya-kuhnya': {
    id: 'moldavskaya-kuhnya',
    title: 'Молдавская кухня'
  },
  'kazakhskaya-kuhnya': {
    id: 'kazakhskaya-kuhnya',
    title: 'Казахская кухня'
  },
  'uzbekskaya-kuhnya': {
    id: 'uzbekskaya-kuhnya',
    title: 'Узбекская кухня'
  },
  'kirgizskaya-kuhnya': {
    id: 'kirgizskaya-kuhnya',
    title: 'Киргизская кухня'
  },
  'turkmenskaya-kuhnya': {
    id: 'turkmenskaya-kuhnya',
    title: 'Туркменская кухня'
  },
  'tadzhikskaya-kuhnya': {
    id: 'tadzhikskaya-kuhnya',
    title: 'Таджикская кухня'
  },
  'abkhazskaya-kuhnya': {
    id: 'abkhazskaya-kuhnya',
    title: 'Абхазская кухня'
  },
  'osetinskaya-kuhnya': {
    id: 'osetinskaya-kuhnya',
    title: 'Осетинская кухня'
  },
  'bashkirskaya-kuhnya': {
    id: 'bashkirskaya-kuhnya',
    title: 'Башкирская кухня'
  },
  'kazachya-kuhnya': {
    id: 'kazachya-kuhnya',
    title: 'Казачья кухня'
  },
  'kalmytskaya-kuhnya': {
    id: 'kalmytskaya-kuhnya',
    title: 'Калмыцкая кухня'
  },
  'chukotskaya-kuhnya': {
    id: 'chukotskaya-kuhnya',
    title: 'Чукотская кухня'
  },
  'yakutskaya-kuhnya': {
    id: 'yakutskaya-kuhnya',
    title: 'Якутская кухня'
  },
  'mariyskaya-kuhnya': {
    id: 'mariyskaya-kuhnya',
    title: 'Марийская кухня'
  },
  'udmurtskaya-kuhnya': {
    id: 'udmurtskaya-kuhnya',
    title: 'Удмуртская кухня'
  },
  'komi-kuhnya': {
    id: 'komi-kuhnya',
    title: 'Коми кухня'
  },
  'sakha-kuhnya': {
    id: 'sakha-kuhnya',
    title: 'Саха кухня'
  },
  'slovatskaya-kuhnya': {
    id: 'slovatskaya-kuhnya',
    title: 'Словацкая кухня'
  },
  'khorvatskaya-kuhnya': {
    id: 'khorvatskaya-kuhnya',
    title: 'Хорватская кухня'
  },
  'chernogorskaya-kuhnya': {
    id: 'chernogorskaya-kuhnya',
    title: 'Черногорская кухня'
  },
  'bosniyskaya-kuhnya': {
    id: 'bosniyskaya-kuhnya',
    title: 'Боснийская кухня'
  },
  'makedonskaya-kuhnya': {
    id: 'makedonskaya-kuhnya',
    title: 'Македонская кухня'
  },
  'albanskaya-kuhnya': {
    id: 'albanskaya-kuhnya',
    title: 'Албанская кухня'
  },
  'maltiyskaya-kuhnya': {
    id: 'maltiyskaya-kuhnya',
    title: 'Мальтийская кухня'
  },
  'kiprskaya-kuhnya': {
    id: 'kiprskaya-kuhnya',
    title: 'Кипрская кухня'
  },
  'rumynskaya-kuhnya': {
    id: 'rumynskaya-kuhnya',
    title: 'Румынская кухня'
  },
  'bolgarskaya-kuhnya': {
    id: 'bolgarskaya-kuhnya',
    title: 'Болгарская кухня'
  },
  'alzhirskaya-kuhnya': {
    id: 'alzhirskaya-kuhnya',
    title: 'Алжирская кухня'
  },
  'egipetskaya-kuhnya': {
    id: 'egipetskaya-kuhnya',
    title: 'Египетская кухня'
  },
  'siriyskaya-kuhnya': {
    id: 'siriyskaya-kuhnya',
    title: 'Сирийская кухня'
  },
  'izrailskaya-kuhnya': {
    id: 'izrailskaya-kuhnya',
    title: 'Израильская кухня'
  },
  'palestinskaya-kuhnya': {
    id: 'palestinskaya-kuhnya',
    title: 'Палестинская кухня'
  },
  'iordanskaya-kuhnya': {
    id: 'iordanskaya-kuhnya',
    title: 'Иорданская кухня'
  },
  'tunisskaya-kuhnya': {
    id: 'tunisskaya-kuhnya',
    title: 'Тунисская кухня'
  },
  'liviyskaya-kuhnya': {
    id: 'liviyskaya-kuhnya',
    title: 'Ливийская кухня'
  },
  'marokkanskaya-kuhnya': {
    id: 'marokkanskaya-kuhnya',
    title: 'Марокканская кухня'
  },
  'efiopskaya-kuhnya': {
    id: 'efiopskaya-kuhnya',
    title: 'Эфиопская кухня'
  },
  'somaliyskaya-kuhnya': {
    id: 'somaliyskaya-kuhnya',
    title: 'Сомалийская кухня'
  },
  'keniyskaya-kuhnya': {
    id: 'keniyskaya-kuhnya',
    title: 'Кенийская кухня'
  },
  'nigeriyskaya-kuhnya': {
    id: 'nigeriyskaya-kuhnya',
    title: 'Нигерийская кухня'
  },
  'ganskaya-kuhnya': {
    id: 'ganskaya-kuhnya',
    title: 'Ганская кухня'
  },
  'senegalskaya-kuhnya': {
    id: 'senegalskaya-kuhnya',
    title: 'Сенегальская кухня'
  },
  'yuzhnoafrikanskaya-kuhnya': {
    id: 'yuzhnoafrikanskaya-kuhnya',
    title: 'Южноафриканская кухня'
  },
  'zimbabviyskaya-kuhnya': {
    id: 'zimbabviyskaya-kuhnya',
    title: 'Зимбабвийская кухня'
  },
  'malaviyskaya-kuhnya': {
    id: 'malaviyskaya-kuhnya',
    title: 'Малавийская кухня'
  },
  'irakskaya-kuhnya': {
    id: 'irakskaya-kuhnya',
    title: 'Иракская кухня'
  },
  'iranskaya-kuhnya': {
    id: 'iranskaya-kuhnya',
    title: 'Иранская кухня'
  },
  'saudovskaya-kuhnya': {
    id: 'saudovskaya-kuhnya',
    title: 'Саудовская кухня'
  },
  'katarskaya-kuhnya': {
    id: 'katarskaya-kuhnya',
    title: 'Катарская кухня'
  },
  'kuhnya-oae': {
    id: 'kuhnya-oae',
    title: 'Кухня ОАЭ'
  },
  'avstraliyskaya-kuhnya': {
    id: 'avstraliyskaya-kuhnya',
    title: 'Австралийская кухня'
  },
  'novaya-zelandiya-kuhnya': {
    id: 'novaya-zelandiya-kuhnya',
    title: 'Новая Зеландия кухня'
  },
  'fidzhi-kuhnya': {
    id: 'fidzhi-kuhnya',
    title: 'Фиджи кухня'
  },
  'argentinskaya-kuhnya': {
    id: 'argentinskaya-kuhnya',
    title: 'Аргентинская кухня'
  },
  'peruanskaya-kuhnya': {
    id: 'peruanskaya-kuhnya',
    title: 'Перуанская кухня'
  },
  'kolumbiyskaya-kuhnya': {
    id: 'kolumbiyskaya-kuhnya',
    title: 'Колумбийская кухня'
  },
  'venesuelska-kuhnya': {
    id: 'venesuelska-kuhnya',
    title: 'Венесуэльская кухня'
  },
  'kubinskaya-kuhnya': {
    id: 'kubinskaya-kuhnya',
    title: 'Кубинская кухня'
  },
  'elfiyskaya-kuhnya': {
    id: 'elfiyskaya-kuhnya',
    title: 'Эльфийская кухня'
  },
  'gnomya-kuhnya': {
    id: 'gnomya-kuhnya',
    title: 'Гномья кухня'
  },
  'hobbitskaya-kuhnya': {
    id: 'hobbitskaya-kuhnya',
    title: 'Хоббитская кухня'
  },
  'volshebnaya-kuhnya': {
    id: 'volshebnaya-kuhnya',
    title: 'Волшебная кухня'
  }
};

// Диеты (уровень 3)
export const dietCategories: DietCategories = {
  'veganskaya-dieta': {
    id: 'veganskaya-dieta',
    title: 'Веганская диета'
  },
  'keto-dieta': {
    id: 'keto-dieta',
    title: 'Кето-диета'
  },
  'paleo-dieta': {
    id: 'paleo-dieta',
    title: 'Палео-диета'
  },
  'vegetarianskaya-dieta': {
    id: 'vegetarianskaya-dieta',
    title: 'Вегетарианская диета'
  },
  'bezglyutenovaya-dieta': {
    id: 'bezglyutenovaya-dieta',
    title: 'Безглютеновая диета'
  },
  'bezlaktoznaya-dieta': {
    id: 'bezlaktoznaya-dieta',
    title: 'Безлактозная диета'
  },
  'detskoe-menyu': {
    id: 'detskoe-menyu',
    title: 'Детское меню'
  },
  'nizkokaloriynaya-dieta': {
    id: 'nizkokaloriynaya-dieta',
    title: 'Низкокалорийная диета'
  },
  'postnaya-eda': {
    id: 'postnaya-eda',
    title: 'Постная еда'
  },
  'menyu-pri-diabete': {
    id: 'menyu-pri-diabete',
    title: 'Меню при диабете'
  },
  'nizkouglevodnaya-dieta': {
    id: 'nizkouglevodnaya-dieta',
    title: 'Низкоуглеводная диета'
  },
  'sredizemnomorskaya-dieta': {
    id: 'sredizemnomorskaya-dieta',
    title: 'Средиземноморская диета'
  },
  'detoks-dieta': {
    id: 'detoks-dieta',
    title: 'Детокс-диета'
  }
};
