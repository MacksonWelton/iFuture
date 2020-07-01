import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';

import * as S from './styles';
import { Toolbar, Typography } from '@material-ui/core';
import { PowerSettingsNewRounded } from '@material-ui/icons';
import backIcon from '../../assets/back.svg';

export function Appbar(props) {
    const {
        page,
        goToLogin,
        goToFeed,
        goToProfile
    } = props;

    const buttonReturn = <img src={backIcon} alt='Voltar' />

    const logout = () => {
        localStorage.clear();
        goToFeed();
    }

    let content
    switch (page) {

        case 'signup':
        case 'adressRegister':
            content = <S.SpaceContent>
                <S.Button onClick={goToLogin}>{buttonReturn}</S.Button>
            </S.SpaceContent>
            break;

        case 'feed':
            content = <S.CenteredContent>
                <Typography variant="h6">Ifuture</Typography>

                <S.Logout size="small" color='primary' onClick={logout}>
                    <PowerSettingsNewRounded/>
                </S.Logout>
            </S.CenteredContent>
            break;

        case 'search':
            content = <S.SpaceContent>
                <S.Button onClick={goToFeed}>{buttonReturn}</S.Button>
                <Typography variant="h6">Busca</Typography>
                <div></div>
            </S.SpaceContent>

            break;

        case 'cart':
            content = <S.CenteredContent>
                <Typography variant="h6">Meu Carrinho</Typography>
            </S.CenteredContent>
            break;

        case 'restaurant':
            content = <S.SpaceContent>
                <S.Button onClick={goToFeed}>{buttonReturn}</S.Button>
                <Typography variant="h6">Restaurante</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        case 'profile':
            content = <S.CenteredContent>
                <Typography variant="h6">Meu perfil</Typography>
            </S.CenteredContent>
            break;

        case 'profileEdit':
            content = <S.SpaceContent>
                <S.Button onClick={goToProfile}>{buttonReturn}</S.Button>
                <Typography variant="h6">Editar</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        case 'adressEdit':
            content = <S.SpaceContent>
                <S.Button onClick={goToProfile}>{buttonReturn}</S.Button>
                <Typography variant="h6">Endereço</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        default:
            content = null
            break;
    }

    return (
        <S.AppbarStyled position="static">
            <Toolbar>
                {content}
            </Toolbar>
        </S.AppbarStyled>
    )
}

const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToFeed: () => dispatch(push(routes.feed)),
    goToProfile: () => dispatch(push(routes.profile))
})

export default connect(null, mapDispatchToProps)(Appbar)