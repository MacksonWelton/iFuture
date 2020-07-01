import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Appbar from '../../components/Appbar';
import CardRestaurant from '../../components/CardRestaurant';
import Bottombar from '../../components/Bottombar';
import { getRestaurants, getActiveOrder } from '../../actions/food';
import OrdersInProgress from '../../components/OrdersInProgress';

function FeedPage(props) {

  const { goToSearch, restaurants, getRestaurants, order, getActiveOrder } = props

  useEffect(() => {
    getRestaurants()
    getActiveOrder()
  }, [getRestaurants, getActiveOrder])

  const [categoryClicked, setCategoryClicked] = useState(false)
  const [categorySelected, setCategorySelected] = useState('')

  const selectCategory = (category) => {
    if (category === categorySelected) {
      setCategoryClicked(!categoryClicked)
      setCategorySelected('')
    } else {
      setCategoryClicked(true)
      setCategorySelected(category)
    }
  }

  const restaurantsFiltered = restaurants.filter(restaurant => restaurant.category === categorySelected)

  let restaurantsAppears = restaurants

  if (categorySelected !== '') {
    restaurantsAppears = restaurantsFiltered
  }

  const allCategories = restaurants.map(restaurant => restaurant.category);
  const categories = allCategories.filter((el, i, arr) => arr.indexOf(el) === i);
  const categoriesPersonalized = categories.map(category => (
    <S.Category 
        key={category} 
        onClick={() => selectCategory(category)}
        personalizedColor={categoryClicked}
    >
      {category}
    </S.Category>
))

  const hasOrder = order && Object.keys(order).length !== 0;

  return (
    <S.FeedPageWrapper>
      <Appbar page='feed' />

      <S.Container>

        <TextField
          onClick={goToSearch}
          fullWidth
          variant='outlined'
          placeholder='Restaurante'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={require("../../assets/search.svg")} alt='Voltar' />
              </InputAdornment>
            ),
          }}
        />

        <S.FilterScroll>
          {categoriesPersonalized}
        </S.FilterScroll>

        <S.Restaurants>
          {restaurantsAppears.map(restaurant => (
            <CardRestaurant
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </S.Restaurants>

      </S.Container>

      {
        hasOrder && <OrdersInProgress order={order} />
      }

      <Bottombar page='home' />

    </S.FeedPageWrapper>
  )
}

const mapStateToProps = state => ({
  restaurants: state.food.restaurantsList,
  order: state.food.order
});

const mapDispatchToProps = dispatch => ({
  goToSearch: () => dispatch(push(routes.search)),
  getRestaurants: () => dispatch(getRestaurants()),
  getActiveOrder: () => dispatch(getActiveOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);