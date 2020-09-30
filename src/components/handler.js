import React from 'react';
import { CategoryContainerStyle } from './styles.js'
import { Search } from '@material-ui/icons';
import SearchInput from './SearchInput/index.js';

export const mapCategories = function (categories) {
    return categories.map(elem => !elem ? undefined : (() => {
        const name = elem === "Other/Unknown" ? elem.replace('/', ' / ') : elem;
        const path = `/icons/${name.replace(/(\/)/g, '-')}.svg`;
        return <a href={`/category/${elem}`} key={name || ""}>
            <img alt={elem} src={path} />
            <p>{name}</p>
        </a>
    })());
}
export const showCategories = function (categories) {
    return <CategoryContainerStyle id="CategoryContainer">
        <div>
            {this.mapCategories(categories)}
        </div>
    </CategoryContainerStyle>
}

export const showSearchInput = (showTextFields, inputBtnHandle, width) =>
    !showTextFields ?
        <button id="s-btn" onClick={() => inputBtnHandle()} >
            <Search  />
        </button>
        : <SearchInput/>

export const findInputElem = target => {
    if(!target || target.id === "root") return false;
    return target.id === 's-btn' || target.id === 's-input'? target: findInputElem(target.parentElement); 
}

export const findCategoryContainer = target => {
    if(!target || target.id === "root") return false;
    return target.id === 'CategoryContainer'? target: findCategoryContainer(target.parentElement); 
}