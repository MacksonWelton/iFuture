import React from 'react';
import * as S from './styles'

import CardFood from '../CardFood';

function RestaurantDishes(props) {
    const { data } = props
   
    return (
        <div>
            <S.Title> Principais </S.Title>

            {data.products
            .filter(item => item.category !== 'Acompanhamento')
            .map(item => (
                <CardFood item={item} restaurantId={data.id} />
            ))}

            <S.Title> Acompanhamentos </S.Title>

            {data.products
            .filter(item => item.category === 'Acompanhamento')
            .map(item => (
                <CardFood item={item} restaurantId={data.id} />
            ))}
        </div>
    )
}


export default RestaurantDishes;