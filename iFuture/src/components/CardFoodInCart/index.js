import React from 'react';
import { connect } from 'react-redux'

import { setDialog, setItemId } from '../../actions/confirmationDialog'

import { Typography } from '@material-ui/core';
import * as S from './styles'
import { removeQuantity } from '../../actions/food';

export function CardFoodInCart(props) {
  const { item, infoQuantity, removeQuantity } = props

  const productExist = infoQuantity.findIndex(product =>
    product.id === item.id)

  const removeItem = () => {
    removeQuantity(item.id)
  }

  return (
    <S.CardWrapper key={item.id} elevation={0}>

      <S.Content>
        <S.Img image={item.photoUrl} />
      </S.Content>

      <S.Content>
        <Typography color="primary">
          {item.name}
        </Typography>
        <Typography color="secondary" className="description">
          {item.description}
        </Typography>
        <div className="bottomCard">
          <Typography className="price">
            {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </div>
      </S.Content>

      <S.ButtonRemove variant="outlined" onClick={removeItem} >
        remover
      </S.ButtonRemove>

      <S.Count>
        {infoQuantity[productExist].quantity}
      </S.Count>

    </S.CardWrapper>
  )
}

const mapStateToProps = state => ({
  infoQuantity: state.food.infoQuantity
})

const mapDispatchToProps = dispatch => ({
  setOpen: (option) => dispatch(setDialog(option)),
  setItemId: (itemId) => dispatch(setItemId(itemId)),
  removeQuantity: (itemId) => dispatch(removeQuantity(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFoodInCart)