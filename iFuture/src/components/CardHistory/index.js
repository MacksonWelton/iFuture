import React from 'react'
import * as S from './styles'
import { turnsDate } from './constants'

export function CardHistory(props){

    const { order } = props

    const date = turnsDate(order.createdAt)

    return (
        <S.Order>
            <S.TextStyled red>
                {order.restaurantName}
            </S.TextStyled>

            <S.TextStyled sizep spacing>
                {date}
            </S.TextStyled>

            <S.TextStyled weight>
                SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </S.TextStyled>
            
        </S.Order>
    )
}

export default CardHistory