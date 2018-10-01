import React, {Component} from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          error: ''
        });
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Nova Conta</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" namep="password" placeholder="Senha"/>
            <button className="button">Criar conta</button>
          </form>
          <Link to="/">Já possuí uma conta?</Link>
        </div>
      </div>
    );
  }
}
