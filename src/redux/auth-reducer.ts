import { ResultCodeForCaptcha, ResultCodes } from './../api/api';
import { authAPI } from "../api/auth-api";
import { securityAPI  } from "../api/security-api";
import { stopSubmit, FormAction } from "redux-form";
import { AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

const SET_USER_DATA = "network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string| null, // if null captcha isn't required
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS: 
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

type ActionsTypes = 
  | SetAuthUserDataActionType
  | GetCaptchaUrlSuccessType
  | FormAction


type SetAuthUserDataActionPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCodes.Success) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodes.Success) {
    // success, get  auth data
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;