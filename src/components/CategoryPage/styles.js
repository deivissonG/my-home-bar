import styled from 'styled-components';
import {ContainerStyle} from '../globalStyleVars.js';

export const Container = ContainerStyle;

export const Box = styled.div`
    padding-bottom: 32px;
    margin-bottom: 32px;
    h1{
        margin: 16px 0;
    }
    div{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    a{
        float: right;
    }
    
`