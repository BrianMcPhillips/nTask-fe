import React, { Component } from 'react';
import { signIn, signUp } from '../../services/task-api';

export default class SignIn extends Component {
  state = {
    switchState: 'Off',
    email: '',
    password: ''
  }

  handleSwitchOn = () => {
    this.setState({ switchState: 'On' })
  }
  handleSwitchOff = () => {
    this.setState({ switchState: 'Off' })
  }
  handleEmail = e => {
    this.setState({ email: e.target.value })
  }
  handlePassword = e => {
    this.setState({ password: e.target.value })
  }
  handleSignIn = async(e) => {
    e.preventDefault();
    const data = await signIn({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    const { switchState } = this.state;
    return (
      <div>
        {
          switchState === 'Off' && 
            <div>
              <h1>Please Login</h1>
              <form>
                <div>
                  <input type="text" required/>
                  <label>Email</label>
                </div>
                <div>
                  <input type="password" required/>
                  <label>Password</label>
                </div>
                <button>Login</button>
                <p>
                  Don't have an account?
                  <button>Sign Up</button>
                </p>
              </form>
            </div>
        }
        {
          switchState === 'On' && 
            <div>
              <h1>Sign Up</h1>
              <form>
                <div>
                  <input type="text" required/>
                  <label>Email</label>
                </div>
                <div>
                  <input type="password" required/>
                  <label>Password</label>
                </div>
                <button>Sign Up</button>
                <p>
                  Don't have an account?
                  <button>Sign Up</button>
                </p>
              </form>
            </div>
        }
        
      </div>
    )
  }
}
