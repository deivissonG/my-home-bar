import React from 'react';
import { Box } from './styles.js';
import Card from '../Card';
import { Link } from 'react-router-dom'

export default (props) => (<Box>
    {!!props.drinks[0] ?
        <>
            <h1>Others Drinks</h1>
            <div>
                {props.drinks.map((drink, index) => {
                    return index === 0
                        ? undefined
                        : <Card drink={drink} key={drink.name.replace(/\s/g, '')} path={'drink/' + drink.name.replace(/\s/g, '').replace('/', '-')}/>
                })}
            </div>
            <Link to='all'>See all &gt;</Link>
        </>
        : ''}
</Box>)