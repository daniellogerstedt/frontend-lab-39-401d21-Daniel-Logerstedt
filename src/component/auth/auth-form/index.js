import React from 'react';
import {renderIf} from '../../../lib/utils';


export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
      usernameError: e.target.name === 'username' && !e.target.value? 'Username Required' : null,
      passwordError: e.target.name === 'password' && !e.target.value? 'Password Required' : null,
      emailError: e.target.name === 'email' && !e.target.value? 'Email Required' : null,
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    let {username, password, email} = this.state;
    this.props.onComplete({username, password, email})
      .then(() => this.setState({ username: '', password: '', email: ''}))
      .catch(err => this.setState({error: err}));
  }

  render() {
    return (
      <form 
        className='auth-form'
        onSubmit={this.handleSubmit}
        noValidate>
        <input 
          type='text'
          name='username'
          placeholder='shialabeouf'
          value={this.state.username}
          onChange={this.handleChange}
        />
        {renderIf(this.state.usernameError, <span className='error-tooltip'>{this.state.usernameError}</span>)}
        {renderIf(this.props.auth === 'signup', 
          <input 
            type='email'
            name='email'
            placeholder='just@do.it'
            value={this.state.email}
            onChange={this.handleChange}
          />
        )}
        {renderIf(this.state.usernameError && this.props.auth === 'signup', <span className='error-tooltip'>{this.state.usernameError}</span>)}
        <input 
          type='password'
          name='password'
          placeholder='passwordisabadpassword'
          value={this.state.password}
          onChange={this.handleChange}
        />
        {renderIf(this.state.usernameError, <span className='error-tooltip'>{this.state.usernameError}</span>)}
        <button type='submit'>{this.props.auth}</button>
      </form>
    );
  }
}