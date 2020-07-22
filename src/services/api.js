const fetchOptions = {
    method: 'post',
    headers: {
        "Content-type": "application/json",
        accept: "application/json"
    },
}

export const getHomeDrinks = function (setHomeDrinks) {
    const query = `{
        drinks(sort:"random", max_per_page:16, current_page:1){
        results{
          id
          name
          alcoholic
          ingredients
          category
          thumb
        }
    } }`
    console.log('aqui');
    fetchOptions.body = JSON.stringify({ query: query });
    fetch('http://177.71.179.182:3000/graphql', fetchOptions).then(response => {
        if (response.status !== 200)
            return console.log('Something bad happened: ', response);
        response.json().then((data) => {
            console.log(data.data.drinks.results)
            setHomeDrinks(data.data.drinks.results)
        });
    })
}

export const getCategoriesData = function (setCategories) {
    const query = `{ 
        categories
        drinks(sort:"random", max_per_page:16, current_page:1){
        results{
          id
          name
          alcoholic
          ingredients
          category
          thumb
        }
    } }`
    console.log('aqui');
    fetchOptions.body = JSON.stringify({ query: query });
    fetch('http://177.71.179.182:3000/graphql', fetchOptions).then(response => {
        if (response.status !== 200)
            return console.log('Something bad happened: ', response);
        response.json().then((data) => {
            setCategories(data.data.categories)
        });
    })
}

export const getDrinkInfo = function (id, setDrink){
    const query = `{ 
        drink(id:"${id}"){
            id
            name
            alcoholic
            measures
            ingredients
            instructions
            category
            thumb  
        } 
    }`
    fetchData(query, setDrink)
}

export const getAllDrinks = function (setDrinks){
    const query = `{ 
        drinks{
          results{
            id
            name
            alcoholic
            ingredients
            category
            thumb
          }
      } 
    }`
    fetchData(query, setDrinks)
}

export const getCategoryData = function (setDrinks, path) {
    const query = `{ 
        drinks(filter:"category", filter_param:"${path}"){
          results{
            id
            name
            alcoholic
            ingredients
            category
            thumb
          }
      } 
    }`

    fetchData(query, setDrinks);
}

const fetchData = function (query, cb) {
    fetchOptions.body = JSON.stringify({ query });
    fetch('http://177.71.179.182:3000/graphql', fetchOptions).then(response => {
        if (response.status !== 200)
            return console.log('Something bad happened: ', response);
        response.json().then(a => {
            
            const retValue = !!a.data.drinks ? a.data.drinks.results : a.data.drink
            console.log(retValue); 
            cb(retValue)
        });
    })
}