import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">SIGN-UP</h2>
        <form>
          <table className="align-center">
            <tbody className='container'>
              <tr>
                <label><b>Username</b></label>
                <input type="text"  placeholder="Enter Username" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
              </tr>
              <tr>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Username" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
              </tr>
              <tr>
                <label><b> Name</b></label>
                <input type="text" placeholder="Enter Name" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} />
              </tr>
              <tr>
                <label><b> Phone  </b></label>
                <input type="tel" placeholder="Enter Phone" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} />
              
                <label><b> Email  </b></label>
                <input type="email" placeholder="Enter Email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} />
              </tr>
              
                <td><input type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)} /></td>
              
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;