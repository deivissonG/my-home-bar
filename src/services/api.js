import db from './db.js';
import categories from './categories.js';

function addRandomNumber(list, number = 0) {
    if (number === 0)
        number = Math.floor(Math.random() * 403);
    if (list.includes(number))
        return addRandomNumber(list)
    list.push(number);
    return list
}

export const getHomeDrinks = function (setHomeDrinks) {

    const randomDrinks = (() => {
        let ret = [];
        let randomList = [];
        for (let index = 0; index < 16; index++) {
            randomList = addRandomNumber(randomList)
            ret = [...ret, db[randomList[randomList.length - 1]]];
        }

        return ret
    })();

    setHomeDrinks(randomDrinks);

}

export const getCategoriesData = function (setCategories) {
    return setCategories(categories)
}

export const getDrinkInfo = function (id, callback) {
    const result = db.find(e => e.apiId === id);
    return callback(result, !result)
}

export const getAllDrinks = function (setDrinks) {
    return setDrinks(db);
}

export const getCategoryData = function (setDrinks, path) {
    setDrinks(db.filter(drink => drink.category === path))
}

export const getSearchData = function (search) {
    if (!search)
        return
    search = search.toLowerCase();
    
    console.log(search)
    return db.filter(drink => {
        return drink.name.search(search) !== -1
            || drink.category.search(search) !== -1
            || drink.ingredients.find(ing => ing.toLowerCase().includes(search))
    })
}