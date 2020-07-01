import { Button, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const PageWrapper = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`
export const LogoWrapper = styled.div`
    width: 104px;
    height: 58px;
    object-fit: contain;
    margin: 88px 128px 28px 128px;
`

export const InputWrapper = styled(TextField)`
    width: 100%;
    height: 56px;
    margin: 8px 0;
`
export const ButtonWrapper = styled(Button)`
    width: 100%;
    height: 42px;
    border-radius: 2px;
    margin: 16px 0;
    color: black;
`

export const ImgWrapper = styled.img``

export const PlaceHolderWrapper = styled(Typography)`
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    color: #d0d0d0;
`

export const Text = styled(Typography)`
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`