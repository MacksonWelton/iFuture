import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

export const CardWarapper = styled(Card)`
    margin-top: 17px;
`

export const Img = styled(CardMedia)`
    width: 100%;
    height: 120px;
    border-radius: 12px 12px 0px 0px;
    margin-bottom: 12px;
`

export const Content = styled(CardContent)`
    padding: 0px;
    &:last-child {
        padding-bottom: 0;
    }
`

export const Text = styled(Typography)`
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-bottom: 8px;
`

export const Shipping = styled.div`
    display: flex;
    justify-content: space-between;
`
