import styled from 'styled-components';
import { c, hoverEffectPrimary } from '../globalStyleVars.js';
import { ContainerStyle } from '../globalStyleVars.js';

export const Container = ContainerStyle;


export const HeaderStyle = styled.header`
    z-index:3;
    display: flex;
    flex-flow: row nowrap;
    font-size: 12px;
    height: 70px;
    max-height: 110px;
    padding: 16px 8px;
    background-color: ${c.dark};
    color: ${c.light};
    align-items: center;
    justify-content: center;
    position: relative;
    .search{
        width: 50%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        position: relative;
        z-index: 2;
        transition: all ease-in-out .4s; 
        button {
                background-color: transparent;
                color: inherit;
                padding: 8px;
                border: none;
                position: absolute;
                right: 16px;
                ${hoverEffectPrimary};
        }
        div{
            /*  display: flex;
            flex-flow: row nowrap; */
            width: 100%;
            input {
                width: 100%;
                animation: grow .4s;
                transition: width ease-in-out .4s;
                max-height: 40px;
                border: none;
                border-radius: 20px;
                background-color: #eee;
                box-shadow: -2px -2px -2px ${c.dark};
                padding: 16px;
            }
            button {
                margin-left: -40px;
                margin-bottom: -6px;
                position: relative;
                background-color: transparent;
                padding: 8px;
                color: ${c.light};
                border: none;
                animation: fade .4s;
                ${hoverEffectPrimary}
            }

        }
        @media (max-width:650px){
            button {
                background-color: transparent;
                padding: 8px;
                border: none;
                margin-right: 8px;
                position: absolute;
                right: 0;
            }
            div{
                width: 100%;
                /*  display: flex;
                flex-flow: row nowrap; */
                input {
                    width: 80vw;
                    margin: 0 auto;
                    position: absolute;
                    top:60px;
                    left: -100%;
                    animation: grow .4s;
                    max-height: 40px;
                    border: none;
                    font-size: 16px;
                    border-radius: 20px;
                    padding: 24px 16px;
                    box-shadow: -1 -1px 4px #1118;
                }
                button {
                    margin-bottom: -6px;
                    color: ${c.dark};
                    animation: fade .4s;
                    position: absolute;
                    top: 64px;
                    padding: 24px 0;
                    right: 0;
                    background-color: transparent;
                    padding: 8px;
                    border: none;

                    ${hoverEffectPrimary}
                }
            }
        }
    
    }
    .github-btn{
        ${hoverEffectPrimary};
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: ${c.light};
        svg{
            transform: rotate(-90deg);
        }
    }
`;


export const LogoSmall = styled.div`
    display: flex;
    flex-flow: row nowrap;
    font-size: 16px;
    font-family: Megrim, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    align-items: center;
    color: inherit;
    a{  
        ${hoverEffectPrimary};
        color: inherit;
        h1{
            color: inherit;
            font-size: 26px;    
            @media (max-width: 686px){
                font-size: 20px;    
            }
            @media (max-width: 604px){
                font-size: 16px;    
            }
        }
    }
    img {
        height: 50px;
    }

`;

export const CategoryDropDownButton = styled.button`
border: none;
background: transparent;
color: inherit;
display: flex;
align-content: center;
font-size: 16px;
${hoverEffectPrimary};
`

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
