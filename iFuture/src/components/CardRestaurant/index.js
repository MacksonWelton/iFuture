import React from 'react'

import {getRestaurantDetail} from '../../actions/food'

import * as S from './styles'
import { CardContent } from '@material-ui/core'
import { connect } from 'react-redux'

export function CardRestaurant(props) {

    const { restaurant, getRestaurantDetail } = props

    const sendRestaurantId = (restaurantId) => {
        getRestaurantDetail(restaurantId)
    }

    return (
        <S.CardRestaurantWrapper>
            <S.CardImage onClick={() => sendRestaurantId(restaurant.id)}>
                <S.Image
                    image={restaurant.logoUrl}
                    title={restaurant.name}
                />
            </S.CardImage>
            <CardContent>
                <S.RestaurantName>
                    {restaurant.name}
                </S.RestaurantName>
                <S.InfoFooter>
                    <S.RestaurantInfo>
                        {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
                    </S.RestaurantInfo>
                    <S.RestaurantInfo>
                        Frete R$ {Number(restaurant.shipping).toFixed(2).replace(".", ",")}
                        {/* Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
                    </S.RestaurantInfo>
                </S.InfoFooter>
            </CardContent>
        </S.CardRestaurantWrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurantDetail: (restaurantId) => dispatch(getRestaurantDetail(restaurantId))
})

export default connect(null, mapDispatchToProps)(CardRestaurant)