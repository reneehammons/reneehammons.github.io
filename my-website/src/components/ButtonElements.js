import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    cursor: pointer;
    border: 2px solid;
    background-color: transparent;
    height: 50px;
    width: 200px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 15px;
    color: #E27D60;

    @media screen and (max-width: 760px){
        height: 42px;
        width: 150px;
    } 

    &:hover {
        background-image: linear-gradient(to right, #E27D60, #C38D9E);
        color: white;
        text-decoration: none;
    }
 
`

