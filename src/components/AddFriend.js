import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  submit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state.friend)
      .then((response) => {
        console.log(response);
        this.props.history.push('/friends');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='add-friend-container'>
        <h1>ADD A FRIEND</h1>
        <div className='form-container'>
          <form onSubmit={this.submit}>
            <label htmlFor='friend-name'>FRIEND NAME</label>
            <input
              type='text'
              name='name'
              value={this.state.friend.name}
              onChange={this.handleChange}
              id='friend-name'
            />
            <label htmlFor='friend-age'>FRIEND AGE</label>
            <input
              type='text'
              name='age'
              value={this.state.friend.age}
              onChange={this.handleChange}
              id='friend-age'
            />
            <label htmlFor='friend-email'>FRIEND EMAIL</label>
            <input
              type='text'
              name='email'
              value={this.state.friend.email}
              onChange={this.handleChange}
              id='friend-email'
            />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddFriend;
