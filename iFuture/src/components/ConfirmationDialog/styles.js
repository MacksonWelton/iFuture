import styled from 'styled-components';
import { DialogTitle, DialogContent, Button, TextField } from '@material-ui/core';

export const DialogTitleStyled = styled(DialogTitle)`
    font-size: 16px;
    letter-spacing: -0.4px;
    text-align: center;
`

export const OptionsContent = styled(DialogContent)`
    padding: 10px 16px;
`

export const ButtonStyled = styled(Button)`
    font-size: 16px;
    letter-spacing: -0.4px;
    text-align: right;
    color: #4f81a8;
`

export const Input = styled(TextField)`
    position: relative;
`

export const Img = styled.img`
    position: absolute;
    right: 16px;
    top: 16px;
`
