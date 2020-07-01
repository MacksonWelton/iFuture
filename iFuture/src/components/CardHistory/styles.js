import styled from 'styled-components'
import { Card, Typography } from '@material-ui/core'

export const Order = styled(Card)`
    margin-bottom: 8px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    height: 102px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    padding: 8px 16px;
`

export const TextStyled = styled(Typography)`
    min-height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
    color: ${props => props.red ? "#e8222e" : "#000000"};
    font-size: ${props => props.sizep ? "12px" : "16px" };
    letter-spacing: ${props => props.spacing ? "-0.29px" : "-0.39px"};
    font-weight: ${props => props.weight && "bold"};
`
