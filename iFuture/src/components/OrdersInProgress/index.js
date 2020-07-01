import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import { Typography1, Typography2, Typography3, CardContentStyled, CardStyled, DivImagem } from './styled'

export function OrdersInProgress(props) {
  const { order } = props;


  if (!order){
    return null
  }

  return (
    <>
    <CardStyled>
      <CardActionArea>
        <CardContentStyled>

          <DivImagem>
            <img src={require("../../assets/clock.svg")} alt='clock' />
          </DivImagem>

          <div>
            <Typography1 gutterBottom variant="h5" component="h2">
              Pedido em andamento
          </Typography1>
            <Typography2 component="p">
              {order.restaurantName}
          </Typography2>
            <Typography3 component="p">
              SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography3>
          </div>

        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  </>
  )
}

export default OrdersInProgress