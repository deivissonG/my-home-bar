import React, { useEffect, useState, useContext } from 'react';
import * as api from '../../services/api.js';
import { Container, Box } from './styles.js';
import Card from '../Card/index.js'

import { DrinksContext } from '../Context/Drinks'

const curateCategoryName = (location) => {
    const actualLocation = location;
    const newPathArray = actualLocation.pathname.split('/')
    const newPathRaw = newPathArray[newPathArray.length - 1];
    let newPath = newPathRaw === 'Other-Unknown' ? newPathRaw.replace(/\W/g, '/') : newPathRaw.replace(/\W/g, ' / ')
    const secondWordIndex = newPath.search(/([a-z][A-Z])/g) + 1;
    newPath = !secondWordIndex ? newPath : newPath.substr(0, secondWordIndex) + ' ' + newPath.substr(secondWordIndex, newPathRaw.length);
    return newPath
}

export default (props) => {

    const { location, setLocation, allDrinks } = useContext(DrinksContext);
    const loc = props.location;
    const history = props.history;

    useEffect(() => {
        const newPath = curateCategoryName(loc)
        setLocation(oldValue => newPath);
        document.title = newPath + " - My Home Bar";
        return history.listen(newLocation => {
            const newPath = curateCategoryName(newLocation)
            setLocation(oldValue => newPath);
        })
        //        eslint-disable-next-line
    }, [])

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        if (!!allDrinks[1]) {
            const thisCategoryDrinks = allDrinks.filter(drink => drink.category === location)
            console.log('drinks pre loaded: ', thisCategoryDrinks)
            setDrinks(thisCategoryDrinks);
        }
        else api.getCategoryData(setDrinks, location)
        // eslint-disable-next-line
    }, [location])

    return <Container>
        <Box>
            <h1>{location}</h1>
            <div>
                {
                    drinks.map((drink, index) => {
                        return index === 0 ?
                            ''
                            : <Card drink={drink} key={drink.name.replace(/\s/g, '').replace('/', '-')} path={drink.name.replace(/\s/g, '')} >
                            </Card>
                    })
                }
            </div>
        </Box>
    </Container>

}