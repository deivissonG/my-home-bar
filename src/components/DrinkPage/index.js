import React, { useState, useEffect } from 'react'
import { getDrinkInfo } from '../../services/api.js';
import { Container, DrinkPageStyle } from './styles.js';
import { ArrowForward, BallotOutlined } from '@material-ui/icons'
import { Redirect } from 'react-router-dom';
import Header from '../Header/index.js';

export default function DrinkPage(props) {

    const initialId = props.match.params.id;
    const [drink, setDrink] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        getDrinkInfo(initialId, (drink, error) => {
            console.log(drink);
            if (error)
                setError(true);
            else setDrink(drink);
        })
    }, [initialId])

    useEffect(() => {
        if (drink.name) document.title = `${drink.name} - My Home Bar`;
    }, [drink])

    return error ?
        <Redirect to={'/notfound'} />
        : (<>
            <Header />
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
                                    return <p key={index}>{measure} <ArrowForward /> {drink.ingredients[index]}</p>
                                })
                                }
                            </div>
                            <div className="instructions">
                                <h3>Instructions: </h3>
                                <p>{drink.instructions}</p>
                            </div>
                        </DrinkPageStyle>
                    </Container>}
            </div>
        </>
        )
}
