import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user'

import Appbar from '../../components/Appbar';

import * as S from './styles'
import { InputAdornment } from '@material-ui/core';
import logo from "../../assets/logo-future-eats-invert.svg";

const Logo = () => <img src={logo} alt='Voltar' />;

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {},
      hidenPassword: false,
      hidenConfirm: false,
    }
  }

  applyCPFMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  handleInput = event => {
    const { name, value } = event.target;
    console.log(name)
    if (name === 'cpf') {
      this.setState({
        form: {
          ...this.state.form,
          cpf: this.applyCPFMask(event.target.value)
        }
      })
    }
    else {
      this.setState({
        form: {
          ...this.state.form,
          [name]: value
        }
      })
    }
  }

  handleSubmission = event => {
    event.preventDefault();
    const { name, email, cpf, password, confirm } = this.state.form
    const signupData = {
      name: name,
      email: email,
      cpf: cpf,
      password: password
    }
    if (password !== confirm) {
      alert('Senhas não conferem')
    } else {
      this.props.signup(signupData)
    }
  }

  setHidenPassword = () => {
    this.setState({
      hidenPassword: !this.state.hidenPassword
    })
  }

  setHidenConfirm = () => {
    this.setState({
      hidenConfirm: !this.state.hidenConfirm
    })
  }
  
  
  render() {
    
    const createNewUser = [
      {
        name: "name",
        label: "Nome",
        placeholder: "Nome e Sobrenome",
        type: "text",
        required: true,
        pattern: "[a-zA-Zà-úÀ-ú ]{3,}",
        title: "O nome do usuário deve conter apenas letras, no mínimo de 3"
      },
      {
        name: 'email',
        label: "Email",
        placeholder: "email@email.com",
        type: "email",
        required: true,
      },
      {
        name: 'cpf',
        label: "CPF",
        placeholder: "000.000.000-00",
        type: "text",
        required: true,
        pattern: "[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}",
        title: "Digite seu CPF com pontos e traço.",
      },
      {
        name: 'password',
        label: "Senha",
        type: this.state.hidenPassword ? 'text' : 'password',
        placeholder: "Mínimo 6 caracteres",
        required: true,
        pattern: ".{6,}",
        title: "Sua senha deve conter no minimo 6 caracteres",
        endAdornment: <InputAdornment position="end">
          <img
            onClick={this.setHidenPassword}
            src={this.state.hidenPassword ? require('../../assets/olho.png') : require('../../assets/senha.png')}
            alt='password' />
        </InputAdornment>
      },
      {
        name: 'confirm',
        label: "Confirmar",
        type: this.state.hidenConfirm ? 'text' : 'password',
        placeholder: "Confirme a senha anterior",
        required: true,
        pattern: ".{6,}",
        title: "Sua senha deve conter no minimo 6 caracteres",
        endAdornment: <InputAdornment position="end">
          <img
            onClick={this.setHidenConfirm}
            src={this.state.hidenConfirm ? require('../../assets/olho.png') : require('../../assets/senha.png')}
            alt='password' />
        </InputAdornment>
      }
    ]
    
    return (
      <S.DivWrapper>
        <Appbar page='signup' />
        <S.Container>
          <Logo />

          <S.TitleWrapper>
            <S.Title>
              Cadastrar
            </S.Title>
          </S.TitleWrapper>

          <S.FormWrapper onSubmit={this.handleSubmission}>

            {createNewUser.map(field => {
              return (
                <S.Input
                  key={field.name}
                  variant="outlined"
                  margin="normal"
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={this.state.form[field.name]}
                  onChange={this.handleInput}
                  type={field.type}
                  required={field.required}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: field.endAdornment,
                    inputProps: {
                      pattern: field.pattern,
                      title: field.title
                    }
                  }}

                />
              )
            })}

            <S.ButtonStyled type='submit' variant='contained' color='primary'>Criar</S.ButtonStyled>
          </S.FormWrapper>

        </S.Container>
      </S.DivWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (signupData) => dispatch(signup(signupData))
  }
}

export default connect(null, mapDispatchToProps)(SignupPage);