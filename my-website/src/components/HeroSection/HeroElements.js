import styled from 'styled-components';
import { VscArrowSmallRight } from 'react-icons/vsc';
import { VscArrowSmallDown } from 'react-icons/vsc';

export const HeroContainer =styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    width: 100%;
    position: relative;
    z-index: 1;


`

export const HeroBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    //overflow: hidden;
`

export const HeroImage = styled.div`
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #E27D60
    font-size: 48px;
    text-align: center;
    color: #F9F7EF;

    @media screen and (max-width: 768px){
        font-size: 40px;  
    }

    @media screen and (max-width: 480px){
        font-size: 32px;  
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowRight = styled(VscArrowSmallRight)`
    margin-left: 4px;
    font-size: 2rem;
`

export const ArrowDown = styled(VscArrowSmallDown)`
    margin-left: 8px;
    font-size: 2rem;    
`

