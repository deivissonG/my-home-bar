import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { CategoryContainerStyle } from './styles.js';
import { DrinksContext } from '../Context/Drinks.js';


const showCategories = function (categories) {
    return <CategoryContainerStyle id="CategoryContainer">
        <div>
            {mapCategories(categories)}
        </div>
    </CategoryContainerStyle>
}

//5
const mapCategories = function (categories) {
    return categories.map(elem => !elem ? undefined : (() => {
        const name = elem === "Other/Unknown" ? elem.replace('/', ' / ') : elem;
        const path = `/icons/${name.replace(/(\/)/g, '-')}.svg`;
        return <Link to={`/category/${name.replace(/(\/)/g, '-').replace(/\s/g, '')}`} key={name || ""} replace>
            <img alt={elem} src={path} />
            <p>{name}</p>
        </Link>
    })());
}
export default () => {
    const {categories} = useContext(DrinksContext);
    return showCategories(categories)
}