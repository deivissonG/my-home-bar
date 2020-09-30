import React, { createContext, useState, useEffect } from 'react'
import { getCategoriesData } from '../../services/api';

export const DrinksContext = createContext();

export default function DrinksProvider(props) {

    const [categories, setCategories] = useState();
    const [homeDrinks, setHomeDrinks] = useState({ name: 'loading' });
    const [allDrinks, setAllDrinks] = useState([]);
    const [location, setLocation] = useState('');


    useEffect(() => {
        if (!categories)
            getCategoriesData(setCategories);
        // eslint-disable-next-line 
    }, [categories])

    return <DrinksContext.Provider value={{ categories, setCategories, homeDrinks, setHomeDrinks, allDrinks, setAllDrinks, location, setLocation }}>{props.children}</DrinksContext.Provider>
}