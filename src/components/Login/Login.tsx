import React, {FC} from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input,{type: 'password'} )}
        {createField(undefined, "rememberMe", [], Input,{type: 'checkbox'},'remember me')}

        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);


type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    console.log(formData);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);