import React, { useEffect, useState } from 'react';
import { getSearchData } from '../../services/api.js';
import { Container, Box } from './styles.js';
import Card from '../Card/index.js'
import Header from '../Header/index.js';


export default (props) => {

    const [drinks, setDrinks] = useState([]);

    const getData = () => {
        document.title = 'Search for ' + props.match.params.query + " - My Home Bar";
        setDrinks(getSearchData(props.match.params.query));
    }
    useEffect(() => {
        console.log('effect')
            getData()
            return props.history.listen(getData)
        // eslint-disable-next-line
    }, [])

    return <>
        <Header />
        <Container>
            <Box>
                <h1>Search: {props.match.params.query}</h1>
                <div>
                    {
                        drinks ?
                            drinks.map((drink, index) => {
                                return <Card drink={drink} key={drink.name.replace(/\s/g, '').replace('/', '-')} path={drink.name.replace(/\s/g, '')} >
                                </Card>
                            })
                            : <h2>Sorry, we can't find anything related to {props.match.params.query}</h2>
                    }
                </div>
            </Box>
        </Container>
    </>

}