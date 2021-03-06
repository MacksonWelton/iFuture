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
                    <CardFood key={item.id} item={item} restaurantId={data.id} />
                ))}

            {data.products.filter(item => item.category === 'Acompanhamento').length > 0 ?
                <S.Title> Acompanhamentos </S.Title> : false}

            {data.products
                .filter(item => item.category === 'Acompanhamento')
                .map(item => (
                    <CardFood key={item.id} item={item} restaurantId={data.id} />
                ))}
        </div>
    )
}


export default RestaurantDishes;