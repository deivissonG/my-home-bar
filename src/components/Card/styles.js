import styled from 'styled-components';
import { transition, c } from '../globalStyleVars.js'

export const CardStyle = styled.div`
    display: flex;
    flex-flow: row nowrap !important;
    justify-content: left !important;
    align-items: flex-start;
    width: 300px;
    height: 150px;
    margin: 8px;
    background-color: #fff4;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px #5555;
    text-decoration: none;
    color: ${c.dark};
    ${transition};
    :hover{
        box-shadow: 0 0 6px #6669;
        background-color: #fff6;
    }
    img{
        max-height: 100% !important;
        position: relative;
    }
    div{
        display: flex;
        flex-flow: column nowrap;
        width: 50%;
        margin: 0 auto;
        /* float: left; */
        .title{
            width: 85%;
            margin: 8px 8px 8px 16px;
            text-align: left;
            font-size: 18px;
            font-weight: 600;
        }
        .alcohol-free {
            width: 100%;
            margin: 0;
            font-size: 12px;
            text-align: left;
            margin: 0 12px 16px 12px;
            color: ${c.primary_dark};
            svg{
                margin-left: 4px;
                font-size: 10px;
            }
        }
        .category {
            width: 100%;
                text-align: left;
                margin: 0 0 16px 14px;
                font-size: 12px;
                color: ${c.dark};
                opacity: .5;
        }
    }

`