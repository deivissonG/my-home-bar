import styled from 'styled-components'

export const c = {
    primary: '#04C4D9',
    primary_dark: '#005F66',
    secondary: '#96034F',
    secondary_dark: '#005F66',
    accent: '#BF2642',
    dark: '#2b2b2b',
    light: '#D9D9D9'
};


export const transition = `transition: all ease-in-out .3s; `;
export const hoverEffectPrimary = `
${transition} 
:hover{
    color: ${c.primary};
}`

export const ContainerStyle = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    max-width: 950px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
`