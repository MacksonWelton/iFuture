import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const FeedPageWrapper = styled.div`
    background-color: #ffffff;
    height: 100vh;
`

export const Container = styled.div`
    margin: 16px 16px 64px;
`

export const FilterScroll = styled.div`
    height: 42px;
    display: flex;
    overflow-x: auto;
    align-items: center;
    margin: 8px 0;

    overflow-x: auto;
    :-webkit-scrollbar { 
        display: none;
    }
    .scrolling-wrapper {
        -webkit-overflow-scrolling: touch;
    }
`

export const Category = styled(Typography)`
    flex: 0 0 auto;
    height: 18px;
    min-width: 87px;
    margin-right: 8px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    :hover{
        color: ${props => props.personalizedColor ? "#e8222e" : "#000000"};
    }
`

export const Restaurants = styled.div`
    display: flex;
    flex-direction: column;
`
