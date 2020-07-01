import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAdress } from '../../actions/user';
import Appbar from '../../components/Appbar';
import * as S from './styles';



function AdressRegisterPage(props) {

  const [inputs, setInputs] = useState({
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const handleInputs = event => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const addAdressData = {
      street: inputs.logradouro,
      number: inputs.numero,
      neighbourhood: inputs.bairro,
      city: inputs.cidade,
      state: inputs.estado,
      complement: inputs.complemento
    }
    props.addAdress(addAdressData);
  }

  const { logradouro, numero, complemento, bairro, cidade, estado } = inputs;

  return (
    <S.AndressRegisterWrapper>
      <Appbar page='adressRegister' />
      <S.Title>Meu Endreço</S.Title>
      <S.Form onSubmit={handleOnSubmit}>
        <S.Input
          name="logradouro"
          required
          type="text"
          label="Logradouro"
          value={logradouro || ""}
          onChange={handleInputs}
          placeholder="Rua / Av."
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: ".{3,}",
            title: "Logradouro aceita no mínimo 3 caracteres"
          }}
        />
        <S.Input
          name="numero"
          required
          type="number"
          id="outlined-required"
          label="Número"
          value={numero}
          onChange={handleInputs}
          placeholder="Número"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <S.Input
          name="complemento"
          type="text"
          id="outlined-required"
          label="Complemento"
          value={complemento}
          onChange={handleInputs}
          placeholder="Apto./Bloco"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <S.Input
          name="bairro"
          required
          type="text"
          id="outlined-required"
          label="Bairro"
          value={bairro}
          onChange={handleInputs}
          placeholder="Bairro"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "Bairro aceita letras e números"
          }}
        />
        <S.Input
          name="cidade"
          required
          type="text"
          id="outlined-required"
          label="Cidade"
          value={cidade}
          onChange={handleInputs}
          placeholder="Cidade"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "Cidade aceita letras e números"
          }}
        />
        <S.Input
          name="estado"
          required
          type="text"
          id="outlined-required"
          label="Estado"
          value={estado}
          onChange={handleInputs}
          placeholder="Estado"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: "[A-Z ]{2}",
            title: "Aceita apenas a sigla do Estado com duas letras maiúsculas"
          }}
        />
        <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
      </S.Form>
    </S.AndressRegisterWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAdress: (addAdressData) => dispatch(addAdress(addAdressData)),
  }
}

export default connect(null, mapDispatchToProps)(AdressRegisterPage);