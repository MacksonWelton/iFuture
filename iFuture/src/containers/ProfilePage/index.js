import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getProfile } from '../../actions/user';
import { getOrdersHistory } from '../../actions/food';

import * as S from './styles'

import Appbar from '../../components/Appbar';
import CardHistory from '../../components/CardHistory';
import Bottombar from '../../components/Bottombar';

function ProfilePage(props) {

  const { user, orders, goToProfileEdit, goToAdressEdit, getProfile, getOrdersHistory } = props

  useEffect(() => {
    getProfile()
    getOrdersHistory()
  }, [getProfile, getOrdersHistory])

  return (
    <S.ProfilePageWrapper>
      <Appbar page='profile' />

      <S.Container>

        <S.TextStyled> {user.name} </S.TextStyled>

        <S.TextStyled> {user.email} </S.TextStyled>

        <S.TextStyled> {user.cpf} </S.TextStyled>

        <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToProfileEdit} />

        <S.AdressContainer>
          <S.TextStyled grey> Endereço cadastrado </S.TextStyled>
          <S.TextStyled> {user.address} </S.TextStyled>
          <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToAdressEdit} />
        </S.AdressContainer>

        <S.TextStyled line> Histórico de pedidos </S.TextStyled>

        {orders.length === 0
          ?
          <S.EmptyOrders>
            <S.EmptyOrdersText>
              Você não realizou nenhum pedido
            </S.EmptyOrdersText>
          </S.EmptyOrders>
          :
          orders.map(order => (
            <CardHistory key={order.createdAt} order={order} />
          ))
        }

      </S.Container>

      <Bottombar page='profile' />

    </S.ProfilePageWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  orders: state.food.orders
})

const mapDispatchToProps = (dispatch) => ({
  goToProfileEdit: () => dispatch(push(routes.profileEdit)),
  goToAdressEdit: () => dispatch(push(routes.adressEdit)),
  getProfile: () => dispatch(getProfile()),
  getOrdersHistory: () => dispatch(getOrdersHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);