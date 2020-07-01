import { InputAdornment } from '@material-ui/core';
import { push } from "connected-react-router";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import Loading from '../../components/Loading';
import { routes } from '../Router/index';
import * as S from './styles';


function LoginPage(props) {

  const [userInfo, setUserInfo] = useState({})
  const [hidenPassword, setHidenPassword] = useState(false)

  const { goToSignUp } = props;

  function getUserInfo(e) {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  function sendUserInfo(e) {
    e.preventDefault()
    props.login(userInfo)
  }

  return (
    <>
      <Loading />
      <S.PageWrapper>
        <S.LogoWrapper>
          <img src={require('../../assets/logo-future-eats-invert.png')} alt='Logo' />
        </S.LogoWrapper>

        <S.Text>
          Entrar
      </S.Text>

        <form onSubmit={sendUserInfo}>
          <S.InputWrapper
            name='email'
            variant="outlined"
            label="E-mail"
            placeholder='email@email.com'
            type='email'
            value={userInfo.email || ''}
            onChange={getUserInfo}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <S.InputWrapper
            name='password'
            variant="outlined"
            label="Senha"
            placeholder='mínimo 6 caracteres'
            type={hidenPassword ? 'text' : 'password'}
            value={userInfo.password || ''}
            onChange={getUserInfo}
            required
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <S.ImgWrapper
                    onClick={() => setHidenPassword(!hidenPassword)}
                    src={hidenPassword ? require('../../assets/olho.png') : require('../../assets/senha.png')} />
                </InputAdornment>
              ),
              inputProps: {
                pattern: '.{6,}',
                title: 'A senha deve ter no mínimo 6 caracteres'
              }
            }}
          />

          <S.ButtonWrapper
            type='onSubmit'
            variant="contained"
            color="primary"
          >
            Entrar
        </S.ButtonWrapper>

        </form>

        <S.Text>
          <span>Não possui cadastro? <span onClick={goToSignUp}>Clique aqui</span></span>
        </S.Text>
      </S.PageWrapper>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToSignUp: () => dispatch(push(routes.signup)),
    login: (loginData) => dispatch(login(loginData))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);