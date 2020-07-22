import React, { useState, useEffect } from 'react'
import { getDrinkInfo } from '../../services/api.js';
import { Container, DrinkPageStyle } from './styles.js';
import { ArrowForward, BallotOutlined, Pages } from '@material-ui/icons'

export default function DrinkPage(props) {
    const initialId = props.match.params.id;
    const [drink, setDrink] = useState({});

    useEffect(() => {
        getDrinkInfo(initialId, setDrink)
    }, [initialId])

    useEffect(() => {
        if(drink.name) document.title = `${drink.name} - My Home Bar`;
        console.log(drink)
    }, [drink])

    return (
        <div>
            {!drink.measures ? <></>
                : <Container>
                    <DrinkPageStyle>
                        <div className="header">
                            <h2>
                                {drink.name}
                            </h2>
                            <img src={drink.thumb} alt={drink.name} />
                        </div>
                        <div className="ingredients">
                            <h3><BallotOutlined /> Ingredients</h3>
                            {drink.measures.map((measure, index) => {
                                return <p>{measure} <ArrowForward /> {drink.ingredients[index]}</p>
                            })
                            }
                        </div>
                        <div className="instructions">
                            <h3><Pages /> Instructions:</h3>
                            <p>{drink.instructions}</p>
                        </div>
                    </DrinkPageStyle>
                </Container>}
        </div>
    )
}
