import styled from 'styled-components'
import { Card, CardActionArea, CardMedia, Typography } from '@material-ui/core'

export const CardRestaurantWrapper = styled(Card)`
    margin-bottom: 8px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    box-shadow: none;

`

export const CardImage = styled(CardActionArea)`
    height: 120px;
`

export const Image = styled(CardMedia)`
    height: 100%;
`

export const InfoFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
`

export const RestaurantName = styled(Typography)`
    color: #e8222e;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const RestaurantInfo = styled(Typography)`
    color: #b8b8b8;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

