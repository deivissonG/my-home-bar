import React from 'react'
import { CheckCircle } from '@material-ui/icons'
import { CardStyle } from './styles.js';
import { Link } from 'react-router-dom'

export default function Card({ drink }) {
    return (
        <Link to={'drink/' + drink.id}>
            <CardStyle>
                <img src={drink.thumb} alt={drink.name.replace(/\W/g, '-')} />
                <div>
                    <p className="title">
                        {drink.name}
                    </p>
                    <p className="category">
                        {drink.category}
                    </p>
                    {
                        drink.alcoholic.toLowerCase() === 'alcoholic'
                            ? ''
                            : <p className="alcohol-free">
                                <CheckCircle />
                                {drink.alcoholic}
                            </p>
                    }
                </div>
            </CardStyle>
        </Link>
    )
}
