import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input} />
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

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
