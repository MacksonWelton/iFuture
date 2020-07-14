import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getActiveOrder } from '../../actions/food';
import { getProfile } from '../../actions/user';
import Appbar from '../../components/Appbar';
import Bottombar from '../../components/Bottombar';
import CartFooter from '../../components/CartFooter';
import CartMain from '../../components/CartMain';
import * as S from '../CartPage/styles';



function CartPage(props) {

  const { user, restaurant, infoQuantity, getProfile, getActiveOrder, order } = props

  useEffect(() => {
    getProfile()
    getActiveOrder()
  }, [getProfile, getActiveOrder])

  let filteredList = []
  if (restaurant.products) {
    for (let item of restaurant.products) {
      for (let elem of infoQuantity) {
        if (item.id === elem.id) {
          filteredList.push(item)
        }
      }
    }
  }

  return (
    <S.ContentWrapper>
      <Appbar page='cart' />

      <S.Container>

        <S.AdressBoxWrapper>
          <S.Text gray="true"> Endereço da entrega </S.Text>
          <S.Text> {user.address} </S.Text>
        </S.AdressBoxWrapper>

        <CartMain filteredList={filteredList} restaurant={restaurant} />
        <CartFooter filteredList={filteredList} infoQuantity={infoQuantity} restaurant={restaurant} order={order} />

      </S.Container>

      <Bottombar page='cart' />
    </S.ContentWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  restaurant: state.food.restaurantDetails,
  infoQuantity: state.food.infoQuantity,
  order: state.food.order
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
  getActiveOrder: () => dispatch(getActiveOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);