import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  submit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:9000/api/login', this.state.credentials)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.props.history.push('/friendslist');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='login-container'>
        <h1>LOGIN</h1>
        <div className='form-container'>
          <form onSubmit={this.submit}>
            <label htmlFor='username'>USERNAME</label>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
              id='username'
            />
            <label htmlFor='password'>PASSWORD</label>
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
              id='password'
            />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
