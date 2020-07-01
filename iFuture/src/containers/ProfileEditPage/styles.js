import styled from 'styled-components'
import {Button, TextField} from '@material-ui/core';

export const DivWrapper = styled.div`
  height: 100vh;
  background: white;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled(TextField)`
  margin: 8px 0px;
`

export const ButtonSave = styled(Button)`
  margin: 8px 0;
  background: #e8222e;
`

export const TitleWrapper = styled.div`
width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
`