import React from 'react'
import AccountLoggedIn from './account_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal,
  Panel,
} from 'react-bootstrap'

class AccountLogin extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
      resetEmail: '',
      showModal: false,
    }
    this.modalOpen = this.modalOpen.bind( this )
    this.modalClose = this.modalClose.bind( this )
    this._login = this._login.bind( this )
    this._resetPassword = this._resetPassword.bind( this )
    this.handleEmailChange = this.handleEmailChange.bind( this )
    this.handlePasswordChange = this.handlePasswordChange.bind( this )
    this.handleResetEmailChange = this.handleResetEmailChange.bind( this )
  }
  modalClose() {
    this.setState({ showModal: false })
  }
  modalOpen() {
    this.setState({ showModal: true })
  }
  handleEmailChange( event ) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange( event ) {
    this.setState({ password: event.target.value })
  }
  handleResetEmailChange( event ) {
    this.setState({ resetEmail: event.target.value })
  }
  displayUser() {
    return(
      <AccountLoggedIn />
    )
  }
  displayLoading() {
    return(
      <AppLoading />
    )
  }
  displayGuest() {
    const { errorLogin } = this.props
    return (
      <form onSubmit={ this._login }>
        { errorLogin ? <p style={ { color: 'red' } }>{ errorLogin }</p> : null }
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
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={ this.state.pasword }
            onChange={ this.handlePasswordChange }
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Log In</Button>
      </form>
    )
  }
  render() {
    const { loggedIn, loggingIn } = this.props
    const { errorReset } = this.props
    const footerText = () => (
      <p>Forgot your pasword? <a onClick={ this.modalOpen } href="#">Reset it here.</a></p>
    )
    if ( loggingIn ) { return this.displayLoading() }
    return (
      <div>
        <Panel
          header="Log In to Your Account"
          footer={ footerText() }>
          { loggedIn ? this.displayUser() : this.displayGuest() }
        </Panel>
        <Modal show={ this.state.showModal } onHide={ this.modalClose }>
          <Modal.Header closeButton>
            <Modal.Title>Send Reset Password Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Enter the email address for your account</p>
            <form >
              { errorReset ? <p style={ { color: 'red' } }>{ errorReset }</p> : null }
              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                  value={ this.state.resetEmail }
                  onChange={ this.handleResetEmailChange }
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.modalClose }>Close</Button>
            <Button onClick={ this._resetPassword } bsStyle="primary">Reset Password</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  _login( event ) {
    event.preventDefault()
    const { login } = this.props
    const { email, password } = this.state
    login( email, password )
  }
  _resetPassword( event ) {
    event.preventDefault()
    const { sendResetPasswordLink } = this.props
    const { resetEmail } = this.state
    sendResetPasswordLink( resetEmail )
  }
}

export default AccountLogin
