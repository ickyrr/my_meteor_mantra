import React from 'react'
import AccountLoggedIn from './account_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  Button,
  ControlLabel,
  FormGroup,
  FormControl,
  Panel,
} from 'react-bootstrap'

class AccountRegister extends React.Component {
  constructor( props ){
    super( props )
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind( this )
    this.handleUsernameChange = this.handleUsernameChange.bind( this )
    this.handlePassword1Change = this.handlePassword1Change.bind( this )
    this.handlePassword2Change = this.handlePassword2Change.bind( this )
    this._register = this._register.bind( this )
  }
  handleEmailChange( event ) {
    this.setState({ email: event.target.value })
  }
  handleUsernameChange( event ) {
    this.setState({ username: event.target.value })
  }
  handlePassword1Change( event ) {
    this.setState({ password1: event.target.value })
  }
  handlePassword2Change( event ) {
    this.setState({ password2: event.target.value })
  }
  displayUser() {
    return (
      <AccountLoggedIn />
    )
  }
  displayLoading() {
    return (
      <AppLoading />
    )
  }
  displayGuest() {
    const { error } = this.props
    return (
      <Panel header="Create a New Account">
        <form onSubmit={ this._register }>
          { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              value={ this.state.email }
              onChange={ this.handleEmailChange }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter username"
              value={ this.state.username }
              onChange={ this.handleUsernameChange }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={ this.state.password1 }
              onChange={ this.handlePassword1Change }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password Again</ControlLabel>
            <FormControl
              type="password"
              placeholder="Confirm password"
              value={ this.state.password2 }
              onChange={ this.handlePassword2Change }
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </Panel>
    )
  }
  render()  {
    const { loggedIn, loggingIn } = this.props

    if ( loggingIn ) { return this.displayLoading() }

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }
  _register( event ) {
    event.preventDefault()
    const { register } = this.props
    const { email, username, password1, password2 } = this.state
    register( email, username, password1, password2 )
  }
}

export default AccountRegister
