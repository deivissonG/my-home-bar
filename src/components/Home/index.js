import React, { useContext, useEffect } from 'react';
import { getHomeDrinks } from '../../services/api.js';
// import Header from './Header.js';
import { Container, HomeStyle } from './styles.js'
import Suggestion from '../Suggestion';
import Trending from '../Trending';
import { DrinksContext } from '../Context/Drinks.js';


export default function (props) {

    const { homeDrinks, setHomeDrinks } = useContext(DrinksContext);

    useEffect(() => {
        if (!homeDrinks[1])
            getHomeDrinks(setHomeDrinks)
        // eslint-disable-next-line
    }, [])

    return <Container>
        <HomeStyle>
            <Suggestion />
            <Trending drinks={homeDrinks} />
        </HomeStyle>
    </Container>
}