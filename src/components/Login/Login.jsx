import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"email"} validate={[required]} component={Input} />
      </div>
      <div>
        <Field type="password" placeholder={"Password"} name={"password"} validate={[required]} component={Input} />
      </div>
      <div>
        <input component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    console.log(formData);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);