import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = React.createClass({
  render(){

    return(
      <div className="row">
        <form onSubmit={this.props.handleLoginSubmit}>
          {/* <RaisedButton label="Username" /> */}
          {/* <div className="col-l-6"> */}
          <TextField
            floatingLabelText="Username"
            type="text"
            value={this.props.username}
            onChange={this.props.handleUsername}
            id="username"
            className="addPadding"
          />
          {/* </div> */}
          {/* <div className="col-l-6"> */}
          <TextField floatingLabelText="Password" type="text"  value={this.props.password} onChange={this.props.handlePassword}/>
          {/* </div> */}
          <RaisedButton label="submit" type="submit" value="Login" id="submit" />
          {/* <input type="submit" value="Login" id="submit"/> */}
        </form>
      </div>
    );
  }
});

export default LoginForm;
