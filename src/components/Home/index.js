import React, { useContext, useEffect } from 'react';
import { getHomeDrinks } from '../../services/api.js';
import { Container, HomeStyle } from './styles.js'
import Suggestion from '../Suggestion';
import Trending from '../Trending';
import { DrinksContext } from '../Context/Drinks.js';
import Header from '../Header/index.js';

export default function () {

    const { homeDrinks, setHomeDrinks } = useContext(DrinksContext);

    useEffect(() => {

        getHomeDrinks(setHomeDrinks)
        // eslint-disable-next-line
    }, [])

    return <>
        <Header />
        <Container>
            <HomeStyle>
                <Suggestion />
                <Trending drinks={homeDrinks} />
            </HomeStyle>
        </Container>
    </>
}