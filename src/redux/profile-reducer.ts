import { profileAPI } from "../api/api";
import { stopSubmit, FormAction } from "redux-form";
import { AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type PhotosType = {
  small: string | null;
  large: string | null;
};

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "blabalbal", likesCount: 11 },
    { id: 4, message: "dadada", likesCount: 11 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "" as string | null,
};

type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};


type ActionsTypes = 
  | AddPostActionCreatorType
  | SetUserProfileActionType
  | GetStatusActionType
  | DeletePostActionType
  | SavePhotoSuccessActionType
  | SavePhotoSuccessActionType
  | FormAction

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});



type GetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): GetStatusActionType => ({
  type: SET_STATUS,
  status,
});


type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch, getState: GetStateType) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState: GetStateType
) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
