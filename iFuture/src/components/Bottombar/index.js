import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import { BottomNavigationAction } from '@material-ui/core';
import { DivWrapper } from './styles'
import { getRestaurantDetail } from '../../actions/food';

import homeGreyIcon from '../../assets/homepage-grey.svg';
import homeRedIcon from '../../assets/homepage-red.svg';
import shoppingCartGreyIcon from '../../assets/shopping-cart-grey.svg';
import shoppingCartRedIcon from '../../assets/shopping-cart-red.svg';
import avatarGreyIcon from '../../assets/avatar-grey.svg';
import avatarRedIcon from '../../assets/avatar-red.svg';




export function Bottombar(props) {
  const { page, goToCart, goToFeed, goToProfile, restaurantId, getRestaurantDetail } = props;

  let iconHomeSrc = homeGreyIcon;
  let iconCartSrc = shoppingCartGreyIcon;
  let iconProfileSrc = avatarGreyIcon
  let alt = "home";

  switch (page) {
    case 'cart':
      iconCartSrc = shoppingCartRedIcon;
      break;
    case 'home':
      iconHomeSrc = homeRedIcon;
      break;
    case 'profile':
      iconProfileSrc = avatarRedIcon;
      break;
    default:
      break;
  }

  const iconHome = <img src={iconHomeSrc} alt={alt} />
  const iconCart = <img src={iconCartSrc} alt={alt} />
  const iconProfile = <img src={iconProfileSrc} alt={alt} />

  const onClickCart = async () => {
    if (restaurantId !== 0) {
      await getRestaurantDetail(restaurantId)
    }
    goToCart()
  }

  return (
    <DivWrapper>
      <BottomNavigationAction label="HomePage" icon={iconHome} onClick={goToFeed} />
      <BottomNavigationAction label="CartPage" icon={iconCart} onClick={onClickCart} />
      <BottomNavigationAction label="Profile" icon={iconProfile} onClick={goToProfile} />
    </DivWrapper>
  )
}

const mapStateToProps = state => ({
  restaurantId: state.food.restaurantId
});


const mapDispatchToProps = dispatch => ({
  goToFeed: () => dispatch(push(routes.feed)),
  goToCart: () => dispatch(push(routes.cart)),
  goToProfile: () => dispatch(push(routes.profile)),
  getRestaurantDetail: (restaurantId) => dispatch(getRestaurantDetail(restaurantId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bottombar)