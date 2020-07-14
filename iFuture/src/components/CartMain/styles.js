import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Main = styled.main`
    width: 92%;
`

export const EmptyCartWrapper = styled.div`
    text-align: center;
    height: 42px;
    margin: 8px 0px 33px 0px;
    width: 100%;
    padding: 12px 32px;
`

export const Text = styled(Typography)`
    font-size: 16px;
    height: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
    color: ${props => props.color === "red" ? "#e8222e" : props.color === "gray" ? "#b8b8b8" : "#000000"};
`

export const FullCartWrapper = styled.div`
    width: 100%;
    margin-bottom: 16px;
`

export const DivMain = styled.div`
    margin-bottom: 16px;
`
