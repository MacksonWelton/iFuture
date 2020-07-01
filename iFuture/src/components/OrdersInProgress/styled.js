import styled from 'styled-components'
import  Typography  from '@material-ui/core/Typography'
import  CardContent  from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import  Card  from '@material-ui/core/Card'

export const CardStyled = styled(Card)`
position: fixed;
bottom:50px;
`

export const Typography1 = styled(Typography)`
width: 256px;
height: 18px;
font-size: 16px;
letter-spacing: -0.4px;
color: #ffffff;
margin-bottom:8px;
`
export const Typography2 = styled(Typography)`
width: 256px;
height: 18px;
font-size: 16px;
letter-spacing: -0.4px;
margin-bottom:8px;
`
export const Typography3 = styled(Typography)`
width: 256px;
height: 18px;
font-size: 16px;
font-weight: bold;
letter-spacing: -0.4px;
`

export const CardContentStyled = styled(CardContent)`
display: grid;
grid-template-columns: 20vw 80vw;
width: 100%;
height: 118px;
background-color: #e8222e;
`

export const CardMediaStyled = styled(CardMedia)`
width: 32px;
height: 32px;
object-fit: contain;
`

export const DivImagem = styled.div`
display: flex;
justify-content: center;

`