import styled from 'styled-components';
import {c} from '../globalStyleVars.js'

export const SuggestionStyle = styled.div`
    width: 100%;
    padding: 0;
    margin:0;
    a{
        display: flex;
        width: 100%;
        padding: 16px;
        align-items: center;
        justify-content: space-between;
        position: relative;

    }
    div {
        display: flex;
        flex-flow: column nowrap;
        h2{
            position: absolute;
            background-color: ${c.secondary_dark};
            color:${c.light};
            padding: 8px;
            top: 20%;
            z-index: 1;
            margin: 8px;
        }
        h1{
            padding: 8px;
            margin: 8px 8px 8px 16px;
            color: ${c.secondary};
            background-color: ${c.primary};
            position: absolute;
            top: 30%;
            font-size: 32px;
            z-index: 1;
        }
    }
    img{
        top: 16px; 
        right: 16px;
        width: 40vw;
        min-width: 350px;
        min-height: 350px;
        max-width: 90%;
    }

`