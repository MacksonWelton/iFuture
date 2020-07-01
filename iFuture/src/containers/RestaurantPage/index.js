import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { routes } from '../Router'

import * as S from './styles'

import Appbar from '../../components/Appbar';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantDishes from '../../components/RestaurantDishes';

function RestaurantPage(props) {
  const { restaurantDetails, goToFeed } = props;

  useEffect(() => {
    if (Object.keys(restaurantDetails).length === 0) {
      goToFeed()
    }
  }, [restaurantDetails, goToFeed])

  return (
    <div>
      <Appbar page='restaurant' />
      {Object.keys(restaurantDetails).length !== 0 &&
        <S.RestaurantWrapper>

          <RestaurantHeader
            restaurantDetails={restaurantDetails}
          />
          <RestaurantDishes
            data={restaurantDetails}
          />
        </S.RestaurantWrapper>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  restaurantDetails: state.food.restaurantDetails
})

const mapDispatchToProps = (dispatch) => ({
  goToFeed: () => dispatch(push(routes.feed)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);