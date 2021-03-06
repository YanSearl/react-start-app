import React, { Component } from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/input';
import Button from '../../components/button';
import { register } from 'actions/user';

@connect(
  state => state.user,
  { register }
)
class Register extends Component {
  state = {
    user: '',
    pwd: '',
    repeatpwd: ''
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value.trim() });
  }

  handleRegister = () => {
    this.props.register(this.state);
  }

  render() {
    return (
      <div className="register-container">
        {
          (this.props.redirectTo && this.props.redirectTo !== '/user/register') ?
            <Redirect to={this.props.redirectTo} /> : null
        }
        <div className="form">
          <Input
            labelText="用户名"
            inputName="username"
            inputType="text"
            handleChange={(e) => this.handleChange(e, 'user')}
            value={this.state.user}
          />
          <Input
            labelText="密码"
            inputName="password"
            inputType="password"
            handleChange={(e) => this.handleChange(e, 'pwd')}
            value={this.state.pwd}
          />
          <Input
            labelText="确认密码"
            inputName="confirmPsw"
            inputType="password"
            handleChange={(e) => this.handleChange(e, 'repeatpwd')}
            value={this.state.repeatpwd}
          />
          <div className="bottom">
            <div className="btn-wrapper">
              <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </div>
            <div className="login">
              <Link to="/user/login">使用已有账户登录</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

