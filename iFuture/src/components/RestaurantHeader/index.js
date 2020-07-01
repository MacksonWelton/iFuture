import React from 'react';
import * as S from './styles'

function RestaurantHeader(props) {
  const { restaurantDetails } = props;

  return (
    <S.CardWarapper elevation={0}>

      <S.Img image={restaurantDetails.logoUrl} />

      <S.Content>

        <S.Text color="primary">{restaurantDetails.name}</S.Text>

        <S.Text color="secondary">{restaurantDetails.category}</S.Text>

        <S.Shipping>
          <S.Text color="secondary">{restaurantDetails.deliveryTime} - {restaurantDetails.deliveryTime + 10} min</S.Text>
          <S.Text color="secondary">Frete {restaurantDetails.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.Text>
          <div></div>
        </S.Shipping>

        <S.Text color="secondary">{restaurantDetails.address}</S.Text>

      </S.Content>

    </S.CardWarapper>
  )
}

export default RestaurantHeader;