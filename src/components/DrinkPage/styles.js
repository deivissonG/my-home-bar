import styled from 'styled-components';
import { ContainerStyle, c } from '../globalStyleVars.js';

export const Container = ContainerStyle;
export const DrinkPageStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    padding: 24px;
    justify-content: center;
    position: relative;
    .header{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        h2{
            display: inline-block;
            width: fit-content;
            max-width: 200px;
            padding: 8px;
            margin: 16px 0 16px -16px;
            background-color: ${c.accent};
            color: ${c.light};
            z-index: 1;
            text-align: left;
        }
        img{
            /* width: 60vw; */
            max-width: 90%;
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            border-radius: 10px;
        }
        @media only screen and (max-width: 700px){
            h2{
                position: absolute;
                top: 30%;
                left:-16px;
                margin: 16px 0;
            }
            img{
                position: relative;
            }
        }
        @media only screen and (max-width: 600px){
            h2{
                top: 10%;
            }
        }
    }

    .ingredients, .instructions{
        min-height:450px;
        @media only screen and (max-width: 700px){
            min-height:50px;        
        }
        h3, p{
            display: flex;
            align-items: center;
            justify-content: left;
            width: fit-content;
            max-width: 400px;
            padding: 8px 12px;
            background-color: #eeee;
        }
        h3{
            margin: 20px 0;
        }
        p{
            margin: 12px 4px;
        }

    }


`