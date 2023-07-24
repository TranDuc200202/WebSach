import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className="align-center" > 
        <h2 className="text-center">ACTIVE ACCOUNT</h2>
        <form>
          <table className="align-center">
            <tbody>
              <tr>
                <label><b>ID</b></label>
                <input type="text"  placeholder="Enter ID" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} />
              </tr>
              <tr>
                <label><b>Token</b></label>
                <input type="text"  placeholder="Enter Token" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} />
              
                <input type="submit" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)} />
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;