import React, { useEffect, useContext } from 'react'
import { Box, Container } from './styles';
import { getAllDrinks } from '../../services/api.js';
import Card from '../Card/index.js';
import { DrinksContext } from '../Context/Drinks';
import Header from '../Header';

export default (props) => {

    const { allDrinks, setAllDrinks } = useContext(DrinksContext)

    useEffect(() => {
        if (!allDrinks[0])
            getAllDrinks(setAllDrinks);
    }, [allDrinks, setAllDrinks])
    return <>
        <Header />
        <Container>
            <Box>
                <h1>All Drinks</h1>
                {!allDrinks[0] ? <></> : allDrinks.map(drink => <Card drink={drink} key={drink.name.replace(/\s/g, '')} path={'drink/' + drink.name.replace(/\s/g, '').replace('/', '-')} />)}
            </Box>
        </Container>;
    </>
}