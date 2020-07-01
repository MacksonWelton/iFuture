import styled from 'styled-components'
import { Typography, TextField, Button } from '@material-ui/core'

export const DivWrapper = styled.div`
    background-color: white;
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TitleWrapper = styled.div`
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`

export const Title = styled(Typography)`
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`

export const Input = styled(TextField)`
    height: 56px;
    margin: 8px;
`

export const ButtonStyled = styled(Button)`
    height: 42px;
    margin: 8px;
    color: #000000;
`