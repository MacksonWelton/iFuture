import React from 'react'

import * as S from './styles'

import CardFoodInCart from '../CardFoodInCart'

export function CartMain(props) {
    const { restaurant, filteredList } = props

    return (
        <main>
            {filteredList.length === 0 || Object.keys(restaurant).length === 0
                ?
                <S.EmptyCartWrapper>
                    <S.Text>
                        Carrinho Vazio
                    </S.Text>
                </S.EmptyCartWrapper>
                :
                <S.FullCartWrapper>

                    <S.DivMain>
                        <S.Text red="true"> {restaurant.name} </S.Text>
                        <S.Text> {restaurant.address} </S.Text>
                        <S.Text> {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min </S.Text>
                    </S.DivMain>

                    {filteredList
                        .map(item => (
                            <CardFoodInCart item={item} />
                        ))}

                </S.FullCartWrapper>
            }
        </main>
    )
}


export default CartMain;
