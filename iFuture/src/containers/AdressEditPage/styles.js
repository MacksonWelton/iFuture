import styled from 'styled-components';

import { TextField, Button} from '@material-ui/core';

export const AndressEditWrapper = styled.div`
  text-align: center;
  background-color: #ffffff;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`
export const Input = styled(TextField)`
  margin: 8px 16px;
  height: 56px;
`

export const ButtonSubmit = styled(Button)`
  background: red;
  margin: 8px 16px;
  height: 42px;
`