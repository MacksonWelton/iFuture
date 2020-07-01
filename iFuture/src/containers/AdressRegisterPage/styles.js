import styled from 'styled-components';

import { TextField, Button, Typography } from '@material-ui/core';

export const AndressRegisterWrapper = styled.div`
  text-align: center;
  background-color: #ffffff;
  height: 100vh;
`

export const Title = styled(Typography)`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 28px 0 20px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled(TextField)`
  margin: 8px 16px;
`

export const ButtonSubmit = styled(Button)`
  background: #e8222e;
  margin: 8px 16px;
  height: 42px;
`