import styled from 'styled-components';
import {c} from '../globalStyleVars.js'

export const CategoryContainerStyle = styled.div`
    z-index: 2;
    background-color: ${c.light};
    position: absolute;
    top: 80px;
    animation: .6s fade ease-in-out;
    padding: 16px 4px;
    max-width: 95%;
    box-shadow: 1px 2px 3px #1115;
    border-radius: 8px;
    h1 {
        font-size: 20px;
        text-align: left;
    }
    div{
        display: flex;
        margin: 0 20px;
        flex-flow: row nowrap;
        overflow-x: auto; 
        font-size: 14px;
        align-items: flex-start;
        a {
            display: flex;
            flex-flow: column nowrap;
            color: black;
            text-decoration: none;
            margin: 0 10px;
            justify-content: center;
            align-items: flex-start;
            max-width: 100px;
            p{
                text-align: center;
                width:100%
            }
            img {
                background-color: ${c.dark};
                border-radius: 50%;
                width: 70px;
                height: 70px;
                margin: 0 auto;
            }
        }
    }
`