import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #41B3A3;
    background-color: transparent;
    height: 50px;
    width: 200px;
    color: #41B3A3;
    font-size: 1.3rem;
    white-space: nowrap;

    @media screen and (max-width: 760px){
        font-size: 1rem; 
        height: 40px;
        width: 170px;
    }
 
`

