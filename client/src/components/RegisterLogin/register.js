import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/user.action';

class Register extends Component {
  state = {
    lastname: '',
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: [],
  };

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {
      email: this.state.email,
      lastname: this.state.lastname,
      name: this.state.name,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    };

    if (this.isFormValid(this.state)) {
      this.setState({
        errors: [],
      });
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then((response) => {
          if (response.payload.success) {
            this.props.history.push('/login');
          } else {
            let errorsArray = this.state.errors.concat(
              'Attempt failed, try again'
            );
            this.setState({
              errors: errorsArray,
            });
          }
        })
        .catch((err) => {
          let errorsArray = this.state.errors.concat(err);
          this.setState({
            errors: errorsArray,
          });
        });
    } else {
      console.log('Form is not valid');
    }
  };

  isFormValid = () => {
    let error;
    if (this.isFormEmpty(this.state)) {
      error = {
        message: 'Fill in all the fields',
      };
      let errorsArray = this.state.errors.concat(error);
      this.setState({ errors: errorsArray });
    } else if (this.isPasswordValid(this.state) === false) {
      error = {
        message: 'Password is invalid',
      };
      let errorsArray = this.state.errors.concat(error);
      this.setState({
        errors: errorsArray,
      });
    } else {
      return true;
    }
  };

  isFormEmpty = ({ lastname, name, email, password, passwordConfirmation }) => {
    return (
      !name.length ||
      !lastname.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((err, i) => <p key={i}>{err.message}</p>);

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className='container'>
        <h2> Sign Up </h2>
        <div className='row'>
          <form
            className='col s12'
            onSubmit={(event) => this.submitForm(event)}
          >
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  name='lastname'
                  value={this.state.lastname}
                  onChange={(event) => this.handleChange(event)}
                  id='lastname'
                  type='text'
                  className='validate'
                />
                <label className='active' htmlFor='lastname'>
                  Last Name
                </label>
                <span
                  className='helper-text'
                  data-error='Type a right type last name'
                  data-success='Right'
                />
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  name='name'
                  value={this.state.name}
                  onChange={(event) => this.handleChange(event)}
                  id='name'
                  type='text'
                  className='validate'
                />
                <label className='active' htmlFor='name'>
                  First Name
                </label>
                <span
                  className='helper-text'
                  data-error='Type a right type first name'
                  data-success='Right'
                />
              </div>
            </div>

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
                <label className='active' htmlFor='email'>
                  Email
                </label>
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
                <label className='active' htmlFor='password'>
                  Password
                </label>
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                />
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  name='passwordConfirmation'
                  value={this.state.passwordConfirmation}
                  onChange={(event) => this.handleChange(event)}
                  id='passwordConfirmation'
                  type='password'
                  className='validate'
                />
                <label className='active' htmlFor='password'>
                  Confirm Password
                </label>
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
                  Create an account
                </button>
                {/* &nbsp; &nbsp;
                <Link to='/register'>
                  <button
                    className='btn waves-effect red lighten-2'
                    type='submit'
                    name='action'
                  >
                    {' '}
                    Sign Up
                  </button>
                </Link> */}
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

export default connect(mapStateToProps)(Register);
