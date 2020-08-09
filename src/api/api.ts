import { UsersType } from './../types/types';
import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "31fca19b-46d4-4562-87ef-a79218334047",
  },
});

export type GetItemsType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}
export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};


