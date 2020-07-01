import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions/user';
import { editUserProfile } from './constants'

import * as S from './styles'
import Appbar from '../../components/Appbar';

class ProfileEditPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }
  

  componentDidMount = () => {
    this.props.getProfile().then(() => {
      this.setState({
        form: this.props.editUser
      })
    })
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleSubmission = event => {
    event.preventDefault();
    const dataUpdate = {
      name: this.state.form.name,
      email: this.state.form.email,
      cpf: this.state.form.cpf
    }
    
    this.props.updateProfile(dataUpdate)
  }


  render() {
    return (
      <S.DivWrapper>
        <Appbar page='profileEdit' />
        <S.Content>
          <S.FormWrapper onSubmit={this.handleSubmission}>
            {editUserProfile.map(field => {
              return (
                <S.Input
                  key={field.name}
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  inputProps={{ pattern: field.pattern }}
                  required={field.required}
                  title={field.title}
                  value={this.state.form[field.name]}
                  onChange={this.handleInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )
            })}
            <S.ButtonSave type='submit' variant='contained'>Salvar</S.ButtonSave>
          </S.FormWrapper>
        </S.Content>
      </S.DivWrapper>
    )
  }
}

const mapStateToProps = state => ({
  editUser: state.user.user
})

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile()),
  updateProfile: (dataUpdateProfile) => dispatch(updateProfile(dataUpdateProfile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditPage);