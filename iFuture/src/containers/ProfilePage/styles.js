import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const ProfilePageWrapper = styled.div`
    background-color: #ffffff;
    height: 100vh;
`

export const Container = styled.div`
    margin: 16px 16px 64px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const TextStyled = styled(Typography)`
    min-height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
    color: ${props => props.grey && "#b8b8b8" };
    border-bottom: ${props => props.line && "1px solid #000000" };
`

export const AdressContainer = styled.div`
    min-height: 76px;
    background-color: #eeeeee;
    margin: 8px -16px;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
`

export const IconEdit = styled.img`
    position: absolute;
    right: 0;
`

export const EmptyOrders = styled.div`
    text-align: center;
    margin-top: 16px;
`

export const EmptyOrdersText = styled(Typography)`
    letter-spacing: -0.39px;
    font-size: 16px;
    color: #000000;
    opacity: 0.89;
`