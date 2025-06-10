import {Recipe, Unit} from "@/data/recipes";

export const recipes: Record<number, Recipe> = {
    200: {
        id: 200,
        name: 'kuritsa-s-tykvoy-i-spetsiyami',
        title: 'Курица с тыквой и специями',
        description: 'Ароматная курица, запеченная с тыквой и восточными специями. Необычное сочетание вкусов для особенного ужина.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 23, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 26, unit: Unit.g}
        },
        cuisine: 'Восточная',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Тыква', amount: 800, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Корица молотая', amount: 1, unit: Unit.tsp},
            {name: 'Кумин молотый', amount: 1, unit: Unit.tsp},
            {name: 'Кориандр молотый', amount: 1, unit: Unit.tsp},
            {name: 'Куркума', amount: 1, unit: Unit.tsp},
            {name: 'Кардамон молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Кинза свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка специй',
                text: 'Смешайте все сухие специи с солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Натрите бедра смесью специй и оставьте мариноваться на 30 минут.'
            },
            {
                title: 'Шаг 3: Подготовка тыквы',
                text: 'Очистите и нарежьте тыкву крупными кубиками.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте лук с имбирем и чесноком.'
            },
            {
                title: 'Шаг 7: Добавление тыквы',
                text: 'Добавьте тыкву, мед и бульон.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте в духовке при 180°C 40-45 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте мягкость тыквы и прожарку курицы.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте свежей кинзой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'тыква', 'восточная кухня', 'горячие блюда'],
        rating: 4.7,
        reviews: 165,
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
            eastern: {
                id: 'eastern',
                title: 'Восточная кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    199: {
        id: 199,
        name: 'kuritsa-s-pertsem-i-tomatami',
        title: 'Курица с перцем и томатами',
        description: 'Сочная курица, запеченная с болгарским перцем и свежими томатами в ароматном соусе. Яркое и вкусное блюдо средиземноморской кухни.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 14, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Перец болгарский', amount: 3, unit: Unit.pcs},
            {name: 'Помидоры', amount: 4, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите бедра солью, перцем и копченой паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте перец и помидоры крупными кусками, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка чеснока и трав',
                text: 'Измельчите чеснок, подготовьте свежие травы.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на оливковом масле.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 6: Добавление перца',
                text: 'Добавьте перец, обжаривайте 5 минут.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 8: Добавление томатов',
                text: 'Добавьте помидоры, чеснок и травы.'
            },
            {
                title: 'Шаг 9: Тушение',
                text: 'Верните курицу, тушите под крышкой 25-30 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте свежим базиликом и подавайте горячим.'
            }
        ],
        categories: ['курица', 'овощи', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 187,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    198: {
        id: 198,
        name: 'kuritsa-s-morkovyu-i-chesnokom',
        title: 'Курица с морковью и чесноком',
        description: 'Ароматная курица, тушенная с морковью и чесноком. Простое и вкусное блюдо для повседневного меню.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 265, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Морковь', amount: 4, unit: Unit.pcs},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
            {name: 'Перец душистый горошком', amount: 5, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 300, unit: Unit.ml},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте морковь брусочками, лук полукольцами, чеснок крупно.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'В той же сковороде обжарьте лук и морковь.'
            },
            {
                title: 'Шаг 5: Добавление специй',
                text: 'Добавьте чеснок, тимьян, лавровый лист и душистый перец.'
            },
            {
                title: 'Шаг 6: Добавление бульона',
                text: 'Влейте бульон, доведите до кипения.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Верните курицу, тушите под крышкой 30 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте мягкость моркови и готовность курицы.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'При необходимости уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'овощи', 'русская кухня', 'горячие блюда'],
        rating: 4.6,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    197: {
        id: 197,
        name: 'kuritsa-s-lapshoy-i-soevym-sousom',
        title: 'Курица с лапшой и соевым соусом',
        description: 'Ароматная азиатская лапша с курицей в соевом соусе и овощами. Быстрое и вкусное блюдо в китайском стиле.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 345, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 42, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 500, unit: Unit.g},
            {name: 'Лапша яичная', amount: 300, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Перец болгарский', amount: 1, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 20, unit: Unit.g},
            {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Соус устричный', amount: 2, unit: Unit.tbsp},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 1, unit: Unit.bunch},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте филе тонкими полосками, замаринуйте в соевом соусе.'
            },
            {
                title: 'Шаг 2: Подготовка лапши',
                text: 'Отварите лапшу согласно инструкции на упаковке.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте овощи соломкой, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'В воке обжарьте овощи с чесноком и имбирем.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Добавьте курицу к овощам, влейте устричный соус.'
            },
            {
                title: 'Шаг 7: Добавление лапши',
                text: 'Добавьте лапшу, перемешайте все ингредиенты.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Добавьте кунжутное масло и оставшийся соевый соус.'
            },
            {
                title: 'Шаг 9: Проверка вкуса',
                text: 'Попробуйте и при необходимости добавьте соль и перец.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и зеленым луком, подавайте горячим.'
            }
        ],
        categories: ['курица', 'лапша', 'азиатская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 234,
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
            },
            noodles: {
                id: 'noodles',
                title: 'Лапша'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    196: {
        id: 196,
        name: 'kuritsa-s-kukuruzoy-i-smetanoy',
        title: 'Курица с кукурузой и сметаной',
        description: 'Сочное куриное филе в нежном сметанном соусе с сладкой кукурузой. Отличное сочетание вкусов для семейного ужина.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 25, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 16, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Кукуруза консервированная', amount: 400, unit: Unit.g},
            {name: 'Сметана 20%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте филе средними кусочками, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на смеси масел.'
            },
            {
                title: 'Шаг 4: Приготовление лука',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Добавьте муку, обжарьте, влейте бульон и сметану.'
            },
            {
                title: 'Шаг 6: Добавление кукурузы',
                text: 'Добавьте кукурузу и паприку, перемешайте.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Верните курицу в соус, добавьте чеснок.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 15-20 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Проверьте соус на густоту, при необходимости уварите.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'сметанный соус', 'европейская кухня', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    195: {
        id: 195,
        name: 'kuritsa-s-kapustoy-v-multivarke',
        title: 'Курица с капустой в мультиварке',
        description: 'Нежная курица, тушенная с молодой капустой в мультиварке. Простое в приготовлении и очень вкусное блюдо.',
        cookTime: '1 час',
        difficulty: '1/5',
        nutrition: {
            calories: {value: 275, unit: Unit.g},
            protein: {value: 23, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Капуста белокочанная', amount: 600, unit: Unit.g},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
            {name: 'Перец душистый горошком', amount: 5, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте бедра на порционные куски, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нашинкуйте капусту, натрите морковь, нарежьте лук.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'В режиме "Жарка" обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук и морковь до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление капусты',
                text: 'Добавьте капусту, перемешайте.'
            },
            {
                title: 'Шаг 6: Добавление томатной пасты',
                text: 'Добавьте томатную пасту, разведенную в бульоне.'
            },
            {
                title: 'Шаг 7: Добавление специй',
                text: 'Добавьте лавровый лист, душистый перец и измельченный чеснок.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Включите режим "Тушение" на 40 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность капусты и мяса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'овощи', 'русская кухня', 'горячие блюда'],
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    194: {
        id: 194,
        name: 'kuritsa-s-kabachkami-v-duhovke',
        title: 'Курица с кабачками в духовке',
        description: 'Сочная запеченная курица с молодыми кабачками и ароматными специями. Легкое и полезное блюдо для всей семьи.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 14, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Кабачки молодые', amount: 600, unit: Unit.g},
            {name: 'Помидоры', amount: 3, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 5, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте кабачки и помидоры кружочками, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка маринада',
                text: 'Смешайте оливковое масло с измельченным чесноком и травами.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу в половине маринада на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите овощи в форму для запекания, сбрызните маринадом.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите курицу поверх овощей.'
            },
            {
                title: 'Шаг 7: Запекание',
                text: 'Запекайте при 180°C 40-45 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что курица прожарилась, а овощи стали мягкими.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'При необходимости запекайте еще 5-10 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Сбрызните лимонным соком, украсьте свежими травами.'
            }
        ],
        categories: ['курица', 'овощи', 'запеченные блюда', 'средиземноморская кухня'],
        rating: 4.7,
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
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    193: {
        id: 193,
        name: 'kuritsa-s-grechkoy-i-gribami',
        title: 'Курица с гречкой и грибами',
        description: 'Сытное и питательное блюдо из куриного мяса с рассыпчатой гречкой и ароматными грибами. Традиционное русское сочетание вкусов.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 42, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 600, unit: Unit.g},
            {name: 'Гречневая крупа', amount: 300, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 300, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Морковь', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Бульон куриный', amount: 600, unit: Unit.ml},
            {name: 'Лавровый лист', amount: 2, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка гречки',
                text: 'Промойте гречку до прозрачной воды.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте бедра на кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук и грибы, натрите морковь, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Обжарьте лук, морковь и грибы до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Добавление гречки',
                text: 'Добавьте гречку, обжарьте 2-3 минуты.'
            },
            {
                title: 'Шаг 7: Добавление бульона',
                text: 'Влейте горячий бульон, добавьте лавровый лист.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 20-25 минут до готовности гречки.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте сливочное масло, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'гречка', 'грибы', 'русская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 198,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    192: {
        id: 192,
        name: 'kuritsa-s-brokkoli-i-slivkami',
        title: 'Курица с брокколи и сливками',
        description: 'Нежное куриное филе с брокколи в сливочном соусе. Полезное и вкусное блюдо для всей семьи.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 315, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Брокколи', amount: 500, unit: Unit.g},
            {name: 'Сливки 33%', amount: 250, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Сыр пармезан', amount: 50, unit: Unit.g},
            {name: 'Тимьян свежий', amount: 1, unit: Unit.bunch},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте филе средними кусочками, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка брокколи',
                text: 'Разделите брокколи на соцветия, бланшируйте 2-3 минуты.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на смеси масел.'
            },
            {
                title: 'Шаг 5: Приготовление основы',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 6: Добавление чеснока',
                text: 'Добавьте чеснок и тимьян, обжаривайте 1 минуту.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Влейте сливки и бульон, добавьте мускатный орех.'
            },
            {
                title: 'Шаг 8: Добавление брокколи',
                text: 'Добавьте брокколи и тертый пармезан, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Тушите все вместе 5-7 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'овощи', 'европейская кухня', 'горячие блюда'],
        rating: 4.8,
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    191: {
        id: 191,
        name: 'kuritsa-po-koreyski-v-ostrom-souse',
        title: 'Курица по-корейски в остром соусе',
        description: 'Острая курица в пикантном корейском соусе с имбирем и чесноком. Яркое и ароматное блюдо азиатской кухни.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 325, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Корейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соус Кочхуджан', amount: 3, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Перец чили', amount: 2, unit: Unit.pcs},
            {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Мед', amount: 1, unit: Unit.tbsp},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 1, unit: Unit.bunch},
            {name: 'Морковь', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соус Кочхуджан, соевый соус, мед и кунжутное масло.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте филе тонкими полосками, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, морковь соломкой, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу в соусе на 20-30 минут.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'В той же сковороде обжарьте овощи с чесноком и имбирем.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Верните курицу в сковороду, добавьте оставшийся маринад.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Готовьте все вместе 5-7 минут, помешивая.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'Добавьте нарезанный зеленый лук.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и подавайте с рисом.'
            }
        ],
        categories: ['курица', 'корейская кухня', 'острые блюда', 'горячие блюда'],
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
            korean: {
                id: 'korean',
                title: 'Корейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    190: {
        id: 190,
        name: 'kuritsa-po-gruzinski-s-pryanostyami',
        title: 'Курица по-грузински с пряностями',
        description: 'Ароматная курица, приготовленная по традиционному грузинскому рецепту с обилием свежих трав и пряностей.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 365, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 7, unit: Unit.g}
        },
        cuisine: 'Грузинская',
        servings: 4,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Кинза свежая', amount: 2, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Вино красное сухое', amount: 200, unit: Unit.ml},
            {name: 'Хмели-сунели', amount: 2, unit: Unit.tbsp},
            {name: 'Уцхо-сунели', amount: 1, unit: Unit.tbsp},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tbsp},
            {name: 'Перец красный молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Гранат', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте курицу на порционные куски, натрите солью и перцем.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте все специи с оливковым маслом и измельченным чесноком.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите курицу маринадом, оставьте на 2-3 часа.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите зелень.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление лука',
                text: 'Добавьте лук, обжаривайте до мягкости.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте вино, тушите 5-7 минут.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Накройте крышкой, тушите на медленном огне 30-35 минут.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'За 5 минут до готовности добавьте рубленую зелень.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте зернами граната и свежей зеленью.'
            }
        ],
        categories: ['курица', 'грузинская кухня', 'горячие блюда'],
        rating: 4.9,
        reviews: 212,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    189: {
        id: 189,
        name: 'kuritsa-v-slivkah-s-zelenyu-i-gribami',
        title: 'Курица в сливках с зеленью и грибами',
        description: 'Нежное куриное мясо в сливочном соусе с ароматными грибами и свежей зеленью. Изысканное блюдо для особого случая.',
        cookTime: '55 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 395, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 28, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 5, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте бедра на кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы пластинками, лук мелкими кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка зелени',
                text: 'Измельчите чеснок и свежую зелень.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на смеси масел.'
            },
            {
                title: 'Шаг 5: Приготовление грибов',
                text: 'В той же сковороде обжарьте грибы с луком до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Добавление чеснока',
                text: 'Добавьте чеснок и тимьян, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 8: Приготовление соуса',
                text: 'Добавьте сливки, бульон и мускатный орех.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Верните курицу, тушите 15-20 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте свежей зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'грибы', 'европейская кухня', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    188: {
        id: 188,
        name: 'kuritsa-v-apelsinovom-souse-s-chesnokom',
        title: 'Курица в апельсиновом соусе с чесноком',
        description: 'Нежная курица в ароматном апельсиново-чесночном соусе. Оригинальное сочетание цитрусовых и пряных нот.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 335, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 20, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Апельсины', amount: 3, unit: Unit.pcs},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Лук зеленый', amount: 1, unit: Unit.bunch},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка соуса',
                text: 'Выжмите сок из апельсинов, добавьте цедру одного апельсина.'
            },
            {
                title: 'Шаг 2: Смешивание соуса',
                text: 'Смешайте апельсиновый сок с соевым соусом, медом и крахмалом.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Нарежьте бедра на кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 4: Подготовка чеснока и имбиря',
                text: 'Измельчите чеснок, натрите имбирь, нарежьте чили.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление ароматов',
                text: 'Добавьте чеснок, имбирь и чили, обжарьте 1-2 минуты.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте апельсиновый соус, доведите до кипения.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на среднем огне 10-15 минут до загустения соуса.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что мясо полностью готово и соус загустел.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и зеленым луком, подавайте с рисом.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'горячие блюда'],
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    187: {
        id: 187,
        name: 'zharenaya-kuritsa-s-risom-i-ovoshchami',
        title: 'Жареная курица с рисом и овощами',
        description: 'Сочная жареная курица с ароматным рисом и свежими овощами. Полноценное и сбалансированное блюдо для всей семьи.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 42, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Рис басмати', amount: 300, unit: Unit.g},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Горошек зеленый', amount: 150, unit: Unit.g},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 4, unit: Unit.tbsp},
            {name: 'Кунжутное масло', amount: 1, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 1, unit: Unit.bunch},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка риса',
                text: 'Промойте рис до прозрачной воды и отварите согласно инструкции.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте филе небольшими кубиками, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте морковь соломкой, перец и лук кубиками.'
            },
            {
                title: 'Шаг 4: Подготовка чеснока и имбиря',
                text: 'Измельчите чеснок и натрите имбирь.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'В той же сковороде обжарьте овощи до мягкости.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Добавьте к овощам курицу, рис и зеленый горошек.'
            },
            {
                title: 'Шаг 8: Добавление соусов',
                text: 'Влейте соевый соус и кунжутное масло, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте все вместе 5-7 минут, помешивая.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и зеленым луком.'
            }
        ],
        categories: ['курица', 'рис', 'азиатская кухня', 'горячие блюда'],
        rating: 4.7,
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    186: {
        id: 186,
        name: 'zharenaya-kuritsa-v-medovo-gorchichnom-souse',
        title: 'Жареная курица в медово-горчичном соусе',
        description: 'Сочные кусочки курицы в ароматном медово-горчичном соусе. Идеальное сочетание сладости меда и пикантности горчицы.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 345, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 16, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Мед', amount: 4, unit: Unit.tbsp},
            {name: 'Горчица дижонская', amount: 3, unit: Unit.tbsp},
            {name: 'Горчица зернистая', amount: 1, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 1, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Лук зеленый', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка соуса',
                text: 'Смешайте мед, оба вида горчицы и соевый соус.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте бедра на кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка чеснока и трав',
                text: 'Измельчите чеснок, подготовьте веточки тимьяна и розмарина.'
            },
            {
                title: 'Шаг 4: Разогрев сковороды',
                text: 'Хорошо разогрейте сковороду с растительным маслом.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки со всех сторон.'
            },
            {
                title: 'Шаг 6: Добавление чеснока',
                text: 'Добавьте чеснок и свежие травы, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте медово-горчичный соус, перемешайте.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на среднем огне 10-12 минут до загустения соуса.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что мясо полностью готово.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленым зеленым луком и подавайте горячим.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'американская кухня', 'горячие блюда'],
        rating: 4.8,
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
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    185: {
        id: 185,
        name: 'tsyplenok-s-zelenyu-i-chesnokom',
        title: 'Цыпленок с зеленью и чесноком',
        description: 'Ароматный цыпленок, запеченный с большим количеством свежей зелени и чеснока. Простое и вкусное блюдо с ярким вкусом.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 315, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Цыпленок', amount: 1200, unit: Unit.g},
            {name: 'Чеснок', amount: 12, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 2, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 2, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Вино белое сухое', amount: 150, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Разрежьте цыпленка на порционные куски, натрите солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка зелени',
                text: 'Мелко нарежьте все травы, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте половину зелени с оливковым маслом и чесноком.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите цыпленка маринадом, оставьте на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка духовки',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 6: Начальное запекание',
                text: 'Запекайте цыпленка 30 минут.'
            },
            {
                title: 'Шаг 7: Добавление жидкости',
                text: 'Влейте вино и бульон, добавьте оставшуюся зелень.'
            },
            {
                title: 'Шаг 8: Финальное запекание',
                text: 'Запекайте еще 20-25 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что мясо полностью прожарилось.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с дольками лимона и свежей зеленью.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.7,
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
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    184: {
        id: 184,
        name: 'tsyplenok-v-slivochnom-souse-s-kartoshkoy',
        title: 'Цыпленок в сливочном соусе с картошкой',
        description: 'Нежный цыпленок с молодым картофелем в ароматном сливочном соусе. Уютное домашнее блюдо для всей семьи.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 425, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 26, unit: Unit.g},
            carbs: {value: 28, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Цыпленок', amount: 1200, unit: Unit.g},
            {name: 'Картофель молодой', amount: 800, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Лавровый лист', amount: 2, unit: Unit.pcs}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Разрежьте цыпленка на порционные куски, натрите солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте картофель крупными дольками, лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка цыпленка',
                text: 'Обжарьте куски цыпленка до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и свежие травы, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление картофеля',
                text: 'Добавьте картофель, обжарьте 5-7 минут.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Влейте сливки и бульон, добавьте специи и лавровый лист.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Верните цыпленка, тушите под крышкой 40-45 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Снимите крышку, уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'картофель', 'русская кухня', 'горячие блюда'],
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    183: {
        id: 183,
        name: 'file-kuritsy-s-limonom-i-medom',
        title: 'Филе курицы с лимоном и медом',
        description: 'Сочное куриное филе в медово-лимонном маринаде. Идеальное сочетание кисло-сладкого вкуса и нежного мяса.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Мед', amount: 3, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте сок и цедру лимона, мед, измельченный чеснок и травы.'
            },
            {
                title: 'Шаг 2: Добавление масла',
                text: 'Добавьте оливковое масло, горчицу и специи, перемешайте.'
            },
            {
                title: 'Шаг 3: Подготовка филе',
                text: 'Нарежьте филе на медальоны, слегка отбейте.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу на 20-30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка сковороды',
                text: 'Разогрейте сковороду-гриль до высокой температуры.'
            },
            {
                title: 'Шаг 6: Жарка',
                text: 'Обжарьте филе по 4-5 минут с каждой стороны.'
            },
            {
                title: 'Шаг 7: Глазирование',
                text: 'Полейте оставшимся маринадом, готовьте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что мясо полностью прожарилось.'
            },
            {
                title: 'Шаг 9: Отдых мяса',
                text: 'Дайте мясу отдохнуть 5 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте свежей петрушкой и дольками лимона.'
            }
        ],
        categories: ['курица', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.8,
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
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    182: {
        id: 182,
        name: 'file-kuritsy-s-ananasami-i-syrom',
        title: 'Филе курицы с ананасами и сыром',
        description: 'Сочное куриное филе, запеченное с ананасами под сырной корочкой. Оригинальное сочетание сладкого и соленого вкусов.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 35, unit: Unit.g},
            fat: {value: 20, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Ананас консервированный', amount: 400, unit: Unit.g},
            {name: 'Сыр твердый', amount: 200, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Майонез', amount: 100, unit: Unit.g},
            {name: 'Сметана', amount: 100, unit: Unit.g},
            {name: 'Карри порошок', amount: 1, unit: Unit.tsp},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на медальоны, отбейте, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка соуса',
                text: 'Смешайте майонез, сметану, карри и паприку.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте филе до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Подготовка ананасов',
                text: 'Нарежьте ананасы небольшими кусочками.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите филе в форму, смажьте соусом.'
            },
            {
                title: 'Шаг 7: Добавление ананасов',
                text: 'Выложите ананасы и обжаренный лук с чесноком.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'европейская кухня', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    181: {
        id: 181,
        name: 'file-kuritsy-v-slivkah-i-chesnoke',
        title: 'Филе курицы в сливках и чесноке',
        description: 'Нежное куриное филе в ароматном сливочно-чесночном соусе. Идеальное сочетание нежного мяса и насыщенного соуса.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 355, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 23, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 150, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на медальоны, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте филе на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и тимьян, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Добавьте сливки, бульон и мускатный орех.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Верните филе в соус, томите на медленном огне 5-7 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что соус загустел, а мясо полностью готово.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'сливочный соус', 'европейская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 234,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    180: {
        id: 180,
        name: 'kurinye-nozhki-s-ananasami',
        title: 'Куриные ножки с ананасами',
        description: 'Экзотическое блюдо из куриных ножек с ананасами в медово-соевом соусе. Идеальное сочетание сладкого и соленого вкусов.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 365, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриные голени', amount: 800, unit: Unit.g},
            {name: 'Ананас свежий', amount: 500, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Мед', amount: 3, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Кунжут белый', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 3, unit: Unit.pcs},
            {name: 'Кориандр свежий', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Натрите куриные голени солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка ананаса',
                text: 'Нарежьте ананас крупными кусочками.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте соевый соус, мед, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу на 20-30 минут.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте голени до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление ананасов',
                text: 'Добавьте ананасы и обжарьте до карамелизации.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Влейте оставшийся маринад, добавьте нарезанный чили.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 15-20 минут до готовности.'
            },
            {
                title: 'Шаг 9: Обжарка кунжута',
                text: 'Обжарьте кунжут на сухой сковороде до золотистого цвета.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом, зеленым луком и кориандром.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'экзотические блюда', 'горячие блюда'],
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    179: {
        id: 179,
        name: 'kurinye-nozhki-po-italyanski',
        title: 'Куриные ножки по-итальянски',
        description: 'Ароматные куриные ножки, запеченные с итальянскими травами, чесноком и томатами. Классическое блюдо итальянской кухни.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 25, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            {name: 'Куриные голени', amount: 800, unit: Unit.g},
            {name: 'Помидоры в собственном соку', amount: 400, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Базилик свежий', amount: 2, unit: Unit.bunch},
            {name: 'Орегано сушеный', amount: 2, unit: Unit.tsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 150, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Пармезан', amount: 50, unit: Unit.g},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Натрите куриные голени солью, перцем и сушеным орегано.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте голени на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Обжарьте лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 6: Добавление томатов',
                text: 'Добавьте томаты, бульон и свежие травы.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Верните голени в соус, тушите под крышкой 30-35 минут.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Посыпьте тертым пармезаном.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте без крышки 10-15 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте свежим базиликом и подавайте горячим.'
            }
        ],
        categories: ['курица', 'итальянская кухня', 'запеченные блюда', 'горячие блюда'],
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
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    178: {
        id: 178,
        name: 'kurinye-nozhki-v-slivochno-chesnochnom-souse',
        title: 'Куриные ножки в сливочно-чесночном соусе',
        description: 'Нежные куриные ножки в густом сливочном соусе с чесноком и травами. Ароматное и сытное блюдо для всей семьи.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 435, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 30, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные голени', amount: 800, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Натрите куриные голени солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте голени на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и свежие травы, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Добавьте сливки, бульон и мускатный орех.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Верните голени в соус, тушите под крышкой 25-30 минут.'
            },
            {
                title: 'Шаг 9: Загущение соуса',
                text: 'Снимите крышку, уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'сливочный соус', 'европейская кухня', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    177: {
        id: 177,
        name: 'kurinye-krylyshki-po-koreyski',
        title: 'Куриные крылышки по-корейски',
        description: 'Острые и ароматные куриные крылышки в корейском стиле с соусом гочуджан. Идеальное сочетание сладкого, острого и умами вкусов.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 395, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 27, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Корейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Соус гочуджан', amount: 4, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 3, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Кунжутное масло', amount: 2, unit: Unit.tbsp},
            {name: 'Рисовый уксус', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 4, unit: Unit.pcs},
            {name: 'Кунжут белый', amount: 2, unit: Unit.tbsp},
            {name: 'Перец чили свежий', amount: 2, unit: Unit.pcs},
            {name: 'Сахар коричневый', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Промойте и обсушите крылышки, разрежьте по суставам.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте гочуджан, соевый соус, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 3: Добавление сладости',
                text: 'Добавьте в маринад мед и коричневый сахар.'
            },
            {
                title: 'Шаг 4: Завершение маринада',
                text: 'Добавьте кунжутное масло и рисовый уксус, перемешайте.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Замаринуйте крылышки на 30 минут или на ночь.'
            },
            {
                title: 'Шаг 6: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C.'
            },
            {
                title: 'Шаг 7: Запекание',
                text: 'Выложите крылышки на противень, запекайте 25-30 минут.'
            },
            {
                title: 'Шаг 8: Глазирование',
                text: 'Смажьте крылышки оставшимся маринадом, запекайте еще 5-7 минут.'
            },
            {
                title: 'Шаг 9: Подготовка украшения',
                text: 'Нарежьте зеленый лук и чили, обжарьте кунжут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте крылышки кунжутом, зеленым луком и чили.'
            }
        ],
        categories: ['курица', 'корейская кухня', 'острые блюда', 'закуски'],
        rating: 4.8,
        reviews: 156,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            korean: {
                id: 'korean',
                title: 'Корейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    176: {
        id: 176,
        name: 'kurinye-krylyshki-v-panirovke-s-sousom',
        title: 'Куриные крылышки в панировке с соусом',
        description: 'Хрустящие куриные крылышки в пряной панировке, подаются с острым медово-чесночным соусом. Идеальная закуска для вечеринки.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 28, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Панировочные сухари', amount: 200, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 100, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Паприка молотая', amount: 2, unit: Unit.tbsp},
            {name: 'Перец чили молотый', amount: 1, unit: Unit.tsp},
            {name: 'Мед', amount: 3, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Промойте и обсушите крылышки, разрежьте по суставам.'
            },
            {
                title: 'Шаг 2: Приготовление панировки',
                text: 'Смешайте сухари с паприкой, солью и перцем.'
            },
            {
                title: 'Шаг 3: Подготовка муки',
                text: 'Приправьте муку солью и перцем.'
            },
            {
                title: 'Шаг 4: Панировка',
                text: 'Обваляйте крылышки в муке, окуните в взбитые яйца, затем в панировку.'
            },
            {
                title: 'Шаг 5: Нагрев масла',
                text: 'Разогрейте масло в глубокой сковороде до 180°C.'
            },
            {
                title: 'Шаг 6: Жарка',
                text: 'Обжаривайте крылышки партиями до золотистого цвета, 7-8 минут.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Смешайте мед, измельченный чеснок, соевый соус и чили.'
            },
            {
                title: 'Шаг 8: Просушка',
                text: 'Выложите крылышки на бумажные полотенца.'
            },
            {
                title: 'Шаг 9: Финальная обработка',
                text: 'Полейте крылышки соусом или подайте соус отдельно.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими с дополнительным соусом.'
            }
        ],
        categories: ['курица', 'закуски', 'американская кухня', 'жареные блюда'],
        rating: 4.7,
        reviews: 198,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    175: {
        id: 175,
        name: 'kurinye-bedra-s-kartoshkoy-i-smetanoy',
        title: 'Куриные бедра с картошкой и сметаной',
        description: 'Сочные куриные бедра, запеченные с молодым картофелем под сметанным соусом. Традиционное русское блюдо с богатым вкусом.',
        cookTime: '1 час 15 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 415, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 30, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Картофель молодой', amount: 1000, unit: Unit.g},
            {name: 'Сметана 20%', amount: 300, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Укроп свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Сливки 10%', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Лавровый лист', amount: 2, unit: Unit.pcs}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка бедер',
                text: 'Натрите бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Нарежьте картофель крупными дольками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок и зелень.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте сметану, сливки, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте бедра до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Подготовка формы',
                text: 'Выложите картофель и лук в форму для запекания.'
            },
            {
                title: 'Шаг 7: Сборка блюда',
                text: 'Выложите бедра поверх картофеля, добавьте лавровый лист.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Залейте все сметанно-сливочным соусом.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C под фольгой 45 минут, затем 15 минут без фольги.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте свежей зеленью и подавайте горячим.'
            }
        ],
        categories: ['курица', 'картофель', 'русская кухня', 'запеченные блюда', 'горячие блюда'],
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    174: {
        id: 174,
        name: 'kurinye-bedra-po-frantsuzski',
        title: 'Куриные бедра по-французски',
        description: 'Нежные куриные бедра, запеченные с грибами, сыром и белым вином в классическом французском стиле.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 445, unit: Unit.g},
            protein: {value: 33, unit: Unit.g},
            fat: {value: 31, unit: Unit.g},
            carbs: {value: 9, unit: Unit.g}
        },
        cuisine: 'Французская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 300, unit: Unit.g},
            {name: 'Сыр грюйер', amount: 200, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Сливки 33%', amount: 250, unit: Unit.ml},
            {name: 'Вино белое сухое', amount: 200, unit: Unit.ml},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Эстрагон свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка бедер',
                text: 'Натрите бедра солью, перцем и дижонской горчицей.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы ломтиками, лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте бедра на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление грибов',
                text: 'В той же сковороде обжарьте грибы с луком до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино, добавьте тимьян и эстрагон, уварите наполовину.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте сливки и чеснок, доведите до кипения.'
            },
            {
                title: 'Шаг 7: Сборка блюда',
                text: 'Выложите бедра в форму, залейте соусом с грибами.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Посыпьте тертым грюйером.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 25-30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'французская кухня', 'запеченные блюда', 'горячие блюда'],
        rating: 4.9,
        reviews: 212,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    173: {
        id: 173,
        name: 'kurinye-bedra-v-slivkah-i-chesnoke',
        title: 'Куриные бедра в сливках и чесноке',
        description: 'Сочные куриные бедра в нежном сливочно-чесночном соусе. Ароматное и сытное блюдо для всей семьи.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 425, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 29, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка бедер',
                text: 'Натрите куриные бедра солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте бедра на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и свежие травы, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Добавьте сливки, бульон и мускатный орех.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Верните бедра в соус, тушите под крышкой 25-30 минут.'
            },
            {
                title: 'Шаг 9: Загущение соуса',
                text: 'Снимите крышку, уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'сливочный соус', 'европейская кухня', 'горячие блюда'],
        rating: 4.8,
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    172: {
        id: 172,
        name: 'kurinaya-grudka-na-grile-s-paprikoy',
        title: 'Куриная грудка на гриле с паприкой',
        description: 'Сочная куриная грудка с ароматной корочкой из паприки и специй, приготовленная на гриле. Идеальное блюдо для любителей здорового питания.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 275, unit: Unit.g},
            protein: {value: 34, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные грудки', amount: 600, unit: Unit.g},
            {name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Мед', amount: 1, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, оба вида паприки, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 2: Добавление меда',
                text: 'Добавьте мед и сок половины лимона в маринад.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Слегка отбейте грудки, сделайте неглубокие надрезы.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите курицу маринадом, оставьте на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры.'
            },
            {
                title: 'Шаг 6: Начало готовки',
                text: 'Выложите курицу на гриль, готовьте 6-7 минут.'
            },
            {
                title: 'Шаг 7: Переворачивание',
                text: 'Переверните грудки, готовьте еще 5-6 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что мясо прожарилось, но осталось сочным.'
            },
            {
                title: 'Шаг 9: Отдых мяса',
                text: 'Дайте курице отдохнуть 5 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Сбрызните соком оставшегося лимона, украсьте свежими травами.'
            }
        ],
        categories: ['курица', 'гриль', 'средиземноморская кухня', 'горячие блюда'],
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
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    171: {
        id: 171,
        name: 'kurinaya-grudka-v-slivochnom-souse-s-gribami',
        title: 'Куриная грудка в сливочном соусе с грибами',
        description: 'Нежная куриная грудка в густом сливочном соусе с ароматными грибами. Изысканное блюдо для особого случая.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 405, unit: Unit.g},
            protein: {value: 34, unit: Unit.g},
            fat: {value: 26, unit: Unit.g},
            carbs: {value: 10, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные грудки', amount: 600, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриные грудки на медальоны, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы ломтиками, лук мелко нашинкуйте, чеснок измельчите.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление грибов',
                text: 'В той же сковороде обжарьте грибы с луком до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и тимьян, обжаривайте еще минуту.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Добавьте сливки и бульон, уварите до загустения.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Верните курицу в соус, добавьте мускатный орех.'
            },
            {
                title: 'Шаг 9: Доведение до готовности',
                text: 'Томите на медленном огне 5-7 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'грибы', 'сливочный соус', 'европейская кухня', 'горячие блюда'],
        rating: 4.9,
        reviews: 245,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    170: {
        id: 170,
        name: 'kurinaya-grudka-v-klyare-s-hrustyaschey-korochkoy',
        title: 'Куриная грудка в кляре с хрустящей корочкой',
        description: 'Нежная куриная грудка в воздушном кляре с хрустящей золотистой корочкой. Идеальное сочетание хрустящей текстуры и сочного мяса.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные грудки', amount: 600, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 200, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Молоко', amount: 200, unit: Unit.ml},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Куркума молотая', amount: 0.5, unit: Unit.tsp},
            {name: 'Разрыхлитель', amount: 1, unit: Unit.tsp},
            {name: 'Крахмал кукурузный', amount: 50, unit: Unit.g},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриные грудки на полоски, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление кляра',
                text: 'Смешайте муку, крахмал, разрыхлитель, паприку и куркуму.'
            },
            {
                title: 'Шаг 3: Добавление жидкости',
                text: 'Взбейте яйца с молоком, добавьте к сухой смеси, перемешайте до однородности.'
            },
            {
                title: 'Шаг 4: Добавление чеснока',
                text: 'Добавьте измельченный чеснок в кляр.'
            },
            {
                title: 'Шаг 5: Подготовка масла',
                text: 'Нагрейте масло в глубокой сковороде до 180°C.'
            },
            {
                title: 'Шаг 6: Обмакивание курицы',
                text: 'Обмакните каждый кусочек курицы в кляр.'
            },
            {
                title: 'Шаг 7: Жарка',
                text: 'Жарьте курицу в горячем масле до золотистого цвета 3-4 минуты.'
            },
            {
                title: 'Шаг 8: Переворачивание',
                text: 'Переверните и жарьте еще 2-3 минуты до готовности.'
            },
            {
                title: 'Шаг 9: Удаление масла',
                text: 'Выложите на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'европейская кухня', 'горячие блюда'],
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
            },
            fried: {
                id: 'fried',
                title: 'Жареные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    169: {
        id: 169,
        name: 'kuritsa-gril-s-chesnokom-i-zelenyu',
        title: 'Курица-гриль с чесноком и зеленью',
        description: 'Ароматная курица на гриле с чесночно-травяным маринадом. Простое и вкусное блюдо для летнего отдыха.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные грудки', amount: 600, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 6, unit: Unit.tbsp},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Измельчите чеснок и свежие травы, смешайте с оливковым маслом.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте сок одного лимона, вино, орегано и паприку.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Слегка отбейте куриные грудки, посолите и поперчите.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу в приготовленном маринаде на 2-3 часа.'
            },
            {
                title: 'Шаг 5: Подготовка гриля',
                text: 'Разогрейте гриль до средней температуры.'
            },
            {
                title: 'Шаг 6: Начало готовки',
                text: 'Выложите курицу на гриль, сохранив маринад.'
            },
            {
                title: 'Шаг 7: Готовка на гриле',
                text: 'Готовьте 5-7 минут с каждой стороны, периодически смазывая маринадом.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность курицы термометром или надрезом.'
            },
            {
                title: 'Шаг 9: Отдых мяса',
                text: 'Дайте курице отдохнуть 5 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Нарежьте курицу, сбрызните соком лимона, посыпьте свежей зеленью.'
            }
        ],
        categories: ['курица', 'гриль', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.7,
        reviews: 143,
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
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    168: {
        id: 168,
        name: 'kuritsa-gril-v-apelsinovom-marinade',
        title: 'Курица-гриль в апельсиновом маринаде',
        description: 'Сочная курица на гриле в ароматном цитрусовом маринаде с медом и специями. Идеальное блюдо для летнего барбекю.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 310, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 14, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Апельсины', amount: 3, unit: Unit.pcs},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Кориандр молотый', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Выжмите сок из апельсинов и лимона, добавьте измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 2: Смешивание маринада',
                text: 'Добавьте мед, соевый соус, оливковое масло и специи.'
            },
            {
                title: 'Шаг 3: Подготовка трав',
                text: 'Измельчите свежие травы и добавьте в маринад.'
            },
            {
                title: 'Шаг 4: Маринование курицы',
                text: 'Залейте курицу маринадом и оставьте на 4-6 часов в холодильнике.'
            },
            {
                title: 'Шаг 5: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры.'
            },
            {
                title: 'Шаг 6: Начало готовки',
                text: 'Выложите курицу на гриль, сохранив маринад.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Уварите оставшийся маринад до загустения.'
            },
            {
                title: 'Шаг 8: Готовка на гриле',
                text: 'Готовьте курицу 6-8 минут с каждой стороны, периодически смазывая соусом.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица прожарилась до готовности.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с оставшимся соусом и свежими травами.'
            }
        ],
        categories: ['курица', 'гриль', 'американская кухня', 'барбекю', 'горячие блюда'],
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
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    167: {
        id: 167,
        name: 'kuritsa-s-travami-i-kartoshkoy',
        title: 'Курица с травами и картошкой',
        description: 'Ароматная запеченная курица с молодым картофелем и свежими травами. Традиционное домашнее блюдо с богатым вкусом.',
        cookTime: '1 час 15 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 380, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 32, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Картофель молодой', amount: 800, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 3, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Шалфей свежий', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Разрежьте молодой картофель на половинки.'
            },
            {
                title: 'Шаг 3: Подготовка трав',
                text: 'Крупно нарежьте свежие травы, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Смешайте оливковое масло с травами и чесноком, натрите курицу.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите картофель в форму для запекания, сбрызните маслом.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите курицу поверх картофеля, добавьте оставшиеся травы.'
            },
            {
                title: 'Шаг 7: Добавление жидкости',
                text: 'Влейте бульон, добавьте кусочки сливочного масла.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 180°C 45 минут под фольгой.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Снимите фольгу и запекайте еще 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Сбрызните лимонным соком и подавайте горячим.'
            }
        ],
        categories: ['курица', 'картофель', 'запеченные блюда', 'русская кухня', 'горячие блюда'],
        rating: 4.8,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    166: {
        id: 166,
        name: 'kuritsa-s-syrom-i-gribami',
        title: 'Курица с сыром и грибами',
        description: 'Сочное куриное филе, запеченное с грибами под сырной корочкой. Изысканное блюдо с богатым вкусом.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 420, unit: Unit.g},
            protein: {value: 35, unit: Unit.g},
            fat: {value: 28, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Сыр моцарелла', amount: 200, unit: Unit.g},
            {name: 'Сыр пармезан', amount: 100, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Сливки 33%', amount: 200, unit: Unit.ml},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте куриное филе вдоль, отбейте, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы тонкими ломтиками.'
            },
            {
                title: 'Шаг 3: Подготовка лука и чеснока',
                text: 'Мелко нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Приготовление грибной начинки',
                text: 'Обжарьте лук и грибы на сливочном масле до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Добавьте сливки, чеснок, тимьян и мускатный орех к грибам.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Обжарьте куриное филе на оливковом масле с двух сторон.'
            },
            {
                title: 'Шаг 7: Сборка блюда',
                text: 'Выложите на курицу грибную смесь, посыпьте тертыми сырами.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте в духовке при 180°C 15-20 минут до расплавления сыра.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Включите гриль на 2-3 минуты для образования золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'грибы', 'сыр', 'европейская кухня', 'горячие блюда'],
        rating: 4.9,
        reviews: 234,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    165: {
        id: 165,
        name: 'kuritsa-s-risom-i-zelenyu',
        title: 'Курица с рисом и зеленью',
        description: 'Ароматное блюдо из нежного куриного филе с рассыпчатым рисом и свежей зеленью. Идеальное сочетание белка и углеводов.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 45, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Рис басмати', amount: 300, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 2, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 2, unit: Unit.bunch},
            {name: 'Кинза свежая', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Бульон куриный', amount: 600, unit: Unit.ml},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Зира молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка риса',
                text: 'Промойте рис до прозрачной воды и замочите на 20 минут.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Мелко нарежьте лук, измельчите чеснок, нарубите зелень.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Добавление овощей',
                text: 'Добавьте лук и чеснок, обжаривайте до прозрачности.'
            },
            {
                title: 'Шаг 6: Добавление риса',
                text: 'Добавьте рис, обжаривайте 2-3 минуты.'
            },
            {
                title: 'Шаг 7: Добавление жидкости',
                text: 'Влейте вино, дайте выпариться, затем добавьте бульон.'
            },
            {
                title: 'Шаг 8: Приготовление риса',
                text: 'Добавьте зиру, доведите до кипения, уменьшите огонь и готовьте 15-20 минут.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'Добавьте нарубленную зелень, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Сбрызните лимонным соком и подавайте горячим.'
            }
        ],
        categories: ['курица', 'рис', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.7,
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
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    164: {
        id: 164,
        name: 'kuritsa-s-ovoschami-i-chesnokom',
        title: 'Курица с овощами и чесноком',
        description: 'Сочное куриное филе с разноцветными овощами и ароматным чесноком. Полезное и вкусное блюдо для всей семьи.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Перец болгарский', amount: 3, unit: Unit.pcs},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Цукини', amount: 2, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Помидоры черри', amount: 200, unit: Unit.g},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте перец и цукини крупными кусочками, морковь брусочками.'
            },
            {
                title: 'Шаг 3: Подготовка лука и чеснока',
                text: 'Нарежьте лук крупными кусками, чеснок крупно порубите.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Добавление овощей',
                text: 'Добавьте лук и морковь, обжаривайте 5 минут.'
            },
            {
                title: 'Шаг 6: Добавление перца и цукини',
                text: 'Добавьте перец и цукини, готовьте еще 5-7 минут.'
            },
            {
                title: 'Шаг 7: Добавление чеснока',
                text: 'Добавьте чеснок и свежие травы.'
            },
            {
                title: 'Шаг 8: Добавление помидоров',
                text: 'Добавьте помидоры черри целиком.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Посыпьте паприкой, перемешайте и готовьте еще 3-4 минуты.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте свежим базиликом и подавайте горячим.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'овощи', 'горячие блюда'],
        rating: 4.8,
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    163: {
        id: 163,
        name: 'kuritsa-s-lukom-i-soevym-sousom',
        title: 'Курица с луком и соевым соусом',
        description: 'Сочное куриное филе с карамелизированным луком в ароматном соевом соусе. Простое и вкусное блюдо азиатской кухни.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Лук репчатый', amount: 3, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp},
            {name: 'Вино рисовое', amount: 2, unit: Unit.tbsp},
            {name: 'Сахар коричневый', amount: 1, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Кунжут белый', amount: 1, unit: Unit.tbsp},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками поперек волокон.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте соевый соус, рисовое вино и коричневый сахар.'
            },
            {
                title: 'Шаг 4: Обжарка лука',
                text: 'На сильном огне обжарьте лук до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Добавление чеснока и имбиря',
                text: 'Добавьте к луку измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Добавьте курицу и обжаривайте до золотистой корочки.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте соус и готовьте на сильном огне 3-4 минуты.'
            },
            {
                title: 'Шаг 8: Добавление масла',
                text: 'Влейте кунжутное масло, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 2-3 минуты до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте зеленым луком и кунжутом, подавайте с рисом.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'жареное', 'горячие блюда'],
        rating: 4.7,
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    162: {
        id: 162,
        name: 'kuritsa-s-limonom-i-paprikoy',
        title: 'Курица с лимоном и паприкой',
        description: 'Ароматное блюдо из курицы с ярким цитрусовым вкусом и пикантной паприкой. Сочетание свежести лимона и легкой остроты специй.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 290, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Паприка сладкая', amount: 2, unit: Unit.tsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, сок одного лимона, измельченный чеснок и все специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в приготовленном маринаде на 30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка трав',
                text: 'Мелко нарежьте свежие травы.'
            },
            {
                title: 'Шаг 5: Разогрев сковороды',
                text: 'Хорошо разогрейте сковороду-гриль.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 7: Добавление трав',
                text: 'Добавьте половину нарезанных трав.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Уменьшите огонь и готовьте еще 5-7 минут до готовности.'
            },
            {
                title: 'Шаг 9: Добавление лимона',
                text: 'Сбрызните соком второго лимона.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте оставшимися травами и подавайте с дольками лимона.'
            }
        ],
        categories: ['курица', 'средиземноморская кухня', 'горячие блюда'],
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
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    161: {
        id: 161,
        name: 'kuritsa-s-kartoshkoy-v-slivkah',
        title: 'Курица с картошкой в сливках',
        description: 'Сытное и ароматное блюдо из нежной курицы и молодого картофеля в сливочном соусе. Идеальный выбор для семейного ужина.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 410, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 23, unit: Unit.g},
            carbs: {value: 35, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Картофель молодой', amount: 800, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусочками, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Очистите и нарежьте картофель средними дольками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'На смеси масел обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Обжарка овощей',
                text: 'В той же сковороде обжарьте лук до прозрачности, добавьте чеснок.'
            },
            {
                title: 'Шаг 6: Добавление картофеля',
                text: 'Добавьте картофель, обжаривайте 5-7 минут.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Влейте бульон и сливки, добавьте травы и мускатный орех.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Верните курицу, накройте крышкой и тушите 25-30 минут до готовности картофеля.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Снимите крышку и дайте соусу немного загустеть.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'русская кухня', 'сливочный соус', 'горячие блюда'],
        rating: 4.8,
        reviews: 198,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    160: {
        id: 160,
        name: 'kuritsa-s-gribami-i-slivkami',
        title: 'Курица с грибами и сливками',
        description: 'Нежное куриное филе с шампиньонами в сливочном соусе. Классическое сочетание ингредиентов в изысканном исполнении.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 355, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 9, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте шампиньоны ломтиками средней толщины.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук мелкими кубиками, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'На смеси оливкового и сливочного масла обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление грибов',
                text: 'В той же сковороде обжарьте грибы до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте лук и чеснок, обжарьте до прозрачности.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте вино и готовьте 2-3 минуты до выпаривания алкоголя.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Добавьте бульон, сливки, тимьян и мускатный орех. Верните курицу.'
            },
            {
                title: 'Шаг 9: Доведение соуса',
                text: 'Готовьте на медленном огне 7-10 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте с пастой или картофельным пюре.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'сливочный соус', 'горячие блюда'],
        rating: 4.9,
        reviews: 212,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    159: {
        id: 159,
        name: 'kuritsa-po-indiyski-s-karri',
        title: 'Курица по-индийски с карри',
        description: 'Ароматное индийское блюдо из курицы в соусе карри со специями. Насыщенный вкус и богатый аромат традиционной индийской кухни.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 380, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 21, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        cuisine: 'Индийская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Помидоры', amount: 3, unit: Unit.pcs},
            {name: 'Йогурт натуральный', amount: 200, unit: Unit.ml},
            {name: 'Сливки кокосовые', amount: 200, unit: Unit.ml},
            {name: 'Масло топленое (гхи)', amount: 3, unit: Unit.tbsp},
            {name: 'Карри порошок', amount: 2, unit: Unit.tbsp},
            {name: 'Куркума', amount: 1, unit: Unit.tsp},
            {name: 'Кориандр молотый', amount: 1, unit: Unit.tsp},
            {name: 'Кумин молотый', amount: 1, unit: Unit.tsp},
            {name: 'Гарам масала', amount: 1, unit: Unit.tsp},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Кинза свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте йогурт с половиной специй и измельченным чесноком. Замаринуйте курицу на 30 минут.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок и имбирь, нарежьте помидоры кубиками.'
            },
            {
                title: 'Шаг 3: Обжарка специй',
                text: 'В глубокой сковороде разогрейте гхи и обжарьте оставшиеся сухие специи до аромата.'
            },
            {
                title: 'Шаг 4: Обжарка лука',
                text: 'Добавьте лук и обжаривайте до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Добавление чеснока и имбиря',
                text: 'Добавьте измельченные чеснок и имбирь, обжаривайте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление помидоров',
                text: 'Добавьте помидоры и готовьте до размягчения.'
            },
            {
                title: 'Шаг 7: Обжарка курицы',
                text: 'Добавьте маринованную курицу и обжаривайте 5-7 минут.'
            },
            {
                title: 'Шаг 8: Приготовление соуса',
                text: 'Влейте кокосовые сливки, добавьте гарам масалу, доведите до кипения.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте на медленном огне 15-20 минут до готовности курицы.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой кинзой и подавайте с рисом или наном.'
            }
        ],
        categories: ['курица', 'индийская кухня', 'карри', 'горячие блюда'],
        rating: 4.8,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'gluten-free': {
                id: 'gluten-free',
                title: 'Без глютена'
            }
        }
    },
    158: {
        id: 158,
        name: 'kuritsa-v-souse-teriyaki-s-chesnokom',
        title: 'Курица в соусе терияки с чесноком',
        description: 'Сочные кусочки курицы в ароматном соусе терияки с чесноком. Классическое японское блюдо с пикантным вкусом.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 310, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 20, unit: Unit.g}
        },
        cuisine: 'Японская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соус терияки', amount: 120, unit: Unit.ml},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Кунжут белый', amount: 2, unit: Unit.tbsp},
            {name: 'Мирин', amount: 2, unit: Unit.tbsp},
            {name: 'Саке', amount: 2, unit: Unit.tbsp},
            {name: 'Сахар коричневый', amount: 1, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на кусочки размером 3-4 см.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте половину соуса терияки, мирин, саке и сахар.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу на 15-20 минут.'
            },
            {
                title: 'Шаг 4: Подготовка чеснока и имбиря',
                text: 'Измельчите чеснок и натрите имбирь.'
            },
            {
                title: 'Шаг 5: Обжарка чеснока',
                text: 'В воке разогрейте масла и обжарьте чеснок с имбирем до аромата.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Добавьте маринованную курицу и обжаривайте на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся соус терияки и готовьте 3-4 минуты.'
            },
            {
                title: 'Шаг 8: Загущение соуса',
                text: 'Уменьшите огонь и дайте соусу немного загустеть.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте половину нарезанного зеленого лука, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и оставшимся зеленым луком. Подавайте с рисом.'
            }
        ],
        categories: ['курица', 'японская кухня', 'азиатская кухня', 'горячие блюда'],
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
            japanese: {
                id: 'japanese',
                title: 'Японская кухня'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    157: {
        id: 157,
        name: 'kuritsa-v-slivkah-s-limonom',
        title: 'Курица в сливках с лимоном',
        description: 'Нежное куриное филе в легком сливочно-лимонном соусе. Изысканное блюдо с ярким цитрусовым акцентом.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 340, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 7, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Каперсы', amount: 2, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны толщиной 2 см, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка лимона',
                text: 'Снимите цедру с одного лимона и выжмите сок из обоих.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Разогрейте оливковое и часть сливочного масла, обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'В той же сковороде обжарьте измельченный чеснок, добавьте вино.'
            },
            {
                title: 'Шаг 5: Добавление бульона',
                text: 'Влейте куриный бульон, добавьте веточки тимьяна.'
            },
            {
                title: 'Шаг 6: Добавление сливок',
                text: 'Влейте сливки, добавьте цедру лимона и половину лимонного сока.'
            },
            {
                title: 'Шаг 7: Финальное приготовление',
                text: 'Верните курицу в соус, добавьте каперсы и оставшееся сливочное масло.'
            },
            {
                title: 'Шаг 8: Доведение соуса',
                text: 'Готовьте на медленном огне 5-7 минут до загустения соуса.'
            },
            {
                title: 'Шаг 9: Корректировка вкуса',
                text: 'Добавьте оставшийся лимонный сок по вкусу, посолите и поперчите.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте с рисом или пастой.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'сливочный соус', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    156: {
        id: 156,
        name: 'zharenaya-kuritsa-s-medom-i-travami',
        title: 'Жареная курица с медом и травами',
        description: 'Сочная курица в медово-травяном маринаде с хрустящей корочкой. Идеальное сочетание сладости меда и ароматных трав.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Мед натуральный', amount: 3, unit: Unit.tbsp},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Шалфей свежий', amount: 1, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Приготовление маринада',
                text: 'Смешайте мед, оливковое масло, измельченный чеснок, горчицу и сок половины лимона.'
            },
            {
                title: 'Шаг 2: Подготовка трав',
                text: 'Мелко нарежьте все свежие травы и добавьте в маринад.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте курицу маринадом и оставьте на 30 минут при комнатной температуре.'
            },
            {
                title: 'Шаг 5: Подготовка сковороды',
                text: 'Разогрейте сковороду на среднем огне.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Обжарьте курицу на среднем огне до золотистой корочки с обеих сторон.'
            },
            {
                title: 'Шаг 7: Добавление оставшегося маринада',
                text: 'Влейте оставшийся маринад и готовьте еще 5-7 минут.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Посыпьте копченой паприкой и готовьте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 9: Отдых блюда',
                text: 'Дайте курице отдохнуть 5 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с дольками лимона и свежими травами.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'жареное', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    155: {
        id: 155,
        name: 'zharenaya-kuritsa-s-kartoshkoy-i-gribami',
        title: 'Жареная курица с картошкой и грибами',
        description: 'Сытное домашнее блюдо из курицы с хрустящей картошкой и ароматными грибами. Идеально для семейного ужина.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 32, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Картофель', amount: 800, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 4, unit: Unit.tbsp},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите, поперчите и приправьте паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Очистите и нарежьте картофель средними кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка грибов',
                text: 'Очистите и нарежьте грибы крупными ломтиками.'
            },
            {
                title: 'Шаг 4: Подготовка лука и чеснока',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Разогрейте растительное масло и обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Обжарка картофеля',
                text: 'В отдельной сковороде обжарьте картофель до полуготовности.'
            },
            {
                title: 'Шаг 7: Приготовление грибов',
                text: 'На сливочном масле обжарьте грибы с луком до золотистого цвета.'
            },
            {
                title: 'Шаг 8: Соединение ингредиентов',
                text: 'Соедините курицу, картофель и грибы с луком в одной сковороде.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте чеснок, тимьян, посолите и поперчите по вкусу. Готовьте еще 5-7 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим.'
            }
        ],
        categories: ['курица', 'русская кухня', 'жареное', 'горячие блюда'],
        rating: 4.8,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    154: {
        id: 154,
        name: 'zharenaya-kuritsa-po-kitayski',
        title: 'Жареная курица по-китайски',
        description: 'Традиционное китайское блюдо из курицы с овощами в пряном соусе. Идеальное сочетание хрустящей курицы и ароматного соуса.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 360, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 25, unit: Unit.g}
        },
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Крахмал кукурузный', amount: 3, unit: Unit.tbsp},
            {name: 'Яйцо', amount: 1, unit: Unit.pcs},
            {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус устричный', amount: 2, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 3, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 300, unit: Unit.ml},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Кунжут белый', amount: 2, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на кубики 2-3 см.'
            },
            {
                title: 'Шаг 2: Приготовление кляра',
                text: 'Смешайте крахмал с яйцом и щепоткой соли. Обваляйте курицу.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте перец и морковь соломкой, лук полукольцами, измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте устричный и соевый соусы, кунжутное масло.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Разогрейте масло до 180°C и обжарьте курицу порциями до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Обжарка овощей',
                text: 'В воке обжарьте чеснок, имбирь и чили, добавьте остальные овощи.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Добавьте курицу к овощам, влейте соус.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Готовьте на сильном огне 2-3 минуты, постоянно помешивая.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'Добавьте нарезанный зеленый лук, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте обжаренным кунжутом и подавайте с рисом.'
            }
        ],
        categories: ['курица', 'китайская кухня', 'жареное', 'горячие блюда'],
        rating: 4.9,
        reviews: 245,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    153: {
        id: 153,
        name: 'zharenaya-kuritsa-v-soevom-souse-s-lukom',
        title: 'Жареная курица в соевом соусе с луком',
        description: 'Сочные кусочки курицы, обжаренные с луком в ароматном соевом соусе. Простое и вкусное блюдо азиатской кухни.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 10, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Вино рисовое', amount: 2, unit: Unit.tbsp},
            {name: 'Сахар коричневый', amount: 1, unit: Unit.tbsp},
            {name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Кунжут белый', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками поперек волокон.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте 2 ст.л. соевого соуса, рисовое вино и сахар. Замаринуйте курицу на 15 минут.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок и имбирь, нарежьте зеленый лук.'
            },
            {
                title: 'Шаг 4: Подготовка загустителя',
                text: 'Смешайте крахмал с 2 ст.л. холодной воды.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Разогрейте масло в воке и обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Обжарка овощей',
                text: 'Добавьте лук, чеснок и имбирь, обжаривайте до мягкости лука.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся соевый соус и 100 мл воды.'
            },
            {
                title: 'Шаг 8: Загущение',
                text: 'Добавьте крахмальную смесь, помешивая до загустения соуса.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 2-3 минуты, помешивая.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте зеленым луком и кунжутом. Подавайте с рисом.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'жареное', 'горячие блюда'],
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    152: {
        id: 152,
        name: 'zharenaya-kuritsa-v-slivkah-s-zelenyu',
        title: 'Жареная курица в сливках с зеленью',
        description: 'Нежные кусочки курицы в ароматном сливочном соусе со свежей зеленью. Классическое европейское блюдо с изысканным вкусом.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 375, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 26, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны толщиной 2 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка зелени',
                text: 'Мелко нарежьте все травы, чеснок измельчите.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Разогрейте оливковое и часть сливочного масла, обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности, добавьте чеснок.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте белое вино, готовьте 2-3 минуты до выпаривания алкоголя.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте бульон, сливки и оставшееся сливочное масло. Доведите до кипения.'
            },
            {
                title: 'Шаг 7: Добавление специй',
                text: 'Добавьте мускатный орех, соль и перец по вкусу.'
            },
            {
                title: 'Шаг 8: Возвращение курицы',
                text: 'Верните курицу в соус, добавьте половину зелени.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Томите на медленном огне 5-7 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав оставшейся зеленью. Идеально с пастой или картофельным пюре.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'сливочный соус', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    151: {
        id: 151,
        name: 'zharenaya-kuritsa-v-kislo-sladkom-souse',
        title: 'Жареная курица в кисло-сладком соусе',
        description: 'Хрустящие кусочки курицы в ароматном кисло-сладком соусе с овощами. Популярное блюдо азиатской кухни.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 350, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 32, unit: Unit.g}
        },
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Крахмал кукурузный', amount: 4, unit: Unit.tbsp},
            {name: 'Яйцо', amount: 1, unit: Unit.pcs},
            {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
            {name: 'Ананас консервированный', amount: 200, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 20, unit: Unit.g},
            {name: 'Соус кетчуп', amount: 4, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 3, unit: Unit.tbsp},
            {name: 'Уксус рисовый', amount: 2, unit: Unit.tbsp},
            {name: 'Сахар коричневый', amount: 3, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 300, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Кунжут белый', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на кубики 2-3 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление кляра',
                text: 'Смешайте 2 ст.л. крахмала с яйцом до однородности. Обваляйте кусочки курицы.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте перец и лук крупными кусками, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте кетчуп, соевый соус, рисовый уксус, сахар и 100 мл воды.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Разогрейте масло и обжарьте курицу порциями до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление загустителя',
                text: 'Смешайте оставшийся крахмал с 50 мл холодной воды.'
            },
            {
                title: 'Шаг 7: Обжарка овощей',
                text: 'В вок обжарьте лук, чеснок и имбирь до аромата, добавьте перец.'
            },
            {
                title: 'Шаг 8: Соединение ингредиентов',
                text: 'Добавьте курицу, ананасы и соус. Доведите до кипения.'
            },
            {
                title: 'Шаг 9: Загущение соуса',
                text: 'Влейте крахмальную смесь, помешивая до загустения.'
            },
            {
                title: 'Шаг 10: Финальное приготовление',
                text: 'Готовьте еще 2-3 минуты, чтобы соус равномерно покрыл все ингредиенты.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Посыпьте кунжутом и подавайте горячим с рисом.'
            }
        ],
        categories: ['курица', 'китайская кухня', 'жареное', 'горячие блюда'],
        rating: 4.8,
        reviews: 234,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    150: {
        id: 150,
        name: 'tsyplenok-na-grile-s-limonom',
        title: 'Цыпленок на гриле с лимоном',
        description: 'Сочный цыпленок, приготовленный на гриле с ароматом лимона и свежих трав. Идеальное блюдо для летнего барбекю.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 340, unit: Unit.g},
            protein: {value: 34, unit: Unit.g},
            fat: {value: 20, unit: Unit.g},
            carbs: {value: 4, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Цыпленок целый', amount: 1500, unit: Unit.g},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Орегано свежий', amount: 1, unit: Unit.bunch},
            {name: 'Соль морская', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Перец красный молотый', amount: 0.5, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Разрежьте цыпленка вдоль грудки (баттерфляй). Промойте и обсушите.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте оливковое масло, сок одного лимона, измельченный чеснок, рубленые травы, соль и оба вида перца.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите цыпленка маринадом со всех сторон, уделяя особое внимание под кожей. Оставьте на 2-4 часа.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средней температуры (около 180°C).'
            },
            {
                title: 'Шаг 5: Подготовка лимона',
                text: 'Нарежьте оставшийся лимон тонкими кольцами.'
            },
            {
                title: 'Шаг 6: Начальное приготовление',
                text: 'Положите цыпленка на гриль кожей вверх, готовьте 20 минут.'
            },
            {
                title: 'Шаг 7: Переворачивание',
                text: 'Переверните цыпленка и готовьте еще 20 минут.'
            },
            {
                title: 'Шаг 8: Добавление лимона',
                text: 'Выложите кольца лимона на гриль рядом с цыпленком.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 10-15 минут, периодически поливая маринадом.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность - сок должен быть прозрачным при прокалывании.'
            },
            {
                title: 'Шаг 11: Отдых',
                text: 'Снимите с гриля и дайте отдохнуть 10 минут под фольгой.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Разрежьте на порции, украсьте гриль-лимоном и свежими травами.'
            }
        ],
        categories: ['курица', 'средиземноморская кухня', 'гриль', 'горячие блюда'],
        rating: 4.9,
        reviews: 213,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    149: {
        id: 149,
        name: 'tsyplenok-v-duhovke-s-chesnokom',
        title: 'Цыпленок в духовке с чесноком',
        description: 'Ароматный цыпленок, запеченный с большим количеством чеснока и свежими травами. Нежное мясо с хрустящей корочкой и насыщенным вкусом.',
        cookTime: '1 час 15 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 380, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Цыпленок целый', amount: 1500, unit: Unit.g},
            {name: 'Чеснок', amount: 2, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 3, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Шалфей свежий', amount: 1, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Соль морская', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Промойте и обсушите цыпленка. Натрите солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока',
                text: 'Разделите головки чеснока на зубчики, не очищая. Половину измельчите для маринада.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте оливковое масло, измельченный чеснок, сок половины лимона, копченую паприку.'
            },
            {
                title: 'Шаг 4: Подготовка трав',
                text: 'Отделите листья трав от стеблей. Часть измельчите для маринада, часть оставьте целыми.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Натрите цыпленка маринадом снаружи и внутри. Оставьте на 30 минут.'
            },
            {
                title: 'Шаг 6: Подготовка к запеканию',
                text: 'Нафаршируйте цыпленка целыми зубчиками чеснока, оставшимся лимоном и травами.'
            },
            {
                title: 'Шаг 7: Размещение в форме',
                text: 'Положите цыпленка в форму для запекания грудкой вверх, свяжите ножки.'
            },
            {
                title: 'Шаг 8: Начальное запекание',
                text: 'Запекайте при 200°C 30 минут.'
            },
            {
                title: 'Шаг 9: Добавление вина',
                text: 'Влейте вино в форму и продолжайте запекать еще 30 минут при 180°C.'
            },
            {
                title: 'Шаг 10: Финальное запекание',
                text: 'Увеличьте температуру до 200°C на последние 10 минут для образования корочки.'
            },
            {
                title: 'Шаг 11: Проверка готовности',
                text: 'Проверьте готовность - сок должен быть прозрачным при прокалывании.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Дайте отдохнуть 10 минут, затем разрежьте и подавайте с запеченным чесноком и соком из формы.'
            }
        ],
        categories: ['курица', 'средиземноморская кухня', 'запеченное', 'горячие блюда'],
        rating: 4.8,
        reviews: 187,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    148: {
        id: 148,
        name: 'tsyplenok-v-duhovke-s-kartoshkoy',
        title: 'Цыпленок в духовке с картошкой',
        description: 'Целый цыпленок, запеченный в духовке с молодым картофелем и ароматными травами. Классическое домашнее блюдо с хрустящей корочкой.',
        cookTime: '1 час 30 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 420, unit: Unit.g},
            protein: {value: 35, unit: Unit.g},
            fat: {value: 25, unit: Unit.g},
            carbs: {value: 20, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Цыпленок целый', amount: 1500, unit: Unit.g},
            {name: 'Картофель молодой', amount: 1000, unit: Unit.g},
            {name: 'Чеснок', amount: 1, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Промойте и обсушите цыпленка. Натрите солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 2: Приготовление масляной смеси',
                text: 'Смешайте размягченное сливочное масло с измельченным чесноком, паприкой и рубленными травами.'
            },
            {
                title: 'Шаг 3: Подготовка картофеля',
                text: 'Очистите и разрежьте картофель на четвертинки. Нарежьте лук крупными кусками.'
            },
            {
                title: 'Шаг 4: Маринование цыпленка',
                text: 'Аккуратно отделите кожу от мяса и распределите масляную смесь под кожей.'
            },
            {
                title: 'Шаг 5: Подготовка лимона',
                text: 'Разрежьте лимон на четвертинки и поместите внутрь цыпленка вместе с веточками трав.'
            },
            {
                title: 'Шаг 6: Подготовка формы',
                text: 'Выложите картофель и лук в форму для запекания, сбрызните растительным маслом.'
            },
            {
                title: 'Шаг 7: Размещение цыпленка',
                text: 'Положите цыпленка на овощи грудкой вверх, свяжите ножки кулинарной нитью.'
            },
            {
                title: 'Шаг 8: Начальное запекание',
                text: 'Запекайте при 200°C 45 минут, периодически поливая выделяющимся соком.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Уменьшите температуру до 180°C и готовьте еще 30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность цыпленка - сок должен быть прозрачным при прокалывании.'
            },
            {
                title: 'Шаг 11: Отдых',
                text: 'Дайте цыпленку отдохнуть 10-15 минут перед нарезкой.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Разрежьте цыпленка на порции, подавайте с запеченным картофелем и соком из формы.'
            }
        ],
        categories: ['курица', 'русская кухня', 'запеченное', 'горячие блюда'],
        rating: 4.9,
        reviews: 245,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    147: {
        id: 147,
        name: 'file-kuritsy-s-ovoshchami-v-slivkah',
        title: 'Филе курицы с овощами в сливках',
        description: 'Нежное куриное филе с сезонными овощами в сливочном соусе. Легкое и питательное блюдо с богатым вкусом.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 345, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 20%', amount: 300, unit: Unit.ml},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Цукини', amount: 1, unit: Unit.pcs},
            {name: 'Брокколи', amount: 300, unit: Unit.g},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на кусочки среднего размера, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте морковь и цукини брусочками, брокколи разделите на соцветия, лук нарежьте полукольцами.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Разогрейте оливковое масло и обжарьте филе до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'В той же сковороде обжарьте лук до прозрачности, добавьте морковь и чеснок.'
            },
            {
                title: 'Шаг 5: Добавление овощей',
                text: 'Добавьте цукини и брокколи, готовьте 5 минут, помешивая.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Влейте бульон и сливки, добавьте сливочное масло и тимьян.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Верните курицу в сковороду, накройте крышкой и тушите 10-12 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность овощей - они должны быть мягкими, но не переваренными.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Доведите соус до желаемой консистенции, при необходимости уварив его.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав рубленой петрушкой. Можно подать с рисом или пастой.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'овощи', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    146: {
        id: 146,
        name: 'file-kuritsy-na-skovorode-s-chesnokom',
        title: 'Филе курицы на сковороде с чесноком',
        description: 'Сочное куриное филе, обжаренное на сковороде с ароматным чесноком и травами. Простое и вкусное блюдо для повседневного обеда или ужина.',
        cookTime: '30 минут',
        difficulty: '1/5',
        nutrition: {
            calories: {value: 265, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 3, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на медальоны толщиной 2 см. Слегка отбейте каждый кусочек.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите филе солью, перцем и соком половины лимона. Оставьте на 10 минут.'
            },
            {
                title: 'Шаг 3: Подготовка чеснока',
                text: 'Очистите и нарежьте чеснок тонкими пластинками.'
            },
            {
                title: 'Шаг 4: Подготовка трав',
                text: 'Снимите листья тимьяна и розмарина с веточек.'
            },
            {
                title: 'Шаг 5: Разогрев сковороды',
                text: 'Разогрейте оливковое масло в сковороде на среднем огне.'
            },
            {
                title: 'Шаг 6: Обжарка чеснока',
                text: 'Обжарьте чеснок до золотистого цвета, затем выньте из сковороды.'
            },
            {
                title: 'Шаг 7: Обжарка курицы',
                text: 'В той же сковороде обжарьте филе по 4-5 минут с каждой стороны.'
            },
            {
                title: 'Шаг 8: Добавление масла и трав',
                text: 'Добавьте сливочное масло, обжаренный чеснок и свежие травы.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 2-3 минуты, поливая филе образовавшимся соусом.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, полив соусом из сковороды и посыпав рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'европейская кухня', 'быстрые блюда', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    145: {
        id: 145,
        name: 'file-kuritsy-v-souse-teriyaki-s-risom',
        title: 'Филе курицы в соусе терияки с рисом',
        description: 'Нежное куриное филе в аутентичном японском соусе терияки, подается с рассыпчатым рисом. Идеальное сочетание сладости и умами.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 380, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 45, unit: Unit.g}
        },
        cuisine: 'Японская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соус терияки', amount: 200, unit: Unit.ml},
            {name: 'Рис японский', amount: 400, unit: Unit.g},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Кунжут белый', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
            {name: 'Мирин', amount: 2, unit: Unit.tbsp},
            {name: 'Сахар коричневый', amount: 1, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка риса',
                text: 'Промойте рис до прозрачной воды. Варите в соотношении 1:1.2 (рис:вода) 15-20 минут.'
            },
            {
                title: 'Шаг 2: Подготовка филе',
                text: 'Нарежьте куриное филе на тонкие полоски поперек волокон.'
            },
            {
                title: 'Шаг 3: Подготовка соуса',
                text: 'Смешайте соус терияки, мирин, соевый соус и коричневый сахар.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Натрите имбирь, измельчите чеснок, нарежьте зеленый лук.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Замаринуйте курицу в половине приготовленного соуса на 15 минут.'
            },
            {
                title: 'Шаг 6: Обжарка кунжута',
                text: 'Обжарьте кунжут на сухой сковороде до золотистого цвета.'
            },
            {
                title: 'Шаг 7: Обжарка курицы',
                text: 'Разогрейте масло в воке и обжарьте курицу порциями до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Приготовление соуса',
                text: 'Добавьте имбирь, чеснок и оставшийся соус. Готовьте 3-4 минуты до загустения.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Уменьшите огонь, добавьте половину зеленого лука и готовьте еще 2 минуты.'
            },
            {
                title: 'Шаг 10: Подготовка к подаче',
                text: 'Выложите рис в порционные тарелки, сверху разложите курицу с соусом.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Посыпьте блюдо обжаренным кунжутом и оставшимся зеленым луком.'
            }
        ],
        categories: ['курица', 'японская кухня', 'рис', 'горячие блюда'],
        rating: 4.8,
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
            japanese: {
                id: 'japanese',
                title: 'Японская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    144: {
        id: 144,
        name: 'file-kuritsy-v-souse-barbekyu',
        title: 'Филе курицы в соусе барбекю',
        description: 'Сочное куриное филе, приготовленное в пикантном соусе барбекю с добавлением меда и специй. Идеальное блюдо для любителей американской кухни.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соус барбекю', amount: 200, unit: Unit.ml},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Кориандр молотый', amount: 1, unit: Unit.tsp},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Зеленый лук', amount: 2, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на кусочки размером 3-4 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте соус барбекю, мед, измельченный чеснок, копченую паприку, кориандр и чили.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в приготовленном соусе на 15-20 минут.'
            },
            {
                title: 'Шаг 4: Подготовка лука',
                text: 'Нарежьте репчатый лук полукольцами, измельчите зеленый лук.'
            },
            {
                title: 'Шаг 5: Обжарка лука',
                text: 'Разогрейте масло в сковороде и обжарьте репчатый лук до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Добавьте маринованное филе к луку и обжаривайте на среднем огне 5-7 минут.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся маринад и готовьте еще 5-7 минут, периодически помешивая.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Уменьшите огонь и тушите под крышкой 5-7 минут до готовности курицы.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность филе - оно должно быть мягким и сочным внутри.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав рубленым зеленым луком. Отлично сочетается с картофелем фри или рисом.'
            }
        ],
        categories: ['курица', 'американская кухня', 'барбекю', 'горячие блюда'],
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
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    143: {
        id: 143,
        name: 'file-kuritsy-v-slivkah-s-paprikoy',
        title: 'Филе курицы в сливках с паприкой',
        description: 'Нежное куриное филе в сливочном соусе с паприкой и ароматными специями. Идеальное сочетание нежного мяса и пикантного соуса.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 305, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 20, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        cuisine: 'Венгерская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 20%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Бульон куриный', amount: 100, unit: Unit.ml},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Нарежьте куриное филе на медальоны толщиной 2-3 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Мелко нарежьте лук, измельчите чеснок. Подготовьте веточки тимьяна.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Разогрейте растительное масло и обжарьте филе до золотистой корочки по 3-4 минуты с каждой стороны.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности, добавьте чеснок и готовьте еще минуту.'
            },
            {
                title: 'Шаг 5: Добавление специй',
                text: 'Добавьте оба вида паприки, перемешайте и готовьте 30 секунд до раскрытия аромата.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Влейте бульон, добавьте сливочное масло и веточки тимьяна. Доведите до кипения.'
            },
            {
                title: 'Шаг 7: Добавление сливок',
                text: 'Влейте сливки, перемешайте и готовьте на медленном огне 2-3 минуты.'
            },
            {
                title: 'Шаг 8: Возвращение курицы',
                text: 'Верните филе в соус, добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте на медленном огне 5-7 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность филе - оно должно быть мягким и сочным внутри.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, посыпав рубленой петрушкой. Идеально сочетается с рисом или картофельным пюре.'
            }
        ],
        categories: ['курица', 'венгерская кухня', 'сливочный соус', 'горячие блюда'],
        rating: 4.9,
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
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    142: {
        id: 142,
        name: 'kurinye-nozhki-s-travami-i-chesnokom',
        title: 'Куриные ножки с травами и чесноком',
        description: 'Ароматные куриные ножки, запеченные с свежими травами и чесноком. Простое, но изысканное блюдо с насыщенным вкусом средиземноморских трав.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 290, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 4, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные ножки', amount: 8, unit: Unit.pcs},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 3, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Шалфей свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Соль морская', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Перец красный молотый', amount: 0.5, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка трав',
                text: 'Отделите листья трав от стеблей, крупно порубите. Часть оставьте для украшения.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока',
                text: 'Разделите головки чеснока на зубчики, не очищая. Слегка раздавите плоской стороной ножа.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте оливковое масло, измельченные травы, сок половины лимона, соль и оба вида перца.'
            },
            {
                title: 'Шаг 4: Подготовка курицы',
                text: 'Промойте и обсушите куриные ножки. Сделайте несколько надрезов на мясистой части.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Натрите ножки маринадом, уделяя внимание надрезам. Оставьте на 30 минут.'
            },
            {
                title: 'Шаг 6: Подготовка духовки',
                text: 'Разогрейте духовку до 190°C. Подготовьте форму для запекания.'
            },
            {
                title: 'Шаг 7: Выкладка в форму',
                text: 'Выложите ножки в форму, добавьте чеснок и оставшиеся веточки трав.'
            },
            {
                title: 'Шаг 8: Добавление вина',
                text: 'Влейте белое вино по стенке формы, не поливая курицу.'
            },
            {
                title: 'Шаг 9: Начальное запекание',
                text: 'Запекайте 30 минут при 190°C.'
            },
            {
                title: 'Шаг 10: Финальное запекание',
                text: 'Полейте ножки выделившимся соком и запекайте еще 20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите на блюдо, украсьте свежими травами и дольками лимона. Подавайте с запеченным чесноком.'
            }
        ],
        categories: ['курица', 'запеченное', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 192,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    141: {
        id: 141,
        name: 'kurinye-nozhki-s-kartoshkoy-i-lukom',
        title: 'Куриные ножки с картошкой и луком',
        description: 'Сытное домашнее блюдо из куриных ножек, запеченных с молодым картофелем и золотистым луком. Идеальный вариант для семейного обеда.',
        cookTime: '1 час 20 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 385, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 35, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные ножки', amount: 8, unit: Unit.pcs},
            {name: 'Картофель', amount: 1000, unit: Unit.g},
            {name: 'Лук репчатый', amount: 3, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 4, unit: Unit.tbsp},
            {name: 'Паприка', amount: 1, unit: Unit.tbsp},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Розмарин сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Промойте куриные ножки, обсушите бумажными полотенцами. Натрите солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Очистите и нарежьте картофель крупными дольками. Промойте и обсушите.'
            },
            {
                title: 'Шаг 3: Подготовка лука и чеснока',
                text: 'Нарежьте лук крупными четвертинками, чеснок измельчите.'
            },
            {
                title: 'Шаг 4: Маринование картофеля',
                text: 'Смешайте картофель с частью масла, солью, перцем и сушеными травами.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Смажьте форму для запекания маслом. Разогрейте духовку до 200°C.'
            },
            {
                title: 'Шаг 6: Выкладка овощей',
                text: 'Выложите картофель и лук в форму, перемешайте с измельченным чесноком.'
            },
            {
                title: 'Шаг 7: Размещение курицы',
                text: 'Уложите куриные ножки поверх овощей кожей вверх.'
            },
            {
                title: 'Шаг 8: Добавление жидкости',
                text: 'Влейте куриный бульон по стенке формы, не поливая курицу.'
            },
            {
                title: 'Шаг 9: Начальное запекание',
                text: 'Запекайте 40 минут при 200°C.'
            },
            {
                title: 'Шаг 10: Финальное запекание',
                text: 'Уменьшите температуру до 180°C и готовьте еще 20-25 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 11: Проверка готовности',
                text: 'Проверьте готовность картофеля и курицы - картофель должен легко протыкаться вилкой.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Посыпьте рубленой петрушкой и подавайте горячим прямо в форме для запекания.'
            }
        ],
        categories: ['курица', 'запеченное', 'русская кухня', 'горячие блюда'],
        rating: 4.9,
        reviews: 234,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    140: {
        id: 140,
        name: 'kurinye-nozhki-v-multivarke-s-limonom',
        title: 'Куриные ножки в мультиварке с лимоном',
        description: 'Нежные куриные ножки, приготовленные в мультиварке с лимоном и травами. Блюдо получается сочным и ароматным, с легкой цитрусовой ноткой.',
        cookTime: '1 час',
        difficulty: '1/5',
        nutrition: {
            calories: {value: 275, unit: Unit.g},
            protein: {value: 25, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные ножки', amount: 8, unit: Unit.pcs},
            {name: 'Лимон', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Белое сухое вино', amount: 100, unit: Unit.ml},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Промойте куриные ножки, обсушите бумажными полотенцами. Натрите солью и перцем.'
            },
            {
                title: 'Шаг 2: Подготовка лимона',
                text: 'Один лимон нарежьте тонкими кружочками, из второго выжмите сок.'
            },
            {
                title: 'Шаг 3: Подготовка маринада',
                text: 'Смешайте оливковое масло, лимонный сок, измельченный чеснок и мелко нарезанные травы.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте ножки маринадом, перемешайте и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка мультиварки',
                text: 'Нарежьте лук полукольцами и выложите на дно чаши мультиварки.'
            },
            {
                title: 'Шаг 6: Размещение курицы',
                text: 'Выложите маринованные ножки на лук, сверху положите кружочки лимона и веточки трав.'
            },
            {
                title: 'Шаг 7: Добавление жидкости',
                text: 'Влейте вино и куриный бульон по стенке чаши.'
            },
            {
                title: 'Шаг 8: Приготовление',
                text: 'Закройте крышку и установите режим "Тушение" на 45 минут.'
            },
            {
                title: 'Шаг 9: Обжарка',
                text: 'После окончания программы включите режим "Жарка" на 10 минут для подрумянивания.'
            },
            {
                title: 'Шаг 10: Выдержка',
                text: 'Оставьте в режиме "Подогрев" на 10 минут для равномерного распределения соков.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите ножки на блюдо, полейте соусом из мультиварки, украсьте свежей петрушкой и лимоном.'
            }
        ],
        categories: ['курица', 'мультиварка', 'европейская кухня', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    139: {
        id: 139,
        name: 'kurinye-nozhki-v-duhovke-po-domashnemu',
        title: 'Куриные ножки в духовке по-домашнему',
        description: 'Сочные куриные ножки, запеченные в духовке с ароматными специями и травами. Простое и вкусное домашнее блюдо с хрустящей корочкой.',
        cookTime: '1 час',
        difficulty: '1/5',
        nutrition: {
            calories: {value: 280, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные ножки', amount: 8, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Паприка', amount: 1, unit: Unit.tbsp},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Розмарин сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ножек',
                text: 'Промойте куриные ножки, обсушите бумажными полотенцами. Сделайте несколько надрезов на мясистой части.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте растительное масло, измельченный чеснок, дижонскую горчицу, паприку, тимьян и розмарин.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите ножки солью и перцем, затем маринадом. Оставьте на 30 минут при комнатной температуре.'
            },
            {
                title: 'Шаг 4: Подготовка духовки',
                text: 'Разогрейте духовку до 190°C. Подготовьте форму для запекания.'
            },
            {
                title: 'Шаг 5: Подготовка лука',
                text: 'Нарежьте лук крупными кольцами и выложите на дно формы.'
            },
            {
                title: 'Шаг 6: Размещение курицы',
                text: 'Выложите маринованные ножки на лук кожей вверх.'
            },
            {
                title: 'Шаг 7: Начальное запекание',
                text: 'Запекайте 30 минут при 190°C.'
            },
            {
                title: 'Шаг 8: Полив соком',
                text: 'Полейте ножки выделившимся соком и продолжайте запекать еще 20 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность - сок должен быть прозрачным, а корочка золотистой.'
            },
            {
                title: 'Шаг 10: Подготовка к подаче',
                text: 'Мелко нарежьте петрушку, нарежьте лимон дольками.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите ножки на блюдо, посыпьте петрушкой, украсьте дольками лимона и подавайте с запеченным луком.'
            }
        ],
        categories: ['курица', 'запеченное', 'русская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 245,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    138: {
        id: 138,
        name: 'kurinye-krylyshki-s-ostrym-sousom',
        title: 'Куриные крылышки с острым соусом',
        description: 'Острые и пикантные куриные крылышки в стиле баффало с домашним острым соусом. Подаются с соусом блю чиз для баланса вкуса.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 350, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 25, unit: Unit.g},
            carbs: {value: 10, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Соус табаско', amount: 60, unit: Unit.ml},
            {name: 'Масло сливочное', amount: 100, unit: Unit.g},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Соус ворчестер', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Кайенский перец', amount: 0.5, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Сельдерей', amount: 4, unit: Unit.pcs},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Соус блю чиз', amount: 200, unit: Unit.ml}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Промойте крылышки, обсушите бумажными полотенцами и разделите на фаланги.'
            },
            {
                title: 'Шаг 2: Приготовление соуса',
                text: 'Растопите сливочное масло, добавьте измельченный чеснок, соус табаско, ворчестер.'
            },
            {
                title: 'Шаг 3: Добавление специй',
                text: 'Добавьте в соус копченую паприку, кайенский перец, соль и черный перец.'
            },
            {
                title: 'Шаг 4: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Подготовьте противень с решеткой.'
            },
            {
                title: 'Шаг 5: Первичная обработка',
                text: 'Натрите крылышки солью и перцем, выложите на решетку.'
            },
            {
                title: 'Шаг 6: Запекание',
                text: 'Запекайте 20 минут, переверните и готовьте еще 15 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 7: Приготовление гарнира',
                text: 'Нарежьте сельдерей и морковь длинными палочками.'
            },
            {
                title: 'Шаг 8: Смешивание с соусом',
                text: 'Переложите готовые крылышки в большую миску, полейте горячим острым соусом и перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное оформление',
                text: 'Выложите крылышки на блюдо, добавьте палочки сельдерея и моркови.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими с соусом блю чиз и свежими овощами.'
            }
        ],
        categories: ['курица', 'острые блюда', 'американская кухня', 'закуски'],
        rating: 4.7,
        reviews: 188,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    137: {
        id: 137,
        name: 'kurinye-krylyshki-na-grile-s-medom',
        title: 'Куриные крылышки на гриле с медом',
        description: 'Сочные куриные крылышки, приготовленные на гриле с медово-горчичным соусом. Идеальное сочетание сладости и пикантности.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 330, unit: Unit.g},
            protein: {value: 25, unit: Unit.g},
            fat: {value: 21, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Мед', amount: 4, unit: Unit.tbsp},
            {name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp},
            {name: 'Соус барбекю', amount: 4, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Перец чили молотый', amount: 0.5, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Зеленый лук', amount: 2, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, дижонскую горчицу, соус барбекю, измельченный чеснок и оливковое масло.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте в маринад копченую паприку, молотый чили, соль и перец. Перемешайте.'
            },
            {
                title: 'Шаг 3: Подготовка крылышек',
                text: 'Промойте крылышки, обсушите и при необходимости разделите на фаланги.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте крылышки половиной маринада, перемешайте и оставьте на 1-2 часа.'
            },
            {
                title: 'Шаг 5: Подготовка гриля',
                text: 'Разогрейте гриль до средней температуры (около 180°C).'
            },
            {
                title: 'Шаг 6: Начальное приготовление',
                text: 'Выложите крылышки на гриль, готовьте 7-8 минут с каждой стороны.'
            },
            {
                title: 'Шаг 7: Глазирование',
                text: 'Смазывайте крылышки оставшимся маринадом каждые 5 минут.'
            },
            {
                title: 'Шаг 8: Завершающий этап',
                text: 'Готовьте до образования красивой карамелизированной корочки, около 5-7 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность - мясо должно легко отделяться от кости.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Выложите на блюдо, посыпьте нарезанным зеленым луком и подавайте горячими.'
            }
        ],
        categories: ['курица', 'гриль', 'американская кухня', 'закуски'],
        rating: 4.9,
        reviews: 203,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    136: {
        id: 136,
        name: 'kurinye-krylyshki-v-marinade-s-chesnokom',
        title: 'Куриные крылышки в маринаде с чесноком',
        description: 'Ароматные куриные крылышки, замаринованные в чесночном соусе и запеченные до хрустящей корочки. Отличная закуска для любого случая.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 315, unit: Unit.g},
            protein: {value: 24, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Соевый соус', amount: 50, unit: Unit.ml},
            {name: 'Оливковое масло', amount: 4, unit: Unit.tbsp},
            {name: 'Лимонный сок', amount: 2, unit: Unit.tbsp},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Измельчите чеснок, смешайте с соевым соусом, оливковым маслом, лимонным соком и медом.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте в маринад паприку, орегано, тимьян, соль и перец. Тщательно перемешайте.'
            },
            {
                title: 'Шаг 3: Подготовка крылышек',
                text: 'Промойте крылышки, обсушите бумажными полотенцами и разделите на фаланги при необходимости.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте крылышки маринадом, перемешайте и оставьте на 2-3 часа в холодильнике.'
            },
            {
                title: 'Шаг 5: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Застелите противень фольгой.'
            },
            {
                title: 'Шаг 6: Размещение крылышек',
                text: 'Выложите крылышки на противень в один слой, не выливая маринад.'
            },
            {
                title: 'Шаг 7: Начальное запекание',
                text: 'Запекайте 20 минут при 200°C.'
            },
            {
                title: 'Шаг 8: Смазывание маринадом',
                text: 'Достаньте крылышки, смажьте оставшимся маринадом и переверните.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Запекайте еще 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность - мясо должно легко отделяться от кости.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите на блюдо, посыпьте рубленой петрушкой и подавайте горячими.'
            }
        ],
        categories: ['курица', 'закуски', 'запеченное', 'русская кухня'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    135: {
        id: 135,
        name: 'kurinye-krylyshki-v-klyare-po-aziatski',
        title: 'Куриные крылышки в кляре по-азиатски',
        description: 'Хрустящие куриные крылышки в легком кляре с азиатскими специями, подаются с острым соусом. Идеальная закуска для вечеринки или просмотра фильма.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 340, unit: Unit.g},
            protein: {value: 23, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриные крылышки', amount: 1000, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 200, unit: Unit.g},
            {name: 'Крахмал кукурузный', amount: 100, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Соевый соус', amount: 50, unit: Unit.ml},
            {name: 'Имбирь молотый', amount: 1, unit: Unit.tsp},
            {name: 'Чеснок молотый', amount: 1, unit: Unit.tsp},
            {name: 'Перец красный молотый', amount: 1, unit: Unit.tsp},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Зеленый лук', amount: 2, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Промойте крылышки, обсушите бумажными полотенцами. При необходимости разделите на фаланги.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте соевый соус, молотый имбирь и чеснок. Замаринуйте крылышки на 30 минут.'
            },
            {
                title: 'Шаг 3: Приготовление кляра',
                text: 'Смешайте муку, крахмал, соль и красный перец. Взбейте яйца с небольшим количеством воды.'
            },
            {
                title: 'Шаг 4: Панировка',
                text: 'Обваляйте каждое крылышко в сухой смеси, окуните в яйцо, затем снова в сухую смесь.'
            },
            {
                title: 'Шаг 5: Подготовка масла',
                text: 'Нагрейте масло в глубокой сковороде или фритюрнице до 180°C.'
            },
            {
                title: 'Шаг 6: Жарка первой партии',
                text: 'Жарьте крылышки партиями по 5-6 штук 6-7 минут до золотистого цвета.'
            },
            {
                title: 'Шаг 7: Жарка второй стороны',
                text: 'Переверните крылышки и жарьте еще 5-6 минут до готовности.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Разрежьте самое толстое крылышко - мясо должно быть полностью готово, без следов крови.'
            },
            {
                title: 'Шаг 9: Подсушивание',
                text: 'Выложите готовые крылышки на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Финальное оформление',
                text: 'Посыпьте крылышки кунжутом и мелко нарезанным зеленым луком.'
            }
        ],
        categories: ['курица', 'закуски', 'жареное', 'азиатская кухня'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    134: {
        id: 134,
        name: 'kurinye-bedra-s-ovoschami-i-travami',
        title: 'Куриные бедра с овощами и травами',
        description: 'Сочные куриные бедра, запеченные с сезонными овощами и свежими травами. Полноценное блюдо с гарниром, которое готовится в одной форме.',
        cookTime: '1 час 10 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 310, unit: Unit.g},
            protein: {value: 25, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 22, unit: Unit.g}
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Картофель', amount: 600, unit: Unit.g},
            {name: 'Морковь', amount: 300, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Болгарский перец', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 3, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 3, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Оливковое масло', amount: 4, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка духовки',
                text: 'Разогрейте духовку до 190°C. Подготовьте большую форму для запекания.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте картофель и морковь крупными кусками, лук - четвертинками, перец - крупными полосками.'
            },
            {
                title: 'Шаг 3: Подготовка трав',
                text: 'Отделите листья розмарина и тимьяна от веточек. Измельчите базилик.'
            },
            {
                title: 'Шаг 4: Маринование курицы',
                text: 'Натрите куриные бедра солью, перцем и измельченными травами. Сбрызните лимонным соком.'
            },
            {
                title: 'Шаг 5: Подготовка чеснока',
                text: 'Разрежьте головки чеснока поперек, сохраняя целостность зубчиков.'
            },
            {
                title: 'Шаг 6: Выкладка овощей',
                text: 'Выложите подготовленные овощи в форму, добавьте половину трав, соль, перец и половину оливкового масла.'
            },
            {
                title: 'Шаг 7: Размещение курицы',
                text: 'Положите маринованные бедра поверх овощей кожей вверх. Добавьте разрезанный чеснок.'
            },
            {
                title: 'Шаг 8: Заправка',
                text: 'Полейте оставшимся оливковым маслом, посыпьте оставшимися травами.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте 45-50 минут до золотистой корочки на курице и мягкости овощей.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность курицы и овощей - картофель должен легко протыкаться вилкой.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом и дольками лимона. Полейте соком из формы.'
            }
        ],
        categories: ['курица', 'овощи', 'запеченное', 'горячие блюда'],
        rating: 4.8,
        reviews: 165,
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
        dietCategoriesList: {
            'healthy-food': {
                id: 'healthy-food',
                title: 'Здоровое питание'
            }
        }
    },
    133: {
        id: 133,
        name: 'kurinye-bedra-v-soevom-souse-s-chesnokom',
        title: 'Куриные бедра в соевом соусе с чесноком',
        description: 'Ароматные куриные бедра, маринованные в соевом соусе с чесноком и запеченные до золотистой корочки. Блюдо с азиатскими нотками и насыщенным вкусом.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 20, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Соевый соус', amount: 100, unit: Unit.ml},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
            {name: 'Соус хойсин', amount: 2, unit: Unit.tbsp},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Зеленый лук', amount: 3, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Приготовление маринада',
                text: 'Смешайте соевый соус, измельченный чеснок, натертый имбирь, мед, кунжутное масло и соус хойсин.'
            },
            {
                title: 'Шаг 2: Подготовка чили',
                text: 'Мелко нарежьте перец чили, удалив семена, если не хотите слишком острое блюдо.'
            },
            {
                title: 'Шаг 3: Маринование курицы',
                text: 'Поместите куриные бедра в маринад, добавьте чили, перемешайте и оставьте на 2-4 часа в холодильнике.'
            },
            {
                title: 'Шаг 4: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Подготовьте противень, застелив его фольгой.'
            },
            {
                title: 'Шаг 5: Размещение курицы',
                text: 'Выложите маринованные бедра на противень кожей вверх, не выливая маринад.'
            },
            {
                title: 'Шаг 6: Начальное запекание',
                text: 'Запекайте 20 минут при 200°C.'
            },
            {
                title: 'Шаг 7: Глазирование',
                text: 'Полейте бедра оставшимся маринадом и посыпьте кунжутом.'
            },
            {
                title: 'Шаг 8: Финальное запекание',
                text: 'Продолжайте запекать еще 15-20 минут до готовности и золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность - мясо должно легко отделяться от кости, а сок быть прозрачным.'
            },
            {
                title: 'Шаг 10: Подготовка к подаче',
                text: 'Мелко нарежьте зеленый лук для украшения.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите бедра на блюдо, полейте соусом из противня, посыпьте зеленым луком и оставшимся кунжутом.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'запеченное', 'горячие блюда'],
        rating: 4.9,
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
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    132: {
        id: 132,
        name: 'kurinye-bedra-v-multivarke-s-paprikoy',
        title: 'Куриные бедра в мультиварке с паприкой',
        description: 'Нежные и сочные куриные бедра, приготовленные в мультиварке с ароматной паприкой и специями. Блюдо получается невероятно мягким и буквально тает во рту.',
        cookTime: '1 час 15 минут',
        difficulty: '1/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        cuisine: 'Венгерская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка специй',
                text: 'Смешайте сладкую и копченую паприку, соль, перец и сушеный тимьян.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Промойте и обсушите куриные бедра. Натрите их приготовленной смесью специй.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка',
                text: 'Включите режим "Жарка" на мультиварке. Разогрейте масло и обжарьте бедра до золотистой корочки по 5 минут с каждой стороны.'
            },
            {
                title: 'Шаг 5: Подготовка соуса',
                text: 'Добавьте лук и чеснок, обжаривайте 3-4 минуты. Добавьте томатную пасту и готовьте еще 2 минуты.'
            },
            {
                title: 'Шаг 6: Добавление жидкости',
                text: 'Влейте куриный бульон, перемешайте все ингредиенты.'
            },
            {
                title: 'Шаг 7: Основное приготовление',
                text: 'Закройте крышку и установите режим "Тушение" на 45 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'По окончании программы проверьте готовность мяса - оно должно легко отделяться от кости.'
            },
            {
                title: 'Шаг 9: Выдержка',
                text: 'Оставьте блюдо в режиме "Подогрев" на 10 минут для равномерного распределения соков.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, полив соусом из мультиварки. Можно посыпать свежей зеленью.'
            }
        ],
        categories: ['курица', 'мультиварка', 'венгерская кухня', 'горячие блюда'],
        rating: 4.7,
        reviews: 142,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    131: {
        id: 131,
        name: 'kurinye-bedra-v-medovo-gorchichnom-souse',
        title: 'Куриные бедра в медово-горчичном соусе',
        description: 'Сочные куриные бедра, запеченные в ароматном медово-горчичном соусе. Идеальное сочетание сладости меда и пикантности горчицы создает неповторимый вкус.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 14, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1000 г
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Мед', amount: 4, unit: Unit.tbsp},
            {name: 'Горчица дижонская', amount: 3, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, горчицу, соевый соус, измельченный чеснок, сок половины лимона и оливковое масло.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Промойте и обсушите куриные бедра. Сделайте несколько надрезов на мясистой части.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите бедра солью, перцем и паприкой. Залейте маринадом и оставьте на 2-3 часа в холодильнике.'
            },
            {
                title: 'Шаг 4: Подготовка духовки',
                text: 'Разогрейте духовку до 180°C. Подготовьте форму для запекания.'
            },
            {
                title: 'Шаг 5: Подготовка трав',
                text: 'Выложите веточки розмарина и тимьяна на дно формы.'
            },
            {
                title: 'Шаг 6: Выкладка курицы',
                text: 'Выложите маринованные бедра на травы кожей вверх.'
            },
            {
                title: 'Шаг 7: Начальное запекание',
                text: 'Запекайте 30 минут, периодически поливая маринадом из формы.'
            },
            {
                title: 'Шаг 8: Приготовление глазури',
                text: 'Смешайте оставшийся мед с горчицей и соевым соусом.'
            },
            {
                title: 'Шаг 9: Глазирование',
                text: 'Смажьте бедра глазурью и запекайте еще 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность, проткнув самую толстую часть - сок должен быть прозрачным.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячими, полив соусом из формы и украсив свежими травами и дольками лимона.'
            }
        ],
        categories: ['курица', 'запеченное', 'медовый соус', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    101: {
        id: 101,
        name: 'zharenaya-kurica-v-duhovke-v-smetannom-souse',
        title: 'Жареная курица в духовке в сметанном соусе',
        description: 'Сочная курица, запеченная в духовке под нежным сметанным соусом с ароматными специями. Идеальное блюдо для семейного ужина.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1500 г
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Сметана 20%', amount: 300, unit: Unit.g},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tbsp},
            {name: 'Тимьян сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Розмарин сушеный', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Курицу тщательно промойте и обсушите бумажными полотенцами. Разрежьте на порционные куски.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'В миске смешайте 100г сметаны, измельченный чеснок (3 зубчика), соль, перец, паприку, тимьян и розмарин.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите куски курицы приготовленным маринадом со всех сторон. Оставьте мариноваться на 30 минут при комнатной температуре.'
            },
            {
                title: 'Шаг 4: Подготовка противня',
                text: 'Противень смажьте растительным маслом. Нарежьте лук кольцами и выложите на противень.'
            },
            {
                title: 'Шаг 5: Первичное запекание',
                text: 'Разогрейте духовку до 200°C. Выложите куски курицы на лук и запекайте 20 минут.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Смешайте оставшуюся сметану с измельченным чесноком (3 зубчика), солью и перцем.'
            },
            {
                title: 'Шаг 7: Полив соусом',
                text: 'Достаньте курицу, полейте приготовленным сметанным соусом.'
            },
            {
                title: 'Шаг 8: Основное запекание',
                text: 'Уменьшите температуру до 180°C и запекайте еще 30-35 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность курицы, проткнув самый толстый кусок - сок должен быть прозрачным.'
            },
            {
                title: 'Шаг 10: Отдых блюда',
                text: 'Дайте курице отдохнуть 10 минут перед подачей под фольгой.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей, полив образовавшимся соусом. Украсьте свежей зеленью по желанию.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'запеченное', 'основное блюдо', 'семейный ужин'],
        rating: 4.8,
        reviews: 124,
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
    102: {
        id: 102,
        name: 'zharenaya-kurica-v-duhovke-s-zelenyu',
        title: 'Жареная курица в духовке с зеленью',
        description: 'Ароматная запеченная курица с хрустящей корочкой, приправленная свежими травами и чесноком. Простое, но эффектное блюдо для любого случая.',
        cookTime: '1 час 30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 265, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 3, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1600 г
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Курицу тщательно промойте внутри и снаружи, обсушите бумажными полотенцами. Удалите лишний жир.'
            },
            {
                title: 'Шаг 2: Приготовление зеленой смеси',
                text: 'Измельчите все травы (петрушку, укроп, розмарин, тимьян) и чеснок. Смешайте с оливковым маслом, солью и перцем до однородной пасты.'
            },
            {
                title: 'Шаг 3: Подготовка лимона',
                text: 'Лимон помойте, наколите вилкой в нескольких местах. Это нужно для аромата при запекании.'
            },
            {
                title: 'Шаг 4: Натирание курицы',
                text: 'Аккуратно отделите кожу от мяса курицы, не повреждая её. Натрите смесью трав мясо под кожей и внутри курицы.'
            },
            {
                title: 'Шаг 5: Финальная подготовка',
                text: 'Положите лимон и несколько веточек свежих трав внутрь курицы. Свяжите ножки кулинарной нитью, крылышки заверните за спинку.'
            },
            {
                title: 'Шаг 6: Натирание кожи',
                text: 'Натрите кожу курицы оставшимся оливковым маслом, солью и перцем. Это обеспечит хрустящую корочку.'
            },
            {
                title: 'Шаг 7: Подготовка к запеканию',
                text: 'Разогрейте духовку до 200°C. Положите курицу грудкой вверх на решетку, под которой установлен противень для сбора жира.'
            },
            {
                title: 'Шаг 8: Начальное запекание',
                text: 'Запекайте курицу при 200°C первые 20 минут для образования корочки.'
            },
            {
                title: 'Шаг 9: Основное запекание',
                text: 'Уменьшите температуру до 180°C и продолжайте запекать 50-60 минут, периодически поливая курицу выделившимся соком.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность курицы, проткнув бедро - сок должен быть прозрачным. Внутренняя температура должна достигать 75°C.'
            },
            {
                title: 'Шаг 11: Отдых',
                text: 'Дайте курице отдохнуть 15 минут под фольгой перед нарезкой. Это позволит сокам равномерно распределиться.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Нарежьте курицу на порции, украсьте свежими травами и подавайте с запеченными овощами или картофелем.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'запеченное', 'основное блюдо', 'праздничное блюдо', 'семейный ужин'],
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    103: {
        id: 103,
        name: 'zharenaya-kurica-v-duhovke-s-ostrym-sousom',
        title: 'Жареная курица в духовке с острым соусом',
        description: 'Сочная запеченная курица с пикантным острым соусом. Идеальное сочетание нежного мяса и острых специй создает неповторимый вкус.',
        cookTime: '1 час 20 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 19, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1700 г
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Чеснок', amount: 8, unit: Unit.pcs},
            {name: 'Перец чили свежий', amount: 2, unit: Unit.pcs},
            {name: 'Паприка острая', amount: 1, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Перец черный молотый', amount: 1, unit: Unit.tsp},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
            {name: 'Мед', amount: 1, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Курицу тщательно промойте, обсушите бумажными полотенцами. Разрежьте на порционные куски.'
            },
            {
                title: 'Шаг 2: Приготовление острого маринада',
                text: 'Измельчите чеснок и перец чили. Смешайте с оливковым маслом, обеими видами паприки, черным перцем и солью.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'В отдельной миске смешайте томатную пасту, мед, соевый соус и 2 столовые ложки маринада.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите куски курицы маринадом, уделяя особое внимание местам под кожей. Оставьте мариноваться на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка к запеканию',
                text: 'Разогрейте духовку до 200°C. Выложите куски курицы на противень, застеленный фольгой.'
            },
            {
                title: 'Шаг 6: Первичное запекание',
                text: 'Запекайте курицу 20 минут при 200°C для образования корочки.'
            },
            {
                title: 'Шаг 7: Первое смазывание соусом',
                text: 'Достаньте курицу и смажьте приготовленным острым соусом. Уменьшите температуру до 180°C.'
            },
            {
                title: 'Шаг 8: Продолжение запекания',
                text: 'Запекайте еще 20 минут, затем снова смажьте соусом.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Продолжайте запекать 15-20 минут до полной готовности и образования глянцевой корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность курицы, проткнув самый толстый кусок - сок должен быть прозрачным.'
            },
            {
                title: 'Шаг 11: Отдых',
                text: 'Дайте курице отдохнуть 10 минут под фольгой перед подачей.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Подавайте горячей, полив оставшимся соусом. При желании украсьте свежей зеленью и дольками лимона.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'острые блюда', 'запеченное', 'основное блюдо'],
        rating: 4.7,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    104: {
        id: 104,
        name: 'zharenaya-kurica-v-klyare-s-hrustyaschey-korochkoy',
        title: 'Жареная курица в кляре с хрустящей корочкой',
        description: 'Нежные кусочки куриного филе в воздушном кляре с идеально хрустящей корочкой. Популярное блюдо, которое понравится и взрослым, и детям.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 25, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 20, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Мука пшеничная', amount: 200, unit: Unit.g},
            {name: 'Молоко', amount: 200, unit: Unit.ml},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Чеснок сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Разрыхлитель', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка куриного филе',
                text: 'Куриное филе промойте, обсушите и нарежьте на порционные кусочки толщиной около 1.5 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление сухой смеси',
                text: 'В миске смешайте муку, соль, перец, паприку, сушеный чеснок и разрыхлитель.'
            },
            {
                title: 'Шаг 3: Приготовление жидкой основы',
                text: 'В отдельной миске взбейте яйца с молоком до однородности.'
            },
            {
                title: 'Шаг 4: Приготовление кляра',
                text: 'Постепенно влейте яично-молочную смесь в сухие ингредиенты, тщательно перемешивая венчиком до получения однородного теста без комочков.'
            },
            {
                title: 'Шаг 5: Выдержка кляра',
                text: 'Дайте кляру постоять 10-15 минут при комнатной температуре для лучшего результата.'
            },
            {
                title: 'Шаг 6: Подготовка к жарке',
                text: 'Налейте растительное масло в глубокую сковороду или сотейник. Слой масла должен быть не менее 2 см.'
            },
            {
                title: 'Шаг 7: Разогрев масла',
                text: 'Разогрейте масло до 170-180°C. Проверьте готовность, опустив деревянную палочку - вокруг неё должны активно подниматься пузырьки.'
            },
            {
                title: 'Шаг 8: Обмакивание в кляр',
                text: 'Каждый кусочек курицы обмакните в кляр, давая излишкам стечь.'
            },
            {
                title: 'Шаг 9: Жарка',
                text: 'Аккуратно опустите куски курицы в горячее масло. Жарьте партиями, не перегружая сковороду, по 4-5 минут с каждой стороны до золотистого цвета.'
            },
            {
                title: 'Шаг 10: Удаление лишнего масла',
                text: 'Готовые кусочки выложите на бумажные полотенца, чтобы убрать излишки масла.'
            },
            {
                title: 'Шаг 11: Поддержание температуры',
                text: 'Готовую курицу можно держать в разогретой до 100°C духовке, пока жарится следующая партия.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Подавайте горячей с любимым соусом, свежими овощами или картофельным пюре. Украсьте зеленью и дольками лимона.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'жареные блюда', 'основное блюдо', 'кляр'],
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {}
    },
    105: {
        id: 105,
        name: 'zharenaya-kurica-v-multivarke-v-smetannom-souse',
        title: 'Жареная курица в мультиварке в сметанном соусе',
        description: 'Нежная курица, приготовленная в мультиварке под сливочно-сметанным соусом. Простой рецепт для занятых хозяек, не требующий постоянного внимания.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 275, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1300 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 800, unit: Unit.g},
            {name: 'Сметана 20%', amount: 250, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 3, unit: Unit.tbsp},
            {name: 'Мука пшеничная', amount: 1, unit: Unit.tbsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Зелень (укроп, петрушка)', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе промойте, обсушите и нарежьте на порционные кусочки размером 3-4 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Лук нарежьте полукольцами, чеснок измельчите. Зелень мелко порубите.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'В чашу мультиварки налейте растительное масло, включите режим "Жарка". Когда масло разогреется, выложите курицу и обжаривайте 7-8 минут до золотистой корочки, периодически помешивая.'
            },
            {
                title: 'Шаг 4: Обжарка лука',
                text: 'Добавьте к курице лук и обжаривайте еще 5 минут, помешивая.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте измельченный чеснок, обжаривайте 1-2 минуты до появления аромата.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'В отдельной миске смешайте сметану с мукой до однородности. Постепенно влейте куриный бульон, постоянно помешивая.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте сметанный соус в чашу мультиварки, перемешайте. Добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 8: Основное приготовление',
                text: 'Закройте крышку мультиварки и установите режим "Тушение" на 30 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'После сигнала откройте крышку, перемешайте и готовьте еще 5-7 минут в режиме "Жарка" для загустения соуса.'
            },
            {
                title: 'Шаг 10: Добавление зелени',
                text: 'Добавьте рубленую зелень, перемешайте и дайте постоять 5 минут с закрытой крышкой.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей с любым гарниром, полив сметанным соусом. Украсьте свежей зеленью.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'в мультиварке', 'основное блюдо', 'сметанный соус'],
        rating: 4.7,
        reviews: 143,
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
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    106: {
        id: 106,
        name: 'zharenaya-kurica-v-multivarke-s-zelenyu',
        title: 'Жареная курица в мультиварке с зеленью',
        description: 'Ароматная курица с пряными травами, приготовленная в мультиварке. Простой рецепт с насыщенным вкусом свежей зелени.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 245, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 3, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1100 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 800, unit: Unit.g},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Чеснок', amount: 5, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка зелени',
                text: 'Тщательно промойте и обсушите все травы. Мелко нарежьте укроп, петрушку и базилик.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока и лука',
                text: 'Чеснок измельчите, лук нарежьте мелкими кубиками.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'В миске смешайте оливковое масло, измельченный чеснок, половину нарезанной зелени, сок половины лимона, соль и перец.'
            },
            {
                title: 'Шаг 4: Подготовка курицы',
                text: 'Куриное филе промойте, обсушите и нарежьте на порционные кусочки. Натрите приготовленным маринадом и оставьте на 15-20 минут.'
            },
            {
                title: 'Шаг 5: Подготовка мультиварки',
                text: 'В чашу мультиварки налейте оливковое масло и включите режим "Жарка".'
            },
            {
                title: 'Шаг 6: Обжарка лука',
                text: 'Когда масло разогреется, выложите нарезанный лук и обжаривайте 3-4 минуты до прозрачности.'
            },
            {
                title: 'Шаг 7: Обжарка курицы',
                text: 'Добавьте маринованные кусочки курицы и обжаривайте 7-8 минут, периодически помешивая, до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Основное приготовление',
                text: 'Закройте крышку мультиварки и установите режим "Тушение" на 20 минут.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'После сигнала откройте крышку, добавьте оставшуюся свежую зелень и сок второй половины лимона.'
            },
            {
                title: 'Шаг 10: Финальное приготовление',
                text: 'Перемешайте и оставьте в режиме "Подогрев" на 5 минут, чтобы ароматы раскрылись.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей, украсив свежими веточками зелени и дольками лимона. Идеально сочетается с отварным рисом или картофельным пюре.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'в мультиварке', 'основное блюдо', 'с зеленью'],
        rating: 4.6,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    107: {
        id: 107,
        name: 'zharenaya-kurica-v-panirovke-v-syrnoy-korochke',
        title: 'Жареная курица в панировке в сырной корочке',
        description: 'Сочное куриное филе в хрустящей сырной панировке. Идеальное сочетание нежного мяса и ароматной корочки с расплавленным сыром.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 350, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1000 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сыр твердый', amount: 200, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Мука пшеничная', amount: 100, unit: Unit.g},
            {name: 'Сухари панировочные', amount: 100, unit: Unit.g},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка куриного филе',
                text: 'Куриное филе промойте, обсушите и разрежьте вдоль на тонкие пласты толщиной около 1 см. Слегка отбейте через пищевую пленку.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите филе солью, перцем и измельченным чесноком. Оставьте на 15-20 минут.'
            },
            {
                title: 'Шаг 3: Подготовка сырной панировки',
                text: 'Сыр натрите на мелкой терке. Смешайте с панировочными сухарями и паприкой.'
            },
            {
                title: 'Шаг 4: Подготовка панировочной станции',
                text: 'Подготовьте три тарелки: в первой - мука, во второй - взбитые яйца, в третьей - сырно-сухарная смесь.'
            },
            {
                title: 'Шаг 5: Панировка курицы',
                text: 'Каждый кусок филе обваляйте сначала в муке, затем окуните в яйцо и тщательно обваляйте в сырной панировке, слегка прижимая.'
            },
            {
                title: 'Шаг 6: Подготовка к жарке',
                text: 'Разогрейте сковороду с растительным маслом на среднем огне. Масло должно хорошо прогреться, но не дымиться.'
            },
            {
                title: 'Шаг 7: Первая сторона',
                text: 'Выложите запанированные куски курицы и жарьте на среднем огне 4-5 минут до золотисто-коричневого цвета.'
            },
            {
                title: 'Шаг 8: Вторая сторона',
                text: 'Аккуратно переверните и жарьте еще 3-4 минуты до готовности. Сырная корочка должна стать хрустящей.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность, сделав надрез в самом толстом месте - мясо должно быть полностью белым, без розовых участков.'
            },
            {
                title: 'Шаг 10: Удаление лишнего масла',
                text: 'Выложите готовые куски на бумажные полотенца, чтобы убрать излишки масла.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей с любимым гарниром и свежими овощами. Можно дополнить соусом на основе сметаны или йогурта.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'жареные блюда', 'основное блюдо', 'сырные блюда'],
        rating: 4.8,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {}
    },
    108: {
        id: 108,
        name: 'zharenaya-kurica-v-panirovke-s-soevym-sousom',
        title: 'Жареная курица в панировке с соевым соусом',
        description: 'Хрустящие кусочки курицы в азиатском стиле с ароматным соевым соусом. Идеальное сочетание хрустящей панировки и пикантного маринада.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 310, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1100 г
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
            {name: 'Крахмал кукурузный', amount: 100, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 100, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 20, unit: Unit.g},
            {name: 'Масло растительное', amount: 300, unit: Unit.ml},
            {name: 'Кунжут', amount: 2, unit: Unit.tbsp},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте 2 столовые ложки соевого соуса, измельченный чеснок и натертый имбирь.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Куриное филе нарежьте на кусочки размером 3-4 см. Замаринуйте в приготовленном соусе на 20-30 минут.'
            },
            {
                title: 'Шаг 3: Приготовление панировки',
                text: 'Смешайте муку и крахмал в одной миске. В другой миске взбейте яйца.'
            },
            {
                title: 'Шаг 4: Подготовка кунжута',
                text: 'Кунжут слегка обжарьте на сухой сковороде до золотистого цвета и легкого аромата.'
            },
            {
                title: 'Шаг 5: Панировка курицы',
                text: 'Каждый кусочек маринованной курицы обваляйте в мучной смеси, затем окуните в яйцо и снова в мучную смесь.'
            },
            {
                title: 'Шаг 6: Подготовка к жарке',
                text: 'В глубокой сковороде или воке разогрейте растительное масло до 170-180°C.'
            },
            {
                title: 'Шаг 7: Жарка',
                text: 'Обжаривайте курицу партиями по 4-5 минут до золотисто-коричневого цвета, периодически переворачивая.'
            },
            {
                title: 'Шаг 8: Удаление лишнего масла',
                text: 'Готовые кусочки выкладывайте на бумажные полотенца для удаления излишков масла.'
            },
            {
                title: 'Шаг 9: Приготовление соуса',
                text: 'Смешайте оставшийся соевый соус с небольшим количеством воды и прогрейте.'
            },
            {
                title: 'Шаг 10: Финальное оформление',
                text: 'Выложите курицу на блюдо, полейте горячим соевым соусом и посыпьте обжаренным кунжутом.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей с отварным рисом или овощами. При желании дополните свежей зеленью и острым соусом.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'китайская кухня', 'жареные блюда', 'основное блюдо', 'азиатская кухня'],
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
            chinese: {
                id: 'chinese',
                title: 'Китайская кухня'
            }
        },
        dietCategoriesList: {}
    },
    109: {
        id: 109,
        name: 'zharenaya-kurica-v-folge-s-zelenyu',
        title: 'Жареная курица в фольге с зеленью',
        description: 'Сочная курица, запеченная в фольге с ароматными травами. Простой способ приготовления, сохраняющий все соки и ароматы.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 255, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 4, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1400 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Курица целая', amount: 1200, unit: Unit.g},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Курицу тщательно промойте внутри и снаружи, обсушите бумажными полотенцами. Разрежьте на порционные куски.'
            },
            {
                title: 'Шаг 2: Подготовка зелени',
                text: 'Все травы тщательно промойте и мелко нарежьте. Чеснок измельчите.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте оливковое масло, измельченные травы, чеснок, сок половины лимона, соль и перец.'
            },
            {
                title: 'Шаг 4: Маринование курицы',
                text: 'Натрите куски курицы приготовленным маринадом, уделяя особое внимание местам под кожей. Оставьте на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка фольги',
                text: 'Подготовьте листы фольги размером примерно 30х40 см для каждой порции. Сделайте двойной слой.'
            },
            {
                title: 'Шаг 6: Формирование конвертов',
                text: 'На каждый лист фольги выложите порцию курицы, добавьте немного свежих трав и дольку лимона.'
            },
            {
                title: 'Шаг 7: Запечатывание',
                text: 'Тщательно заверните фольгу, формируя герметичные конверты. Края должны быть хорошо запечатаны.'
            },
            {
                title: 'Шаг 8: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Поставьте противень на средний уровень.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Выложите конверты на противень и запекайте 35-40 минут.'
            },
            {
                title: 'Шаг 10: Раскрытие конвертов',
                text: 'Аккуратно откройте конверты (осторожно, горячий пар!) и запекайте еще 10 минут для образования корочки.'
            },
            {
                title: 'Шаг 11: Проверка готовности',
                text: 'Проверьте готовность курицы, проткнув самый толстый кусок - сок должен быть прозрачным.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Подавайте горячей, полив выделившимся соком и украсив свежей зеленью. Дополните дольками лимона.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'запеченное', 'основное блюдо', 'в фольге'],
        rating: 4.7,
        reviews: 134,
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
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    110: {
        id: 110,
        name: 'zharenaya-kurica-na-grile-v-kislo-sladkom-souse',
        title: 'Жареная курица на гриле в кисло-сладком соусе',
        description: 'Сочные куски курицы, приготовленные на гриле и покрытые ароматным кисло-сладким соусом. Идеальное блюдо для летнего барбекю.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 290, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 16, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 800, unit: Unit.g},
            {name: 'Ананасовый сок', amount: 200, unit: Unit.ml},
            {name: 'Соевый соус', amount: 4, unit: Unit.tbsp},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Кетчуп', amount: 4, unit: Unit.tbsp},
            {name: 'Уксус рисовый', amount: 2, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp},
            {name: 'Перец красный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Соль', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте ананасовый сок, 2 столовые ложки соевого соуса, 1 столовую ложку меда, измельченный чеснок и натертый имбирь.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Куриное филе нарежьте на крупные куски. Замаринуйте в приготовленном маринаде на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'В сотейнике смешайте кетчуп, оставшийся соевый соус и мед, рисовый уксус, кунжутное масло. Доведите до кипения и уварите до загустения.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры. Решетку смажьте маслом.'
            },
            {
                title: 'Шаг 5: Начальное обжаривание',
                text: 'Выложите куски курицы на гриль. Жарьте 5-6 минут с каждой стороны до появления красивой решетки.'
            },
            {
                title: 'Шаг 6: Первое смазывание',
                text: 'Смажьте курицу приготовленным соусом и продолжайте готовить 3-4 минуты.'
            },
            {
                title: 'Шаг 7: Переворачивание',
                text: 'Переверните куски, снова смажьте соусом и готовьте еще 3-4 минуты.'
            },
            {
                title: 'Шаг 8: Финальное смазывание',
                text: 'Повторно смажьте курицу соусом с обеих сторон и готовьте по 1-2 минуты с каждой стороны до карамелизации.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность курицы, сделав надрез в самом толстом куске - мясо должно быть полностью прожарено.'
            },
            {
                title: 'Шаг 10: Отдых',
                text: 'Снимите курицу с гриля и дайте отдохнуть 5-7 минут под фольгой.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей, полив оставшимся соусом. Украсьте зеленым луком и кунжутом. Идеально сочетается с гриль-овощами или рисом.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'китайская кухня', 'гриль', 'основное блюдо', 'барбекю'],
        rating: 4.9,
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
            chinese: {
                id: 'chinese',
                title: 'Китайская кухня'
            }
        },
        dietCategoriesList: {}
    },
    111: {
        id: 111,
        name: 'kurica-v-duhovke-v-apelsinovom-souse',
        title: 'Курица в духовке в апельсиновом соусе',
        description: 'Сочная запеченная курица в ароматном апельсиновом соусе с медом и специями. Идеальное сочетание цитрусовых нот и нежного мяса.',
        cookTime: '1 час 30 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 275, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1800 г
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Апельсины', amount: 3, unit: Unit.pcs},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 3, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Выжмите сок из двух апельсинов, добавьте мед, соевый соус, измельченный чеснок и натертый имбирь. Тщательно перемешайте.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Курицу промойте, обсушите бумажными полотенцами. Натрите солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Полейте курицу половиной маринада, втирая его под кожу. Оставьте мариноваться на 1 час при комнатной температуре.'
            },
            {
                title: 'Шаг 4: Подготовка апельсинов',
                text: 'Оставшийся апельсин нарежьте тонкими кружочками. Часть веточек розмарина оставьте целыми, остальные измельчите.'
            },
            {
                title: 'Шаг 5: Подготовка к запеканию',
                text: 'Разогрейте духовку до 180°C. Смажьте противень оливковым маслом.'
            },
            {
                title: 'Шаг 6: Формирование блюда',
                text: 'Уложите курицу на противень, обложите кружочками апельсина и веточками розмарина. Полейте оливковым маслом.'
            },
            {
                title: 'Шаг 7: Начальное запекание',
                text: 'Запекайте курицу 30 минут, периодически поливая выделяющимся соком и оставшимся маринадом.'
            },
            {
                title: 'Шаг 8: Основное запекание',
                text: 'Уменьшите температуру до 160°C и запекайте еще 40-50 минут, продолжая поливать соком каждые 15-20 минут.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'За 10 минут до готовности увеличьте температуру до 200°C для образования румяной корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность курицы, проткнув бедро - сок должен быть прозрачным.'
            },
            {
                title: 'Шаг 11: Отдых',
                text: 'Дайте курице отдохнуть 15 минут под фольгой перед нарезкой.'
            },
            {
                title: 'Шаг 12: Подача',
                text: 'Нарежьте курицу на порции, полейте образовавшимся соусом. Подавайте с запеченными апельсинами и свежим розмарином.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'русская кухня', 'запеченное', 'основное блюдо', 'праздничное блюдо'],
        rating: 4.8,
        reviews: 142,
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
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    112: {
        id: 112,
        name: 'kurica-v-klyare-s-ostrym-sousom',
        title: 'Курица в кляре с острым соусом',
        description: 'Хрустящие кусочки курицы в воздушном кляре, подаются с пикантным острым соусом. Идеальная закуска для любителей острых блюд.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 18, unit: Unit.g},
            carbs: {value: 16, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 200, unit: Unit.g},
            {name: 'Крахмал кукурузный', amount: 50, unit: Unit.g},
            {name: 'Яйцо', amount: 2, unit: Unit.pcs},
            {name: 'Молоко', amount: 200, unit: Unit.ml},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            // Для острого соуса
            {name: 'Соус чили', amount: 4, unit: Unit.tbsp},
            {name: 'Соус соевый', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 20, unit: Unit.g},
            {name: 'Мед', amount: 1, unit: Unit.tbsp},
            {name: 'Кунжут', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе нарежьте небольшими кусочками размером 3-4 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление кляра',
                text: 'В миске смешайте муку, крахмал и щепотку соли. В отдельной посуде взбейте яйца с молоком. Постепенно влейте яичную смесь в сухие ингредиенты, тщательно перемешивая до однородности.'
            },
            {
                title: 'Шаг 3: Выдержка кляра',
                text: 'Оставьте кляр на 15-20 минут для набухания муки. Консистенция должна быть как у жидкой сметаны.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Измельчите чеснок и имбирь. Смешайте соус чили, соевый соус, мед, измельченные чеснок и имбирь. Прогрейте смесь 1-2 минуты на слабом огне.'
            },
            {
                title: 'Шаг 5: Разогрев масла',
                text: 'В глубокой сковороде или фритюрнице разогрейте масло до 180°C. Проверьте готовность масла, капнув немного кляра - он должен всплывать с пузырьками.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Каждый кусочек курицы обмакните в кляр и аккуратно опустите в горячее масло. Жарьте небольшими партиями, не перегружая сковороду.'
            },
            {
                title: 'Шаг 7: Контроль готовности',
                text: 'Жарьте до золотистого цвета около 4-5 минут, периодически переворачивая для равномерного обжаривания.'
            },
            {
                title: 'Шаг 8: Удаление лишнего масла',
                text: 'Готовые кусочки выкладывайте на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 9: Финальная обработка соуса',
                text: 'Прогрейте соус еще раз и добавьте кунжут. При желании можно добавить больше остроты.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Выложите курицу на блюдо, полейте острым соусом и посыпьте оставшимся кунжутом. Подавайте немедленно, пока курица горячая и хрустящая.'
            }
        ],
        categories: ['курица', 'закуски', 'китайская кухня', 'жареное', 'острое'],
        rating: 4.7,
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
    113: {
        id: 113,
        name: 'kurica-v-multivarke-po-kitayski',
        title: 'Курица в мультиварке по-китайски',
        description: 'Нежные кусочки курицы, приготовленные в мультиварке с овощами в китайском стиле. Сочетание традиционных азиатских специй и соусов создает неповторимый вкус.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 14, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1400 г
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Морковь', amount: 2, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Перец болгарский', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Соус соевый', amount: 4, unit: Unit.tbsp},
            {name: 'Соус устричный', amount: 2, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Кунжут', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе нарежьте кубиками размером 2-3 см. Замаринуйте в смеси 2 ст.л. соевого соуса и черного перца на 20 минут.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Морковь нарежьте брусочками, лук полукольцами, болгарский перец соломкой. Чеснок и имбирь мелко нарубите.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте оставшийся соевый соус, устричный соус, кунжутное масло. Крахмал разведите в 2 ст.л. холодной воды.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'В чашу мультиварки налейте растительное масло, включите режим "Жарка". Обжарьте курицу до золотистой корочки 7-8 минут.'
            },
            {
                title: 'Шаг 5: Обжарка овощей',
                text: 'Добавьте к курице лук, морковь и болгарский перец. Обжаривайте все вместе 5 минут, помешивая.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте чеснок и имбирь, обжаривайте еще 1-2 минуты до появления аромата.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте приготовленный соус, перемешайте. Готовьте еще 2-3 минуты до загустения соуса.'
            },
            {
                title: 'Шаг 8: Основное приготовление',
                text: 'Переключите мультиварку в режим "Тушение", готовьте 15 минут под крышкой.'
            },
            {
                title: 'Шаг 9: Финальный этап',
                text: 'Добавьте разведенный крахмал, перемешайте и готовьте еще 3-4 минуты до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте готовое блюдо кунжутом. Подавайте горячим с отварным рисом или лапшой.'
            }
        ],
        categories: ['курица', 'китайская кухня', 'в мультиварке', 'горячие блюда', 'азиатская кухня'],
        rating: 4.6,
        reviews: 87,
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
        dietCategoriesList: {
            'low-calorie': {
                id: 'low-calorie',
                title: 'Низкокалорийная диета'
            }
        }
    },
    114: {
        id: 114,
        name: 'kurica-v-panirovke-po-domashnemu',
        title: 'Курица в панировке по-домашнему',
        description: 'Сочные куриные отбивные в хрустящей домашней панировке. Классическое блюдо русской кухни, которое любят и взрослые, и дети.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 13, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1000 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Яйцо', amount: 2, unit: Unit.pcs},
            {name: 'Мука пшеничная', amount: 100, unit: Unit.g},
            {name: 'Сухари панировочные', amount: 150, unit: Unit.g},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Зелень (укроп, петрушка)', amount: 1, unit: Unit.bunch}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Куриное филе разрежьте вдоль на 2 части, слегка отбейте через пищевую пленку. Посолите и поперчите с обеих сторон.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока',
                text: 'Чеснок очистите и измельчите. Смешайте с небольшим количеством соли до образования пасты.'
            },
            {
                title: 'Шаг 3: Натирание мяса',
                text: 'Натрите каждый кусок филе чесночной пастой. Оставьте на 10-15 минут для маринования.'
            },
            {
                title: 'Шаг 4: Подготовка панировки',
                text: 'Приготовьте три тарелки: в первой - мука, во второй - взбитые яйца, в третьей - панировочные сухари.'
            },
            {
                title: 'Шаг 5: Измельчение зелени',
                text: 'Мелко нарубите зелень и добавьте её в панировочные сухари, перемешайте.'
            },
            {
                title: 'Шаг 6: Панировка',
                text: 'Каждый кусок филе обваляйте сначала в муке, затем окуните в яйцо и обваляйте в сухарях с зеленью. Слегка прижмите панировку руками.'
            },
            {
                title: 'Шаг 7: Подготовка сковороды',
                text: 'Разогрейте сковороду с растительным маслом на среднем огне. Масло должно хорошо прогреться.'
            },
            {
                title: 'Шаг 8: Жарка',
                text: 'Обжаривайте отбивные по 4-5 минут с каждой стороны до золотистой корочки. Не накрывайте крышкой.'
            },
            {
                title: 'Шаг 9: Доведение до готовности',
                text: 'После образования корочки уменьшите огонь и жарьте еще 2-3 минуты с каждой стороны до полной готовности.'
            },
            {
                title: 'Шаг 10: Удаление лишнего масла',
                text: 'Готовые отбивные выложите на бумажные полотенца, чтобы убрать излишки масла.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячими с картофельным пюре или свежими овощами. При желании украсьте свежей зеленью.'
            }
        ],
        categories: ['курица', 'русская кухня', 'горячие блюда', 'домашняя кухня', 'отбивные'],
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
    115: {
        id: 115,
        name: 'kurica-v-slivkah-s-gribami',
        title: 'Курица в сливках с грибами',
        description: 'Нежное куриное филе в сливочно-грибном соусе. Изысканное блюдо с богатым вкусом, которое отлично подойдет как для семейного ужина, так и для праздничного стола.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 315, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 22, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1300 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Грибы шампиньоны', amount: 400, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Мука пшеничная', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе нарежьте средними кусочками, посолите и поперчите. Оставьте на 10 минут.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Грибы очистите и нарежьте пластинками. Лук нарежьте полукольцами, чеснок измельчите.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'В глубокой сковороде разогрейте растительное масло. Обжарьте курицу до золотистой корочки 5-7 минут. Переложите на тарелку.'
            },
            {
                title: 'Шаг 4: Приготовление грибов',
                text: 'В той же сковороде растопите сливочное масло. Обжарьте лук до прозрачности, добавьте грибы и жарьте до испарения жидкости.'
            },
            {
                title: 'Шаг 5: Добавление специй',
                text: 'Добавьте к грибам чеснок и листики тимьяна. Обжаривайте 1-2 минуты до появления аромата.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Посыпьте грибы мукой, перемешайте. Влейте сливки, помешивая. Доведите до кипения.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Верните курицу в сковороду, перемешайте с соусом. Посолите и поперчите по вкусу.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Накройте крышкой и тушите на медленном огне 15-20 минут до готовности курицы и загустения соуса.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте курицу на готовность, при необходимости посолите. Соус должен быть густым и однородным.'
            },
            {
                title: 'Шаг 10: Финальный штрих',
                text: 'Дайте блюду постоять 5 минут под крышкой, чтобы соус немного загустел.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежим тимьяном. Идеально сочетается с картофельным пюре, пастой или рисом.'
            }
        ],
        categories: ['курица', 'грибы', 'сливочный соус', 'горячие блюда', 'русская кухня'],
        rating: 4.9,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {}
    },
    116: {
        id: 116,
        name: 'kurica-v-slivkah-s-travami',
        title: 'Курица в сливках с травами',
        description: 'Нежное куриное филе в ароматном сливочном соусе с букетом свежих трав. Изысканное блюдо с тонким вкусом и неповторимым ароматом.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 305, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 21, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 30, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 1, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 1, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Мука пшеничная', amount: 1, unit: Unit.tbsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе нарежьте средними кусочками, посолите и поперчите. Оставьте мариноваться на 15 минут.'
            },
            {
                title: 'Шаг 2: Подготовка трав',
                text: 'Все травы тщательно промойте и обсушите. Листья отделите от стеблей, крупно нарежьте. Чеснок измельчите.'
            },
            {
                title: 'Шаг 3: Подготовка лука',
                text: 'Лук нарежьте мелкими кубиками. Стебли трав (кроме базилика) свяжите в пучок для букета гарни.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'В глубокой сковороде разогрейте оливковое масло. Обжарьте курицу до золотистой корочки 5-7 минут. Переложите на тарелку.'
            },
            {
                title: 'Шаг 5: Приготовление основы соуса',
                text: 'В той же сковороде растопите сливочное масло, обжарьте лук до прозрачности. Добавьте чеснок и букет гарни.'
            },
            {
                title: 'Шаг 6: Добавление муки',
                text: 'Всыпьте муку, обжаривайте 1-2 минуты, постоянно помешивая, чтобы не образовались комочки.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Влейте сливки тонкой струйкой, постоянно помешивая. Доведите до кипения, уменьшите огонь.'
            },
            {
                title: 'Шаг 8: Соединение ингредиентов',
                text: 'Верните курицу в сковороду, добавьте половину нарезанных трав. Перемешайте.'
            },
            {
                title: 'Шаг 9: Тушение',
                text: 'Тушите под крышкой на медленном огне 10-12 минут до готовности курицы и загустения соуса.'
            },
            {
                title: 'Шаг 10: Финальные штрихи',
                text: 'Извлеките букет гарни. Добавьте оставшиеся свежие травы, перемешайте. Дайте постоять 2-3 минуты.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежими травами. Идеально сочетается с отварным рисом или пастой.'
            }
        ],
        categories: ['курица', 'сливочный соус', 'травы', 'горячие блюда', 'русская кухня'],
        rating: 4.8,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    117: {
        id: 117,
        name: 'kurica-v-souse-teriyaki-s-kunzhutom',
        title: 'Курица в соусе терияки с кунжутом',
        description: 'Сочное куриное филе в глянцевом соусе терияки, посыпанное обжаренным кунжутом. Классическое блюдо азиатской кухни с идеальным балансом сладкого и соленого.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 290, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 16, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1000 г
        cuisine: 'Японская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Соус терияки', amount: 100, unit: Unit.ml},
            {name: 'Соус соевый', amount: 50, unit: Unit.ml},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Кунжут', amount: 3, unit: Unit.tbsp},
            {name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соус терияки, соевый соус и мед. Имбирь и чеснок очистите и натрите на мелкой терке, добавьте в маринад.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Куриное филе нарежьте на средние кусочки. Залейте половиной маринада и оставьте на 20 минут.'
            },
            {
                title: 'Шаг 3: Обжарка кунжута',
                text: 'На сухой сковороде обжарьте кунжут до золотистого цвета и появления аромата. Отложите.'
            },
            {
                title: 'Шаг 4: Подготовка зеленого лука',
                text: 'Зеленый лук нарежьте тонкими колечками, разделив белую и зеленую части.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'В вок или глубокой сковороде разогрейте растительное и кунжутное масло. Обжарьте курицу порциями до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление белой части лука',
                text: 'Добавьте белую часть зеленого лука, обжаривайте еще 1-2 минуты.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся маринад, перемешайте. Готовьте на сильном огне, пока соус не загустеет и не станет глянцевым.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Уменьшите огонь, готовьте еще 3-4 минуты, периодически помешивая, чтобы соус равномерно покрыл курицу.'
            },
            {
                title: 'Шаг 9: Добавление кунжута',
                text: 'Всыпьте половину обжаренного кунжута, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Выложите курицу на блюдо, посыпьте оставшимся кунжутом и зеленой частью лука. Подавайте с отварным рисом.'
            }
        ],
        categories: ['курица', 'японская кухня', 'азиатская кухня', 'горячие блюда', 'терияки'],
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
    118: {
        id: 118,
        name: 'kurica-v-tomatah-s-chesnokom',
        title: 'Курица в томатах с чесноком',
        description: 'Сочная курица, тушенная в ароматном томатном соусе с чесноком и травами. Простое и вкусное блюдо, которое наполнит ваш дом аппетитными ароматами.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 265, unit: Unit.g},
            protein: {value: 27, unit: Unit.g},
            fat: {value: 13, unit: Unit.g},
            carbs: {value: 11, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1500 г
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Помидоры в собственном соку', amount: 800, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Томатная паста', amount: 2, unit: Unit.tbsp},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Сахар', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Куриное филе нарежьте крупными кусками, посолите и поперчите. Оставьте мариноваться на 15 минут.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Лук нарежьте полукольцами. Чеснок измельчите. Помидоры в собственном соку измельчите блендером или разомните вилкой.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'В глубокой сковороде разогрейте оливковое масло. Обжарьте курицу до золотистой корочки со всех сторон. Переложите на тарелку.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'В той же сковороде обжарьте лук до прозрачности. Добавьте половину чеснока, обжаривайте еще минуту.'
            },
            {
                title: 'Шаг 5: Добавление томатов',
                text: 'Добавьте томатную пасту, обжарьте 1-2 минуты. Влейте вино, дайте алкоголю выпариться. Добавьте измельченные помидоры.'
            },
            {
                title: 'Шаг 6: Специи и травы',
                text: 'Добавьте орегано, половину тимьяна, соль, перец и сахар. Перемешайте и доведите до кипения.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Верните курицу в сковороду, уменьшите огонь до минимума. Тушите под крышкой 30 минут, периодически помешивая.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте курицу на готовность и консистенцию соуса. При необходимости тушите еще 5-10 минут.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте оставшийся чеснок и тимьян, нарезанный базилик. Перемешайте и тушите еще 2-3 минуты.'
            },
            {
                title: 'Шаг 10: Отдых блюда',
                text: 'Выключите огонь и дайте блюду постоять под крышкой 5-10 минут для развития вкуса.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом. Идеально сочетается с пастой, полентой или свежим багетом.'
            }
        ],
        categories: ['курица', 'итальянская кухня', 'томатный соус', 'горячие блюда', 'тушеные блюда'],
        rating: 4.7,
        reviews: 134,
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
        dietCategoriesList: {
            'low-calorie': {
                id: 'low-calorie',
                title: 'Низкокалорийная диета'
            }
        }
    },
    119: {
        id: 119,
        name: 'kurica-v-folge-s-travami',
        title: 'Курица в фольге с травами',
        description: 'Нежная курица, запеченная в фольге с ароматными травами и чесноком. Сочное и полезное блюдо, приготовленное без лишнего жира.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 245, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1100 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Чеснок', amount: 5, unit: Unit.pcs},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка духовки',
                text: 'Разогрейте духовку до 180°C. Подготовьте большие листы фольги для каждой порции курицы.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Куриное филе промойте и обсушите бумажными полотенцами. Слегка отбейте через пищевую пленку.'
            },
            {
                title: 'Шаг 3: Приготовление маринада',
                text: 'Смешайте оливковое масло, измельченный чеснок, сок половины лимона, соль, перец и паприку.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите курицу приготовленным маринадом со всех сторон. Оставьте на 15-20 минут.'
            },
            {
                title: 'Шаг 5: Подготовка трав',
                text: 'Промойте и обсушите все травы. Крупно нарежьте базилик, оставьте несколько веточек розмарина и тимьяна целыми.'
            },
            {
                title: 'Шаг 6: Подготовка лимона',
                text: 'Оставшуюся половину лимона нарежьте тонкими кружочками.'
            },
            {
                title: 'Шаг 7: Формирование конвертов',
                text: 'На каждый лист фольги выложите куриное филе, сверху положите веточки трав и кружочки лимона.'
            },
            {
                title: 'Шаг 8: Запечатывание',
                text: 'Тщательно заверните фольгу, формируя герметичные конверты. Края должны быть хорошо запечатаны.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Выложите конверты на противень и запекайте в разогретой духовке 35-40 минут.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Аккуратно откройте один конверт и проверьте готовность курицы. При необходимости запекайте еще 5-10 минут.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте курицу прямо в фольге, украсив свежими травами. Полейте выделившимся соком.'
            }
        ],
        categories: ['курица', 'запеченное', 'диетическое', 'травы', 'здоровое питание'],
        rating: 4.6,
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-calorie': {
                id: 'low-calorie',
                title: 'Низкокалорийная диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    120: {
        id: 120,
        name: 'kurica-v-yogurtovom-marinade-s-zelenyu',
        title: 'Курица в йогуртовом маринаде с зеленью',
        description: 'Нежная курица, маринованная в йогурте со свежей зеленью и специями. Блюдо получается невероятно сочным благодаря йогуртовому маринаду.',
        cookTime: '1 час 30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 255, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 7, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            {name: 'Куриное филе', amount: 600, unit: Unit.g},
            {name: 'Йогурт натуральный', amount: 300, unit: Unit.g},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Лимон', amount: 1, unit: Unit.pcs},
            {name: 'Укроп свежий', amount: 1, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Кинза свежая', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Кориандр молотый', amount: 1, unit: Unit.tsp},
            {name: 'Куркума', amount: 0.5, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'В миске смешайте йогурт, измельченный чеснок, сок половины лимона, паприку, кориандр и куркуму.'
            },
            {
                title: 'Шаг 2: Подготовка зелени',
                text: 'Мелко нарежьте все виды зелени. Добавьте половину в маринад, остальное оставьте для подачи.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Куриное филе нарежьте крупными кусками, посолите и поперчите.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Добавьте курицу в маринад, хорошо перемешайте. Накройте пленкой и оставьте в холодильнике на 1 час.'
            },
            {
                title: 'Шаг 5: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Застелите противень пергаментом.'
            },
            {
                title: 'Шаг 6: Подготовка к запеканию',
                text: 'Достаньте курицу из маринада, слегка обсушите бумажным полотенцем. Сбрызните оливковым маслом.'
            },
            {
                title: 'Шаг 7: Запекание',
                text: 'Выложите курицу на противень. Запекайте 20-25 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Переворачивание',
                text: 'Переверните кусочки курицы и запекайте еще 10-15 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность самого толстого куска - при прокалывании должен выделяться прозрачный сок.'
            },
            {
                title: 'Шаг 10: Отдых',
                text: 'Дайте курице отдохнуть 5-10 минут после запекания.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите курицу на блюдо, посыпьте оставшейся свежей зеленью. Подавайте с дольками лимона и свежими овощами.'
            }
        ],
        categories: ['курица', 'йогурт', 'запеченное', 'здоровое питание', 'средиземноморская кухня'],
        rating: 4.7,
        reviews: 143,
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
        dietCategoriesList: {
            'low-calorie': {
                id: 'low-calorie',
                title: 'Низкокалорийная диета'
            },
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    121: {
        id: 121,
        name: 'kurica-gril-po-meksikanski',
        title: 'Курица-гриль по-мексикански',
        description: 'Острая и ароматная курица на гриле в мексиканском стиле с характерными специями и соусом. Идеальное блюдо для любителей пикантной кухни.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 8, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1300 г
        cuisine: 'Мексиканская',
        servings: 4,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Лайм', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Перец чили свежий', amount: 2, unit: Unit.pcs},
            {name: 'Кинза свежая', amount: 1, unit: Unit.bunch},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 2, unit: Unit.tsp},
            {name: 'Кумин (зира)', amount: 1, unit: Unit.tsp},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Чили молотый', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Выжмите сок из лаймов. Измельчите чеснок и перец чили. Смешайте с оливковым маслом и всеми специями.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Разрежьте курицу вдоль грудки, раскройте и расплющите. Сделайте глубокие надрезы на мясе.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите курицу маринадом, особенно тщательно в местах надрезов. Оставьте мариноваться на 30 минут при комнатной температуре.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры. Решетку смажьте маслом.'
            },
            {
                title: 'Шаг 5: Начальное обжаривание',
                text: 'Выложите курицу на гриль кожей вниз. Готовьте 10-12 минут до появления характерных полосок.'
            },
            {
                title: 'Шаг 6: Переворачивание',
                text: 'Переверните курицу, уменьшите огонь до среднего. Продолжайте готовить 15-20 минут.'
            },
            {
                title: 'Шаг 7: Проверка готовности',
                text: 'Проверьте готовность термометром - температура в самой толстой части должна достигать 75°C.'
            },
            {
                title: 'Шаг 8: Завершающее обжаривание',
                text: 'Смажьте курицу оставшимся маринадом и готовьте еще 5 минут с каждой стороны.'
            },
            {
                title: 'Шаг 9: Отдых',
                text: 'Снимите курицу с гриля, накройте фольгой и дайте отдохнуть 10 минут.'
            },
            {
                title: 'Шаг 10: Нарезка',
                text: 'Нарежьте курицу порционными кусками поперек волокон.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячей, украсив свежей кинзой и дольками лайма. Можно подать с гуакамоле или сальсой.'
            }
        ],
        categories: ['курица', 'гриль', 'мексиканская кухня', 'острые блюда', 'основные блюда'],
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
            mexican: {
                id: 'mexican',
                title: 'Мексиканская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    122: {
        id: 122,
        name: 'kurica-gril-s-sousom-barbekyu',
        title: 'Курица-гриль с соусом барбекю',
        description: 'Сочная курица на гриле, покрытая карамелизированным соусом барбекю. Классическое блюдо американской кухни с идеальным сочетанием сладких и копченых нот.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 17, unit: Unit.g},
            carbs: {value: 12, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1400 г
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            {name: 'Курица целая', amount: 1500, unit: Unit.g},
            {name: 'Соус барбекю', amount: 200, unit: Unit.ml},
            {name: 'Чеснок', amount: 5, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 3, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tbsp},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp},
            {name: 'Мед', amount: 1, unit: Unit.tbsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте половину соуса барбекю с измельченным чесноком, горчицей, медом и оливковым маслом.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Разрежьте курицу вдоль грудки, раскройте. Натрите солью, перцем и копченой паприкой.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Обмажьте курицу приготовленным маринадом, уделяя особое внимание местам под кожей. Оставьте на 1 час.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средней температуры. Смажьте решетку маслом.'
            },
            {
                title: 'Шаг 5: Подготовка трав',
                text: 'Свяжите веточки тимьяна и розмарина в пучок для бастинга (смазывания курицы во время готовки).'
            },
            {
                title: 'Шаг 6: Начальное обжаривание',
                text: 'Выложите курицу на гриль кожей вниз. Готовьте 12-15 минут до появления румяной корочки.'
            },
            {
                title: 'Шаг 7: Первое переворачивание',
                text: 'Переверните курицу, смажьте оставшимся маринадом. Готовьте еще 15-20 минут.'
            },
            {
                title: 'Шаг 8: Глазирование',
                text: 'Начните смазывать курицу оставшимся соусом барбекю каждые 5 минут, используя пучок трав.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте температуру в самой толстой части бедра - она должна достигать 75°C.'
            },
            {
                title: 'Шаг 10: Финальное глазирование',
                text: 'Смажьте курицу последний раз соусом и готовьте еще 2-3 минуты до карамелизации.'
            },
            {
                title: 'Шаг 11: Отдых и подача',
                text: 'Дайте курице отдохнуть 10 минут под фольгой. Нарежьте порционно и подавайте с оставшимся соусом барбекю.'
            }
        ],
        categories: ['курица', 'гриль', 'американская кухня', 'барбекю', 'основные блюда'],
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
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    123: {
        id: 123,
        name: 'kurinaya-grudka-v-duhovke-s-syrom',
        title: 'Куриная грудка в духовке с сыром',
        description: 'Сочная куриная грудка, запеченная в духовке под сырной корочкой. Простое и вкусное блюдо, которое понравится всей семье.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 285, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 15, unit: Unit.g},
            carbs: {value: 3, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~900 г
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Сыр твердый', amount: 200, unit: Unit.g},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Майонез', amount: 100, unit: Unit.g},
            {name: 'Сметана', amount: 100, unit: Unit.g},
            {name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Базилик сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Орегано сушеный', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка духовки',
                text: 'Разогрейте духовку до 180°C. Подготовьте форму для запекания, смажьте её оливковым маслом.'
            },
            {
                title: 'Шаг 2: Подготовка куриной грудки',
                text: 'Разрежьте каждую грудку вдоль на 2-3 тонких пласта. Отбейте через пищевую пленку.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите грудки солью, перцем и измельченным чесноком. Оставьте на 15 минут.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте майонез, сметану, горчицу, базилик и орегано до однородной массы.'
            },
            {
                title: 'Шаг 5: Подготовка сыра',
                text: 'Натрите сыр на крупной терке. Разделите на две части.'
            },
            {
                title: 'Шаг 6: Первый слой',
                text: 'Выложите куриные грудки в форму для запекания, смажьте половиной соуса.'
            },
            {
                title: 'Шаг 7: Первое запекание',
                text: 'Поместите форму в разогретую духовку на 15 минут.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Достаньте форму, смажьте оставшимся соусом и посыпьте половиной тертого сыра.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Верните в духовку еще на 10-15 минут до расплавления сыра и появления золотистой корочки.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность мяса - при прокалывании должен выделяться прозрачный сок.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Дайте блюду остыть 5 минут, посыпьте оставшимся сыром и подавайте с овощами или гарниром.'
            }
        ],
        categories: ['курица', 'запеченное', 'сыр', 'горячие блюда', 'европейская кухня'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    124: {
        id: 124,
        name: 'kurinaya-grudka-v-slivochnom-souse',
        title: 'Куриная грудка в сливочном соусе',
        description: 'Нежная куриная грудка в густом сливочном соусе. Изысканное блюдо с богатым сливочным вкусом, которое отлично подойдет для семейного ужина.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 310, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 20, unit: Unit.g},
            carbs: {value: 6, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1100 г
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Сливки 33%', amount: 300, unit: Unit.ml},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Мука пшеничная', amount: 1, unit: Unit.tbsp},
            {name: 'Бульон куриный', amount: 200, unit: Unit.ml},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste},
            {name: 'Мускатный орех молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка куриной грудки',
                text: 'Нарежьте куриную грудку на медальоны толщиной 1.5-2 см. Посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Мелко нарежьте лук, измельчите чеснок. Листья тимьяна снимите со стеблей.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Разогрейте оливковое масло в сковороде. Обжарьте куриные медальоны до золотистой корочки по 3-4 минуты с каждой стороны.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде растопите сливочное масло, обжарьте лук до прозрачности. Добавьте чеснок и тимьян.'
            },
            {
                title: 'Шаг 5: Создание соуса',
                text: 'Добавьте муку, обжарьте 1-2 минуты. Влейте бульон, помешивая, чтобы не было комочков.'
            },
            {
                title: 'Шаг 6: Добавление сливок',
                text: 'Влейте сливки, добавьте щепотку мускатного ореха. Доведите до кипения, уменьшите огонь.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Верните курицу в соус. Тушите на медленном огне 7-10 минут до загустения соуса.'
            },
            {
                title: 'Шаг 8: Проверка вкуса',
                text: 'Проверьте соус на соль и перец, при необходимости добавьте специи.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте мелко нарезанную петрушку, перемешайте и готовьте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Проверьте готовность курицы - мясо должно быть мягким, а соус густым и однородным.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежей зеленью. Идеально сочетается с пастой, рисом или картофельным пюре.'
            }
        ],
        categories: ['курица', 'сливочный соус', 'горячие блюда', 'европейская кухня'],
        rating: 4.8,
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    125: {
        id: 125,
        name: 'kurinaya-grudka-v-panirovke-s-chesnokom',
        title: 'Куриная грудка в панировке с чесноком',
        description: 'Хрустящая куриная грудка в ароматной чесночной панировке. Идеальное сочетание хрустящей корочки и сочного мяса внутри.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 290, unit: Unit.g},
            protein: {value: 31, unit: Unit.g},
            fat: {value: 14, unit: Unit.g},
            carbs: {value: 15, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~800 г
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Сухари панировочные', amount: 150, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 100, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 100, unit: Unit.ml},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Чесночный порошок', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка куриной грудки',
                text: 'Разрежьте каждую грудку вдоль на 2-3 тонких пласта. Отбейте через пищевую пленку до толщины 1 см.'
            },
            {
                title: 'Шаг 2: Приготовление чесночной смеси',
                text: 'Измельчите свежий чеснок и петрушку. Смешайте с солью и перцем.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите куриные грудки чесночной смесью. Оставьте на 15 минут.'
            },
            {
                title: 'Шаг 4: Подготовка панировки',
                text: 'Смешайте панировочные сухари с паприкой и чесночным порошком. Подготовьте отдельные тарелки с мукой, взбитыми яйцами и панировкой.'
            },
            {
                title: 'Шаг 5: Панировка',
                text: 'Обваляйте каждый кусок сначала в муке, затем в яйце, и наконец в панировочной смеси.'
            },
            {
                title: 'Шаг 6: Подготовка сковороды',
                text: 'Разогрейте растительное масло в глубокой сковороде до средне-высокой температуры.'
            },
            {
                title: 'Шаг 7: Жарка',
                text: 'Обжаривайте грудки по 4-5 минут с каждой стороны до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Разрежьте самый толстый кусок - мясо должно быть полностью белым внутри.'
            },
            {
                title: 'Шаг 9: Удаление лишнего масла',
                text: 'Выложите готовые грудки на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Финальное приготовление',
                text: 'При необходимости можно поместить грудки в разогретую до 180°C духовку на 5 минут для равномерного прогрева.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячими, украсив свежей петрушкой. Отлично сочетается с картофельным пюре или свежими овощами.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'панировка', 'чеснок', 'горячие блюда'],
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
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    126: {
        id: 126,
        name: 'kurinaya-grudka-na-grile-s-ananasami',
        title: 'Куриная грудка на гриле с ананасами',
        description: 'Сочная куриная грудка на гриле с карамелизированными ананасами. Экзотическое сочетание нежного мяса и сладких тропических фруктов.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 265, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 10, unit: Unit.g},
            carbs: {value: 22, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~950 г
        cuisine: 'Гавайская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Ананас свежий', amount: 400, unit: Unit.g},
            {name: 'Соевый соус', amount: 60, unit: Unit.ml},
            {name: 'Мед', amount: 2, unit: Unit.tbsp},
            {name: 'Имбирь свежий', amount: 30, unit: Unit.g},
            {name: 'Чеснок', amount: 3, unit: Unit.pcs},
            {name: 'Лайм', amount: 1, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 2, unit: Unit.tbsp},
            {name: 'Кунжут', amount: 1, unit: Unit.tbsp},
            {name: 'Перец чили', amount: 1, unit: Unit.pcs},
            {name: 'Лук зеленый', amount: 2, unit: Unit.bunch},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соевый соус, мед, тертый имбирь, измельченный чеснок и сок половины лайма.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Разрежьте грудки вдоль на две части, слегка отбейте. Замаринуйте в приготовленном маринаде на 30 минут.'
            },
            {
                title: 'Шаг 3: Подготовка ананаса',
                text: 'Очистите ананас, нарежьте кольцами толщиной 1 см. Удалите жесткую сердцевину.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры. Смажьте решетку маслом.'
            },
            {
                title: 'Шаг 5: Приготовление курицы',
                text: 'Обжарьте куриные грудки на гриле по 5-6 минут с каждой стороны, периодически смазывая маринадом.'
            },
            {
                title: 'Шаг 6: Приготовление ананасов',
                text: 'Выложите кольца ананаса на гриль, готовьте по 2-3 минуты с каждой стороны до появления характерных полосок.'
            },
            {
                title: 'Шаг 7: Глазирование',
                text: 'Смажьте ананасы медом, посыпьте мелко нарезанным чили (по желанию).'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность курицы - мясо должно быть белым внутри, а ананасы - карамелизированными.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Посыпьте курицу и ананасы кунжутом, дайте постоять 2-3 минуты.'
            },
            {
                title: 'Шаг 10: Подготовка к подаче',
                text: 'Нарежьте зеленый лук по диагонали для украшения.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Выложите куриную грудку на тарелку, сверху положите кольца ананаса. Украсьте зеленым луком и оставшимися дольками лайма.'
            }
        ],
        categories: ['курица', 'гриль', 'фрукты', 'гавайская кухня', 'горячие блюда'],
        rating: 4.7,
        reviews: 134,
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
            hawaiian: {
                id: 'hawaiian',
                title: 'Гавайская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    127: {
        id: 127,
        name: 'kurinaya-grudka-s-kartoshkoy-v-folge',
        title: 'Куриная грудка с картошкой в фольге',
        description: 'Сочная куриная грудка, запеченная в фольге вместе с молодым картофелем и ароматными травами. Простое и вкусное блюдо, которое готовится без лишних хлопот.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 320, unit: Unit.g},
            protein: {value: 28, unit: Unit.g},
            fat: {value: 12, unit: Unit.g},
            carbs: {value: 32, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1200 г
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Картофель молодой', amount: 600, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло сливочное', amount: 50, unit: Unit.g},
            {name: 'Тимьян свежий', amount: 2, unit: Unit.bunch},
            {name: 'Розмарин свежий', amount: 2, unit: Unit.bunch},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp},
            {name: 'Сметана', amount: 100, unit: Unit.g},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Подготовьте большие листы фольги.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Вымойте и разрежьте картофель на четвертинки. Если картофель крупный, нарежьте мельче.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Разрежьте грудки вдоль на две части. Смажьте горчицей, посолите и поперчите.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, измельчите чеснок. Снимите листья с веточек тимьяна и розмарина.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Смешайте сметану с паприкой, измельченными травами, солью и перцем.'
            },
            {
                title: 'Шаг 6: Сборка пакетов',
                text: 'На каждый лист фольги выложите картофель, сверху куриную грудку, лук и чеснок.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Полейте каждую порцию сметанным соусом, добавьте кусочек сливочного масла.'
            },
            {
                title: 'Шаг 8: Закрытие пакетов',
                text: 'Тщательно заверните фольгу, формируя герметичные пакеты. Оставьте немного пространства для пара.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Поместите пакеты на противень и запекайте 40-45 минут.'
            },
            {
                title: 'Шаг 10: Проверка готовности',
                text: 'Аккуратно откройте один пакет и проверьте готовность картофеля и курицы.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте прямо в фольге, украсив свежей зеленью. Открывайте пакеты осторожно, берегитесь горячего пара.'
            }
        ],
        categories: ['курица', 'картофель', 'запеченное', 'русская кухня', 'горячие блюда'],
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
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    128: {
        id: 128,
        name: 'kurinaya-grudka-s-paprikoy-i-syrom',
        title: 'Куриная грудка с паприкой и сыром',
        description: 'Сочная куриная грудка, запеченная с ароматной паприкой под сырной корочкой. Идеальное сочетание нежного мяса, пряных специй и расплавленного сыра.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: {value: 295, unit: Unit.g},
            protein: {value: 32, unit: Unit.g},
            fat: {value: 16, unit: Unit.g},
            carbs: {value: 4, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~850 г
        cuisine: 'Венгерская',
        servings: 4,
        ingredients: [
            {name: 'Куриная грудка', amount: 600, unit: Unit.g},
            {name: 'Сыр твердый', amount: 200, unit: Unit.g},
            {name: 'Паприка копченая', amount: 2, unit: Unit.tbsp},
            {name: 'Паприка сладкая', amount: 1, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Лук репчатый', amount: 1, unit: Unit.pcs},
            {name: 'Сметана', amount: 100, unit: Unit.g},
            {name: 'Масло оливковое', amount: 2, unit: Unit.tbsp},
            {name: 'Петрушка свежая', amount: 1, unit: Unit.bunch},
            {name: 'Тмин молотый', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка духовки',
                text: 'Разогрейте духовку до 180°C. Подготовьте форму для запекания.'
            },
            {
                title: 'Шаг 2: Приготовление специй',
                text: 'Смешайте копченую и сладкую паприку, тмин, соль и перец в небольшой миске.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Разрежьте грудки вдоль на две части. Слегка отбейте через пищевую пленку.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите куриные грудки смесью специй, оставьте на 15 минут.'
            },
            {
                title: 'Шаг 5: Подготовка соуса',
                text: 'Смешайте сметану с измельченным чесноком и мелко нарезанной петрушкой.'
            },
            {
                title: 'Шаг 6: Подготовка лука',
                text: 'Нарежьте лук тонкими полукольцами и обжарьте на оливковом масле до золотистого цвета.'
            },
            {
                title: 'Шаг 7: Сборка блюда',
                text: 'Выложите курицу в форму для запекания, сверху распределите обжаренный лук.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Смажьте каждую грудку сметанно-чесночным соусом.'
            },
            {
                title: 'Шаг 9: Первое запекание',
                text: 'Запекайте в духовке 20 минут.'
            },
            {
                title: 'Шаг 10: Добавление сыра',
                text: 'Натрите сыр на крупной терке и посыпьте курицу. Запекайте еще 10 минут до расплавления сыра.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой. По желанию можно сбрызнуть оливковым маслом.'
            }
        ],
        categories: ['курица', 'запеченное', 'сыр', 'венгерская кухня', 'горячие блюда'],
        rating: 4.7,
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
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    129: {
        id: 129,
        name: 'kurinye-bedra-v-duhovke-po-gruzinski',
        title: 'Куриные бедра в духовке по-грузински',
        description: 'Сочные куриные бедра, запеченные в духовке с традиционными грузинскими специями и травами. Ароматное блюдо с характерным кавказским колоритом.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 340, unit: Unit.g},
            protein: {value: 29, unit: Unit.g},
            fat: {value: 24, unit: Unit.g},
            carbs: {value: 5, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1300 г
        cuisine: 'Грузинская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра', amount: 800, unit: Unit.g},
            {name: 'Лук репчатый', amount: 2, unit: Unit.pcs},
            {name: 'Чеснок', amount: 6, unit: Unit.pcs},
            {name: 'Масло оливковое', amount: 4, unit: Unit.tbsp},
            {name: 'Вино белое сухое', amount: 100, unit: Unit.ml},
            {name: 'Кинза свежая', amount: 2, unit: Unit.bunch},
            {name: 'Базилик свежий', amount: 1, unit: Unit.bunch},
            {name: 'Тархун свежий', amount: 1, unit: Unit.bunch},
            {name: 'Хмели-сунели', amount: 2, unit: Unit.tbsp},
            {name: 'Уцхо-сунели', amount: 1, unit: Unit.tsp},
            {name: 'Аджика', amount: 1, unit: Unit.tbsp},
            {name: 'Паприка копченая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Измельчите чеснок, смешайте с хмели-сунели, уцхо-сунели, аджикой, паприкой и оливковым маслом.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Промойте и обсушите куриные бедра. Сделайте несколько надрезов на мясистой части.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите бедра приготовленным маринадом, особенно тщательно в местах надрезов. Оставьте на 2-3 часа.'
            },
            {
                title: 'Шаг 4: Подготовка духовки',
                text: 'Разогрейте духовку до 200°C. Подготовьте форму для запекания.'
            },
            {
                title: 'Шаг 5: Подготовка лука',
                text: 'Нарежьте лук крупными кольцами и выложите на дно формы.'
            },
            {
                title: 'Шаг 6: Выкладка курицы',
                text: 'Выложите маринованные бедра на лук кожей вверх.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте белое вино по краям формы, не поливая курицу.'
            },
            {
                title: 'Шаг 8: Начальное запекание',
                text: 'Запекайте 30 минут при 200°C.'
            },
            {
                title: 'Шаг 9: Подготовка зелени',
                text: 'Крупно нарежьте кинзу, базилик и тархун.'
            },
            {
                title: 'Шаг 10: Финальное запекание',
                text: 'Уменьшите температуру до 180°C, добавьте половину зелени и запекайте еще 20-25 минут.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячим, посыпав оставшейся свежей зеленью. Традиционно подается с лавашом или мчади.'
            }
        ],
        categories: ['курица', 'запеченное', 'грузинская кухня', 'горячие блюда'],
        rating: 4.9,
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
            georgian: {
                id: 'georgian',
                title: 'Грузинская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    130: {
        id: 130,
        name: 'kurinye-bedra-v-klyare-s-medom',
        title: 'Куриные бедра в кляре с медом',
        description: 'Нежные куриные бедра в хрустящем кляре с медово-горчичным соусом. Идеальное сочетание хрустящей корочки и сочного мяса с пикантной ноткой меда.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: {value: 380, unit: Unit.g},
            protein: {value: 26, unit: Unit.g},
            fat: {value: 25, unit: Unit.g},
            carbs: {value: 18, unit: Unit.g}
        },
        // Общая грамовка готового блюда: ~1100 г
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            {name: 'Куриные бедра без кости', amount: 800, unit: Unit.g},
            {name: 'Мука пшеничная', amount: 200, unit: Unit.g},
            {name: 'Крахмал кукурузный', amount: 50, unit: Unit.g},
            {name: 'Яйца', amount: 2, unit: Unit.pcs},
            {name: 'Молоко', amount: 200, unit: Unit.ml},
            {name: 'Мед', amount: 4, unit: Unit.tbsp},
            {name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp},
            {name: 'Соевый соус', amount: 2, unit: Unit.tbsp},
            {name: 'Чеснок', amount: 4, unit: Unit.pcs},
            {name: 'Масло растительное', amount: 500, unit: Unit.ml},
            {name: 'Паприка молотая', amount: 1, unit: Unit.tsp},
            {name: 'Соль', amount: 0, unit: Unit.to_taste},
            {name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste}
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте 2 ст.л. меда, горчицу, соевый соус и измельченный чеснок.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Натрите куриные бедра маринадом и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 3: Приготовление кляра',
                text: 'Смешайте муку, крахмал, соль, перец и паприку. Отдельно взбейте яйца с молоком.'
            },
            {
                title: 'Шаг 4: Подготовка соуса',
                text: 'Смешайте оставшийся мед с горчицей и небольшим количеством соевого соуса.'
            },
            {
                title: 'Шаг 5: Разогрев масла',
                text: 'Нагрейте растительное масло в глубокой сковороде до 170-180°C.'
            },
            {
                title: 'Шаг 6: Панировка',
                text: 'Обваляйте каждое бедро в мучной смеси, окуните в яичную смесь, снова обваляйте в муке.'
            },
            {
                title: 'Шаг 7: Первая жарка',
                text: 'Жарьте бедра в горячем масле по 4-5 минут с каждой стороны до золотистого цвета.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Разрежьте самое толстое бедро - мясо должно быть полностью готовым внутри.'
            },
            {
                title: 'Шаг 9: Удаление масла',
                text: 'Выложите готовые бедра на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Глазирование',
                text: 'Смажьте горячие бедра медово-горчичным соусом.'
            },
            {
                title: 'Шаг 11: Подача',
                text: 'Подавайте горячими, полив дополнительным соусом. Украсьте зеленью по желанию.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'кляр', 'мед', 'горячие блюда'],
        rating: 4.6,
        reviews: 142,
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
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
};