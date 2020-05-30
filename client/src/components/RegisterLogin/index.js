import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user.action';
import { Link } from 'react-router-dom';

class RegisterLogin extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.isFormValid(this.state)) {
      this.setState({
        errors: [],
      });
      this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
        if (response.payload.loginSuccess) {
          this.props.history.push('/');
        } else {
          let errorArray = this.state.errors.concat(
            'Failed to login, check you email and password.'
          );
          this.setState({
            errors: errorArray,
          });
        }
      });
    } else {
      let errorArray = this.state.errors.concat(
        'Form is not valid. Please try again!'
      );
      this.setState({
        errors: errorArray,
      });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  displayErrors = (errors) => errors.map((err, i) => <p key={i}>{err}</p>);

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className='container'>
        <h2> Login </h2>
        <div className='row'>
          <form
            className='col s12'
            onSubmit={(event) => this.submitForm(event)}
          >
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  name='email'
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event)}
                  id='email'
                  type='email'
                  className='validate'
                />
                <label htmlFor='email'>Email</label>
                <span
                  className='helper-text'
                  data-error='Type a right type email'
                  data-success='Right'
                />
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  name='password'
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  id='password'
                  type='password'
                  className='validate'
                />
                <label htmlFor='password'>Password</label>
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                />
              </div>
            </div>

            {this.state.errors.length > 0 ? (
              <div>{this.displayErrors(this.state.errors)}</div>
            ) : (
              ''
            )}
            <div className='row'>
              <div className='col s12'>
                <button
                  className='btn waves-effect red lighten-2'
                  type='submit'
                  name='action'
                >
                  Log In
                </button>
                &nbsp; &nbsp;
                <Link to='/register'>
                  <button
                    className='btn waves-effect red lighten-2'
                    type='submit'
                    name='action'
                  >
                    {' '}
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(RegisterLogin);
