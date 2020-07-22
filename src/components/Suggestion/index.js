import React, { useContext } from 'react';
import { SuggestionStyle } from './styles.js';
import { Link } from 'react-router-dom'
import { DrinksContext } from '../Context/Drinks.js';

export default (props) => {

    const { homeDrinks } = useContext(DrinksContext);

    return !homeDrinks[0] ?
        <></>
        : <SuggestionStyle>
            <Link to={'drink/' + homeDrinks[0].id}>
                <div>
                    <h2>Try it</h2>
                    <h1>
                        {homeDrinks[0].name}
                    </h1>
                </div>
                <img src={homeDrinks[0].thumb || ''} alt={homeDrinks[0].name || ''} />
            </Link>
        </SuggestionStyle>
}

